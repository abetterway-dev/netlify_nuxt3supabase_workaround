<script setup lang="ts">
const { auth } = useSupabaseAuthClient()
const user = useSupabaseUser()
const router = useRouter()

const password = ref("")
const email = ref("")
const errorMsg = ref("")
const login = async () => {
    const loginRequest = {
                email: email.value,
                password: password.value
            }

  const { data: response, error } = await auth.signInWithPassword(loginRequest)
    if(!!response){
        const accessToken = useCookie('sb-access-token')
        const refreshToken = useCookie('sb-refresh-token')
        accessToken.value = response.session?.access_token ?? null
        refreshToken.value = response.session?.refresh_token ?? null
    }

    if(!!error){
        errorMsg.value = error.message
    }
}
    
    watch(user,() => {
        if(!!user.value){
            router.push('/')
        }
    })

    const testAPI = async () => {
        const { data } = await useFetch('/api/test', {  
            //@ts-ignore
            headers: useRequestHeaders(['cookie'])
        })
        alert(data.value)
    }
</script>
<template>
    <div>
        <label>E-Mail: </label>
        <input type="text" v-model="email" />
    </div>
    <div>
        <label>Password: </label>
        <input type="password" v-model="password" />
    </div>
    <button @click="login">Login</button>
    <button @click="testAPI()">Test API Call</button>
    <div>{{ errorMsg }}</div>
</template>