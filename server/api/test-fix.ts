import { setCookie } from 'h3'
// import { serverSupabaseUser } from '#supabase/server'
export default defineEventHandler(async (event) => {
    setCookie(event, `test-access-token`, 'VALUE HERE', {
        domain: 'https://meek-phoenix-1f6073.netlify.app',
        maxAge: 60 * 60 * 8,
        path: '/',
        sameSite: 'lax'
      })

    return 'done'
})