import React from 'react';
import './style.css';
import {useRef, useState, useEffect} from 'react';

export default function Connexion() {
    const userRef = useRef();
    const errRef = useRef();

    const[user, setUser] = useState('');
    const[pwd, setPwd] = useState('');
    const[errMsg, setErrMsg] = useState('');
    const[success, setSuccess] = useState(false);

    useEffect(() => {
        userRef.current.focus();

    },[])

    useEffect(() => {
        setErrMsg('');

    },[user, pwd])
 
  return (
    <div>

    

    <h1>Connectez-vous</h1>
    <form action='' method='post'>
        <label htmlFor='email'>
            <div>Mon mail</div>
            <input type='email'></input>
        </label>
        <label htmlFor='password'>
            <div>Mon mail</div>
            <input type='password'></input>
        </label>
        <button>Connexion</button>
    </form>

      
    </div>
  )
}
