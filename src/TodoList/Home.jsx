import React from 'react'

const Home = () => {
  return (
    <div style={{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",fontFamily:"sans-serif"}}>
      <h1> My TodoList </h1>
      
      <ul>
        <li> <h3>React with Todo-List</h3></li>
       <li><h3>React-Redux with Todo-List</h3></li>
      </ul>

      <p>"Click on the navbar to explore my To-Do List"</p>
    </div>
  )
}

export default Home
