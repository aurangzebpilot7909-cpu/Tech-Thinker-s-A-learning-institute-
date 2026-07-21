import { supabase } from './config';
import { User } from '@types/index';

/**
 * Sign up with email and password
 */
export const signUp = async (email: string, password: string, displayName: string) => {
  try {
    const { data, error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        data: {
          display_name: displayName,
        },
      },
    });

    if (error) throw error;
    return data.user;
  } catch (error: any) {
    throw {
      code: error.code || 'AUTH_ERROR',
      message: error.message,
    };
  }
};

/**
 * Sign in with email and password
 */
export const signIn = async (email: string, password: string) => {
  try {
    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) throw error;
    return data.user;
  } catch (error: any) {
    throw {
      code: error.code || 'AUTH_ERROR',
      message: error.message,
    };
  }
};

/**
 * Sign out current user
 */
export const logout = async () => {
  try {
    const { error } = await supabase.auth.signOut();
    if (error) throw error;
  } catch (error: any) {
    throw {
      code: error.code || 'AUTH_ERROR',
      message: error.message,
    };
  }
};

/**
 * Send password reset email
 */
export const sendPasswordReset = async (email: string) => {
  try {
    const { error } = await supabase.auth.resetPasswordForEmail(email);
    if (error) throw error;
  } catch (error: any) {
    throw {
      code: error.code || 'AUTH_ERROR',
      message: error.message,
    };
  }
};

/**
 * Get current user
 */
export const getCurrentUser = async () => {
  try {
    const { data, error } = await supabase.auth.getUser();
    if (error) throw error;
    return data.user;
  } catch (error: any) {
    return null;
  }
};

/**
 * Listen to auth state changes
 */
export const listenToAuthState = (callback: (user: any) => void) => {
  const { data: authListener } = supabase.auth.onAuthStateChange((event, session) => {
    callback(session?.user || null);
  });

  return authListener?.subscription.unsubscribe || (() => {});
};

/**
 * Update user profile
 */
export const updateUserProfile = async (userId: string, updates: Partial<User>) => {
  try {
    const { data, error } = await supabase
      .from('users')
      .update(updates)
      .eq('id', userId)
      .select()
      .single();

    if (error) throw error;
    return data;
  } catch (error: any) {
    throw {
      code: error.code || 'DB_ERROR',
      message: error.message,
    };
  }
};

/**
 * Get user profile
 */
export const getUserProfile = async (userId: string) => {
  try {
    const { data, error } = await supabase
      .from('users')
      .select('*')
      .eq('id', userId)
      .single();

    if (error) throw error;
    return data;
  } catch (error: any) {
    return null;
  }
};
