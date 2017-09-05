import React, {Component} from 'react';

const getMartaData = (cb) =>{
    fetch('http://developer.itsmarta.com/RealtimeTrain/RestServiceNextTrain/GetRealtimeArrivals?apikey=2c514350-0c26-47dd-b872-7936af81c8e1', {
        method: 'get'
    }).then(function(response) {
        return response.json()
    }).then(function(jsonData) {
        // console.log(jsonData);
        
        cb(jsonData);
        
        
    }).catch(function(err) {
        // Error :(
    });
}

class ProductCategoryRow extends React.Component {
    render() {
      return <tr><th colSpan="2">{this.props.category}</th></tr>;
    }
  }
  
  class ProductRow extends React.Component {
    render() {
      var name = this.props.product.stocked ?
        this.props.product.name :
        <span style={{color: 'red'}}>
          {this.props.product.name}
        </span>;
      return (
        <tr>
          <td>{name}</td>
          <td>{this.props.product.price}</td>
        </tr>
      );
    }
  }
  
  class ProductTable extends React.Component {
    render() {
      var rows = [];
      var lastCategory = null;
      this.props.products.forEach(function(product) {
        if (product.category !== lastCategory) {
          rows.push(<ProductCategoryRow category={product.category} key={product.category} />);
        }
        rows.push(<ProductRow product={product} key={product.name} />);
        lastCategory = product.category;
      });
      return (
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Price</th>
            </tr>
          </thead>
          <tbody>{rows}</tbody>
        </table>
      );
    }
  }
  
  class SearchBar extends React.Component {
    render() {
      return (
        <form>
          <input type="text" placeholder="Search..." />
          <p>
            <input type="checkbox" />
            {' '}
            Only show products in stock
          </p>
        </form>
      );
    }
  }
  
  class FilterableProductTable extends React.Component {
    render() {
      return (
        <div>
          <SearchBar />
          <ProductTable products={this.props.products} />
        </div>
      );
    }
  }
  






// class MartaDashboard extends Component{

//     constructor(props){
//         super(props);
//         this.state= {
//             martaData:[],
//             martaLocations :[],
//             martaLines:[] ,
//             martaDirections:[]
//         };
        
//     }

//     componentWillMount(){
//         let locations = []
//         this.setState({
//             martaLocations :locations
//         })
//         getMartaData((jsonData)=>{
//             jsonData.forEach(function(element) {
//                 locations.push(element.DESTINATION)
                
//             })
//         })
            
//     }
    

//     componentWillUnmount() {
//         clearInterval(this.martaDataGrabber);
//     }


//     render(){
//     console.log(this.martaLocations);
    
//         let martaLocations = Object.keys(this.state.martaLocations).map((key)=>{
//          return   console.log(key)
//             // console.log(data) <option>{data}</option>
//         })
//             return(
                
//                 <form>
//             <select  >
//                 {martaLocations} </select>
//             </form>
//             )
        
        
    

//         let martaOutput = this.state.martaData.map((data,idx)=> {
            
//         // return(
//         //     <div>
//         //     {this.state.MartaData}
//         //     <p>{data.LINE}</p>
//         //     </div>
//         // )
        
//         return(
            
//             <div>
//                 <p>Marta Dashboard: the Appening!</p>
//                 <div>
//                     {/* {martaData} */}
                
//                     {martaLocations}
//                     {martaOutput}                    
//                 </div>
//             </div>
//         )
    
//         }
    

//     // _getLocations = (jsonData)=>{
//     //         let locations =[];
//     //         jsonData.forEach(function(locas){
//     //             // console.log(locas);
//     //             locations.push(locas.DESTINATION);
//     //         });
//     //         // console.log(locations);
//     //     this.setState({
//     //         martaLocations:Object.assign({},locations)
//     //     });

//     // }
//     )
// }
//     _getInfo =(event)=>{
//         let infoOf = this.state.martaData[event.target.value]
//         this.setState({
//         martaData: infoOf})
//             return(
//                     <div>
//                         <div>
//                         <p>{this.DESTINATION}</p>
//                         <p>{this.DIRECTION}</p>
//                         <p>{this.EVENT_TIME}</p>
//                         <p>{this.LINE}</p>
//                         <p>{this.NEXT_ARR}</p>
//                         <p>{this.STATION}</p>
//                         <p>{this.TRAIN_ID}</p>
//                         <p>{this.WAITING_SECONDS}</p>
//                         <p>{this.WAITING_TIME}</p>
//                         </div>
//                     </div>
                
//         )
//     }

// }



export default FilterableProductTable;
// export default MartaDashboard; 

