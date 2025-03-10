import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter as Router, Routes,Route } from 'react-router-dom'
import App from './App.jsx'
import NavBar from './components/navBar.jsx'
import Register from './components/Register.jsx'
import Login from './components/Login.jsx'
import DashBoard from './components/DashBoard.jsx'

createRoot(document.getElementById('root')).render(
    <Router>
        <Routes>
            <Route path='/' element={<Register/>}/>
            <Route path='/login' element={<Login/>}/>
            <Route path='/navbar' element={<NavBar/>}/>  
            <Route path='/dashboard' element={<DashBoard/>} />       
        </Routes>
    </Router>
)
