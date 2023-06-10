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
</style>
