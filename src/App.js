import './App.css';
import Connexion from "./View/connexion";

// import {Routes,Route,BrowserRouter as Router,Switch} from 'react-router-dom'
import { Routes, Route} from "react-router-dom";
import Register from './View/register';
import Profile from './View/profile';

function App() {
  

  return (
    <div className='App'>
      
      <Routes>
        <Route path="/" element={<Connexion />} />
        <Route path="/register" element={<Register />} />
        <Route path="/profile" element={<Profile />} />
  
      </Routes>
    </div>
  );
}

export default App;