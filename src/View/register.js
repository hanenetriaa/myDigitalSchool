import React from 'react';
import './style.css';
import {useState} from 'react';
import Swal from "sweetalert2";
import { Link } from "react-router-dom";
// import { Form } from 'react-router-dom';
import {register} from '../api/userService';

const Register = () => {
    const [Data, SetData] = useState({});
    const OnchangeHandler= (e) =>{
        SetData({
            ...Data,
            [e.target.name]:e.target.value
        });
        console.log(Data);
    };
    const onSubmitHandler= (e) => {
        e.preventDefault();
        const formdata= new FormData();
        formdata.append("nom",Data.nom);
        formdata.append("prenom",Data.prenom);
        formdata.append("email",Data.email);
        formdata.append("password",Data.password);
        formdata.append("tel",Data.tel);
        Swal.fire({
            title: "Register",
            showDenyButton: true,
            confirmButtonText: "register",
            denyButtonText: "cancel",
          }).then((result) => {
            /* Read more about isConfirmed, isDenied below */
            if (result.isConfirmed) {
                register(Data)
                .then((res) => {
                  console.log(res);
                })
                .catch((err) => {
                  Swal.fire({
                    title: "Error",
                    icon: "error",
                  });
                  console.log(err);
                });
              Swal.fire("Register!", "", "success");
            } else if (result.isDenied) {
              Swal.fire("Changes are not saved", "", "info");
            }
          });

    };
    return (
        
        <div className='section-body bg-blue'>
        <h1 className='title-formations deux'>Inscrivez-vous</h1>
        
        <form onSubmit={onSubmitHandler} className="form">
        <section className='img-register'></section>
        <section className='form-input'>
        <label htmlFor='nom' className='form-input'>
                <div>Mon Nom</div>
                <input type="nom" id="nom" name="nom" autoComplete="off" onChange={OnchangeHandler}  placeholder="Marie" required/>
            </label>
            <label htmlFor='prenom' className='form-input'>
                <div>Mon Prénom</div>
                <input type="prenom" id="prenom" name="prenom" autoComplete="off" onChange={OnchangeHandler}  placeholder="Espinosa" required/>
            </label>
            <label htmlFor='email' className='form-input'>
                <div>Mon mail</div>
                <input type="email" id="email" name="email" autoComplete="off" onChange={OnchangeHandler}  placeholder="marie.espinosa@gmail.com" required/>
            </label>
            <label htmlFor='password' id="password" className='form-input'>
                <div>Mon mot de passe</div>
                <input type="password" id="password" name="password" onChange={OnchangeHandler}  placeholder="Password" required/>
            </label>
            <label htmlFor='tel' className='form-input'>
                <div>Mon numéro de téléphone</div>
                <input type="tel" id="tel" name="tel" autoComplete="off" onChange={OnchangeHandler}  placeholder="numéro de téléphone" required/>
            </label><br/>
            <button type ="submit">Inscription</button><br/>
            <div>  <Link to={`/`}>déja inscrit ? connectez-vous  </Link></div> 
            </section>
            
        </form>
     
     
          
        </div>
        
      )};

export default Register;