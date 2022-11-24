import { setCookie} from 'h3'
import { serverSupabaseUser } from '#supabase/server'
export default defineEventHandler(async (event) => {
    setCookie(event, `test-access-token`, 'VALUE HERE', {
        domain: '',
        maxAge: 60 * 60 * 8,
        path: '/',
        sameSite: 'lax'
      })

    return 'test #9'
})