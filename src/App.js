import React, {Component} from 'react';
import Input from './Input';

export default class App extends Component {
  
  constructor() {
    
    super();

  }
  
  handleClick(e) {
    e.preventDefault();
    alert('I got clicked');
  }
  
  render() {
    
    const appStyle = {
      fontFamily: 'sans-serif',
      textAlign: 'center'
    }
    
    return(
      <div style={appStyle}>
        <h1>Click the button to get a message</h1>
        <Input onHandleClick={this.handleClick} />
      </div>
    );
    
  }
}