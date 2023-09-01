import logo from './logo.svg';
import './App.css';
import React from 'react';
import axios from "axios";
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import Context from './Context';
import First from './First';


function App() {
  var [x,setX]=React.useState(330)
  return (
    <div>
   <Context.Provider value={x}/>
   <First x={x}></First>
    </div>
    
  );
}

export default App;
