// Isi dengan data dari Supabase > Project Settings > API
const SUPABASE_URL = 'https://iwupdnorarqgmdgwipmn.supabase.co';
const SUPABASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Iml3dXBkbm9yYXJxZ21kZ3dpcG1uIiwicm9sZSI6ImFub24iLCJpYXQiOjE3OTE4NzI4MTksImV4cCI6MjEwNzQ0ODgxOX0.XvmiiLc96x5ByR6jUgqVsM6uxfBeuttEjaM-jfKUaWc';
const db = supabase.createClient(SUPABASE_URL, SUPABASE_KEY);
