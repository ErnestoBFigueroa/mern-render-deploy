import { useEffect, useState } from 'react'
import { BrowserRouter, Routes, Route, Outlet } from 'react-router-dom'
// import './App.css'
import './css/index.css';
import Form from "./components/Form";
import HomePage from './pages/home.jsx'; // Instalacion de Material UI https://www.youtube.com/watch?v=_zGL_MU29zs&t=5630s
import { Router } from './Router.jsx'
import Register from "./components/Register.jsx"

const appRoutes = [
  {
    path: '/',
    Component: HomePage
  },
  {
    path: '/login',
    Component: Form
  },
  {
    path: '/register',
    Component: Register
  }
]

const URL = import.meta.env.VITE_BACKEND_URL || "http://localhost:3000";

const NAVIGATION_EVENT = 'pushstate' // React Router MiduDev https://www.youtube.com/watch?v=K2NcGYajvY4

function App() {
  const [user, setUser] = useState([])
  const [currentPath, setCurrentPath] = useState(window.location.pathname)

  return (
    
      
        <main>
          <Router routes = {appRoutes} />
        </main>
      
    
      
      //     {currentPath ==='/' && <HomePage/>}          
      //     {currentPath === '/login' && <Form/> }

      //     {
      //       // !user.length > 0
      //       // ? <Form setUser= {setUser}/>
      //       // : <Home user={user} setUser={setUser}/>
      //     }          

      //   </div>

      // </div>
      
  )
}

export default App
