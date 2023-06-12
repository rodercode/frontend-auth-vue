<template>
  <div class="container">
    <BaseHeader class="header-offline-state"/>
    <div class="register">
      <BaseForm
        @sendUserDetails="registerUser"
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
import VueRouter from "vue-router";
import { Consumer } from "@/model/consumer";
import authService from "@/service/authService";

// Components
import BaseForm from "@/components/BaseForm.vue";
import BaseHeader from "@/components/BaseHeader.vue";

export default defineComponent({
  name: "RegisterView",
  components: { BaseForm, BaseHeader },
  data() {
    return {
      header: "Register",
      msg: "" as string | undefined,
      btnText: "Sign up",
      path: "/login",
    };
  },
  methods: {
    async handleRegistration(consumer: Consumer) {
      this.msg = await authService.register(consumer);
    },
    convertToLowerCase(username: string) {
      username.toLowerCase();
    },
    registerUser(consumer: Consumer) {
      this.convertToLowerCase(consumer.username);
      this.handleRegistration(consumer);
    },
  },
});
</script>

<style scoped>
.register {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 4em;
}
</style>
