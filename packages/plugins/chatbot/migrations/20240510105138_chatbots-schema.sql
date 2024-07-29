create extension vector with schema extensions;

-- public.sender
create type public.sender as ENUM (
  'user',
  'assistant'
);

-- public.message_type
create type public.message_type as ENUM (
  'ai',
  'db',
  'user'
);

-- Table: public.documents_embeddings
create table if not exists public.documents_embeddings (
  id uuid primary key default gen_random_uuid(),
  embedding vector (1536),
  content text not null,
  metadata jsonb default '{}' not null,
  created_at timestamptz default now() not null
);

revoke all on public.documents_embeddings from public;

alter table public.documents_embeddings enable row level security;

-- Table public.documents
create table if not exists public.documents (
  id uuid primary key default gen_random_uuid(),
  title text not null,
  content text not null,
  hash text not null,
  created_at timestamptz default now() not null
);

revoke all on public.documents from public;

-- RLS
alter table public.documents enable row level security;

-- Table public.conversations
create table if not exists public.conversations (
  id uuid primary key default gen_random_uuid(),
  reference_id varchar(16) not null,
  user_email varchar(255),
  created_at timestamptz default now() not null
);

revoke all on public.conversations from public;

-- RLS
alter table public.conversations enable row level security;

-- Table public.messages
create table if not exists public.messages (
  id bigint generated by default as identity primary key,
  conversation_id uuid not null references public.conversations on delete cascade,
  text varchar(2000) not null,
  sender sender not null,
  type message_type not null,
  created_at timestamptz default now() not null
);

revoke all on public.messages from public;

-- Indexes
create index ix_messages_conversation_id on public.messages (conversation_id);

-- RLS
alter table public.messages enable row level security;

-- Functions
create or replace function public.match_documents (
  query_embedding vector(1536),
  match_count int DEFAULT null,
  filter jsonb DEFAULT '{}'
) returns table (
  id uuid,
  content text,
  metadata jsonb,
  similarity float
)
language plpgsql
as $$
#variable_conflict use_column
begin
  return query
  select
    id,
    content,
    metadata,
    1 - (documents_embeddings.embedding <=> query_embedding) as similarity
  from documents_embeddings
  where metadata @> filter
  order by documents_embeddings.embedding <=> query_embedding
  limit match_count;
end;
$$;

create index on public.documents_embeddings using hnsw (embedding vector_cosine_ops);

grant execute on function public.match_documents(vector, int, jsonb) to service_role;

-- Create a function to keyword search for documents
create function kw_match_documents(query_text text, match_count int)
returns table (id uuid, content text, metadata jsonb, similarity real)
as $$
begin
return query execute
format('select id, content, metadata, ts_rank(to_tsvector(content), plainto_tsquery($1)) as similarity
from documents_embeddings
where to_tsvector(content) @@ plainto_tsquery($1)
order by similarity desc
limit $2')
using query_text, match_count;
end;
$$ language plpgsql;

grant execute on function kw_match_documents(text, int) to service_role;