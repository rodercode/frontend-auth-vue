/**
 * Creator: Marcus Groth
 * Date: 14e June
 * info: This file is a book service that is meant to send all sort of book request to the backend server.
 */

import axios from "axios";
import { Book } from "@/model/book";
import tokenAxios from "@/interceptor/tokenAxios";

export default {
  // Get a list of all books
  async getBooks(): Promise<Book[]> {
    const url = "http://localhost:8000/library/books";
    const res = await axios.get(url);
    return res.data.books;
  },

  // Allow user to make an order of books
  async orderBooks(title: string, purchased: number) {
    const url = "http://localhost:8000/library/user/books";
    await tokenAxios.post(url, { title: title, quantity: purchased });
    return "User has placed an order!";
  },

  // Allow admin to add new book to the system
  async addBook(book: Book) {
    const url = "http://localhost:8000/admin/books";
    const res = await tokenAxios.post(url, book);
    console.log(res.data);
  },

  async updateBook(previous:{title:string}, current:Book){
    const url = "http://localhost:8000/admin/books";
    const res = await tokenAxios.patch(url, previous, current )
    console.log(res);
  }
};
