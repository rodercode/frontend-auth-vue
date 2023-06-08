<template>
  <div class="container-guest-view">
    <input placeholder="Search book..." class="input-search" type="text" />
    <table class="table-book-list">
      <tr>
        <th>Book title</th>
        <th>Book author</th>
        <th>Availability</th>
      </tr>
      <tr v-for="book in bookList" :key="book.title">
        <td>{{ book.title }}</td>
        <td>{{ book.author }}</td>
        <td>{{ book.quantity }}</td>
      </tr>
    </table>
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import { Book } from "@/model/book";
import axios from "axios";
export default defineComponent({
  name: "GuestView",
  data() {
    return {
      bookList: [] as Book[],
      book: {} as Book,
    };
  },
  mounted() {
    this.fetchBooks();
  },
  methods: {
    async fetchBooks() {
      const url = "http://localhost:8000/library/books";
      const res = await axios.get(url);
      this.bookList = res.data.books;
    },
  },
});
</script>

<style scoped>
.container-guest-view {
  margin: 0 4em;
}

.input-search {
  font-size: 18px;
  padding: 1em 1em 0.75em 1em;
  margin: 0 0 0.5em 2em;
  border-radius: 8px;
  border: 1px solid black;
  width: 27%;
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
