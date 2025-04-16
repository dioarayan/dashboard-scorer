import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://ggpioolejhldaxvmxqpq.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImdncGlvb2xlamhsZGF4dm14cXBxIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDQ2MTUyNTcsImV4cCI6MjA2MDE5MTI1N30.NlO1CHmORiX6Ntb-ceGQNhQK2BsgSQfy57Nykukqjdg'

export const supabase = createClient(supabaseUrl, supabaseKey)
