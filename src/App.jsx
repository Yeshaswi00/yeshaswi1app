import logo from './logo.svg';
import './App.css';

import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import Todoo from './Todoo';
import Todolist from './Todolist';
import Todolist1 from './Todolist1';
import Todolist2 from './Todolist2';
import Tododone from './Tododone';

import Counter from'./Counter';

function App() {
  
  return (
    <div>
      
   {/* <Todoo></Todoo>
    <Todolist1></Todolist1>
   
    <Counter></Counter>
      <h1>Indian Teams</h1>*/}

      <Todolist2 title='Mumbai Indians' players={['Rohit','Surya','kishan','bhumra','david']}></Todolist2>
      <Todolist2 title='Sunrises Hyderabad' players={['williansom','manish','bhumvi','warner','karan']}></Todolist2>
      <Todolist2 title='Chennai superkings' players={['Dhoni','raina','jadeja','warner','karan']}></Todolist2>
      <Todolist2 title='Royal Challengers Banglore' players={['williansom','manish','bhumvi','warner','karan']}></Todolist2>
      
     {/*Todolist1></Todolist1>
      <Tododone></Tododone> */}
  
     
      
    </div>
  );
}

export default App;
