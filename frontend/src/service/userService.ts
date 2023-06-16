/**
 * Creator: Marcus Groth
 * Date: 14e June
 * info: This file is a user service that is meant to send all sort of user request to the backend server.
 */

import tokenAxios from "@/interceptor/tokenAxios";
import { User } from "@/model/user";

export default {
  // Get User from backend
  async getUser(): Promise<User> {
    const url = "http://localhost:8000/library/profile";
    const res = await tokenAxios.get(url);
    return res.data.user;
  },

  // Get all user from backend
  async getUserList(): Promise<User[]> {
    const url = "http://localhost:8000/admin/users";
    const res = await tokenAxios.get(url);
    return res.data.users;
  },

  async promoteUser(username: string): Promise<void> {
    const url = "http://localhost:8000/admin/users";
    const res = await tokenAxios.put(url, username);
    console.log(res.data.message);
  },

  async deleteUser(username: string): Promise<void> {
    const url = "http://localhost:8000/admin/users";
    const config = {
      data: {
        username: username,
      },
    };

    const res = await tokenAxios.delete(url, config);
    console.log(res.data);
  },
};
