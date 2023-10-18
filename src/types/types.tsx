import { Session, User } from "@supabase/supabase-js"


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

export type HomeProps = {
  changeFilter: (callback: (prevFilter: FilterProps) => FilterProps) => void;

  filteredProducts: productsListProps;
};
export interface FilterProps extends HomeProps {
  categories: string,
  status: string,
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
  avatarUrl: string | null;
  password: string | number | null;
  email: string | number | null;
  data?: DataProps;
}