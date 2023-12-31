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
      boards: {
        Row: {
          cover: string
          created_at: string | null
          description: string | null
          id: string
          made_by: string
          title: string
          updated_at: string | null
          visibility: string
        }
        Insert: {
          cover: string
          created_at?: string | null
          description?: string | null
          id?: string
          made_by: string
          title: string
          updated_at?: string | null
          visibility?: string
        }
        Update: {
          cover?: string
          created_at?: string | null
          description?: string | null
          id?: string
          made_by?: string
          title?: string
          updated_at?: string | null
          visibility?: string
        }
        Relationships: [
          {
            foreignKeyName: "boards_made_by_fkey"
            columns: ["made_by"]
            referencedRelation: "users"
            referencedColumns: ["id"]
          }
        ]
      }
      card_labels: {
        Row: {
          card_id: string
          created_at: string | null
          id: string
          label_id: string
        }
        Insert: {
          card_id: string
          created_at?: string | null
          id?: string
          label_id: string
        }
        Update: {
          card_id?: string
          created_at?: string | null
          id?: string
          label_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "card_labels_card_id_fkey"
            columns: ["card_id"]
            referencedRelation: "cards"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "card_labels_label_id_fkey"
            columns: ["label_id"]
            referencedRelation: "possible_labels"
            referencedColumns: ["id"]
          }
        ]
      }
      cards: {
        Row: {
          cover: string | null
          created_at: string | null
          description: string | null
          id: string
          list_id: string
          name: string
          updated_at: string | null
        }
        Insert: {
          cover?: string | null
          created_at?: string | null
          description?: string | null
          id?: string
          list_id: string
          name: string
          updated_at?: string | null
        }
        Update: {
          cover?: string | null
          created_at?: string | null
          description?: string | null
          id?: string
          list_id?: string
          name?: string
          updated_at?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "cards_list_id_fkey"
            columns: ["list_id"]
            referencedRelation: "lists"
            referencedColumns: ["id"]
          }
        ]
      }
      lists: {
        Row: {
          board_id: string
          created_at: string | null
          id: string
          name: string
          updated_at: string | null
        }
        Insert: {
          board_id: string
          created_at?: string | null
          id?: string
          name: string
          updated_at?: string | null
        }
        Update: {
          board_id?: string
          created_at?: string | null
          id?: string
          name?: string
          updated_at?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "lists_board_id_fkey"
            columns: ["board_id"]
            referencedRelation: "boards"
            referencedColumns: ["id"]
          }
        ]
      }
      members: {
        Row: {
          board_id: string
          created_at: string
          user_id: string
        }
        Insert: {
          board_id: string
          created_at?: string
          user_id: string
        }
        Update: {
          board_id?: string
          created_at?: string
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "members_board_id_fkey"
            columns: ["board_id"]
            referencedRelation: "boards"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "members_user_id_fkey"
            columns: ["user_id"]
            referencedRelation: "users"
            referencedColumns: ["id"]
          }
        ]
      }
      possible_labels: {
        Row: {
          board_id: string
          color: string
          created_at: string | null
          id: string
          name: string
        }
        Insert: {
          board_id: string
          color: string
          created_at?: string | null
          id?: string
          name: string
        }
        Update: {
          board_id?: string
          color?: string
          created_at?: string | null
          id?: string
          name?: string
        }
        Relationships: [
          {
            foreignKeyName: "possible_labels_board_id_fkey"
            columns: ["board_id"]
            referencedRelation: "boards"
            referencedColumns: ["id"]
          }
        ]
      }
      users: {
        Row: {
          avatar_url: string | null
          full_name: string | null
          id: string
          updated_at: string | null
          username: string | null
        }
        Insert: {
          avatar_url?: string | null
          full_name?: string | null
          id: string
          updated_at?: string | null
          username?: string | null
        }
        Update: {
          avatar_url?: string | null
          full_name?: string | null
          id?: string
          updated_at?: string | null
          username?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "users_id_fkey"
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
