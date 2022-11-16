import type { SupabaseClient } from '@supabase/supabase-js'
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.SUPABASE_URL
const supabaseKey = process.env.SUPABASE_API_KEY
let supabaseClient: SupabaseClient | null = null

function connect() {
  if (!supabaseUrl || !supabaseKey) {
    throw new Error(
      'You must provide the SUPABASE_URL and SUPABASE_API_KEY environment variables.'
    )
  }

  console.log('Creating supabase client...')
  supabaseClient = createClient(supabaseUrl, supabaseKey)
  console.log('Successfully connected to Supabase!')
}

async function getConnection(): Promise<SupabaseClient | null> {
  if (!supabaseClient) {
    connect()
  }

  return supabaseClient
}

export { connect, getConnection }
