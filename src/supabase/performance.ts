import { supabase } from './config';

/**
 * Get user performance
 */
export const getUserPerformance = async (userId: string) => {
  try {
    const { data, error } = await supabase
      .from('performance')
      .select('*')
      .eq('user_id', userId)
      .single();

    if (error) throw error;
    return data;
  } catch (error: any) {
    return null;
  }
};

/**
 * Update user performance
 */
export const updateUserPerformance = async (userId: string, updates: any) => {
  try {
    const { data, error } = await supabase
      .from('performance')
      .update(updates)
      .eq('user_id', userId)
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
 * Get leaderboard
 */
export const getLeaderboard = async (limit = 50) => {
  try {
    const { data, error } = await supabase
      .from('performance')
      .select('*')
      .order('rank', { ascending: true })
      .limit(limit);

    if (error) throw error;
    return data || [];
  } catch (error: any) {
    throw {
      code: error.code || 'DB_ERROR',
      message: error.message,
    };
  }
};
