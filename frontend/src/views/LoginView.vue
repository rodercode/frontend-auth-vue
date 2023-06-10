<template>
  <div class="container-login">
    <form class="form-login" v-on:submit.prevent="handleButton">
      <header class="form-header">
        <h1>Login</h1>
      </header>
      <section class="section-input">
        <label class="label-username">Username</label>
        <BaseInput
          textType="type"
          placeholderValue="Enter username..."
          v-model="consumer.username"
        />      </section>

      <section class="section-input">
        <label class="label-password">Password</label>
        <BaseInput
          textType="password"
          placeholderValue="Enter password..."
          v-model="consumer.password"
        />     </section>

      <div class="container-error-msg" v-if="msg !== 'Successfully'">
        <p class="error-msg">{{ msg }}</p>
      </div>

       <p class="info-link">
        Don't have an account? Sign up
        <router-link class="link" :to="{ name: 'register' }">here</router-link>
      </p>
      <div class="container-btns">
        <button class="btn">Sign in</button>
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

// Components
import BaseInput from "@/components/BaseInput.vue";

export default defineComponent({
  name: "RegisterView",
  components:{BaseInput},
  data() {
    return {
      consumer: {} as Consumer,
      msg: ("" as string) || undefined,
    };
  },
  methods: {
    handleButton() {
      this.convertToLowerCase(this.consumer.username);
      this.handlePromise();
    },
    async handlePromise() {
      this.msg = await authService.login(this.consumer);
    },
    convertToLowerCase(username: string) {
      this.consumer.username = username.toLowerCase();
    },
  },
  watch: {
    msg() {
      if (this.msg === "Successfully") {
        this.$router.push("/user");
      }
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

.error-msg {
  color: black;
  margin: 0 1em 2em 2em;
  font-size: 20px;
}
</style>
