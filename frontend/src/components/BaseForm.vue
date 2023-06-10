<template>
  <form class="form" v-on:submit.prevent="submit">
    <header class="form-header">
      <h1>{{ header }}</h1>
    </header>
    <section class="section-input">
      <label class="label-username">Username</label>
      <BaseInput
        textType="type"
        placeholderValue="Enter username..."
        v-model="username"
      />
    </section>

    <section class="section-input">
      <label class="label-password">Password</label>
      <BaseInput
        textType="password"
        placeholderValue="Enter password..."
        v-model="password"
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
</template>

<script>
import { defineComponent } from "vue";
import BaseInput from "@/components/BaseInput.vue";

export default defineComponent({
  components: { BaseInput },
  props: {
    header: String,
    msg:String
  },
  data() {
    return {
      username: "",
      password: "",
    };
  },
  methods: {
    submit() {
      this.$emit("sendUserDetails", {
        username: this.username,
        password: this.password,
      });
    },
  },
});
</script>

<style>
.form {
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
