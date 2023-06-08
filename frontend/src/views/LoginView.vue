<template>
  <div class="container-login">
    <form class="form-login">
      <header class="form-header">
        <h1>Login</h1>
      </header>
      <section class="section-input">
        <label class="label-username">Username</label>
        <input
          v-model="consumer.username"
          class="input-username"
          placeholder="Type your username..."
          type="username"
        />
      </section>

      <section class="section-input">
        <label class="label-password">Password</label>
        <input
          v-model="consumer.password"
          class="input-password"
          placeholder="Enter a password..."
          type="password"
        />
      </section>

      <p class="info-link">
        Already have an account? Sign in
        <router-link class="link" :to="{ name: 'login' }">here</router-link>
      </p>
      <div class="container-btns">
        <button @click="$router.push('/guest')" class="btn">
          Proceed as guest user
        </button>
      </div>
    </form>
    <button @click="handleLogin" class="btn">Sign in</button>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import VueRouter from "vue-router";
import { Consumer } from "../model/consumer";

export default defineComponent({
  name: "RegisterView",
  data() {
    return {
      consumer: {} as Consumer,
    };
  },
  methods: {
    handleLogin() {
      console.log("username: " + this.consumer.username);
      console.log("password: " + this.consumer.password);
    },
  },
});
</script>

<style scoped>
.container-login {
  display: flex;
  justify-content: center;
  align-items: center;
}

.form-login {
  background: rgb(207, 201, 201);
  width: 30%;
  padding: 1.5em;
}
.form-header {
  margin-bottom: 2em;
}

.section-input {
  margin: 0 1em 2em 1em;
}
.info-link {
  margin: 0 0 0.5em 1em;
}

input {
  width: 100%;
  padding: 1em;
}

label {
  text-align: left;
  display: inline-block;
  font-size: 24px;
}

.container-btns {
  display: flex;
}
.btn {
  width: 50%;
  padding: 0.75em;
  margin-left: 1em;
}
</style>
