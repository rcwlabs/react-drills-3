import React from 'react';

export default function Input(props) {
  
  const divStyle = {
    textAlign: 'center',
    margin: '10px auto',
    minWidth: '320px',
    maxWidth: '600px'
  }
  
  const inputStyle = {
    textAlign: 'center',
    padding: '10px',
    fontSize: '18px',
    borderRadius: '2px',
    border: '1px solid #ccc',
    width: '80%'
  }
  
  const btnStyle = {
    fontSize: '18px',
    backgroundColor: '#B3E5FC',
    color: '#000',
    padding: '10px 5px',
    margin: '3px',
    border: '1px solid #bbb',
    boxShadow: '1px 1px 3px #ccc',
    cursor: 'pointer'
  }
  
  return(
    <div style={divStyle} >
      <form onSubmit={(e) => props.onHandleClick(e)}>
        <input style={inputStyle} type='text' name='myInput' placeholder='ignore me for now' />
        <button style={btnStyle}>Click me</button>
      </form>
    </div>
  );
  
}