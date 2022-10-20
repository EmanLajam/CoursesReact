import React, {Component} from 'react';
import Items from './../Items';
import Footer from './../Footer';
import './index.css'


class Index extends Component {

  render(){
  return (
    <div className='App' >
      <h1 className='course'>The available courses</h1>
      <Items/>
      <Footer />
    </div>
  );}
}

export default Index;
