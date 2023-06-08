<template>
  <header class="bannar">
    <h1>Booksters website</h1>
  </header>
  <nav>
    <router-link :to="{ name: 'login' }">Login</router-link> |
    <router-link :to="{ name: 'register' }">Sign Up</router-link> |
    <router-link :to="{ name: 'guest' }">Guest</router-link> |
    <router-link :to="{ name: 'user' }">User</router-link> |
    <router-link :to="{ name: 'admin' }">Admin</router-link>
  </nav>
  <router-view />
</template>

<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
});
</script>

<style css-scoped lang="css">
header {
  background-color: grey;
  color: #fff;
  padding: 2.5em;
  text-align: center;
}
nav {
  text-align: center;
  padding: 30px;
}
</style>
