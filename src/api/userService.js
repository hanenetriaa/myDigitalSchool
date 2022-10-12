import http from "./axios";

export default function userService() {
const login = (data) => {
    return http.post("/login", data);
  };
export default {
    login,
   };
}
  