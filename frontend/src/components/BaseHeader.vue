<template>
  <header class="bannar">
    <div class="box-empty"></div>
    <h1>Booksters website</h1>
    <div class="sign-in-profile">
      <p>
        Browsing as user <strong>{{ username }}</strong>
      </p>
      <BaseButton
        class="btn btn-sign-out"
        btnText="Sign out"
        @click="handleLogoutButton"
      />
    </div>
  </header>
</template>

<script>
import jwtService from "@/service/jwtService";

//Components
import BaseButton from "./BaseButton.vue";
export default {
  components: { BaseButton },
  props: {
    username: String,
  },
  methods: {
    handleLogoutButton() {
      jwtService.deleteJwt("jwt");
      this.$router.push("/login");
    },
  },
};
</script>

<style lang="scss" scoped>
.header-offline-state {
  background-color: grey;
  color: #fff;
  padding: 1.5em;
  display: flex;
  align-content: center;
  justify-content: space-around;

  div {
    opacity: 0;
  }
}
.header-online-state {
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
