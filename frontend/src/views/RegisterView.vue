<template>
  <div class="container-register">
    <BaseForm @sendUserDetails="registerUser" :header="header" :msg="msg" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import VueRouter from "vue-router";
import { Consumer } from "@/model/consumer";
import authService from "@/service/authService";

// Components
import BaseForm from "@/components/BaseForm.vue";

export default defineComponent({
  name: "RegisterView",
  components: { BaseForm },
  data() {
    return {
      header: "Register",
      msg: "" as string | undefined,
    };
  },
  methods: {
    async handlePromise(consumer: Consumer) {
      this.msg = await authService.register(consumer);
    },
    convertToLowerCase(username: string) {
      username.toLowerCase();
    },
    registerUser(consumer: Consumer) {
      this.convertToLowerCase(consumer.username);
      this.handlePromise(consumer);
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
</style>