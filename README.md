# Nuxt 3, Netlify & useSupabaseUser() cookie glitch workaround

I am still getting issue #98 (Cookie Issues) on my netlify deploys using @nuxtjs/supabase 0.3.0 this is my test project on my workaround.

In essence, I add and remove the cookies: 'sb-access-token' / 'sb-refresh-token' on signout and successful signin with useCookie.

Alternatively, you can deploy from a local build and netlify-cli modifying node_modules/nitropack/dist/runtime/entries/netlify.mjs >> to return without normalizeOutgoingHeaders(r.headers).


    return {
        statusCode: r.status,
        headers: r.headers,
        body: r.body.toString()
    };
