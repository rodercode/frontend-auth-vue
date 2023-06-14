<!-- 
 * Creator: Marcus Groth
 * Date: 14e June
 * This is guest view component no Authorization is needed
 -->

<template>
  <div class="container">
    <BaseHeader class="header-online-state" />
    <div class="guest-view">
      <BaseInput
        class="input-search"
        textType="type"
        placeholderValue="Enter a book title..."
        v-model="userInput"
      />
      <div v-if="bookList.length !== 0">
        <table class="table-book-list">
          <tr>
            <th>Book title</th>
            <th>Book author</th>
            <th>Availability</th>
          </tr>
          <tr v-for="book in displayBooks" :key="book.title">
            <td>{{ book.title }}</td>
            <td>{{ book.author }}</td>
            <td>{{ book.quantity }}</td>
          </tr>
        </table>
      </div>
      <div v-else>
        <h3>Loading books....</h3>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";

// Model imports
import { Book } from "@/model/book";

// Service imports
import bookService from "@/service/bookService";

// Components imports
import BaseInput from "@/components/BaseInput.vue";
import BaseHeader from "@/components/BaseHeader.vue";

export default defineComponent({
  name: "GuestView",
  components: { BaseInput, BaseHeader },
  data() {
    return {
      userInput: "",
      bookList: [] as Book[],
      displayBooks: [] as Book[],
      timer: 0,
    };
  },
  
  // Handle Promise from bookService
  async mounted() {
    this.bookList = await bookService.getBooks();
    this.displayBooks = this.bookList;
  },
  watch: {
    userInput() {
      this.renderTimer();
    },
  },
  methods: {
    // Render books that should be display
    renderBooks() {
      this.displayBooks = this.bookList.filter((book) =>
        book.title.includes(this.userInput)
      );
    },
    
    // Timer that render books when user stopped typing
    renderTimer() {
      clearTimeout(this.timer);
      this.timer = setTimeout(() => {
        this.renderBooks();
        console.log("rending");
      }, 1000);
    },
  },
});
</script>

<style scoped>
.guest-view {
  margin: 4em 4em 0 4em;
}

table {
  width: 100%;
}

th {
  font-size: 26px;
  text-align: center;
  padding: 1em;
  background: grey;
  color: #fff;
}

td {
  font-size: 22px;
  text-align: center;
  padding: 1em;
  background: rgb(188, 185, 185);
}
</style>
