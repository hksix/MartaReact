import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

// import MartaDashboard from './MartaDashboard.js';
import FilterableProductTable from './MartaDashboard.js';
var data=[{}]
var PRODUCTS = [
  {category: 'Sporting Goods', price: '$49.99', stocked: true, name: 'Football'},
  {category: 'Sporting Goods', price: '$9.99', stocked: true, name: 'Baseball'},
  {category: 'Sporting Goods', price: '$29.99', stocked: false, name: 'Basketball'},
  {category: 'Electronics', price: '$99.99', stocked: true, name: 'iPod Touch'},
  {category: 'Electronics', price: '$399.99', stocked: false, name: 'iPhone 5'},
  {category: 'Electronics', price: '$199.99', stocked: true, name: 'Nexus 7'}
]; 
const getMartaData = (cb) =>{
  fetch('http://developer.itsmarta.com/RealtimeTrain/RestServiceNextTrain/GetRealtimeArrivals?apikey=2c514350-0c26-47dd-b872-7936af81c8e1', {
      method: 'get'
  }).then(function(response) {
      return response.json()
  }).then(function(jsonData) {
      // console.log(jsonData);
      
      cb(jsonData);
      data.push(jsonData)
      // console.log(jsonData)
      
      
  }).catch(function(err) {
      // Error :(
  });
}
{getMartaData((jsonData)=>{
  jsonData.forEach(function(element) {
  })
})}
console.log(data)

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        {/* <MartaDashboard /> */}
        
    <FilterableProductTable products={PRODUCTS} />

  );
      </div>
    );
  }
}

export default App;
