import { useEffect, useState } from 'react'
import { BrowserRouter, Routes, Route, Outlet } from 'react-router-dom'
// import './App.css'
import './index.css';
import Form from "./components/Form";
import {Home} from './components/Home';
import { EVENTS } from './consts';
import HomePage from './pages/home.jsx';
import LoginPage from './pages/login.jsx';

const URL = import.meta.env.VITE_BACKEND_URL || "http://localhost:3000";

const NAVIGATION_EVENT = 'pushstate' // React Router MiduDev https://www.youtube.com/watch?v=K2NcGYajvY4

function App() {
  const [user, setUser] = useState([])
  const [currentPath, setCurrentPath] = useState(window.location.pathname)

  useEffect(() => {
    const onLocationChange = () => {
      setCurrentPath(window.location.pathname)
    }
    window.addEventListener(EVENTS.PUSHSTATE, onLocationChange)
    window.addEventListener(EVENTS.POPSTATE, onLocationChange)

    return () => {
      window.removeEventListener(EVENTS.PUSHSTATE, onLocationChange)
      window.removeEventListener(EVENTS.POPSTATE, onLocationChange)
    }
  }, [])

  return (
      <div className="flex w-full h-screen">        
        {/* <div className='w-full flex items-center justify-center lg:w-1/2'> */}
        <div className='w-full flex items-center justify-center '>
          {currentPath ==='/' && <HomePage/>}
          {/* {currentPath === '/login' && <LoginPage/> } */}
          {currentPath === '/login' && <Form/> }

          {
            // !user.length > 0
            // ? <Form setUser= {setUser}/>
            // : <Home user={user} setUser={setUser}/>
          }          

        </div>

        {/* <div className="hidden relative lg:flex h-full w-1/2 items-center justify-center bg-gray-200">
          <div className='w-60 h-60 bg-gradient-to-tr from-green-500 to-blue-500 rounded-full animate-spin' /> */}
          
          {/* <div className='w-full h-1/2 absolute bottom-0 bg-white/10 backdrop-blur-lg' /> */}
          {/* <div>
            <h1 className='text-5xl font-semibold'>JAEB</h1>
            <p className='font-medium text-lg text-gray-500 mt-4'>Web Solutions.</p>            
          </div> */}
          
        {/* </div> */}
      </div>
      
  )
}

export default App
