import http from "./axios";


const login = (data) => {
    return http.post("/login", data);
  };

  const register = (data) => {
    return http.post("/register", data);
  };

  
  const getProfile = (id) => {
    return http.get(`/getProfile/${id}`);
  };
  export {login, register, getProfile};

  
