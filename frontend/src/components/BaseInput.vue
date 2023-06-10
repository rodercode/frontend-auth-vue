<template>
  <div>
    <input
      class="input"
      :type="textType"
      :placeholder="placeholderValue"
      :value="modelValue"
      @input="$emit('update:modelValue', $event.target.value)"
    />
  </div>
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
.input {
  width: 100%;
  padding: 1em;
}

.input:focus::placeholder {
  color: transparent;
}
</style>
