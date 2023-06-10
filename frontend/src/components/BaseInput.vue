<template>
  <input
    :type="textType"
    :placeholder="placeholderValue"
    :value="modelValue"
    @input="$emit('update:modelValue', $event.target.value)"
  />
</template>

<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  props: {
    textType: String,
    placeholderValue: String,
    modelValue: String,
  },
});
</script>

<style scoped>
/* Styling for username and password input field */
.input {
  width: 100%;
  padding: 1em;
}
.input:focus::placeholder {
  color: transparent;
}

/* Styling for search input field */
.input-search {
  font-size: 18px;
  padding: 1em 1em 0.75em 1em;
  margin: 0 0 0.5em 2em;
  border-radius: 8px;
  border: 1px solid black;
  width: 27%;
}

.input-search:focus::placeholder {
  color: transparent;
}
</style>
