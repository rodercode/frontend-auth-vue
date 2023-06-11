import axios from "axios";
import { Book } from "@/model/book";

export default {
  async getBooks(): Promise<Book[]> {
    const url = "http://localhost:8000/library/books";
    const res = await axios.get(url);
    return res.data.books;
  },

  orderBooks(title: string, purchased: number) {
    const url = "http://localhost:8000/library/user/books";
    axios.post(url);
    console.log("Book title: " + title);
    console.log("Purchased Books: " + purchased);
  },
};
