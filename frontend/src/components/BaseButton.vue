<template>
  <button>{{ btnText }}</button>
</template>

<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  props: {
    btnText: String,
  },
});
</script>

<style scoped>
/* General style button */
.btn {
  border-radius: 8px;
  border: 1px solid black;
}

/*Style for form buttons  */
.btn-form {
  width: 50%;
  padding: 0.75em;
  margin-left: 1em;
}

/* Styling for order button */
.btn-order {
  padding: 0.1em 0.4em;
  background-color: grey;
  color: #fff;
  font-size: 30px;
}

/* Styling for plus and minus icon buttons */
.btn-icon {
  font-size: 25px;
  padding: 0.25em;
  background: grey;
  color: #fff;
}

/* Styling for Sign out button at the top corner */
.btn-sign-out {
  font-size: 35px;
  padding: 0.1em 0.4em;
}

/* Styling action button */
.btn-edit {
  font-size: 30px;
  padding: 0.1em 0.4em;
  background: grey;
  color: #fff;
}

/* Styling delete button */
.btn-delete {
  font-size: 30px;
  padding: 0.1em 0.4em;
  background: rgb(197, 192, 192);
}

/* Styling add book button */

.btn-add-book {
  font-size: 20px;
  background: grey;
  color: #fff;
  padding: 0.75em 4em;
  margin-bottom: 0.5em;
}

/* Styling tab button */
.btn-tab {
  font-size: 20px;
  padding: 1em 2.5em;
  color: #fff;
  background: rgb(197, 192, 192);
}

.btn-tab:disabled {
  color: #fff;
  background-color: rgb(80, 77, 77);
}
</style>
