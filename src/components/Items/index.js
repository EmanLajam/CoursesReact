import React, {Component} from 'react';
import ItemsList from '../ItemsList/ItemsList';


class Items extends Component {
    state = {
        items : [
          {id: 1 ,img:'/img/java.jpg', title: "Java Course", startDate:"5/10/2022", endDate:"25/10/2022"},
          {id: 2 ,img:'/img/python.png', title: "Python Course", startDate:"4/10/2022", endDate:"15/10/2022"},
          {id: 3 ,img:'/img/php.png', title: "Php Course", startDate:"2/10/2022", endDate:"20/10/2022"},
          {id: 4 ,img:'/img/asp.png', title: "Asp.Net Course", startDate:"2/11/2022", endDate:"20/11/2022"},,
        
        ]
      }
    render(){
   return (
        <div>
            <ItemsList items={this.state.items}/>
        </div>
        
    )
}}

export default Items;