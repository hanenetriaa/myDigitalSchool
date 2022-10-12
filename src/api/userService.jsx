import http from "./axios";


const login = (data) => {
    return http.post("/login", data);
  };

  const register = (data) => {
    return http.post("/register", data);
  };

  const update = (data) => {
    return http.post("/register", data);
  };

  const getUser = (data) => {
    return http.post("/register", data);
  };
  export {login, register, update, getUser};

  
