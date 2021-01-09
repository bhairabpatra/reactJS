import React, {Component} from 'react';
import CreateStudent from "../CreateStudent/createStudent";
import './home.scss'
 
export default class home extends Component {

  constructor(){
    super();
    this.state= {
      name: "Bhairab chandra Patra"
    }
  }
 
  
render() {
      return ( 
         <div className="component-home">          
          <CreateStudent title={this.state.name} />
        </div>
        )
    }
  }
 
 

