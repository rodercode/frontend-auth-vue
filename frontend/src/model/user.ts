import { Book } from "./book";

export interface User {
  username: string;
  password: string;
  role: string;
  purchases: Array<Book>;
}
