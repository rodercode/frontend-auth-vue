<template>
  <button>{{ btnText }}</button>
</template>

<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  props: {
    btnText: String,
  },
  methods: {
    handleButton() {
      this.$emit("customMethod");
    },
  },
});
</script>

<style scoped>
/*Style for form buttons  */
.btn {
  width: 50%;
  padding: 0.75em;
  margin-left: 1em;
}

/* Styling for order button */
.btn-order {
  padding: 0.75em 2em;
  border-radius: 8px;
  border: 1px solid black;
  background-color: grey;
  color: #fff;
}

.btn-icon {
  font-size: 25px;
  padding: 0.25em;
  background: grey;
  color: #fff;
  border: 1px solid black;
}
</style>
