import { useState } from 'react'
// import './App.css'
import './index.css';
import Form from "./components/Form";
import {Home} from './components/Home';

const URL = import.meta.env.VITE_BACKEND_URL || "http://localhost:3000";

function App() {
  const [user, setUser] = useState([])

  return (
      <div className="flex w-full h-screen">        
        <div className='w-full flex items-center justify-center lg:w-1/2'>
          {
            !user.length > 0
            ? <Form setUser= {setUser}/>
            : <Home user={user} setUser={setUser}/>
          }          
        </div>

        <div className="hidden relative lg:flex h-full w-1/2 items-center justify-center bg-gray-200">
          <div className='w-60 h-60 bg-gradient-to-tr from-green-500 to-blue-500 rounded-full animate-spin' />
          {/* <div className='w-full h-1/2 absolute bottom-0 bg-white/10 backdrop-blur-lg' /> */}
          {/* <div>
            <h1 className='text-5xl font-semibold'>JAEB</h1>
            <p className='font-medium text-lg text-gray-500 mt-4'>Web Solutions.</p>            
          </div> */}
          
        </div>
      </div>
      
  )
}

export default App
