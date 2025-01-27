export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  graphql_public: {
    Tables: {
      [_ in never]: never
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      graphql: {
        Args: {
          operationName?: string
          query?: string
          variables?: Json
          extensions?: Json
        }
        Returns: Json
      }
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
  public: {
    Tables: {
      accounts: {
        Row: {
          created_at: string | null
          created_by: string | null
          email: string | null
          id: string
          is_personal_account: boolean
          name: string
          picture_url: string | null
          primary_owner_user_id: string
          public_data: Json
          slug: string | null
          updated_at: string | null
          updated_by: string | null
        }
        Insert: {
          created_at?: string | null
          created_by?: string | null
          email?: string | null
          id?: string
          is_personal_account?: boolean
          name: string
          picture_url?: string | null
          primary_owner_user_id?: string
          public_data?: Json
          slug?: string | null
          updated_at?: string | null
          updated_by?: string | null
        }
        Update: {
          created_at?: string | null
          created_by?: string | null
          email?: string | null
          id?: string
          is_personal_account?: boolean
          name?: string
          picture_url?: string | null
          primary_owner_user_id?: string
          public_data?: Json
          slug?: string | null
          updated_at?: string | null
          updated_by?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "accounts_created_by_fkey"
            columns: ["created_by"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "accounts_primary_owner_user_id_fkey"
            columns: ["primary_owner_user_id"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "accounts_updated_by_fkey"
            columns: ["updated_by"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
        ]
      }
      accounts_memberships: {
        Row: {
          account_id: string
          account_role: string
          created_at: string
          created_by: string | null
          updated_at: string
          updated_by: string | null
          user_id: string
        }
        Insert: {
          account_id: string
          account_role: string
          created_at?: string
          created_by?: string | null
          updated_at?: string
          updated_by?: string | null
          user_id: string
        }
        Update: {
          account_id?: string
          account_role?: string
          created_at?: string
          created_by?: string | null
          updated_at?: string
          updated_by?: string | null
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "accounts_memberships_account_id_fkey"
            columns: ["account_id"]
            isOneToOne: false
            referencedRelation: "accounts"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "accounts_memberships_account_id_fkey"
            columns: ["account_id"]
            isOneToOne: false
            referencedRelation: "user_account_workspace"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "accounts_memberships_account_id_fkey"
            columns: ["account_id"]
            isOneToOne: false
            referencedRelation: "user_accounts"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "accounts_memberships_account_role_fkey"
            columns: ["account_role"]
            isOneToOne: false
            referencedRelation: "roles"
            referencedColumns: ["name"]
          },
          {
            foreignKeyName: "accounts_memberships_created_by_fkey"
            columns: ["created_by"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "accounts_memberships_updated_by_fkey"
            columns: ["updated_by"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "accounts_memberships_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
        ]
      }
      billing_customers: {
        Row: {
          account_id: string
          customer_id: string
          email: string | null
          id: number
          provider: Database["public"]["Enums"]["billing_provider"]
        }
        Insert: {
          account_id: string
          customer_id: string
          email?: string | null
          id?: number
          provider: Database["public"]["Enums"]["billing_provider"]
        }
        Update: {
          account_id?: string
          customer_id?: string
          email?: string | null
          id?: number
          provider?: Database["public"]["Enums"]["billing_provider"]
        }
        Relationships: [
          {
            foreignKeyName: "billing_customers_account_id_fkey"
            columns: ["account_id"]
            isOneToOne: false
            referencedRelation: "accounts"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "billing_customers_account_id_fkey"
            columns: ["account_id"]
            isOneToOne: false
            referencedRelation: "user_account_workspace"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "billing_customers_account_id_fkey"
            columns: ["account_id"]
            isOneToOne: false
            referencedRelation: "user_accounts"
            referencedColumns: ["id"]
          },
        ]
      }
      config: {
        Row: {
          billing_provider: Database["public"]["Enums"]["billing_provider"]
          enable_account_billing: boolean
          enable_team_account_billing: boolean
          enable_team_accounts: boolean
        }
        Insert: {
          billing_provider?: Database["public"]["Enums"]["billing_provider"]
          enable_account_billing?: boolean
          enable_team_account_billing?: boolean
          enable_team_accounts?: boolean
        }
        Update: {
          billing_provider?: Database["public"]["Enums"]["billing_provider"]
          enable_account_billing?: boolean
          enable_team_account_billing?: boolean
          enable_team_accounts?: boolean
        }
        Relationships: []
      }
      contact_addresses: {
        Row: {
          address: string
          city: string
          country: string
          county: string
          created_at: string
          currentPhysicalAddress: boolean
          foreignAddress: boolean
          from: string
          id: number
          inCareOf: string
          intendedAddress: boolean
          investmentProperty: boolean
          mailingAddress: boolean
          mostRecentForeignAddress: boolean
          postalCode: string
          previousAddress: boolean
          province: string
          recentForeignAddress: boolean
          recentlyFearedPersecution: boolean
          safeMailingAddress: boolean
          shareWithSpouse: boolean
          state: string
          to: string
          type: string
          typeValue: string
          user: string | null
          zipCode: string
        }
        Insert: {
          address?: string
          city?: string
          country?: string
          county?: string
          created_at?: string
          currentPhysicalAddress: boolean
          foreignAddress: boolean
          from?: string
          id?: number
          inCareOf?: string
          intendedAddress: boolean
          investmentProperty: boolean
          mailingAddress: boolean
          mostRecentForeignAddress: boolean
          postalCode?: string
          previousAddress: boolean
          province?: string
          recentForeignAddress: boolean
          recentlyFearedPersecution: boolean
          safeMailingAddress: boolean
          shareWithSpouse: boolean
          state?: string
          to?: string
          type?: string
          typeValue?: string
          user?: string | null
          zipCode?: string
        }
        Update: {
          address?: string
          city?: string
          country?: string
          county?: string
          created_at?: string
          currentPhysicalAddress?: boolean
          foreignAddress?: boolean
          from?: string
          id?: number
          inCareOf?: string
          intendedAddress?: boolean
          investmentProperty?: boolean
          mailingAddress?: boolean
          mostRecentForeignAddress?: boolean
          postalCode?: string
          previousAddress?: boolean
          province?: string
          recentForeignAddress?: boolean
          recentlyFearedPersecution?: boolean
          safeMailingAddress?: boolean
          shareWithSpouse?: boolean
          state?: string
          to?: string
          type?: string
          typeValue?: string
          user?: string | null
          zipCode?: string
        }
        Relationships: [
          {
            foreignKeyName: "public_contact_address_user_fkey"
            columns: ["user"]
            isOneToOne: false
            referencedRelation: "accounts"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "public_contact_address_user_fkey"
            columns: ["user"]
            isOneToOne: false
            referencedRelation: "user_account_workspace"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "public_contact_address_user_fkey"
            columns: ["user"]
            isOneToOne: false
            referencedRelation: "user_accounts"
            referencedColumns: ["id"]
          },
        ]
      }
      contact_family_children: {
        Row: {
          created_at: string
          DependentStatus: string
          derivativeApplicant: boolean
          email: string
          firstName: string
          headOfHousehold: boolean
          householdMember: boolean
          id: number
          lastName: string
          liveTogetherSince: string
          liveTogetherUntil: string
          middleName: string
          principalApplicant: boolean
          relationType: string
          user: string | null
        }
        Insert: {
          created_at?: string
          DependentStatus: string
          derivativeApplicant: boolean
          email: string
          firstName: string
          headOfHousehold: boolean
          householdMember: boolean
          id?: number
          lastName: string
          liveTogetherSince: string
          liveTogetherUntil: string
          middleName: string
          principalApplicant: boolean
          relationType: string
          user?: string | null
        }
        Update: {
          created_at?: string
          DependentStatus?: string
          derivativeApplicant?: boolean
          email?: string
          firstName?: string
          headOfHousehold?: boolean
          householdMember?: boolean
          id?: number
          lastName?: string
          liveTogetherSince?: string
          liveTogetherUntil?: string
          middleName?: string
          principalApplicant?: boolean
          relationType?: string
          user?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "contact_family_children_user_fkey"
            columns: ["user"]
            isOneToOne: false
            referencedRelation: "accounts"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "contact_family_children_user_fkey"
            columns: ["user"]
            isOneToOne: false
            referencedRelation: "user_account_workspace"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "contact_family_children_user_fkey"
            columns: ["user"]
            isOneToOne: false
            referencedRelation: "user_accounts"
            referencedColumns: ["id"]
          },
        ]
      }
      contact_family_father: {
        Row: {
          created_at: string
          DependentStatus: string
          derivativeApplicant: boolean
          email: string
          firstName: string
          headOfHousehold: boolean
          householdMember: boolean
          id: number
          lastName: string
          liveTogetherSince: string
          liveTogetherUntil: string
          middleName: string
          principalApplicant: boolean
          relationType: string
          user: string | null
        }
        Insert: {
          created_at?: string
          DependentStatus: string
          derivativeApplicant: boolean
          email: string
          firstName: string
          headOfHousehold: boolean
          householdMember: boolean
          id?: number
          lastName: string
          liveTogetherSince: string
          liveTogetherUntil: string
          middleName: string
          principalApplicant: boolean
          relationType: string
          user?: string | null
        }
        Update: {
          created_at?: string
          DependentStatus?: string
          derivativeApplicant?: boolean
          email?: string
          firstName?: string
          headOfHousehold?: boolean
          householdMember?: boolean
          id?: number
          lastName?: string
          liveTogetherSince?: string
          liveTogetherUntil?: string
          middleName?: string
          principalApplicant?: boolean
          relationType?: string
          user?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "contact_family_father_user_fkey"
            columns: ["user"]
            isOneToOne: false
            referencedRelation: "accounts"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "contact_family_father_user_fkey"
            columns: ["user"]
            isOneToOne: false
            referencedRelation: "user_account_workspace"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "contact_family_father_user_fkey"
            columns: ["user"]
            isOneToOne: false
            referencedRelation: "user_accounts"
            referencedColumns: ["id"]
          },
        ]
      }
      contact_family_mother: {
        Row: {
          created_at: string
          DependentStatus: string
          derivativeApplicant: boolean
          email: string
          firstName: string
          headOfHousehold: boolean
          householdMember: boolean
          id: number
          lastName: string
          liveTogetherSince: string
          liveTogetherUntil: string
          middleName: string
          principalApplicant: boolean
          relationType: string
          user: string | null
        }
        Insert: {
          created_at?: string
          DependentStatus: string
          derivativeApplicant: boolean
          email: string
          firstName: string
          headOfHousehold: boolean
          householdMember: boolean
          id?: number
          lastName: string
          liveTogetherSince: string
          liveTogetherUntil: string
          middleName: string
          principalApplicant: boolean
          relationType: string
          user?: string | null
        }
        Update: {
          created_at?: string
          DependentStatus?: string
          derivativeApplicant?: boolean
          email?: string
          firstName?: string
          headOfHousehold?: boolean
          householdMember?: boolean
          id?: number
          lastName?: string
          liveTogetherSince?: string
          liveTogetherUntil?: string
          middleName?: string
          principalApplicant?: boolean
          relationType?: string
          user?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "contact_family_mother_user_fkey"
            columns: ["user"]
            isOneToOne: false
            referencedRelation: "accounts"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "contact_family_mother_user_fkey"
            columns: ["user"]
            isOneToOne: false
            referencedRelation: "user_account_workspace"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "contact_family_mother_user_fkey"
            columns: ["user"]
            isOneToOne: false
            referencedRelation: "user_accounts"
            referencedColumns: ["id"]
          },
        ]
      }
      contact_family_spouse: {
        Row: {
          citymarriageEnded: string | null
          cityOfMarriage: string | null
          countryMarriageEnded: string | null
          countryOfMarriage: string | null
          created_at: string
          dateMarriageEnded: string | null
          dateOfMarriage: string | null
          dateOfSeperation: string | null
          DependentStatus: string | null
          derivativeApplicant: boolean | null
          email: string | null
          firstName: string
          headOfHousehold: boolean | null
          householdMember: boolean | null
          howMarriageEnded: string | null
          id: number
          lastName: string
          liveTogetherSince: string | null
          liveTogetherUntil: string | null
          middleName: string | null
          principalApplicant: boolean | null
          provinceMarriageEnded: string | null
          provinceOfMarriage: string | null
          reasonMarriageEnded: string | null
          stateMarriageEnded: string | null
          stateOfMarriage: string | null
          user: string | null
        }
        Insert: {
          citymarriageEnded?: string | null
          cityOfMarriage?: string | null
          countryMarriageEnded?: string | null
          countryOfMarriage?: string | null
          created_at?: string
          dateMarriageEnded?: string | null
          dateOfMarriage?: string | null
          dateOfSeperation?: string | null
          DependentStatus?: string | null
          derivativeApplicant?: boolean | null
          email?: string | null
          firstName: string
          headOfHousehold?: boolean | null
          householdMember?: boolean | null
          howMarriageEnded?: string | null
          id?: number
          lastName: string
          liveTogetherSince?: string | null
          liveTogetherUntil?: string | null
          middleName?: string | null
          principalApplicant?: boolean | null
          provinceMarriageEnded?: string | null
          provinceOfMarriage?: string | null
          reasonMarriageEnded?: string | null
          stateMarriageEnded?: string | null
          stateOfMarriage?: string | null
          user?: string | null
        }
        Update: {
          citymarriageEnded?: string | null
          cityOfMarriage?: string | null
          countryMarriageEnded?: string | null
          countryOfMarriage?: string | null
          created_at?: string
          dateMarriageEnded?: string | null
          dateOfMarriage?: string | null
          dateOfSeperation?: string | null
          DependentStatus?: string | null
          derivativeApplicant?: boolean | null
          email?: string | null
          firstName?: string
          headOfHousehold?: boolean | null
          householdMember?: boolean | null
          howMarriageEnded?: string | null
          id?: number
          lastName?: string
          liveTogetherSince?: string | null
          liveTogetherUntil?: string | null
          middleName?: string | null
          principalApplicant?: boolean | null
          provinceMarriageEnded?: string | null
          provinceOfMarriage?: string | null
          reasonMarriageEnded?: string | null
          stateMarriageEnded?: string | null
          stateOfMarriage?: string | null
          user?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "contact_family_spouse_user_fkey"
            columns: ["user"]
            isOneToOne: false
            referencedRelation: "accounts"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "contact_family_spouse_user_fkey"
            columns: ["user"]
            isOneToOne: false
            referencedRelation: "user_account_workspace"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "contact_family_spouse_user_fkey"
            columns: ["user"]
            isOneToOne: false
            referencedRelation: "user_accounts"
            referencedColumns: ["id"]
          },
        ]
      }
      contact_periods_of_stay: {
        Row: {
          authorizedStayExpiry: string
          cityOfEntry: string
          cityOfExit: string
          cityOfResidenceInUs: string
          classOfAdmission: string
          created_at: string
          dateOfEntry: string
          dateOfExit: string
          dateStatusExpires: string
          dateStatusWasGranted: string
          firstNameUsed: string
          grantedDurationOfStatus: boolean
          id: number
          lastNameUsed: string
          mannerOfEntry: string
          middleNameUsed: string
          modeOfTravel: string
          mostRecentEntry: boolean
          number_1_94: string
          onH_LStatus: boolean
          onRStatus: boolean
          passport_travelDocCountry: string
          passport_travelDocExpires: string
          passport_travelDocIssued: string
          passportNumber: string
          plannedStay: boolean
          portOfEntry: string
          purposeOfStay: string
          stateOfEntry: string
          stateOfExit: string
          statusAfterAdmission: string
          travelDocumentNumber: string
          user: string
        }
        Insert: {
          authorizedStayExpiry: string
          cityOfEntry: string
          cityOfExit: string
          cityOfResidenceInUs: string
          classOfAdmission: string
          created_at?: string
          dateOfEntry: string
          dateOfExit: string
          dateStatusExpires: string
          dateStatusWasGranted: string
          firstNameUsed: string
          grantedDurationOfStatus: boolean
          id?: number
          lastNameUsed: string
          mannerOfEntry: string
          middleNameUsed: string
          modeOfTravel: string
          mostRecentEntry: boolean
          number_1_94: string
          onH_LStatus: boolean
          onRStatus: boolean
          passport_travelDocCountry: string
          passport_travelDocExpires: string
          passport_travelDocIssued: string
          passportNumber: string
          plannedStay: boolean
          portOfEntry: string
          purposeOfStay: string
          stateOfEntry: string
          stateOfExit: string
          statusAfterAdmission: string
          travelDocumentNumber: string
          user?: string
        }
        Update: {
          authorizedStayExpiry?: string
          cityOfEntry?: string
          cityOfExit?: string
          cityOfResidenceInUs?: string
          classOfAdmission?: string
          created_at?: string
          dateOfEntry?: string
          dateOfExit?: string
          dateStatusExpires?: string
          dateStatusWasGranted?: string
          firstNameUsed?: string
          grantedDurationOfStatus?: boolean
          id?: number
          lastNameUsed?: string
          mannerOfEntry?: string
          middleNameUsed?: string
          modeOfTravel?: string
          mostRecentEntry?: boolean
          number_1_94?: string
          onH_LStatus?: boolean
          onRStatus?: boolean
          passport_travelDocCountry?: string
          passport_travelDocExpires?: string
          passport_travelDocIssued?: string
          passportNumber?: string
          plannedStay?: boolean
          portOfEntry?: string
          purposeOfStay?: string
          stateOfEntry?: string
          stateOfExit?: string
          statusAfterAdmission?: string
          travelDocumentNumber?: string
          user?: string
        }
        Relationships: [
          {
            foreignKeyName: "contact_periods_of_stay_user_fkey"
            columns: ["user"]
            isOneToOne: false
            referencedRelation: "accounts"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "contact_periods_of_stay_user_fkey"
            columns: ["user"]
            isOneToOne: false
            referencedRelation: "user_account_workspace"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "contact_periods_of_stay_user_fkey"
            columns: ["user"]
            isOneToOne: false
            referencedRelation: "user_accounts"
            referencedColumns: ["id"]
          },
        ]
      }
      contact_petitions: {
        Row: {
          advancePermissionToEnter: boolean
          affidavitOfSupport: boolean
          asyleeStatus: boolean
          cityFilled: string
          cityGranted: string
          countryFilled: string
          created_at: string
          dateFilled: string
          dateGranted: string
          employmentAuthorization: boolean
          firstName: string
          id: number
          imigrantVisa: boolean
          lastName: string
          middleName: string
          nonImigrantVisa: boolean
          officeFilled: string
          officeGranted: string
          provinceFilled: string
          provinceGranted: string
          receiptNumber: string
          reentryPermit: boolean
          refugeeStatus: boolean
          refugeeTravelDocument: boolean
          result: string
          stateFilled: string
          stateGranted: string
          user: string | null
        }
        Insert: {
          advancePermissionToEnter: boolean
          affidavitOfSupport: boolean
          asyleeStatus: boolean
          cityFilled: string
          cityGranted: string
          countryFilled: string
          created_at?: string
          dateFilled: string
          dateGranted: string
          employmentAuthorization: boolean
          firstName: string
          id?: number
          imigrantVisa: boolean
          lastName: string
          middleName: string
          nonImigrantVisa: boolean
          officeFilled: string
          officeGranted: string
          provinceFilled: string
          provinceGranted: string
          receiptNumber: string
          reentryPermit: boolean
          refugeeStatus: boolean
          refugeeTravelDocument: boolean
          result: string
          stateFilled: string
          stateGranted: string
          user?: string | null
        }
        Update: {
          advancePermissionToEnter?: boolean
          affidavitOfSupport?: boolean
          asyleeStatus?: boolean
          cityFilled?: string
          cityGranted?: string
          countryFilled?: string
          created_at?: string
          dateFilled?: string
          dateGranted?: string
          employmentAuthorization?: boolean
          firstName?: string
          id?: number
          imigrantVisa?: boolean
          lastName?: string
          middleName?: string
          nonImigrantVisa?: boolean
          officeFilled?: string
          officeGranted?: string
          provinceFilled?: string
          provinceGranted?: string
          receiptNumber?: string
          reentryPermit?: boolean
          refugeeStatus?: boolean
          refugeeTravelDocument?: boolean
          result?: string
          stateFilled?: string
          stateGranted?: string
          user?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "contact_petitions_user_fkey"
            columns: ["user"]
            isOneToOne: false
            referencedRelation: "accounts"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "contact_petitions_user_fkey"
            columns: ["user"]
            isOneToOne: false
            referencedRelation: "user_account_workspace"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "contact_petitions_user_fkey"
            columns: ["user"]
            isOneToOne: false
            referencedRelation: "user_accounts"
            referencedColumns: ["id"]
          },
        ]
      }
      contact_phone_numbers: {
        Row: {
          created_at: string
          id: number
          number: string | null
          type: string | null
          user: string | null
        }
        Insert: {
          created_at?: string
          id?: number
          number?: string | null
          type?: string | null
          user?: string | null
        }
        Update: {
          created_at?: string
          id?: number
          number?: string | null
          type?: string | null
          user?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "phone_numbers_user_fkey"
            columns: ["user"]
            isOneToOne: false
            referencedRelation: "accounts"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "phone_numbers_user_fkey"
            columns: ["user"]
            isOneToOne: false
            referencedRelation: "user_account_workspace"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "phone_numbers_user_fkey"
            columns: ["user"]
            isOneToOne: false
            referencedRelation: "user_accounts"
            referencedColumns: ["id"]
          },
        ]
      }
      contact_proceedings: {
        Row: {
          created_at: string
          current: boolean
          dateEnded: string
          dateStarted: string
          deportation: boolean
          exclusion: boolean
          hearing: boolean
          id: number
          locationCity: string
          locationState: string
          office: string
          otherJudicial: boolean
          removal: boolean
          rescission: boolean
          status: string
          user: string
        }
        Insert: {
          created_at?: string
          current: boolean
          dateEnded: string
          dateStarted: string
          deportation: boolean
          exclusion: boolean
          hearing: boolean
          id?: number
          locationCity: string
          locationState: string
          office: string
          otherJudicial: boolean
          removal: boolean
          rescission: boolean
          status: string
          user?: string
        }
        Update: {
          created_at?: string
          current?: boolean
          dateEnded?: string
          dateStarted?: string
          deportation?: boolean
          exclusion?: boolean
          hearing?: boolean
          id?: number
          locationCity?: string
          locationState?: string
          office?: string
          otherJudicial?: boolean
          removal?: boolean
          rescission?: boolean
          status?: string
          user?: string
        }
        Relationships: [
          {
            foreignKeyName: "contact_proceeding_user_fkey"
            columns: ["user"]
            isOneToOne: false
            referencedRelation: "accounts"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "contact_proceeding_user_fkey"
            columns: ["user"]
            isOneToOne: false
            referencedRelation: "user_account_workspace"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "contact_proceeding_user_fkey"
            columns: ["user"]
            isOneToOne: false
            referencedRelation: "user_accounts"
            referencedColumns: ["id"]
          },
        ]
      }
      contact_trips_abroads: {
        Row: {
          countriesVisited: string
          created_at: string
          departureCity: string
          departureDate: string
          departureState: string
          id: number
          inspectedToReturnUS: boolean
          meansOfTransport: string
          ReturnCity: string
          ReturnDate: string
          ReturnState: string
          tripPurpose: string
          user: string | null
        }
        Insert: {
          countriesVisited: string
          created_at?: string
          departureCity: string
          departureDate: string
          departureState: string
          id?: number
          inspectedToReturnUS: boolean
          meansOfTransport: string
          ReturnCity: string
          ReturnDate: string
          ReturnState: string
          tripPurpose: string
          user?: string | null
        }
        Update: {
          countriesVisited?: string
          created_at?: string
          departureCity?: string
          departureDate?: string
          departureState?: string
          id?: number
          inspectedToReturnUS?: boolean
          meansOfTransport?: string
          ReturnCity?: string
          ReturnDate?: string
          ReturnState?: string
          tripPurpose?: string
          user?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "contact_trips_abroads_user_fkey"
            columns: ["user"]
            isOneToOne: false
            referencedRelation: "accounts"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "contact_trips_abroads_user_fkey"
            columns: ["user"]
            isOneToOne: false
            referencedRelation: "user_account_workspace"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "contact_trips_abroads_user_fkey"
            columns: ["user"]
            isOneToOne: false
            referencedRelation: "user_accounts"
            referencedColumns: ["id"]
          },
        ]
      }
      conversations: {
        Row: {
          created_at: string
          id: string
          reference_id: string
          user_email: string | null
        }
        Insert: {
          created_at?: string
          id?: string
          reference_id: string
          user_email?: string | null
        }
        Update: {
          created_at?: string
          id?: string
          reference_id?: string
          user_email?: string | null
        }
        Relationships: []
      }
      documents: {
        Row: {
          content: string
          created_at: string
          hash: string
          id: string
          title: string
        }
        Insert: {
          content: string
          created_at?: string
          hash: string
          id?: string
          title: string
        }
        Update: {
          content?: string
          created_at?: string
          hash?: string
          id?: string
          title?: string
        }
        Relationships: []
      }
      documents_embeddings: {
        Row: {
          content: string
          created_at: string
          embedding: string | null
          id: string
          metadata: Json
        }
        Insert: {
          content: string
          created_at?: string
          embedding?: string | null
          id?: string
          metadata?: Json
        }
        Update: {
          content?: string
          created_at?: string
          embedding?: string | null
          id?: string
          metadata?: Json
        }
        Relationships: []
      }
      invitations: {
        Row: {
          account_id: string
          created_at: string
          email: string
          expires_at: string
          id: number
          invite_token: string
          invited_by: string
          role: string
          updated_at: string
        }
        Insert: {
          account_id: string
          created_at?: string
          email: string
          expires_at?: string
          id?: number
          invite_token: string
          invited_by: string
          role: string
          updated_at?: string
        }
        Update: {
          account_id?: string
          created_at?: string
          email?: string
          expires_at?: string
          id?: number
          invite_token?: string
          invited_by?: string
          role?: string
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "invitations_account_id_fkey"
            columns: ["account_id"]
            isOneToOne: false
            referencedRelation: "accounts"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "invitations_account_id_fkey"
            columns: ["account_id"]
            isOneToOne: false
            referencedRelation: "user_account_workspace"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "invitations_account_id_fkey"
            columns: ["account_id"]
            isOneToOne: false
            referencedRelation: "user_accounts"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "invitations_invited_by_fkey"
            columns: ["invited_by"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "invitations_role_fkey"
            columns: ["role"]
            isOneToOne: false
            referencedRelation: "roles"
            referencedColumns: ["name"]
          },
        ]
      }
      messages: {
        Row: {
          conversation_id: string
          created_at: string
          id: number
          sender: Database["public"]["Enums"]["sender"]
          text: string
          type: Database["public"]["Enums"]["message_type"]
        }
        Insert: {
          conversation_id: string
          created_at?: string
          id?: number
          sender: Database["public"]["Enums"]["sender"]
          text: string
          type: Database["public"]["Enums"]["message_type"]
        }
        Update: {
          conversation_id?: string
          created_at?: string
          id?: number
          sender?: Database["public"]["Enums"]["sender"]
          text?: string
          type?: Database["public"]["Enums"]["message_type"]
        }
        Relationships: [
          {
            foreignKeyName: "messages_conversation_id_fkey"
            columns: ["conversation_id"]
            isOneToOne: false
            referencedRelation: "conversations"
            referencedColumns: ["id"]
          },
        ]
      }
      notifications: {
        Row: {
          account_id: string
          body: string
          channel: Database["public"]["Enums"]["notification_channel"]
          created_at: string
          dismissed: boolean
          expires_at: string | null
          id: number
          link: string | null
          type: Database["public"]["Enums"]["notification_type"]
        }
        Insert: {
          account_id: string
          body: string
          channel?: Database["public"]["Enums"]["notification_channel"]
          created_at?: string
          dismissed?: boolean
          expires_at?: string | null
          id?: never
          link?: string | null
          type?: Database["public"]["Enums"]["notification_type"]
        }
        Update: {
          account_id?: string
          body?: string
          channel?: Database["public"]["Enums"]["notification_channel"]
          created_at?: string
          dismissed?: boolean
          expires_at?: string | null
          id?: never
          link?: string | null
          type?: Database["public"]["Enums"]["notification_type"]
        }
        Relationships: [
          {
            foreignKeyName: "notifications_account_id_fkey"
            columns: ["account_id"]
            isOneToOne: false
            referencedRelation: "accounts"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "notifications_account_id_fkey"
            columns: ["account_id"]
            isOneToOne: false
            referencedRelation: "user_account_workspace"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "notifications_account_id_fkey"
            columns: ["account_id"]
            isOneToOne: false
            referencedRelation: "user_accounts"
            referencedColumns: ["id"]
          },
        ]
      }
      order_items: {
        Row: {
          created_at: string
          id: string
          order_id: string
          price_amount: number | null
          product_id: string
          quantity: number
          updated_at: string
          variant_id: string
        }
        Insert: {
          created_at?: string
          id: string
          order_id: string
          price_amount?: number | null
          product_id: string
          quantity?: number
          updated_at?: string
          variant_id: string
        }
        Update: {
          created_at?: string
          id?: string
          order_id?: string
          price_amount?: number | null
          product_id?: string
          quantity?: number
          updated_at?: string
          variant_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "order_items_order_id_fkey"
            columns: ["order_id"]
            isOneToOne: false
            referencedRelation: "orders"
            referencedColumns: ["id"]
          },
        ]
      }
      orders: {
        Row: {
          account_id: string
          billing_customer_id: number
          billing_provider: Database["public"]["Enums"]["billing_provider"]
          created_at: string
          currency: string
          id: string
          status: Database["public"]["Enums"]["payment_status"]
          total_amount: number
          updated_at: string
        }
        Insert: {
          account_id: string
          billing_customer_id: number
          billing_provider: Database["public"]["Enums"]["billing_provider"]
          created_at?: string
          currency: string
          id: string
          status: Database["public"]["Enums"]["payment_status"]
          total_amount: number
          updated_at?: string
        }
        Update: {
          account_id?: string
          billing_customer_id?: number
          billing_provider?: Database["public"]["Enums"]["billing_provider"]
          created_at?: string
          currency?: string
          id?: string
          status?: Database["public"]["Enums"]["payment_status"]
          total_amount?: number
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "orders_account_id_fkey"
            columns: ["account_id"]
            isOneToOne: false
            referencedRelation: "accounts"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "orders_account_id_fkey"
            columns: ["account_id"]
            isOneToOne: false
            referencedRelation: "user_account_workspace"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "orders_account_id_fkey"
            columns: ["account_id"]
            isOneToOne: false
            referencedRelation: "user_accounts"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "orders_billing_customer_id_fkey"
            columns: ["billing_customer_id"]
            isOneToOne: false
            referencedRelation: "billing_customers"
            referencedColumns: ["id"]
          },
        ]
      }
      role_permissions: {
        Row: {
          id: number
          permission: Database["public"]["Enums"]["app_permissions"]
          role: string
        }
        Insert: {
          id?: number
          permission: Database["public"]["Enums"]["app_permissions"]
          role: string
        }
        Update: {
          id?: number
          permission?: Database["public"]["Enums"]["app_permissions"]
          role?: string
        }
        Relationships: [
          {
            foreignKeyName: "role_permissions_role_fkey"
            columns: ["role"]
            isOneToOne: false
            referencedRelation: "roles"
            referencedColumns: ["name"]
          },
        ]
      }
      roles: {
        Row: {
          hierarchy_level: number
          name: string
        }
        Insert: {
          hierarchy_level: number
          name: string
        }
        Update: {
          hierarchy_level?: number
          name?: string
        }
        Relationships: []
      }
      subscription_items: {
        Row: {
          created_at: string
          id: string
          interval: string
          interval_count: number
          price_amount: number | null
          product_id: string
          quantity: number
          subscription_id: string
          type: Database["public"]["Enums"]["subscription_item_type"]
          updated_at: string
          variant_id: string
        }
        Insert: {
          created_at?: string
          id: string
          interval: string
          interval_count: number
          price_amount?: number | null
          product_id: string
          quantity?: number
          subscription_id: string
          type: Database["public"]["Enums"]["subscription_item_type"]
          updated_at?: string
          variant_id: string
        }
        Update: {
          created_at?: string
          id?: string
          interval?: string
          interval_count?: number
          price_amount?: number | null
          product_id?: string
          quantity?: number
          subscription_id?: string
          type?: Database["public"]["Enums"]["subscription_item_type"]
          updated_at?: string
          variant_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "subscription_items_subscription_id_fkey"
            columns: ["subscription_id"]
            isOneToOne: false
            referencedRelation: "subscriptions"
            referencedColumns: ["id"]
          },
        ]
      }
      subscriptions: {
        Row: {
          account_id: string
          active: boolean
          billing_customer_id: number
          billing_provider: Database["public"]["Enums"]["billing_provider"]
          cancel_at_period_end: boolean
          created_at: string
          currency: string
          id: string
          period_ends_at: string
          period_starts_at: string
          status: Database["public"]["Enums"]["subscription_status"]
          trial_ends_at: string | null
          trial_starts_at: string | null
          updated_at: string
        }
        Insert: {
          account_id: string
          active: boolean
          billing_customer_id: number
          billing_provider: Database["public"]["Enums"]["billing_provider"]
          cancel_at_period_end: boolean
          created_at?: string
          currency: string
          id: string
          period_ends_at: string
          period_starts_at: string
          status: Database["public"]["Enums"]["subscription_status"]
          trial_ends_at?: string | null
          trial_starts_at?: string | null
          updated_at?: string
        }
        Update: {
          account_id?: string
          active?: boolean
          billing_customer_id?: number
          billing_provider?: Database["public"]["Enums"]["billing_provider"]
          cancel_at_period_end?: boolean
          created_at?: string
          currency?: string
          id?: string
          period_ends_at?: string
          period_starts_at?: string
          status?: Database["public"]["Enums"]["subscription_status"]
          trial_ends_at?: string | null
          trial_starts_at?: string | null
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "subscriptions_account_id_fkey"
            columns: ["account_id"]
            isOneToOne: false
            referencedRelation: "accounts"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "subscriptions_account_id_fkey"
            columns: ["account_id"]
            isOneToOne: false
            referencedRelation: "user_account_workspace"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "subscriptions_account_id_fkey"
            columns: ["account_id"]
            isOneToOne: false
            referencedRelation: "user_accounts"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "subscriptions_billing_customer_id_fkey"
            columns: ["billing_customer_id"]
            isOneToOne: false
            referencedRelation: "billing_customers"
            referencedColumns: ["id"]
          },
        ]
      }
      waitlist: {
        Row: {
          approved: boolean
          created_at: string
          email: string
          id: number
        }
        Insert: {
          approved?: boolean
          created_at?: string
          email: string
          id?: number
        }
        Update: {
          approved?: boolean
          created_at?: string
          email?: string
          id?: number
        }
        Relationships: []
      }
    }
    Views: {
      user_account_workspace: {
        Row: {
          id: string | null
          name: string | null
          picture_url: string | null
          subscription_status:
            | Database["public"]["Enums"]["subscription_status"]
            | null
        }
        Relationships: []
      }
      user_accounts: {
        Row: {
          id: string | null
          name: string | null
          picture_url: string | null
          role: string | null
          slug: string | null
        }
        Relationships: [
          {
            foreignKeyName: "accounts_memberships_account_role_fkey"
            columns: ["role"]
            isOneToOne: false
            referencedRelation: "roles"
            referencedColumns: ["name"]
          },
        ]
      }
    }
    Functions: {
      accept_invitation: {
        Args: {
          token: string
          user_id: string
        }
        Returns: string
      }
      add_invitations_to_account: {
        Args: {
          account_slug: string
          invitations: Database["public"]["CompositeTypes"]["invitation"][]
        }
        Returns: Database["public"]["Tables"]["invitations"]["Row"][]
      }
      can_action_account_member: {
        Args: {
          target_team_account_id: string
          target_user_id: string
        }
        Returns: boolean
      }
      create_invitation: {
        Args: {
          account_id: string
          email: string
          role: string
        }
        Returns: {
          account_id: string
          created_at: string
          email: string
          expires_at: string
          id: number
          invite_token: string
          invited_by: string
          role: string
          updated_at: string
        }
      }
      create_team_account: {
        Args: {
          account_name: string
        }
        Returns: {
          created_at: string | null
          created_by: string | null
          email: string | null
          id: string
          is_personal_account: boolean
          name: string
          picture_url: string | null
          primary_owner_user_id: string
          public_data: Json
          slug: string | null
          updated_at: string | null
          updated_by: string | null
        }
      }
      get_account_invitations: {
        Args: {
          account_slug: string
        }
        Returns: {
          id: number
          email: string
          account_id: string
          invited_by: string
          role: string
          created_at: string
          updated_at: string
          expires_at: string
          inviter_name: string
          inviter_email: string
        }[]
      }
      get_account_members: {
        Args: {
          account_slug: string
        }
        Returns: {
          id: string
          user_id: string
          account_id: string
          role: string
          role_hierarchy_level: number
          primary_owner_user_id: string
          name: string
          email: string
          picture_url: string
          created_at: string
          updated_at: string
        }[]
      }
      get_config: {
        Args: Record<PropertyKey, never>
        Returns: Json
      }
      get_upper_system_role: {
        Args: Record<PropertyKey, never>
        Returns: string
      }
      has_active_subscription: {
        Args: {
          target_account_id: string
        }
        Returns: boolean
      }
      has_more_elevated_role: {
        Args: {
          target_user_id: string
          target_account_id: string
          role_name: string
        }
        Returns: boolean
      }
      has_permission: {
        Args: {
          user_id: string
          account_id: string
          permission_name: Database["public"]["Enums"]["app_permissions"]
        }
        Returns: boolean
      }
      has_role_on_account: {
        Args: {
          account_id: string
          account_role?: string
        }
        Returns: boolean
      }
      has_same_role_hierarchy_level: {
        Args: {
          target_user_id: string
          target_account_id: string
          role_name: string
        }
        Returns: boolean
      }
      is_account_owner: {
        Args: {
          account_id: string
        }
        Returns: boolean
      }
      is_account_team_member: {
        Args: {
          target_account_id: string
        }
        Returns: boolean
      }
      is_set: {
        Args: {
          field_name: string
        }
        Returns: boolean
      }
      is_team_member: {
        Args: {
          account_id: string
          user_id: string
        }
        Returns: boolean
      }
      kw_match_documents: {
        Args: {
          query_text: string
          match_count: number
        }
        Returns: {
          id: string
          content: string
          metadata: Json
          similarity: number
        }[]
      }
      match_documents: {
        Args: {
          query_embedding: string
          match_count?: number
          filter?: Json
        }
        Returns: {
          id: string
          content: string
          metadata: Json
          similarity: number
        }[]
      }
      team_account_workspace: {
        Args: {
          account_slug: string
        }
        Returns: {
          id: string
          name: string
          picture_url: string
          slug: string
          role: string
          role_hierarchy_level: number
          primary_owner_user_id: string
          subscription_status: Database["public"]["Enums"]["subscription_status"]
          permissions: Database["public"]["Enums"]["app_permissions"][]
        }[]
      }
      transfer_team_account_ownership: {
        Args: {
          target_account_id: string
          new_owner_id: string
        }
        Returns: undefined
      }
      upsert_order: {
        Args: {
          target_account_id: string
          target_customer_id: string
          target_order_id: string
          status: Database["public"]["Enums"]["payment_status"]
          billing_provider: Database["public"]["Enums"]["billing_provider"]
          total_amount: number
          currency: string
          line_items: Json
        }
        Returns: {
          account_id: string
          billing_customer_id: number
          billing_provider: Database["public"]["Enums"]["billing_provider"]
          created_at: string
          currency: string
          id: string
          status: Database["public"]["Enums"]["payment_status"]
          total_amount: number
          updated_at: string
        }
      }
      upsert_subscription: {
        Args: {
          target_account_id: string
          target_customer_id: string
          target_subscription_id: string
          active: boolean
          status: Database["public"]["Enums"]["subscription_status"]
          billing_provider: Database["public"]["Enums"]["billing_provider"]
          cancel_at_period_end: boolean
          currency: string
          period_starts_at: string
          period_ends_at: string
          line_items: Json
          trial_starts_at?: string
          trial_ends_at?: string
        }
        Returns: {
          account_id: string
          active: boolean
          billing_customer_id: number
          billing_provider: Database["public"]["Enums"]["billing_provider"]
          cancel_at_period_end: boolean
          created_at: string
          currency: string
          id: string
          period_ends_at: string
          period_starts_at: string
          status: Database["public"]["Enums"]["subscription_status"]
          trial_ends_at: string | null
          trial_starts_at: string | null
          updated_at: string
        }
      }
    }
    Enums: {
      app_permissions:
        | "roles.manage"
        | "billing.manage"
        | "settings.manage"
        | "members.manage"
        | "invites.manage"
      billing_provider: "stripe" | "lemon-squeezy" | "paddle"
      message_type: "ai" | "db" | "user"
      notification_channel: "in_app" | "email"
      notification_type: "info" | "warning" | "error"
      payment_status: "pending" | "succeeded" | "failed"
      sender: "user" | "assistant"
      subscription_item_type: "flat" | "per_seat" | "metered"
      subscription_status:
        | "active"
        | "trialing"
        | "past_due"
        | "canceled"
        | "unpaid"
        | "incomplete"
        | "incomplete_expired"
        | "paused"
    }
    CompositeTypes: {
      invitation: {
        email: string | null
        role: string | null
      }
    }
  }
  storage: {
    Tables: {
      buckets: {
        Row: {
          allowed_mime_types: string[] | null
          avif_autodetection: boolean | null
          created_at: string | null
          file_size_limit: number | null
          id: string
          name: string
          owner: string | null
          owner_id: string | null
          public: boolean | null
          updated_at: string | null
        }
        Insert: {
          allowed_mime_types?: string[] | null
          avif_autodetection?: boolean | null
          created_at?: string | null
          file_size_limit?: number | null
          id: string
          name: string
          owner?: string | null
          owner_id?: string | null
          public?: boolean | null
          updated_at?: string | null
        }
        Update: {
          allowed_mime_types?: string[] | null
          avif_autodetection?: boolean | null
          created_at?: string | null
          file_size_limit?: number | null
          id?: string
          name?: string
          owner?: string | null
          owner_id?: string | null
          public?: boolean | null
          updated_at?: string | null
        }
        Relationships: []
      }
      migrations: {
        Row: {
          executed_at: string | null
          hash: string
          id: number
          name: string
        }
        Insert: {
          executed_at?: string | null
          hash: string
          id: number
          name: string
        }
        Update: {
          executed_at?: string | null
          hash?: string
          id?: number
          name?: string
        }
        Relationships: []
      }
      objects: {
        Row: {
          bucket_id: string | null
          created_at: string | null
          id: string
          last_accessed_at: string | null
          metadata: Json | null
          name: string | null
          owner: string | null
          owner_id: string | null
          path_tokens: string[] | null
          updated_at: string | null
          version: string | null
        }
        Insert: {
          bucket_id?: string | null
          created_at?: string | null
          id?: string
          last_accessed_at?: string | null
          metadata?: Json | null
          name?: string | null
          owner?: string | null
          owner_id?: string | null
          path_tokens?: string[] | null
          updated_at?: string | null
          version?: string | null
        }
        Update: {
          bucket_id?: string | null
          created_at?: string | null
          id?: string
          last_accessed_at?: string | null
          metadata?: Json | null
          name?: string | null
          owner?: string | null
          owner_id?: string | null
          path_tokens?: string[] | null
          updated_at?: string | null
          version?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "objects_bucketId_fkey"
            columns: ["bucket_id"]
            isOneToOne: false
            referencedRelation: "buckets"
            referencedColumns: ["id"]
          },
        ]
      }
      s3_multipart_uploads: {
        Row: {
          bucket_id: string
          created_at: string
          id: string
          in_progress_size: number
          key: string
          owner_id: string | null
          upload_signature: string
          version: string
        }
        Insert: {
          bucket_id: string
          created_at?: string
          id: string
          in_progress_size?: number
          key: string
          owner_id?: string | null
          upload_signature: string
          version: string
        }
        Update: {
          bucket_id?: string
          created_at?: string
          id?: string
          in_progress_size?: number
          key?: string
          owner_id?: string | null
          upload_signature?: string
          version?: string
        }
        Relationships: [
          {
            foreignKeyName: "s3_multipart_uploads_bucket_id_fkey"
            columns: ["bucket_id"]
            isOneToOne: false
            referencedRelation: "buckets"
            referencedColumns: ["id"]
          },
        ]
      }
      s3_multipart_uploads_parts: {
        Row: {
          bucket_id: string
          created_at: string
          etag: string
          id: string
          key: string
          owner_id: string | null
          part_number: number
          size: number
          upload_id: string
          version: string
        }
        Insert: {
          bucket_id: string
          created_at?: string
          etag: string
          id?: string
          key: string
          owner_id?: string | null
          part_number: number
          size?: number
          upload_id: string
          version: string
        }
        Update: {
          bucket_id?: string
          created_at?: string
          etag?: string
          id?: string
          key?: string
          owner_id?: string | null
          part_number?: number
          size?: number
          upload_id?: string
          version?: string
        }
        Relationships: [
          {
            foreignKeyName: "s3_multipart_uploads_parts_bucket_id_fkey"
            columns: ["bucket_id"]
            isOneToOne: false
            referencedRelation: "buckets"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "s3_multipart_uploads_parts_upload_id_fkey"
            columns: ["upload_id"]
            isOneToOne: false
            referencedRelation: "s3_multipart_uploads"
            referencedColumns: ["id"]
          },
        ]
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      can_insert_object: {
        Args: {
          bucketid: string
          name: string
          owner: string
          metadata: Json
        }
        Returns: undefined
      }
      extension: {
        Args: {
          name: string
        }
        Returns: string
      }
      filename: {
        Args: {
          name: string
        }
        Returns: string
      }
      foldername: {
        Args: {
          name: string
        }
        Returns: string[]
      }
      get_size_by_bucket: {
        Args: Record<PropertyKey, never>
        Returns: {
          size: number
          bucket_id: string
        }[]
      }
      list_multipart_uploads_with_delimiter: {
        Args: {
          bucket_id: string
          prefix_param: string
          delimiter_param: string
          max_keys?: number
          next_key_token?: string
          next_upload_token?: string
        }
        Returns: {
          key: string
          id: string
          created_at: string
        }[]
      }
      list_objects_with_delimiter: {
        Args: {
          bucket_id: string
          prefix_param: string
          delimiter_param: string
          max_keys?: number
          start_after?: string
          next_token?: string
        }
        Returns: {
          name: string
          id: string
          metadata: Json
          updated_at: string
        }[]
      }
      search: {
        Args: {
          prefix: string
          bucketname: string
          limits?: number
          levels?: number
          offsets?: number
          search?: string
          sortcolumn?: string
          sortorder?: string
        }
        Returns: {
          name: string
          id: string
          updated_at: string
          created_at: string
          last_accessed_at: string
          metadata: Json
        }[]
      }
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type PublicSchema = Database[Extract<keyof Database, "public">]

export type Tables<
  PublicTableNameOrOptions extends
    | keyof (PublicSchema["Tables"] & PublicSchema["Views"])
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
        Database[PublicTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
      Database[PublicTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : PublicTableNameOrOptions extends keyof (PublicSchema["Tables"] &
        PublicSchema["Views"])
    ? (PublicSchema["Tables"] &
        PublicSchema["Views"])[PublicTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  PublicTableNameOrOptions extends
    | keyof PublicSchema["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : PublicTableNameOrOptions extends keyof PublicSchema["Tables"]
    ? PublicSchema["Tables"][PublicTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  PublicTableNameOrOptions extends
    | keyof PublicSchema["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : PublicTableNameOrOptions extends keyof PublicSchema["Tables"]
    ? PublicSchema["Tables"][PublicTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  PublicEnumNameOrOptions extends
    | keyof PublicSchema["Enums"]
    | { schema: keyof Database },
  EnumName extends PublicEnumNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = PublicEnumNameOrOptions extends { schema: keyof Database }
  ? Database[PublicEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : PublicEnumNameOrOptions extends keyof PublicSchema["Enums"]
    ? PublicSchema["Enums"][PublicEnumNameOrOptions]
    : never

