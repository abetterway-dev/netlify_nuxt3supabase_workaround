<script setup lang="ts">
const router = useRouter()
definePageMeta({  middleware: 'auth'})

</script>
<template>
    <div>Protected Page</div>
    <button @click="router.push('/')">Back home</button>
</template>