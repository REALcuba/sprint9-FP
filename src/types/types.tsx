import { Session, User } from "@supabase/supabase-js"
import { Database } from "../types/supabase"

export interface buttonProps {
  direction: string
  moveSlide: string
}
export type productsListProps = {
  id: number,
  image: string,
  itemName: string,
  ownerName: string,
  pickupAddress: string,
  category: string,
  status: string
}[]

export interface ProductRow {
  user_name: string
  ownerName: string
  pickupAddress: string
  category: string;
  id?: string;
  images: string | null;
  pick_up_address?: string | null;
  product_name: string;
  status: string;
  description: string;
}
export type HomeProps = {
  // products: ProductRow[];
  changeFilter: (callback: (prevFilter: FilterProps) => FilterProps) => void;
  noImg: string;
  filteredProducts:  ProductRow[];
};
export interface FilterProps {
  changeFilter: (callback: (prevFilter: FilterProps) => FilterProps) => void;
  filteredProducts: ProductRow[];
  category: string,
  status: string,
}
export interface UserActions {
  // user: User | null;
  password: string | number | null;
  email: string | number | null;
  signUp: (email: string, password: string) => Promise<void>;
  logIn: (email: string, password: string) => Promise<void>;
  logOut: () => Promise<void>;
  // handleAvatarInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  addNewProduct: (product: Database['public']['Tables']['products']['Insert']) => Promise<void>;    // data?: unknown;
  fetchProfiles: () => Promise<void>;
  handleProductImageUpload: (event: React.ChangeEvent<HTMLInputElement>) => Promise<void>;
  fetchProductsFromSupabase: () => Promise<void>;
}
// type UserData = {
//   id: string;
//   aud: string;
//   role: string;
//   email: string;
//   email_confirmed_at: string;
//   created_at: string;
//   app_metadata: {
//     provider: string;
//     providers: string[];
//   };
//   user_metadata: { [key: string]: unknown };
//   identities: {
//     id: string;
//     user_id: string;
//     identity_data: { [key: string]: unknown };
//     provider: string;
//     last_sign_in_at: string;
//     // Otras propiedades de la identidad
//   }[];
//   last_sign_in_at: string;
//   phone: string;
//   updated_at: string;
//   // Otras propiedades de UserData
// };

// type SessionData = {
//   access_token: string;
//   expires_at: number;
//   expires_in: number;
//   refresh_token: string;
//   token_type: string;
// };
export type UserSession = {
  app_metadata: {
    provider: string;
    providers: string[];
  };
  aud: string;
  confirmed_at: string;
  created_at: string;
  email: string;
  email_confirmed_at: string;
  id: string;
  identities: {
    id: string;
    user_id: string;
    identity_data: { [key: string]: unknown };
    provider: string;
    last_sign_in_at: string;
    updated_at: string;
    // Otras propiedades de la identidad
  }[];
  last_sign_in_at: string;
  phone: string;
  role?: string;
  updated_at: string;
  user_metadata: { [key: string]: unknown };
};

export type DataProps = {
  user: User | null;
  session: Session | null;
};
export interface UserState {
  isLoggedIn: boolean;
  // user: User | null;
  products: ProductRow[]
  avatarUrl: string | null;
  password: string | number | null;
  email: string | number | null;
  data?: DataProps;
  productImageUrl: string | null;
  profile: []
}