import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://qlheajwvrpvyyjzyfqmu.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFsaGVhand2cnB2eXlqenlmcW11Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTQzMTYyODgsImV4cCI6MjA2OTg5MjI4OH0.MdA2bcUIdp5-lyu4t0-vcvst2lJeOiPoxCLD5_DQJ1s'

export const supabase = createClient(supabaseUrl, supabaseKey)

export type BookingData = {
  id?: string
  check_in: string
  check_out: string
  room_type: string
  guests: number
  guest_name: string
  guest_email: string
  guest_phone?: string
  special_requests?: string
  status: 'pending' | 'confirmed' | 'cancelled'
  created_at?: string
}