/**
 * Creator: Marcus Groth
 * Date: 14e June
 * info: This file is a book service has all methods that send book related request to the backend like: get, order, add and update books
 */

import axios from "axios";
import { Book } from "@/model/book";
import tokenAxios from "@/interceptor/tokenAxios";
import { Previous } from "@/model/previous";
import { Current } from "@/model/current";

export default {
  // Get a list of all books
  async getBooks(): Promise<Book[]> {
    const url = "http://localhost:8000/library/books";
    const res = await axios.get(url);
    return res.data.books;
  },

  // Allow user to make an order of books
  async orderBooks(title: string, purchased: number): Promise<string> {
    const url = "http://localhost:8000/library/user/books";
    await tokenAxios.post(url, { title: title, quantity: purchased });
    return "User has placed an order!";
  },

  // Allow admin to add new book to the system
  async addBook(book: Book): Promise<void> {
    const url = "http://localhost:8000/admin/books";
    const res = await tokenAxios.post(url, book);
    console.log(res.data.message);
  },

  async updateBook(previous: Previous, current: Current): Promise<void> {
    const url = "http://localhost:8000/admin/books";
    const res = await tokenAxios.put(url, { previous, current });
    console.log(res.data.message);
  },

  async deleteBook(title: string): Promise<void> {
    const url = "http://localhost:8000/admin/books/";
    const config = {
      data: {
        title: title,
      },
    };

    const res = await tokenAxios.delete(url, config);
    console.log(res.data.message);
  },
};
