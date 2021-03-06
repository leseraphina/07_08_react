import React from 'react'
import ReactDOM from 'react-dom'

// const book = {
//   title:'react',
//   price:'30000원',
//   room:'A장소'
// }

// function Reactbook(){
//   return (
//     <dl>
//       <dt>책의 제목</dt>
//       <dd>{book.title}</dd>
//       <dt>가격</dt>
//       <dd>{book.price}</dd>
//       <dt>세미나실</dt>
//       <dd>{book.room}</dd>
//     </dl>
//   )
// }

function Reactbook(props){
  console.log(props)
  return (
    <dl>
      <dt>책의 제목</dt>
      <dd>{props.title}</dd>
      <dt>가격</dt>
      <dd>{props.price}</dd>
      <dt>세미나실</dt>
      <dd>{props.room}</dd>
    </dl>
  )
}

const root = document.querySelector('#root')
ReactDOM.render(
  <Reactbook 
    title="react"
    price="30000원"
    room="A강의실" />,
  root
)