<!-- 
 * Creator: Marcus Groth
 * Date: 14e June
 * This is Admin book view where an admin can add, edit, delete and order a book.
 -->

<template>
  <div class="container">
    <BaseHeader
      :username="user.username"
      :role="user.role"
      btnName="Sign out"
    />
    <PopupWindowEdit
      @cancelPopupWindow="cancelPopup"
      v-if="popupEdit == true"
      @sendBookDetails="updateBook"
    />
    <PopupWindowAdd
      @cancelPopupWindow="cancelPopup"
      v-if="popupAdd == true"
      @sendBookDetails="addBook"
    />
    <PopupWindowDelete
      @cancelPopupWindow="cancelPopup"
      v-if="popupDelete == true"
    />

    <div class="admin">
      <div class="container-upper">
        <input
          placeholder="Search book..."
          class="input input-search"
          type="text"
          v-model="userInput"
        />
        <BaseButton
          class="btn btn-add-book"
          btn-text="Add new book"
          @click="handleAddButton"
        />
        <div class="container-btns-tab">
          <BaseButton
            class="btn-tab"
            btn-text="Books"
            :disabled="{ name: 'AdminBookView' }"
          />
          <BaseButton
            class="btn-tab"
            btn-text="Users"
            @click="$router.push('/admin/users')"
          />
        </div>
      </div>

      <div v-if="bookList.length !== 0">
        <table class="table-book-list">
          <tr>
            <th>Book title</th>
            <th>Book author</th>
            <th>Availability</th>
            <th>Order</th>
            <th>Action</th>
          </tr>
          <tr v-for="book in displayBooks" :key="book.title">
            <td>{{ book.title }}</td>
            <td>{{ book.author }}</td>
            <td>{{ book.quantity }}</td>
            <td>
              <div class="container-place-order">
                <BaseButton
                  class="btn btn-icon"
                  btn-text="-"
                  @click="book.purchased--"
                />
                <p>{{ book.purchased }}</p>
                <BaseButton
                  class="btn btn-icon"
                  btn-text="+"
                  @click="book.purchased++"
                />
                <BaseButton
                  class="btn btn-order"
                  btn-text="Order"
                  @click="handleOrderButton(book.title, book.purchased)"
                />
              </div>
            </td>
            <td>
              <div class="container-btns-action">
                <BaseButton
                  class="btn btn-action"
                  btn-text="Edit"
                  @click="handleEditButton(book.title)"
                />
                <BaseButton
                  class="btn btn-action"
                  btn-text="Delete"
                  @click="handleDeleteButton"
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
import {Previous} from "@/model/previous";
import {Current} from "@/model/current";

// Service imports
import bookService from "@/service/bookService";
import jwtService from "@/service/jwtService";
import userService from "@/service/userService";

// Components imports
import BaseButton from "@/components/base/BaseButton.vue";
import BaseHeader from "@/components/base/BaseHeader.vue";
import PopupWindowDelete from "@/components/popup/PopupWindowDelete.vue";
import PopupWindowEdit from "@/components/popup/PopupWindowEdit.vue";
import PopupWindowAdd from "@/components/popup/PopupWindowAdd.vue";

export default defineComponent({
  name: "AdminBookView",
  components: {
    BaseButton,
    BaseHeader,
    PopupWindowDelete,
    PopupWindowEdit,
    PopupWindowAdd,
  },
  data() {
    return {
      userInput: "",
      bookList: [] as Book[],
      displayBooks: [] as Book[],
      timer: 0,
      token: jwtService.getJwt("jwt"),
      user: {} as User,
      popupDelete: false,
      popupEdit: false,
      popupAdd: false,
      previous: {} as Previous, 
    };
  },
  // Handle promise from book service and user service
  created() {
    this.getBookList();
    this.getUser();
  },
  watch: {
    userInput() {
      this.renderTimer();
    },
  },
  methods: {
    // Make an order to the backend
    handleOrderButton(title: string, purchased: number) {
      this.orderBook(title, purchased);
      this.getBookList();
      this.refreshPage();
    },
    handleAddButton() {
      this.popupAdd = true;
    },

    handleEditButton(title:string) {
      this.previous.title = title;
      this.popupEdit = true;
    },

    handleDeleteButton() {
      this.popupDelete = true;
    },

    async getBookList(){
      this.bookList = await bookService.getBooks();
      this.bookList.forEach((book) => (book.purchased = 0));
      this.displayBooks = this.bookList;
    },
    async getUser(){
      this.user = await userService.getUser();
    },

    async orderBook(title: string, purchased: number) {
      await bookService.orderBooks(title, purchased);
    },
    async addBook(book: Book) {
      await bookService.addBook(book);
      this.getBookList();
      this.popupAdd = false;
    },

    async updateBook(current:Current){
      await bookService.updateBook(this.previous, current);
      this.getBookList();
      this.popupEdit=false;
    },

    cancelPopup() {
      this.popupAdd = false;
      this.popupEdit = false;
      this.popupDelete = false;
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

    // Will start a render timer when user stop typingS
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
.admin {
  margin: 4em 4em 0em 4em;
}

.container-upper {
  display: flex;
  justify-content: space-between;
}

.input-search {
  font-size: 18px;
  margin: 0 0 0.5em 2em;
  padding: 1em 1em 0.75em 1em;
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
.container-btns-action {
  display: flex;
  gap: 1em;
}
</style>
