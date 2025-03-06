import { PaginationType } from "./App.Interface";
import { ProjectType } from "./Data.Interface";

export interface InitialDataTypes {
  message: string;
  data: ProjectType[] | null;
  pagination: PaginationType;
}

export interface InitialStateTypes {
  loading: boolean;
  error: string;
  data: InitialDataTypes;
}
