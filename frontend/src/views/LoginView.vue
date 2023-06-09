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
        Don't have an account? Sign up
        <router-link class="link" :to="{ name: 'register' }">here</router-link>
      </p>
      <div class="container-btns">
        <button @click="handleLogin" class="btn">Sign in</button>
        <button @click="$router.push('/guest')" class="btn">
          Proceed as guest user
        </button>
      </div>
    </form>
  </div>
</template>

<script lang="ts">
import cacheService from "@/service/cacheService";
import { defineComponent } from "vue";
import VueRouter from "vue-router";
import { Consumer } from "../model/consumer";
import authService from "@/service/authService";

export default defineComponent({
  name: "RegisterView",
  data() {
    return {
      consumer: {} as Consumer,
    };
  },
  methods: {
    handleLogin() {
      this.consumer.username = this.capitalizedFirstLetter(
        this.consumer.username
      );
      this.handlePromise();
      this.$router.push("/user");
    },
    async handlePromise() {
      await authService.login(this.consumer);
      console.log(this.consumer.username);
      console.log(this.consumer.password);
    },
    capitalizedFirstLetter(text: string) {
      const firstLetter = text[0].toUpperCase();
      const restOfLetters = text.slice(1).toLowerCase();
      return firstLetter + restOfLetters;
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
