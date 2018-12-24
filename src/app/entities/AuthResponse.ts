import { Role } from "./Role";

export interface AuthResponse {
  id: string;
  token: string;
  email: string;
  firstName: string;
  lastName: string;
  roles: Role[]
}
