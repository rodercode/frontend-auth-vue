export default {
  // Save data to local storage
  setLocal(key: string, data: Token): void {
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
  clearLocal(key: string): void {
    localStorage.setItem(key, JSON.stringify(""));
  },
};
