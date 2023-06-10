<template>
  <div class="container-register">
    <form class="form-register" v-on:submit.prevent="handleButton">
      <header class="form-header">
        <h1>Register</h1>
      </header>
      <section class="section-input">
        <label class="label-username">Username</label>
        <BaseInput
          textType="type"
          placeholderValue="Enter username..."
          v-model="consumer.username"
        />
      </section>

      <section class="section-input">
        <label class="label-password">Password</label>
        <BaseInput
          textType="password"
          placeholderValue="Enter password..."
          v-model="consumer.password"
        />
      </section>
      <div class="container-error-msg" v-if="msg !== ''">
        <p class="error-msg">{{ msg }}</p>
      </div>
      <p class="info-link">
        Already have an account? Sign in
        <router-link class="link" :to="{ name: 'login' }">here</router-link>
      </p>
      <button class="btn">Sign up</button>
    </form>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import VueRouter from "vue-router";
import { Consumer } from "@/model/consumer";
import authService from "@/service/authService";
import BaseInput from "@/components/BaseInput.vue";

export default defineComponent({
  name: "RegisterView",
  components: { BaseInput },
  data() {
    return {
      consumer: {} as Consumer,
      msg: "" as string | undefined,
    };
  },
  methods: {
    handleButton() {
      this.convertToLowerCase(this.consumer.username);
      this.handlePromise();
      console.log(this.consumer.username);
    },
    async handlePromise() {
      this.msg = await authService.register(this.consumer);
    },
    convertToLowerCase(username: string) {
      this.consumer.username = username.toLowerCase();
    },
  },
});
</script>

<style scoped>
.container-register {
  display: flex;
  justify-content: center;
  align-items: center;
}

.form-register {
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
