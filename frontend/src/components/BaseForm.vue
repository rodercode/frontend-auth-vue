<template>
  <form class="form" v-on:submit.prevent="submit">
    <header class="form-header">
      <h1>{{ header }}</h1>
    </header>
    <section class="section-input">
      <label class="label-username">Username</label>
      <BaseInput
        class="input"
        textType="type"
        placeholderValue="Enter username..."
        v-model="username"
      />
    </section>

    <section class="section-input">
      <label class="label-password">Password</label>
      <BaseInput
        class="input"
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
      <router-link class="link" :to="{path}">here</router-link>
    </p>
    <div class="container-btns">
      <BaseButton class="btn btn-form" :btnText="btnText" />
      <BaseButton
        class="btn btn-form"
        btnText="Process as guest user"
        @click="$router.push('/gueusst')"
      />
    </div>
  </form>
</template>

<script>
import { defineComponent } from "vue";
import BaseInput from "@/components/BaseInput.vue";
import BaseButton from "@/components/BaseButton.vue";

export default defineComponent({
  components: { BaseInput, BaseButton },
  props: {
    header: String,
    msg: String,
    btnText: String,
    path:String
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

.error-msg {
  color: black;
  margin: 0 1em 2em 2em;
  font-size: 20px;
}
</style>
