import './App.css';
import { BrowserRouter ,Routes, Route } from 'react-router-dom';
import React, {Component} from 'react';
import Header from './components/Header';
import Index from './components/Index';
import Register from './components/Register';
import Login from './components/Login';

import 'bootstrap/dist/css/bootstrap.min.css';



class App extends Component {

  render(){
  return (
      <BrowserRouter>
      < Header />
      <Routes>
      <Route exact path='/' element={<Index />}/>
      <Route path='/register' element={<Register />}/>
      <Route path='/login' element={<Login />}/>

      </Routes>

      
      </BrowserRouter>
      
  );}
}

export default App;
