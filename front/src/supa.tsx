import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://dntgigntcmtylolgrrfb.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRudGdpZ250Y210eWxvbGdycmZiIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTcyNDQzNDA2MCwiZXhwIjoyMDQwMDEwMDYwfQ.13DEtE7jiEGt2cg4eyvEmIYqxUfdtznrfdg1ln6aUPs';

const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
