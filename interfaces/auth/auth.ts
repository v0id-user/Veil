import { AuthMessage } from './authMessages';
export interface User {
  email: string;
  name: string;
  avatar: string; // Must be a valid url
  premium: boolean;
  createdAt: Date;
}

export interface AuthResponse {
  user: User | null; // Either the user object or null if the user is not authenticated
  message: AuthMessage;
}
