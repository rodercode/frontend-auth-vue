<template>
  <div class="app">
    <header class="bannar">
      <div class="box-empty"></div>
      <h1>Booksters website</h1>
      <div>
        <p>Browsing as user username</p>
        <BaseButton
          class="btn btn-sign-out"
          btnText="Sign out"
          @click="logOut"
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
import jwtService from "./service/jwtService";

//Components
import BaseButton from "./components/BaseButton.vue";

export default defineComponent({
  name: "App",
  components: { BaseButton },
  data() {
    return {
      isOnline: false,
    };
  },
  mounted() {
    const jwt = jwtService.getJwt("jwt").accessToken;
    if (jwt === undefined) {
      console.log("No user is logged in");
    } else {
      console.log("User is log in");
    }
  },
  methods: {
    handleButton() {
      this.logOutUser();
      this.switchPage();
    },
    logOutUser() {
      jwtService.deleteJwt("jwt");
    },
    switchPage() {
      this.$router.push("/login");
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
