import React, { useContext } from 'react';
import './style.css';
import {useRef, useState, useEffect} from 'react';
import AuthContext from '../services/logService';
import axios from '../api/axios';
import { BrowserRouter as Router, Link } from "react-router-dom";
import userService from '../api/userService';
const LOGIN_URL='/auth';



export default function Connexion() {
const Login = () => {
  const [Data, SetData] = useState({});
  const OnchangeHandler = (e) => {
    SetData({
      ...Data,
      [e.target.name]: e.target.value,
    });
    console.log(Data);
  };


    const{setAuth}=useContext(AuthContext);
    const userRef= useState();
    const errRef= useState();

    const[user,setUser] = useState('');
    const[pwd,setPwd] = useState('');
    const[errMsg,setErrMsg] = useState('');
    const[success,setSuccess] = useState(false);

   
    useEffect(()=> {
      userRef.current.focus();
  
    }, [])

    useEffect(()=> {
      setErrMsg('');
  
    }, [user,pwd]);




  
    const handleSubmit = async (e) =>{
      e.preventDefault();
      try{
      const response = await axios.post
      (LOGIN_URL, JSON.stringify({userName: user, pwd }),
      {
        headers : {'Content-Type' : 'application/json'},
        withCredentials:true
      });
      console.log(JSON.stringify(response?.data))
      const accessToken = response?.data?.accessToken;
      const roles = response?.data?.roles;
      setAuth({user, pwd, roles, accessToken});
      setUser('');
      setPwd('');
      setSuccess(true);
      }catch(err){
if(!err?.response){
  setErrMsg('Pas de réponse du serveur sorry')
        }else if (err.response?.status===400){
            setErrMsg('Pas de prénom ou de mot de passe reçu sorryyyyy')
        }else if (err.response?.status===401) {
            setErrMsg('Pas de permis ici')
        }else {
            setErrMsg('Login échoué')
              }
        errRef.current.focus();
                  }         
                                      }


  return (


      <>
      {success ? (
        <h1> You are logged in </h1>
      ):(

        
    <div>
  <p ref={errRef} className={errMsg ? "errmsg" : "offscreen"} aria-live="assertive">
    {errMsg} </p>
    <h1>Connectez-vous</h1>
    <form onSubmit={handleSubmit}>
        <label htmlFor='email'>
            <div>Mon mail</div>
            <input type="email" id="email" ref={userRef} autoComplete="off" onChange={OnchangeHandler} value={user} required/>
        </label>
        <label htmlFor='password' id="password">
            <div>Mon mail</div>
            <input type="password" id="password" onChange={OnchangeHandler} value={pwd} required/>
        </label>
    </form>
 <button type ="submit">Connexion</button>
 { <div>  <Link to={`./register`}>Inscrivez-vous  </Link></div> }
      
    </div>
      )}
      </>
  )
}
