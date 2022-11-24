import { serialize } from "cookie-es";
import { appendResponseHeaders } from 'h3'
export default defineEventHandler(async (event) => {
    const cookieStr = serialize('test-access-token', 'Work Around', {
        domain: '',
        maxAge: 60 * 60 * 8,
        path: '/',
        sameSite: 'lax'
      })

    appendResponseHeaders(event, { "Set-Cookie": cookieStr  })
    
    return 'working'
})