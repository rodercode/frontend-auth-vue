<!-- 
 * Creator: Marcus Groth
 * Date: 14e June
 * This is guest view component no Authorization is needed to view books
 -->

<template>
  <div class="guest-view">
    <header>
      <BaseHeader role="guest" btnName="Sign in" />
    </header>
    <main>
      <BaseInput
        class="input-search"
        textType="type"
        placeholderValue="Enter a book title..."
        v-model="userInput"
      />
      <BookTableGuest :userInput="userInput" />
    </main>
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";

// Components imports
import BaseInput from "@/components/base/BaseInput.vue";
import BaseHeader from "@/components/base/BaseHeader.vue";
import BookTableGuest from "@/components/table/book-table/BookTableGuest.vue";

export default defineComponent({
  name: "GuestView",
  components: { BaseInput, BaseHeader, BookTableGuest },
  data() {
    return {
      userInput: "" as string,
    };
  },
});
</script>

<style scoped>
main {
  margin: 4em 4em 0em 4em;
}
</style>
