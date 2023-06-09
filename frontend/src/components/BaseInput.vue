<template>
  <input
    :type="textType"
    :value="modelValue"
    @input="$emit('update:modelValue', $event.target.value)"/>
  />
</template>

<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  props: {
    textType:String,
    modelValue: String,
  },
});
</script>
