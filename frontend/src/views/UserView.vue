<template>
  <div class="container-guest-view">
    <input
      placeholder="Search book..."
      class="input input-search"
      type="text"
      v-model="userInput"
    />
    <div v-if="bookList.length !== 0">
      <table class="table-book-list">
        <tr>
          <th>Book title</th>
          <th>Book author</th>
          <th>Availability</th>
          <th>Order</th>
        </tr>
        <tr v-for="book in displayBooks" :key="book.title">
          <td>{{ book.title }}</td>
          <td>{{ book.author }}</td>
          <td>{{ book.quantity }}</td>
          <td>
            <div class="container-place-order">
              <BaseButton
                class="btn-icon"
                btn-text="-"
                @click="book.purchased--"
              />
              <p>{{ book.purchased }}</p>
              <BaseButton
                class="btn-icon"
                btn-text="+"
                @click="book.purchased++"
              />
              <BaseButton
                class="btn-order"
                btn-text="Order"
                @click="placeOrder(book.title, book.purchased)"
              />
            </div>
          </td>
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
import jwtService from "@/service/jwtService";

// Components
import BaseButton from "@/components/BaseButton.vue";
export default defineComponent({
  name: "GuestView",
  components: { BaseButton },
  data() {
    return {
      userInput: "",
      bookList: [] as Book[],
      displayBooks: [] as Book[],
      timer: 0,
    };
  },
  async created() {
    this.bookList = await bookService.getBooks();
    this.bookList.forEach((book) => (book.purchased = 0));
    this.displayBooks = this.bookList;
  },
  watch: {
    userInput() {
      this.renderTimer();
    },
  },
  methods: {
    async placeOrder(title: string, purchased: number) {
      await bookService.orderBooks(title, purchased);
      this.refreshPage();
    },
    refreshPage(){
      this.$router.go(0);
    },
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

p {
  font-size: 30px;
}

a {
  text-decoration: none;
  font-size: 40px;
  color: rgb(69, 67, 67);
}
.container-place-order {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
</style>
