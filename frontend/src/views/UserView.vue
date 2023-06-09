<!-- 
 * Creator: Marcus Groth
 * Date: 14e June
 * This is user view where a user can order a book.
 -->

<template>
  <div class="container">
    <BaseHeader
      :username="user.username"
      :role="user.role"
      btnName="Sign out"
    />
    <div class="user">
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
                  :disabled="book.purchased === 0"
                  class="btn btn-icon"
                  btn-text="-"
                  @click="book.purchased--"
                />
                <p>{{ book.purchased }}</p>
                <BaseButton
                  :disabled="book.quantity === book.purchased"
                  class="btn btn-icon"
                  btn-text="+"
                  @click="book.purchased++"
                />
                <BaseButton
                  :disabled="book.quantity === 0 || book.purchased === 0"
                  class="btn btn-order"
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
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";

// Model imports
import { Book } from "@/model/book";
import { User } from "@/model/user";

// Service imports
import bookService from "@/service/bookService";
import jwtService from "@/service/jwtService";
import userService from "@/service/userService";

// Components imports
import BaseButton from "@/components/base/BaseButton.vue";
import BaseHeader from "@/components/base/BaseHeader.vue";

export default defineComponent({
  name: "GuestView",
  components: { BaseButton, BaseHeader },
  data() {
    return {
      userInput: "",
      bookList: [] as Book[],
      displayBooks: [] as Book[],
      timer: 0,
      token: jwtService.getJwt("jwt"),
      user: {} as User,
    };
  },

  // Handle promise from book service and user service
  async created() {
    this.bookList = await bookService.getBooks();
    this.bookList.forEach((book) => (book.purchased = 0));
    this.displayBooks = this.bookList;
    this.user = await userService.getUser();
  },
  watch: {
    userInput() {
      this.renderTimer();
    },
  },
  methods: {
    increase(purchased: number) {
      return purchased++;
    },

    // Make an order to the backend
    async placeOrder(title: string, purchased: number) {
      await bookService.orderBooks(title, purchased);
      this.refreshPage();
    },
    refreshPage() {
      this.$router.go(0);
    },

    // Render books that should be displayed
    renderBooks() {
      this.displayBooks = this.bookList.filter((book) =>
        book.title.includes(this.userInput)
      );
    },

    // Will start a render timer when user stop typing
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
.user {
  margin: 4em 4em 0em 4em;
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
  gap: 0.75em;
}
</style>
