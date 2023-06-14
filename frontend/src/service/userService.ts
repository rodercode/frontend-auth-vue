import tokenAxios from "@/interceptor/tokenAxios";
import { User } from "@/model/user";

export default {
  async getUser(): Promise<User> {
    const url = "http://localhost:8000/library/profile";
    const res = await tokenAxios.get(url);
    return res.data.user;
  },

  async getUserList(): Promise<User[]> {
    const url = "http://localhost:8000/admin/users";
    const res = await tokenAxios.get(url);
    return res.data.users;
  },
};
