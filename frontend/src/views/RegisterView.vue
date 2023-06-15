<!-- 
 * Creator: Marcus Groth
 * Date: 14e June
 * This is register view component where user can create a new user 
 -->

<template>
  <div class="container">
    <BaseHeader class="header-offline-state" />
    <div class="register">
      <BaseForm
        @sendUserDetails="handleRegistrationButton"
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
      path: "/",
    };
  },
  methods: {
    // create new user in the backend
    async handleRegistration(consumer: Consumer) {
      this.msg = await authService.register(consumer);
    },
    
    // Convert username to lower case
    convertToLowerCase(username: string) {
      username.toLowerCase();
    },

    handleRegistrationButton(consumer: Consumer) {
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
