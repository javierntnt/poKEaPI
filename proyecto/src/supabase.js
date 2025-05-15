import { createClient } from '@supabase/supabase-js';
const supabaseUrl = 'https://faqvwgsblaxyaeawobzw.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZhcXZ3Z3NibGF4eWFlYXdvYnp3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDczNDIwMTcsImV4cCI6MjA2MjkxODAxN30.S_vMtioUVuvb_MmYw59dXDTNIIAjUD52_QLmzN7sDDQ';
export const supabase = createClient(supabaseUrl, supabaseKey);