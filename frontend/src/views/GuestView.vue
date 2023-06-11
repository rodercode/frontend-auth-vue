<template>
  <div class="container-guest-view">
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
</template>
<script lang="ts">
import { defineComponent } from "vue";
import { Book } from "@/model/book";
import axios from "axios";
import bookService from "@/service/bookService";
// Components
import BaseInput from "@/components/BaseInput.vue";
export default defineComponent({
  name: "GuestView",
  components: { BaseInput },
  data() {
    return {
      userInput: "",
      bookList: [] as Book[],
      displayBooks: [] as Book[],
      timer: 0,
    };
  },
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
    renderBooks() {
      this.displayBooks = this.bookList.filter((book) =>
        book.title.includes(this.userInput)
      );
    },
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
.container-guest-view {
  margin: 0 4em;
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
