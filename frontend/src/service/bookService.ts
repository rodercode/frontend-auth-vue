import axios from "axios";
import { Book } from "@/model/book";
import jwtService from "./jwtService";

export default {
  async getBooks(): Promise<Book[]> {
    const url = "http://localhost:8000/library/books";
    const res = await axios.get(url);
    return res.data.books;
  },
  async orderBooks(title: string, purchased: number) {
    const url = "http://localhost:8000/library/user/books";
    await axios.post(url, { title: title, quantity: purchased });
    return "User has placed an order!";
  },
};