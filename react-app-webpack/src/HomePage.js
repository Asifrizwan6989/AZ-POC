import React from 'react';


let counter = 1;
export default class Home extends React.Component{


    constructor(props){
        super(props);
        this.state = {
            
        name: this.props.name
    };
    console.log('constructor:'+ counter);

}

clickMe = () =>{
    const name = Math.random();
    this.setState({name: 'Home.js'+ name});
}
static getDerivedStateFromProps(props,state){
    counter++;
    console.log('getDerivedStateFromProps' + counter);
    return null;
}

shouldComponentUpdate(nextProps,nextState){
    console.log('shouldComponentUpdate'+ counter);
    return this;

}


    render(){
        console.log('render:'+ counter);
        return(
            <div>
                <p>Welcome To Home</p>
                This is My {this.state.name} Component
                <br/>
                <button onClick={this.clickMe}>Click Me from Home.js</button>
            </div>
        );
    }


    componentDidMount(){
         this.setState({name: 'App.jsss'+name});
         console.log('componentDidMount' + counter);
     }
     getSnapShotBeforeUpdate(prevProps,prevState){
         console.log('getSnapShotBeforeUpdate'+ counter);
         return null;

     }
     componentDidUpdate(prevProps,prevState,snacpShot){
         console.log('componentDidUpdate'+ counter++);

     }
     componentWillUnmount(){
        
         console.log('componentWillUnmount'+ counter);
     }
     
     
}


