<template>
  <div class="container">
    <BaseHeader class="header-offline-state" />
    <div class="login">
      <BaseForm
        @sendUserDetails="handleLoginButton"
        :header="header"
        :msg="msg"
        :btnText="btnText"
        :path="path"
      />
    </div>
  </div>
</template>

<script lang="ts">
import cacheService from "@/service/cacheService";
import { defineComponent } from "vue";
import VueRouter from "vue-router";
import { Consumer } from "../model/consumer";
import authService from "@/service/authService";

// Components
import BaseForm from "@/components/BaseForm.vue";
import BaseHeader from "@/components/BaseHeader.vue";
import jwtService from "@/service/jwtService";

export default defineComponent({
  name: "RegisterView",
  components: { BaseForm, BaseHeader },
  data() {
    return {
      header: "Login",
      consumer: {} as Consumer,
      msg: ("" as string) || undefined,
      btnText: "Sign in",
      path: "/register",
      test: this.variable,
    };
  },
  methods: {
    handleLoginButton(consumer: Consumer) {
      this.convertToLowerCase(consumer.username);
      this.handlePromise(consumer);
    },
    async handlePromise(consumer: Consumer) {
      this.msg = await authService.login(consumer);
    },
    convertToLowerCase(username: string) {
      username.toLowerCase();
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
.login {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 4em;
}
</style>
