import { supabase } from './config';
import { Course } from '@types/index';

/**
 * Get all courses
 */
export const getCourses = async (limit = 20, offset = 0) => {
  try {
    const { data, error, count } = await supabase
      .from('courses')
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
 * Get course by ID
 */
export const getCourseById = async (courseId: string) => {
  try {
    const { data, error } = await supabase
      .from('courses')
      .select('*')
      .eq('id', courseId)
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
 * Get courses by category
 */
export const getCoursesByCategory = async (category: string, limit = 20, offset = 0) => {
  try {
    const { data, error, count } = await supabase
      .from('courses')
      .select('*', { count: 'exact' })
      .eq('category', category)
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
 * Search courses
 */
export const searchCourses = async (query: string, limit = 20, offset = 0) => {
  try {
    const { data, error, count } = await supabase
      .from('courses')
      .select('*', { count: 'exact' })
      .or(`title.ilike.%${query}%,description.ilike.%${query}%`)
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
