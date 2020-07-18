import React, { Component } from 'react';
import './App.css';
import axios from 'axios'
import Card from './Card'
class App extends Component{
  state = {
    advice: ''
  }

  //life cycle method
  componentDidMount(){
    console.log('component did mount')
    this.fetchAdvice()
    
  }
  fetchAdvice = () =>{
    axios.get('	https://api.adviceslip.com/advice')
    .then( (response) => {
      console.log(response)
      //getting just the string of advice
      const advice = response.data.slip.advice

      //setting the state
      this.setState({ advice: advice})
    }).catch(error =>{
      console.log(error)
    })
  }

  

  render(){
    return(
      <div className="App">
        <Card advice={this.state.advice} getAdvice={this.fetchAdvice}></Card>
      </div>
    )
  }
}

export default App;
