import React, {Component} from 'react';
import './App.css';
import {connect} from 'react-redux'

class App extends Component {

  // state = {
  //   age: 21
  // }
  // incre = () => {
  //  this.setState({
  //    ...this.state, 
  //    age: this.state.age + 1
  //  })
  // }
  // decre = () => {
  //   this.setState({
  //     age: this.state.age - 1
  //   })

  
  render () {

    return (
      <div className="App">
        <h1>Caesar's Cipher </h1>

        <div> Plain Text:  {this.props.text} </div> 
        
        
      <div> Shift : {this.props.shift} </div> 
      <div>  Caesar Text : {this.props.caesarText} </div>
      <input type="text" value={this.props.caesarText}/>

      <button onClick= {this.props.onincre}> Change </button>
      </div>
    );

  }

} 

const mapStateToProps = (state)=> {

  return {
    shift: state.r.shift,
    // name: state.r.name,
    text: state.r.text,
    caesarText: state.r.caesarText
  }
}

const mapDispatchToProps = (dispatch)=> {

  return {
    onincre: () => dispatch({type: 'CHANGE_TEXT'}),
    // ondecre: () => dispatch({type: 'AGE_DECRE'}),
    // addA: (b) => dispatch({type: 'ADD_A', b:b}),
    // addB: (a) => dispatch({type: 'ADD_B', a:a})
  }

}

export default connect(mapStateToProps, mapDispatchToProps)(App);
