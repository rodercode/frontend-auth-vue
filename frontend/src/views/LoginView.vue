<template>
  <div class="container">
    <BaseForm
      @sendUserDetails="loginUser"
      :header="header"
      :msg="msg"
      :btnText ="btnText"
      :path="path"
    />
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

export default defineComponent({
  name: "RegisterView",
  components: { BaseForm },
  data() {
    return {
      header: "Login",
      consumer: {} as Consumer,
      msg: ("" as string) || undefined,
      btnText: "Sign in",
      path:"/register"
    };
  },
  methods: {
    loginUser(consumer: Consumer) {
      this.convertToLowerCase(consumer.username);
      this.handleLogin(consumer);
    },
    async handleLogin(consumer: Consumer) {
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
.container {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
