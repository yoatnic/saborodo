import React from 'react'
import ReactDOM from 'react-dom'

class Greet extends React.Component{
  render(){
    return (
      <h1>Hello World</h1>
    )
  }
}

window.addEventListener('DOMContentLoaded',()=>{
  ReactDOM.render (<Greet />,document.querySelector('main'))
})
