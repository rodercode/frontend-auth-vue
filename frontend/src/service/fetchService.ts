import { Book } from "@/model/book";
import axios from "axios";
export default {
  async getBooks(): Promise<Book[]> {
    const url = "http://localhost:8000/library/books";
    const res = await axios.get(url);
    return res.data.books;
  },
};
