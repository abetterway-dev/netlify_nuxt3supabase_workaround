<script setup lang="ts">
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

const testAPI = async () => {
    const { data } = await useFetch('/api/test', {  
        headers: useRequestHeaders(['cookie'])
    })
   alert(data.value)
}

const testRouteChange = () => {
    router.push('/test')
}
</script>
<template>
    <div>Protected Page</div>
    <button @click="logout()">logout</button>
    <button @click="testRouteChange()">Test Routing</button>
    <button @click="testAPI()">Test API Call</button>
</template>