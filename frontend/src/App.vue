<template>
  <div class="app">
    <router-view />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import cacheService from "./service/cacheService";
import jwtService from "./service/jwtService";

//Components
import BaseButton from "./components/BaseButton.vue";

export default defineComponent({
  name: "App",
  data() {
    return {
      online: true,
    };
  },
  watch: {},

  methods: {
    handleSignOutButton() {
      jwtService.deleteJwt("jwt");
      cacheService.setLocal("online", false);
    },
    switchPage() {
      this.$router.push("/login");
    },
  },
});
</script>

<style css-scoped lang="css">


</style>
