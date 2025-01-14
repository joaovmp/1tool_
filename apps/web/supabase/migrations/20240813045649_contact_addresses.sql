create table "public"."contact_addresses" (
    "id" bigint generated by default as identity not null,
    "created_at" timestamp with time zone not null default now(),
    "address" text,
    "type" text,
    "typeValue" text,
    "city" text,
    "state" text,
    "county" text,
    "zipCode" text,
    "province" text,
    "postalCode" text,
    "inCareOF" text,
    "from" text,
    "to" text,
    "currentPhysicalAddress" boolean,
    "previousAddress" boolean,
    "mailingAddress" boolean,
    "safeMailingAddress" boolean,
    "foreignAddress" boolean,
    "intendedAddress" boolean,
    "investmentProperty" boolean,
    "shareWithSpouse" boolean,
    "recentlyFearedPersecution" boolean,
    "recentForeignAddress" boolean,
    "mostRecentForeignAddress" boolean,
    "user" uuid default auth.uid()
);


alter table "public"."contact_addresses" enable row level security;

CREATE UNIQUE INDEX contact_address_pkey ON public.contact_addresses USING btree (created_at);

alter table "public"."contact_addresses" add constraint "contact_address_pkey" PRIMARY KEY using index "contact_address_pkey";

alter table "public"."contact_addresses" add constraint "public_contact_address_user_fkey" FOREIGN KEY ("user") REFERENCES accounts(id) ON UPDATE CASCADE ON DELETE SET NULL not valid;

alter table "public"."contact_addresses" validate constraint "public_contact_address_user_fkey";

grant delete on table "public"."contact_addresses" to "anon";

grant insert on table "public"."contact_addresses" to "anon";

grant references on table "public"."contact_addresses" to "anon";

grant select on table "public"."contact_addresses" to "anon";

grant trigger on table "public"."contact_addresses" to "anon";

grant truncate on table "public"."contact_addresses" to "anon";

grant update on table "public"."contact_addresses" to "anon";

grant delete on table "public"."contact_addresses" to "authenticated";

grant insert on table "public"."contact_addresses" to "authenticated";

grant references on table "public"."contact_addresses" to "authenticated";

grant select on table "public"."contact_addresses" to "authenticated";

grant trigger on table "public"."contact_addresses" to "authenticated";

grant truncate on table "public"."contact_addresses" to "authenticated";

grant update on table "public"."contact_addresses" to "authenticated";

grant delete on table "public"."contact_addresses" to "service_role";

grant insert on table "public"."contact_addresses" to "service_role";

grant references on table "public"."contact_addresses" to "service_role";

grant select on table "public"."contact_addresses" to "service_role";

grant trigger on table "public"."contact_addresses" to "service_role";

grant truncate on table "public"."contact_addresses" to "service_role";

grant update on table "public"."contact_addresses" to "service_role";

create policy "delete"
on "public"."contact_addresses"
as permissive
for delete
to public
using (true);


create policy "insert"
on "public"."contact_addresses"
as permissive
for insert
to public
with check (true);


create policy "select"
on "public"."contact_addresses"
as permissive
for select
to authenticated
using (true);


create policy "update"
on "public"."contact_addresses"
as permissive
for update
to authenticated
using (true);



