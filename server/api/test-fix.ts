import { ConstantTypes } from "@vue/compiler-core";
import { serialize } from "cookie-es";
import { appendResponseHeaders } from 'h3'
export default defineEventHandler(async (event) => {
    const cookieStr = serialize('test-access-token', 'Work Around', {
        path: '/',
        maxAge: 60 * 60 * 8,
        secure: true,
        httpOnly: true,
      })
    console.log('test')
    appendResponseHeaders(event, { "Set-Cookie": cookieStr  })
    appendResponseHeaders(event, { "Set-Cookie": 'test=hello world'  })
    appendResponseHeaders(event, { "Set-Cookie": '_Secure-test=hello world'  })
    appendResponseHeaders(event, { "other": cookieStr  })
    
    return 'working'
})