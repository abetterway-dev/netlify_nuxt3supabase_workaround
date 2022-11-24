<script setup>
const { auth } = useSupabaseAuthClient()
const router = useRouter()
definePageMeta({  middleware: 'auth'})
const logout = () => {
    auth.signOut()
    const accessToken = useCookie('sb-access-token')
    const refreshToken = useCookie('sb-refresh-token')
    accessToken.value = null
    refreshToken.value = null
    router.push('/login')
}
</script>
<template>
    <div>Protected Page</div>
    <button @click="logout()">logout</button>
</template>