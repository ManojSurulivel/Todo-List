import { BrowserRouter, Routes, Route } from 'react-router-dom'
import TodoComponent from './TodoList/redux/TodoComponent'
import Todo from './TodoList/react/Todo';
import Home from './TodoList/Home';
import Navbar from './TodoList/navbar/Navbar';

const App = () => {
  return (
   <BrowserRouter className="app-container">
   <Navbar />
   <Routes className="content">
     <Route path="/" element={<Home />}/>
     <Route path="/TodoComponent" element={<TodoComponent />} />
     <Route path="/Todo" element={ <Todo />} />
   </Routes>
   </BrowserRouter>
  )
}

export default App