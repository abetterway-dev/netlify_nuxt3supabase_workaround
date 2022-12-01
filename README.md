# Nuxt 3, Netlify & useSupabaseUser() cookie glitch workaround

I am still getting issue #98 (Cookie Issues) on my netlify deploys using @nuxtjs/supabase 0.3.0 this my workaround.

## Option 1
Add and remove the cookies: 'sb-access-token' / 'sb-refresh-token' on signout and successful signin with useCookie.

## Option 2
Alternatively, you can deploy modifying node_modules/nitropack/dist/runtime/entries/netlify.mjs >> to return without normalizeOutgoingHeaders(r.headers).

- include 'enableNetlifyCookies.js'
- change your build script in your package.json to  "node ./enableNetlifyCookies.js && nuxt build"

This will remove the the normalizeOutgoingHeaders from the nitropack preset file for netlify.