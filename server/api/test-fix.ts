import { serialize } from "cookie-es";
import { appendResponseHeaders } from 'h3'
export default defineEventHandler(async (event) => {
    const cookieStr = serialize('test-access-token', 'Work Around', {
        secure: true,
        httpOnly: true,
        path: '/',
        maxAge: 60 * 60 * 8,
      })

    appendResponseHeaders(event, { "Set-Cookie": cookieStr  })
    appendResponseHeaders(event, { "other": cookieStr  })
    
    return 'working'
})