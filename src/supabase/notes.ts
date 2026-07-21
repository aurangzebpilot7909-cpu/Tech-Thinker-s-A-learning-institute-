import { supabase } from './config';

/**
 * Get all notes
 */
export const getNotes = async (limit = 20, offset = 0) => {
  try {
    const { data, error, count } = await supabase
      .from('notes')
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
 * Get notes by course
 */
export const getNotesByCourse = async (courseId: string, limit = 20, offset = 0) => {
  try {
    const { data, error, count } = await supabase
      .from('notes')
      .select('*', { count: 'exact' })
      .eq('course_id', courseId)
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
 * Download note
 */
export const downloadNote = async (noteId: string) => {
  try {
    // Increment download count
    const { error: updateError } = await supabase
      .from('notes')
      .update({ downloads: supabase.rpc('increment_downloads', { note_id: noteId }) })
      .eq('id', noteId);

    if (updateError) console.error('Error updating download count:', updateError);

    // Get download URL
    const { data, error } = await supabase.storage
      .from('notes')
      .createSignedUrl(`public/${noteId}.pdf`, 60 * 60 * 24); // 24 hours

    if (error) throw error;
    return data?.signedUrl;
  } catch (error: any) {
    throw {
      code: error.code || 'DB_ERROR',
      message: error.message,
    };
  }
};

/**
 * Search notes
 */
export const searchNotes = async (query: string, limit = 20, offset = 0) => {
  try {
    const { data, error, count } = await supabase
      .from('notes')
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
