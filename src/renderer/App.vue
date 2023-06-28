<script setup lang="ts">
import { ref } from 'vue'
import Login from './pages/Login.vue'
import Application from './pages/Application.vue'

const loggedin = ref(false)

//window.electronAPI.sendMessage('Hello from App.vue!');
</script>

<template>
  <main>
    <Application v-if="loggedin"></Application>
    <Login v-else></Login>
  </main>
</template>
<style>
main {
	background-color: #080E1A !important;
  width: 100vw;
  height: 100vh;
  
}
</style>