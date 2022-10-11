import './App.css';
import Connexion from './connexion';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <header className="App-header">
       <Connexion></Connexion>
      </header>
      
    </div>
  );
}

export default App;
