import React from 'react'
import './ItemsList.css';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const ItemsList = props => {
    const {items} = props;
    const TheItem = items.map( (item) => {
        return (
            <div key={item.id} className="d-flex justify-content-center">
               
        <Card className='cardBody' style={{ width: '18rem', margin:'15px',border: 'solid 2px  rgb(248, 183, 152)'}}>
      <Card.Img variant="top" src={item.img} />
      <Card.Body>
        <Card.Title style={{fontSize:'2rem'}}>{item.title}</Card.Title>
        <Card.Text> 
         <p className='txt'>Start Date</p> {item.startDate} <p  className='txt'>To</p> {item.endDate}
        </Card.Text>
        <Button className='btn'>More information</Button>
      </Card.Body>
    </Card>

                

            </div>
        )
    })
    return(
        <div>
            {TheItem}
        </div>
    )
      
}
export default ItemsList;