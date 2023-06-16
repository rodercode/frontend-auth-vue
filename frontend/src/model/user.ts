/**
 * Creator: Marcus Groth
 * Date: 14e June
 * info: This is a User model that define the type of a user variable in the app
 */

import { Book } from "./book";
export interface User {
  username: string;
  password: string;
  role: string;
  purchases: Array<Book>;
}
