/**
 * Creator: Marcus Groth
 * Date: 14e June
 * info: This file is a jwt service that passing jwt key forward to the cache service and also able to decode jwt
 */

import cacheService from "./cacheService";
import { Token } from "@/model/token";

export default {
  setJwt(key: string, token: Token): void {
    cacheService.setLocal(key, token);
  },

  getJwt(key: string): Token {
    return cacheService.getLocal(key);
  },

  deleteJwt(key: string): void {
    cacheService.setLocal(key, "");
  },

  // Decode jwt
  decodeJwt(token: Token) {
    const parts = token.accessToken.split(".");
    return JSON.parse(atob(parts[1]));
  },
};
