import { SocialMediaType } from "./Data.Interface";

// Define the initial state type for the social media slice
export interface InitialStateTypes {
  loading: boolean;
  error: string;
  data: {
    message: string;
    data: SocialMediaType[] | null;
  };
}
