import React from 'react'
import ReactDOM from 'react-dom'

// function UlStr(props){
//    return (
//     <>
//     <h1>{props.title}</h1>
//     <p>{props.year}</p>
//     <p>{props.text}</p>
//     </>
//    )
// }

// function UlStr({title,year,text}){
//   return (
//    <>
//    <h1>{title}</h1>
//    <p>{year}</p>
//    <p>{text}</p>
//    </>
//   )
// }

class UlStr extends React.Component{
  render(){
    return (
      <>
      <h1>{this.props.title}</h1>
      <p>{this.props.year}</p>
      <p>{this.props.text}</p>
      </>
    )
  }
}
const root = document.querySelector('#root')
ReactDOM.render(
<UlStr  
  title="작품명"
  year={2001}
  text="설명"
  />,
root
)