import React from 'react'
import ReactDOM from 'react-dom'
 const str = {
  str1 : 'sample01',
  str2 : 'sample02',
  str3 : 'sample03'
 }
// 

function MyApp(){
  return (
    <ul id="one" className="two" name={10}>
      <li>{str.str1}</li>
      <li>{str.str2}</li>
      <li>{str.str3}</li>
    </ul>
  )
}
// 36
// export
const root = document.querySelector('#root')
ReactDOM.render(
  <MyApp />,
  root
)