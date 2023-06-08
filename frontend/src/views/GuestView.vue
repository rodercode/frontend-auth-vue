<template>
  <div class="container-guest-view">
    <input
      placeholder="Search book..."
      class="input-search"
      type="text"
      v-model="userInput"
    />
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
</template>
<script lang="ts">
import { defineComponent } from "vue";
import { Book } from "@/model/book";
import axios from "axios";
import fetchService from "@/service/fetchService";
import { tSExpressionWithTypeArguments } from "@babel/types";
export default defineComponent({
  name: "GuestView",
  data() {
    return {
      userInput: "",
      bookList: [] as Book[],
      displayBooks: [] as Book[],
    };
  },
  async mounted() {
    this.bookList = await fetchService.getBooks();
    this.displayBooks = this.bookList;
  },
  watch: {
    userInput() {
      this.displayBooks = this.bookList.filter((book) => {
        book.title.includes(this.userInput);
      });
    },
  },
});
</script>

<style scoped>
.container-guest-view {
  margin: 0 4em;
}

.input-search:focus::placeholder {
  color: transparent;
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
