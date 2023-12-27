import { useEffect, useState } from 'react'
import { BrowserRouter, Routes, Route, Outlet } from 'react-router-dom'
// import './App.css'
import './index.css';
import Form from "./components/Form";
import HomePage from './pages/home.jsx';
import { Router } from './Router.jsx'

const appRoutes = [
  {
    path: '/',
    Component: HomePage
  },
  {
    path: '/login',
    Component: Form
  }
]

const URL = import.meta.env.VITE_BACKEND_URL || "http://localhost:3000";

const NAVIGATION_EVENT = 'pushstate' // React Router MiduDev https://www.youtube.com/watch?v=K2NcGYajvY4

function App() {
  const [user, setUser] = useState([])
  const [currentPath, setCurrentPath] = useState(window.location.pathname)

  return (
    <div className="flex w-full h-screen">        
      <div className='w-full flex items-center justify-center '>
        <main>
          <Router routes = {appRoutes} />
        </main>
      </div>  
    </div>  
      
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
