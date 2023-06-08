// // decoding and verifying jwt token
// import cacheService from "./cacheService";

// export default {
//   // save jwt in local storage
//   setJwt(key:string ,token: string): void {
//     cacheService.setLocal(key, token);
//   },

//   // get jwt from local storage
//   getJwt(key:string): string{
//     return cacheService.getLocal(key)
//   }

//   // delete jwt token
//   removeJwt(): void{
//     cacheService.storeLocal()
//   }

//   // clear jwt token from local storage
//   clearJwt(): void {
//     cacheService.storeLocal("jwt", "");
//   },

//   getProp(propName: string): string {
//     const token = this.fetchJwt();

//     // if token is empty return empty string
//     if (Object.keys(token).length === 0) return "";

//     // split token into parts => [header, payload, signature]
//     const parts = token.split(".");

//     // decode payload from base64 to string and convert it to JSON
//     const payload = JSON.parse(atob(parts[1]));

//     // return the value of the propName
//     return payload[propName];
//   },
// };
