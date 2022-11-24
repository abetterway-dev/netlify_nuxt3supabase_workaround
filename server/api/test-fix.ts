import { ConstantTypes } from "@vue/compiler-core";
import { serialize } from "cookie-es";
import { appendResponseHeaders } from 'h3'
export default defineEventHandler(async (event) => {
    const cookieStr = serialize('test-access-token', 'Work Around', {
        path: '/',
        maxAge: 60 * 60 * 8,
      })
    console.log('test')
    appendResponseHeaders(event, { "Set-Cookie": cookieStr  })
    appendResponseHeaders(event, { "other": cookieStr  })
    
    return 'working'
})