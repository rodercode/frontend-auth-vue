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

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
