<!-- <template>
  <form class="form" v-on:submit.prevent="handleButton">
    <header class="form-header">
      <h1>{{ username }}</h1>
    </header>
    <section class="section-input">
      <label class="label-username">Username</label>
      <input
        class="input"
        placeholder="Type your username..."
        type="username"
        v-model="username"
      />
    </section>

    <section class="section-input">
      <label class="label-password">Password</label>
      <input
        
        class="input"
        placeholder="Enter a password..."
        type="password"
      />
    </section>
    <div class="container-error-msg" v-if="msg !== ''">
      <p class="error-msg">{{ msg }}</p>
    </div>
    <p class="info-link">
      Already have an account? Sign in
      <router-link class="link" :to="{ name: 'login' }">here</router-link>
    </p>
    <button class="btn">Sign up</button>
  </form>
</template>

<script>
import { defineComponent } from "vue";
export default defineComponent({
    props:{
        username:String,
        password:String,




    }

})
</script>

<style>
.form {
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
.info-link {
  margin: 0 0 0.5em 1em;
}

label {
  text-align: left;
  display: inline-block;
  font-size: 24px;
}

.container-btns {
  display: flex;
}
.btn {
  width: 50%;
  padding: 0.75em;
  margin-left: 1em;
}

.error-msg {
  color: black;
  margin: 0 1em 2em 2em;
  font-size: 20px;
}
</style> -->
