<template>
  <div class="app">
    <header class="bannar">
      <div class="box-empty"></div>
      <h1>Booksters website</h1>
      <div>
        <p>Browsing as user username</p>
        <BaseButton
          class="btn-sign-out"
          btnText="Sign out"
          @click="handleButton"
        />
      </div>
    </header>
    <nav>
      <router-link :to="{ name: 'login' }">Login</router-link> |
      <router-link :to="{ name: 'register' }">Sign Up</router-link> |
      <router-link :to="{ name: 'guest' }">Guest</router-link> |
      <router-link :to="{ name: 'user' }">User</router-link> |
      <router-link :to="{ name: 'admin' }">Admin</router-link>
    </nav>
    <router-view />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

//Components
import BaseButton from "./components/BaseButton.vue";

export default defineComponent({
  name: "App",
  components: { BaseButton },
  data() {
    return {};
  },
  methods: {
    handleButton() {
      console.log("Sign out button was pressed");
    },
  },
});
</script>

<style css-scoped lang="css">
header {
  background-color: grey;
  color: #fff;
  padding: 2.5em;
  text-align: center;
  display: flex;
  justify-content: space-between;
}
nav {
  text-align: center;
  padding: 30px;
}
.box-empty {
  padding: 1em 6em;
}
</style>
