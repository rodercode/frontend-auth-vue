<!-- 
 * Creator: Marcus Groth
 * Date: 14e June
 * This is guest view component no Authorization is needed to view books
 -->

<template>
  <div class="guest-view">
    <header>
      <BaseHeader class="header-offline-state" />
    </header>
    <main>
      <BaseInput
        class="input-search"
        textType="type"
        placeholderValue="Enter a book title..."
        v-model="userInput"
      />
      <BookTable :userInput="userInput" />
    </main>
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";

// Components imports
import BaseInput from "@/components/BaseInput.vue";
import BaseHeader from "@/components/BaseHeader.vue";
import BookTable from "@/components/BookTable.vue";

export default defineComponent({
  name: "GuestView",
  components: { BaseInput, BaseHeader, BookTable },
  data() {
    return {
      userInput: "",
    };
  },
});
</script>

<style scoped>
main {
  margin: 4em 4em 0em 4em;
}
</style>
