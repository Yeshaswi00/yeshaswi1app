import logo from './logo.svg';
import './App.css';
import React from 'react';
import axios from "axios";
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import Cocktail from './Cocktail';
import Address from './Address';


function App() {

  return (
    <div>
   <Cocktail></Cocktail>
   <Address></Address>
    </div>
    
  );
}

export default App;
