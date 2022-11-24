import { serverSupabaseUser } from '#supabase/server'

export default defineEventHandler(async (event) => {
    const user = await serverSupabaseUser(event)
    if(!!user){
        return "Logged In"
    } else {
        return "Logged Out"
    }
})