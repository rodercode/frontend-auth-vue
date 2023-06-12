<template>
  <header class="bannar">
    <div class="box-empty"></div>
    <h1>Booksters website</h1>
    <div>
      <p>Browsing as user username</p>
      <BaseButton class="btn btn-sign-out" btnText="Sign out" />
    </div>
  </header>
</template>

<script>
import BaseButton from "./BaseButton.vue";
export default {
  components: { BaseButton },
};
</script>

<style css-scoped.vue>
header {
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
