import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const players =['Tamim','Liton'];
  const products = [{name:'Photoshop', price:'$20'},
  {name:'After Effects', price:'$30'}];
  const productNames = products.map(product => product.name);  
  console.log(productNames);
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <p>My first REACT paragraph.....</p>
        <ul>
          {products.map(pd => <Product product = {pd}></Product>)}
        </ul>
        <ul>
          {
            players.map(player => <li>{player}</li>)
          }
          <li>
          {players[0]}
          </li>
        </ul>
        <Person name="Shakib al Hasan" role="all-rounder"></Person>
        <Person name={players[0]}></Person>
        <Product product={products[0]} ></Product>
        <Product product={products[1]} ></Product>
        <Counter></Counter>
        <Users></Users>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}
function Counter(){
  const [count,setCount] = useState(10);
  const handleIncrease =() => {
    const newCount = count +1 ;
    setCount(newCount);
  }
  
  return(
    <div>
      <h1>Count:{count}</h1>
      <button onClick={() => setCount(count -1)}>Decrease</button>
      <button onClick={handleIncrease}>Increase</button>
    </div>
  )
}

function Users(){
  const [users,setUsers] = useState([]);
  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(data => setUsers(data));

  }, [])
  return(
    <div>
      <h3>Dynamic Users: {users.length}</h3>
      <ul>
        {
          console.log(users)
        }
        {
          users.map(user => <li>{user.name}</li>)
        }
      </ul>
    </div>
  )
}

function Product(props){
  const productStyle={
    border: '1px solid gray',
    borderRadius: '5px',
    backgroundColor: 'lightgray',
    height: '200px',
    width: '200px',
    float: 'left'
  }
  const {name,price} = props.product;
  console.log(name,price);
  return(
    <div style={productStyle}>
      <h2>{name}</h2>
      <h5>{price}</h5>
      <button>Buy Now</button>

    </div>

  )
}
function Person(props){
  const personStyle={
    border: '5px solid red',
    margin: '10px'
  }
  return (
    <div style={personStyle}>
      <h1>Name: {props.name} </h1>
      <h3>Player of the year</h3>
      <h5>{props.role}</h5>
    </div>
  )
}
export default App;
