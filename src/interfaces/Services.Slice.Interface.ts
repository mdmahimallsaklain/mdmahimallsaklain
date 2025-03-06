import { PaginationType } from "./App.Interface";
import { ServiceType } from "./Data.Interface";

// Define initial data structure
export interface InitialDataTypes {
  message: string;
  data: ServiceType[] | null;
  pagination: PaginationType;
}

// Define initial state structure
export interface InitialStateTypes {
  loading: boolean;
  error: string;
  data: InitialDataTypes;
}
