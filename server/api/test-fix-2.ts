import { setCookie } from 'h3'
// import { serverSupabaseUser } from '#supabase/server'
export default defineEventHandler(async (event) => {
    const test = useCookie(`test-2-access-token`)
    test.value = "VALUE"

    return 'done'
})