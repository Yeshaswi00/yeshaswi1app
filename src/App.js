import logo from './logo.svg';
import './App.css';

import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import Todoo from './Todoo';
import Todolist1 from './Todolist1';

import Counter from'./Counter';

function App() {
  
  return (
    <div>
      
    <Todoo></Todoo>
    <Todolist1></Todolist1>
   
    <Counter></Counter>
  
     
      
    </div>
  );
}

export default App;
