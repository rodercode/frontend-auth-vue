/**
 * Creator: Marcus Groth
 * Date: 14e June
 * info: This file is a cache service that set, get or delete data in local storage
 */

export default {
  // Save data to local storage
  setLocal(key: string, data: any): void {
    if (data !== undefined) {
      localStorage.setItem(key, JSON.stringify(data));
    }
  },

  // Retrieve data from local storage
  getLocal(key: string) {
    const data = localStorage.getItem(key) || "{}";
    return JSON.parse(data);
  },

  // Clear local storage
  clearLocal(): void {
    localStorage.clear();
  },
};
