import { setCookie, appendResponseHeaders} from 'h3'
import { serverSupabaseUser } from '#supabase/server'
export default defineEventHandler(async (event) => {
    setCookie(event, `test-access-token`, 'VALUE HERE', {
        domain: '',
        maxAge: 60 * 60 * 8,
        path: '/',
        sameSite: 'lax'
      })
      appendResponseHeaders(event, { 'test-access-token':'VALUE%20HERE; Max-Age=28800; Path=/; SameSite=Lax'  })
    
    return 'test #10'
})