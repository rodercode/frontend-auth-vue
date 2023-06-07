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

<style lang="scss">
#app {
  text-align: center;
}
header {
  background-color: grey;
  padding: 2.5em;
}
nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
