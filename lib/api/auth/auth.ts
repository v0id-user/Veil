import { AuthResponse, User } from '@/interfaces/auth';
import { AuthMessage, AuthMessageCode } from '@/interfaces/auth/authMessages';
export interface Credentials {
  email: string;
}

interface AuthService {
  createAccount: (credentials: Credentials) => Promise<AuthResponse>;
  signIn: (credentials: Credentials) => Promise<AuthResponse>;
  signOut: () => Promise<void>;
  getCurrentUser: () => Promise<User | null>;
}

const dummyAuthResponse: AuthResponse = {
  user: null,
  message: new AuthMessage('ok', 'ar', AuthMessageCode.ACCOUNT_CREATED),
};

const dummyUser: User = {
  email: 'test@test.com',
  name: 'Test User',
  avatar: 'https://via.placeholder.com/150',
  premium: false,
  createdAt: new Date(),
};

export const authService: AuthService = {
  createAccount: async (credentials: Credentials) => {
    console.log('createAccount', credentials);
    //TODO: Use react query to create account

    // Mimic response
    await new Promise(resolve => setTimeout(resolve, 1000));

    return dummyAuthResponse;
  },

  signIn: async (credentials: Credentials) => {
    console.log('signIn', credentials);
    //TODO: Use react query to sign in

    // Mimic response
    await new Promise(resolve => setTimeout(resolve, 1000));

    return dummyAuthResponse;
  },

  signOut: async () => {
    //TODO: Use react query to sign out
    // Mimic response
    await new Promise(resolve => setTimeout(resolve, 1000));
  },

  getCurrentUser: async () => {
    //TODO: Use react query to get current user
    // Mimic response
    await new Promise(resolve => setTimeout(resolve, 1000));

    return dummyUser;
  },
};
