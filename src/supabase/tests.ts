import { supabase } from './config';

/**
 * Get all tests
 */
export const getTests = async (limit = 20, offset = 0) => {
  try {
    const { data, error, count } = await supabase
      .from('tests')
      .select('*', { count: 'exact' })
      .range(offset, offset + limit - 1);

    if (error) throw error;
    return { data: data || [], count };
  } catch (error: any) {
    throw {
      code: error.code || 'DB_ERROR',
      message: error.message,
    };
  }
};

/**
 * Get test by ID with questions
 */
export const getTestById = async (testId: string) => {
  try {
    const { data, error } = await supabase
      .from('tests')
      .select('*, questions(*)')
      .eq('id', testId)
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
 * Submit test result
 */
export const submitTestResult = async (testResult: any) => {
  try {
    const { data, error } = await supabase
      .from('test_results')
      .insert([testResult])
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
 * Get test results for user
 */
export const getUserTestResults = async (userId: string, limit = 20, offset = 0) => {
  try {
    const { data, error, count } = await supabase
      .from('test_results')
      .select('*', { count: 'exact' })
      .eq('user_id', userId)
      .order('created_at', { ascending: false })
      .range(offset, offset + limit - 1);

    if (error) throw error;
    return { data: data || [], count };
  } catch (error: any) {
    throw {
      code: error.code || 'DB_ERROR',
      message: error.message,
    };
  }
};
