import './App.css';
import Connexion from "./View/connexion";

// import {Routes,Route,BrowserRouter as Router,Switch} from 'react-router-dom'
import { Routes, Route} from "react-router-dom";

function App() {
  

  return (
    <div className='App'>
      
      <Routes>
        <Route path="/" element={<Connexion />} />
  
      </Routes>
    </div>
  );
}

export default App;