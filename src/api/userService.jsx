import http from "./axios";


const login = (data) => {
    return http.post("/login", data);
  };

  const register = (data) => {
    return http.post("/register", data);
  };

  
  const getProfileById = (id) => {
    return http.get(`/getProfile/${id}`);
  };

  const logout = (id) => {
    return http.get(`/logout/${id}`);
  };
  

  export {login, register, getProfileById, logout};

  
