import { setCookie } from 'h3'

export default defineEventHandler(async (event) => {
    setCookie(event, 'test-access-token', 'Current Approach', {
        domain: '',
        maxAge: 60 * 60 * 8,
        path: '/',
        sameSite: 'lax'
      })
    
    return 'breaks on netlify'
})