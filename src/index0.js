import React from 'react'
import ReactDOM from 'react-dom'


const root = document.querySelector('#root')
// export
ReactDOM.render(
  <h1 id="main" className="sub">welcome My Project</h1>,
  //React.createElement('h1',{id:'main'},'Welcome My Project'),
  root
)