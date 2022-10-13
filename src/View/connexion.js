import React from 'react';
import './style.css';
import {useState} from 'react';
import Swal from "sweetalert2";
import {Link } from 'react-router-dom';
import {login} from '../api/userService';
import { useNavigate } from 'react-router-dom';

const Connexion = () => {
  const [Data, SetData] = useState({});
  const navigate = useNavigate();
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
            navigate("/home");
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
        
    <div className='section-body bg-blue'>
    <h1 className='title-formations deux'>Connectez-vous</h1>
    <form onSubmit={handleSubmit} className="form">
    <section className='img-connexion'></section>
    <section className='form-input'>
        <label className='form-input' htmlFor='email'>
            <div>Mon mail</div>
            <input type="email" id="email" name="email" autoComplete="off" onChange={OnchangeHandler}  placeholder="marie.espinosa@gmail.com" required/>
        </label>
        <label  className='form-input'htmlFor='password' id="password" >
            <div>Mon mot de passe</div>
            <input type="password" id="password" name="password" onChange={OnchangeHandler}  placeholder="Password" required/>
        </label>
        <button type ="submit">Connexion</button>
        <div>  <Link to={`./register`}> Inscrivez-vous  </Link></div> 
      </section>
    </form>
 
 </div>
    
  )};
export default Connexion;
