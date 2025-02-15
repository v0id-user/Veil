'use client';

import { useState } from 'react';
import { authService, Credentials } from './auth';

export const useAuth = () => {
  const [currentUser, setCurrentUser] = useState(null);
  const [loading, setLoading] = useState(false);

  const createAccount = async (credentials: Credentials) => {
    setLoading(true);
    await authService.createAccount(credentials);
    setLoading(false);
  };

  const signIn = async (credentials: Credentials) => {
    setLoading(true);
    await authService.signIn(credentials);
    setLoading(false);
  };

  const signOut = async () => {
    await authService.signOut();
    setCurrentUser(null);
  };

  //   const getCurrentUser = async () => {
  //     const user = await authService.getCurrentUser();
  //     console.log('getCurrentUser', user);
  //     //TODO: setCurrentUser(user);
  //     setLoading(false);
  //   };

  return {
    currentUser,
    loading,
    createAccount,
    signIn,
    signOut,
  };
};
