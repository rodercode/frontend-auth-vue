import cacheService from "./cacheService";
export default {
  // Save jwt in local storage
  setJwt(key: string, token: string): void {
    cacheService.setLocal(key, token);
  },
  // Get jwt from local storage
  getJwt(key: string): string {
    return cacheService.getLocal(key);
  },
  //
  deleteJwt(key: string): void {
    cacheService.clearLocal(key);
  },

  getProp(propName: string): string {
    // get Token from local storage
    const token = this.getJwt("jwt");

    // Seprate three parts of jwt to a parts array
    const parts = token.split(".");

    // Decode payload
    const payload = JSON.parse(atob(parts[1]));

    // return payload
    return payload[propName];
  },
};
