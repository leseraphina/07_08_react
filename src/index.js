import React from 'react'
import ReactDOM from 'react-dom'

import Sample01 from './component/sample01'
import Sample02 from './component/sample02'
import Sample03 from './component/sample03'

function App(){
  return (
    <>
    <Sample01 title="title:sample01" />
    <Sample02 title="title:sample02"/>
    <Sample03 title="title:sample03"/>
    </>
  )
}

const root = document.querySelector('#root')
ReactDOM.render(
  <App />
,
 root
)