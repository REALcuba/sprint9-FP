export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export interface Database {
  public: {
    Tables: {
      products: {
        Row: {
          category: string
          // created_at: string
          id?: string
          images: string | null
          // user_name: string
          pick_up_address: string | null
          product_name: string
          status: string
          // user_id: string | null
          description: string
        }
        Insert: {
          category: string
          // created_at?: string
          id?: string
          images?: string | null
          // user_name: string
          pick_up_address?: string | null
          product_name: string
          status: string
          // user_id?: string | null
          description: string

        }
        Update: {
          category?: string
          // created_at?: string
          id?: string
          images?: string | null
          // user_name?: string
          pick_up_address?: string | null
          product_name?: string
          status?: string
          // user_id?: string | null
          description: string

        }
        Relationships: [
          {
            foreignKeyName: "products_id_fkey"
            columns: ["id"]
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "products_user_id_fkey"
            columns: ["user_id"]
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          }
        ]
      }
      profiles: {
        Row: {
          avatar_url: string | null
          full_name: string | null
          id: string
          updated_at: string | null
          user_name: string | null
        }
        Insert: {
          avatar_url?: string | null
          full_name?: string | null
          id: string
          updated_at?: string | null
          user_name?: string | null
        }
        Update: {
          avatar_url?: string | null
          full_name?: string | null
          id?: string
          updated_at?: string | null
          user_name?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "profiles_id_fkey"
            columns: ["id"]
            referencedRelation: "users"
            referencedColumns: ["id"]
          }
        ]
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}
