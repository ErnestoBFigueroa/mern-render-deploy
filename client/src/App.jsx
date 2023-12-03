import { useState } from 'react'
// import './App.css'
import './index.css';
import Form from "./components/Form";

const URL = import.meta.env.VITE_BACKEND_URL || "http://localhost:3000";

function App() {
  const [result, setResult] = useState('')

  return (
      <div className="flex w-full h-screen">        
        <div className='w-full flex items-center justify-center lg:w-1/2'>
          <Form />
          {/* <button onClick={async () =>{
          const res = await fetch(`${URL}/ping`)
          const data = await res.json()
          console.log(data);
          setResult(data);
          }}>
            Users
          </button>
          <pre>{JSON.stringify(result, null, 2)}</pre> */}
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
