import './App.css';
import Connexion from "./View/connexion";

// import {Routes,Route,BrowserRouter as Router,Switch} from 'react-router-dom'
import { Routes, Route} from "react-router-dom";
import Register from './View/register';
import Profile from './View/profile';
import Header from './View/header';
import MDS from './View/MDS';
import Footer from './View/footer';

function App() {
  

  return (
    <div className='App'>
      <header>
 <Header></Header>
      </header>
      <Routes>
        <Route path="/" element={<Connexion />} />
        <Route path="/register" element={<Register />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/home" element={<MDS />} />
  
      </Routes>

      <Footer></Footer>

      
    </div>
  );
}

export default App;