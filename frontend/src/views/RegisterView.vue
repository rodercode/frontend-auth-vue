<template>
  <div class="container-register">
    <form class="form-register">
      <header class="form-header">
        <h1>Register</h1>
      </header>
      <div class="section-input">
        <label>Username</label>
        <input placeholder="Type your username..." type="username" />
      </div>

      <div class="section-input">
        <label>Password</label>
        <input placeholder="Enter a password..." type="password" />
      </div>

      <div class="section-sign-in">
        <p>
          Already have an account? Sign in
          <router-link :to="{ name: 'login' }">here</router-link>
        </p>
      </div>
      <button>Register new account</button>
    </form>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "RegisterView",
});
</script>

<style scoped>
.container-register {
  display: flex;
  justify-content: center;
  align-items: center;
}

.form-register {
  background: rgb(207, 201, 201);
  width: 30%;
  padding: 1.5em;
}
.form-header {
  margin-bottom: 2em;
}

.section-input {
  margin: 0 1em 2em 1em;
}
.section-sign-in {
  margin: 0 1em .5em 1em;
}

input {
  width: 100%;
  padding: 1em;
}

label {
  text-align: left;
  display: inline-block;
  font-size: 24px;
}

button {
  width: 50%;
  padding: 0.75em;
  margin-left: 1em;
}
</style>
