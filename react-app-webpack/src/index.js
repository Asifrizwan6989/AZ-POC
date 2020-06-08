import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Home from './HomePage';

class App extends Component{
    constructor() {
        super();
        this.state={
            name: 'ReactJS',
            show: false,
            btnText:'Show'
        };

        }
        
        clickMe = ()=>{
              this.setState({show: !this.state.show, name: 'App.js'+name,btnText: 'Hide'})
                

        }
    
    render(){
     
        return(
            <div>
               
        <button id = "btn" onClick={this.clickMe}>{this.state.btnText}</button>
                {this.state.show &&
                <Home name={this.state.name}/>}
                
               
            </div>
        );
    }
}



ReactDOM.render(<App/>,document.getElementById('root'));
