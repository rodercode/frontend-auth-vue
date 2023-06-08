export default {
  setLocal(key: string, data: any): void {
    localStorage.setItem(key, JSON.stringify(data));
  },
  getLocal(ref: string) {
    const item = localStorage.getItem(ref) || "{}";
    return JSON.parse(item);
  }
};
