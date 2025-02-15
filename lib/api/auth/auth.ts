export interface Credentials {
  email: string;
}

interface AuthService {
  createAccount: (credentials: Credentials) => Promise<void>;
  signIn: (credentials: Credentials) => Promise<void>;
  signOut: () => Promise<void>;
  getCurrentUser: () => Promise<void>;
}

export const authService: AuthService = {
  createAccount: async (credentials: Credentials) => {
    console.log('createAccount', credentials);
    //TODO: Use react query to create account
    // Mimic response
    await new Promise(resolve => setTimeout(resolve, 1000));
  },

  signIn: async (credentials: Credentials) => {
    console.log('signIn', credentials);
    //TODO: Use react query to sign in
    // Mimic response
    await new Promise(resolve => setTimeout(resolve, 1000));
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
  },
};
