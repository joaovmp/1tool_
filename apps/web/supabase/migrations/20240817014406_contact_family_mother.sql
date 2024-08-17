drop policy "authenticated" on "public"."contact_family_father";

create table "public"."contact_family_mother" (
    "id" bigint generated by default as identity not null,
    "created_at" timestamp with time zone not null default now(),
    "firstName" text not null,
    "middleName" text not null,
    "lastName" text not null,
    "email" text not null,
    "relationType" text not null,
    "liveTogetherSince" text not null,
    "liveTogetherUntil" text not null,
    "DependentStatus" text not null,
    "householdMember" boolean not null,
    "headOfHousehold" boolean not null,
    "derivativeApplicant" boolean not null,
    "principalApplicant" boolean not null,
    "user" uuid default auth.uid()
);


alter table "public"."contact_family_mother" enable row level security;

CREATE UNIQUE INDEX contact_family_mother_pkey ON public.contact_family_mother USING btree (id);

alter table "public"."contact_family_mother" add constraint "contact_family_mother_pkey" PRIMARY KEY using index "contact_family_mother_pkey";

alter table "public"."contact_family_mother" add constraint "contact_family_mother_user_fkey" FOREIGN KEY ("user") REFERENCES accounts(id) ON UPDATE CASCADE ON DELETE SET NULL not valid;

alter table "public"."contact_family_mother" validate constraint "contact_family_mother_user_fkey";

grant delete on table "public"."contact_family_mother" to "anon";

grant insert on table "public"."contact_family_mother" to "anon";

grant references on table "public"."contact_family_mother" to "anon";

grant select on table "public"."contact_family_mother" to "anon";

grant trigger on table "public"."contact_family_mother" to "anon";

grant truncate on table "public"."contact_family_mother" to "anon";

grant update on table "public"."contact_family_mother" to "anon";

grant delete on table "public"."contact_family_mother" to "authenticated";

grant insert on table "public"."contact_family_mother" to "authenticated";

grant references on table "public"."contact_family_mother" to "authenticated";

grant select on table "public"."contact_family_mother" to "authenticated";

grant trigger on table "public"."contact_family_mother" to "authenticated";

grant truncate on table "public"."contact_family_mother" to "authenticated";

grant update on table "public"."contact_family_mother" to "authenticated";

grant delete on table "public"."contact_family_mother" to "service_role";

grant insert on table "public"."contact_family_mother" to "service_role";

grant references on table "public"."contact_family_mother" to "service_role";

grant select on table "public"."contact_family_mother" to "service_role";

grant trigger on table "public"."contact_family_mother" to "service_role";

grant truncate on table "public"."contact_family_mother" to "service_role";

grant update on table "public"."contact_family_mother" to "service_role";

create policy "authenticated"
on "public"."contact_family_mother"
as permissive
for all
to authenticated
using (true);


create policy "authenticated"
on "public"."contact_family_father"
as permissive
for all
to authenticated
using (true);


-- CREATE TRIGGER accounts_teardown AFTER DELETE ON public.accounts FOR EACH ROW EXECUTE FUNCTION supabase_functions.http_request('http://host.docker.internal:3000/api/db/webhook', 'POST', '{"Content-Type":"application/json", "X-Supabase-Event-Signature":"WEBHOOKSECRET"}', '{}', '5000');

-- CREATE TRIGGER invitations_insert AFTER INSERT ON public.invitations FOR EACH ROW EXECUTE FUNCTION supabase_functions.http_request('http://host.docker.internal:3000/api/db/webhook', 'POST', '{"Content-Type":"application/json", "X-Supabase-Event-Signature":"WEBHOOKSECRET"}', '{}', '5000');

-- CREATE TRIGGER subscriptions_delete AFTER DELETE ON public.subscriptions FOR EACH ROW EXECUTE FUNCTION supabase_functions.http_request('http://host.docker.internal:3000/api/db/webhook', 'POST', '{"Content-Type":"application/json", "X-Supabase-Event-Signature":"WEBHOOKSECRET"}', '{}', '5000');

