/**
 * Creator: Marcus Groth
 * Date: 14e June
 * info: This is a User model
 */

import { Book } from "./book";
export interface User {
  username: string;
  password: string;
  role: string;
  purchases: Array<Book>;
}
