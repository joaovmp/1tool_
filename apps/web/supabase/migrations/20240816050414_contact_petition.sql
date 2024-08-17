create table "public"."contact_petitions" (
    "id" bigint generated by default as identity not null,
    "created_at" timestamp with time zone not null default now(),
    "cityFilled" text not null,
    "stateFilled" text not null,
    "provinceFilled" text not null,
    "countryFilled" text not null,
    "officeFilled" text not null,
    "dateFilled" text not null,
    "cityGranted" text not null,
    "stateGranted" text not null,
    "provinceGranted" text not null,
    "officeGranted" text not null,
    "dateGranted" text not null,
    "receiptNumber" text not null,
    "result" text not null,
    "firstName" text not null,
    "middleName" text not null,
    "lastName" text not null,
    "nonImigrantVisa" boolean not null,
    "imigrantVisa" boolean not null,
    "affidavitOfSupport" boolean not null,
    "advancePermissionToEnter" boolean not null,
    "asyleeStatus" boolean not null,
    "refugeeStatus" boolean not null,
    "employmentAuthorization" boolean not null,
    "reentryPermit" boolean not null,
    "refugeeTravelDocument" boolean not null,
    "user" uuid default gen_random_uuid()
);


alter table "public"."contact_petitions" enable row level security;

CREATE UNIQUE INDEX contact_petitions_pkey ON public.contact_petitions USING btree (id);

alter table "public"."contact_petitions" add constraint "contact_petitions_pkey" PRIMARY KEY using index "contact_petitions_pkey";

alter table "public"."contact_petitions" add constraint "contact_petitions_user_fkey" FOREIGN KEY ("user") REFERENCES accounts(id) ON UPDATE CASCADE ON DELETE SET NULL not valid;

alter table "public"."contact_petitions" validate constraint "contact_petitions_user_fkey";

grant delete on table "public"."contact_petitions" to "anon";

grant insert on table "public"."contact_petitions" to "anon";

grant references on table "public"."contact_petitions" to "anon";

grant select on table "public"."contact_petitions" to "anon";

grant trigger on table "public"."contact_petitions" to "anon";

grant truncate on table "public"."contact_petitions" to "anon";

grant update on table "public"."contact_petitions" to "anon";

grant delete on table "public"."contact_petitions" to "authenticated";

grant insert on table "public"."contact_petitions" to "authenticated";

grant references on table "public"."contact_petitions" to "authenticated";

grant select on table "public"."contact_petitions" to "authenticated";

grant trigger on table "public"."contact_petitions" to "authenticated";

grant truncate on table "public"."contact_petitions" to "authenticated";

grant update on table "public"."contact_petitions" to "authenticated";

grant delete on table "public"."contact_petitions" to "service_role";

grant insert on table "public"."contact_petitions" to "service_role";

grant references on table "public"."contact_petitions" to "service_role";

grant select on table "public"."contact_petitions" to "service_role";

grant trigger on table "public"."contact_petitions" to "service_role";

grant truncate on table "public"."contact_petitions" to "service_role";

grant update on table "public"."contact_petitions" to "service_role";

create policy "authenticated"
on "public"."contact_petitions"
as permissive
for all
to authenticated
using (true);


-- CREATE TRIGGER accounts_teardown AFTER DELETE ON public.accounts FOR EACH ROW EXECUTE FUNCTION supabase_functions.http_request('http://host.docker.internal:3000/api/db/webhook', 'POST', '{"Content-Type":"application/json", "X-Supabase-Event-Signature":"WEBHOOKSECRET"}', '{}', '5000');

-- CREATE TRIGGER invitations_insert AFTER INSERT ON public.invitations FOR EACH ROW EXECUTE FUNCTION supabase_functions.http_request('http://host.docker.internal:3000/api/db/webhook', 'POST', '{"Content-Type":"application/json", "X-Supabase-Event-Signature":"WEBHOOKSECRET"}', '{}', '5000');

-- CREATE TRIGGER subscriptions_delete AFTER DELETE ON public.subscriptions FOR EACH ROW EXECUTE FUNCTION supabase_functions.http_request('http://host.docker.internal:3000/api/db/webhook', 'POST', '{"Content-Type":"application/json", "X-Supabase-Event-Signature":"WEBHOOKSECRET"}', '{}', '5000');


