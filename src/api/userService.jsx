import http from "./axios";


const login = (data) => {
    return http.post("/login", data);
  };

  // const register = (data) => {
  //   return http.post("/register", data);
  // };
  export default login;

  
