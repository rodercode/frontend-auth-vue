<!-- 
 * Creator: Marcus Groth
 * Date: 14e June
 * This is a reusable header component 
 -->

<template>
  <header class="header">
    <div class="box-empty"></div>
    <h1>Booksters website</h1>
    <div class="sign-in-profile">
      <p>
        Browsing as <strong>{{ role }} {{ username }}</strong>
      </p>
      <BaseButton
        class="btn btn-sign-out"
        :btnText="btnName"
        @click="handleAuthButton"
      />
    </div>
  </header>
</template>

<script>
import jwtService from "@/service/jwtService";

// Components imports
import BaseButton from "@/components/base/BaseButton.vue"
export default {
  components: { BaseButton },
  props: {
    username: String,
    role: String,
    btnName: String,
  },
  methods: {
    handleAuthButton() {
      jwtService.deleteJwt("jwt");
      this.$router.push("/");
    },
  },
};
</script>

<style lang="scss" scoped>
.header{
  background-color: grey;
  color: #fff;
  padding: 1.5em;
  display: flex;
  align-content: center;
  justify-content: space-around;
}

h1 {
  margin-top: 20px;
}

.box-empty {
  padding: 1em 6em;
}
</style>
