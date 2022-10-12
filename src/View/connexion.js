import React from 'react';
import './style.css';
import {useState} from 'react';
import Swal from "sweetalert2";
import { BrowserRouter as Router, Link } from "react-router-dom";
import {login} from '../api/userService';

const Connexion = () => {
  const [Data, SetData] = useState({});
  const OnchangeHandler = (e) => {
    SetData({
      ...Data,
      [e.target.name]: e.target.value,
    });
    console.log(Data);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    Swal.fire({
      title: "Login",
      showDenyButton: true,
      confirmButtonText: "login",
      denyButtonText: `cancel`,
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        login(Data)
          .then((res) => {
            console.log(res);
            localStorage.setItem("email", JSON.stringify(res.data));
          })
          .catch((err) => {
            Swal.fire({
              title: "Error Account",
              icon: "error",
            });
            console.log(err);
          });
        Swal.fire("Login!", "", "success");
      } else if (result.isDenied) {
        Swal.fire("Changes are not saved", "", "info");
      }
    });
  };
  return (
        
    <div className="body">
    <h1>Connectez-vous</h1>
    <form onSubmit={handleSubmit}>
        <label htmlFor='email'>
            <div>Mon mail</div>
            <input type="email" id="email" name="email" autoComplete="off" onChange={OnchangeHandler}  placeholder="marie.espinosa@gmail.com" required/>
        </label>
        <label htmlFor='password' id="password">
            <div>Mon mot de passe</div>
            <input type="password" id="password" name="password" onChange={OnchangeHandler}  placeholder="Password" required/>
        </label>
        <button type ="submit">Connexion</button>
    </form>
 
 {/* { <div>  <Link to={`./register`}>Inscrivez-vous  </Link></div> } */}
      
    </div>
    
  )};
export default Connexion;
