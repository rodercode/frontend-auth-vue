<!-- 
 * Creator: Marcus Groth
 * Date: 14e June
 * This is login view component where user are able to log in
 -->

<template>
  <div class="container">
    <BaseHeader role="guest" btnName="Sign in"/>
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
import { defineComponent } from "vue";

// Model imports
import { Consumer } from "../model/consumer";

// Service imports
import jwtService from "@/service/jwtService";
import consumerService from "@/service/consumerService";
import authService from "@/service/authService";

// Components imports
import BaseForm from "@/components/base/BaseForm.vue";
import BaseHeader from "@/components/base/BaseHeader.vue";

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
    };
  },
  methods: {
    handleLoginButton(consumer: Consumer) {
      this.convertToLowerCase(consumer.username);
      this.handleLogin(consumer);
    },

    // Generate jwt if username and password is correct
    async handleLogin(consumer: Consumer) {
      this.msg = await authService.login(consumer);
    },

    // Convert username to lower case
    convertToLowerCase(username: string) {
      username.toLowerCase();
    },

    // Switch page from login to userView or adminView
    switchPage() {
      const token = jwtService.getJwt("jwt");
      const consumer = consumerService.getConsumer(token);

      if (consumer.role === "USER") {
        this.$router.push("/user");
      } else if (consumer.role === "ADMIN") {
        this.$router.push("/admin/books");
      }
    },
  },
  watch: {
    msg() {
      if (this.msg === "Successfully") {
        this.switchPage();
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
