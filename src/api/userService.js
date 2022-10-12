import http from "./axios";

export default function userService() {

const Login = (data) => {
    return http.post("/login", data);
  };

export default {
    Login,
   };
}
  