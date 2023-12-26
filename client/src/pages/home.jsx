import { Link } from '../Link.jsx'

export default function HomePage () {
    return (
        <div className='bg-white px-80 py-20 rounded-3xl border-2 border-gray-100'>
        <h1 className='text-6xl font-semibold'>JAEB</h1>
        <p className='font-semibold text-lg text-green-500 mt-4'>Web Developments</p>

        <div className='mt-8 flex justify-center items-center'>
        <p className='font-semibold text-3xl text-green-500 mt-4'>AdinCoHa</p>
        <Link className='text-violet-500 text-base font-medium ml-2' to='/login'>Ir a Login</Link>    
        </div>
        <div className='mt-8 flex justify-center items-center'>
        <p className='font-semibold text-3xl text-blue-500 mt-4'>AdinNeg</p>
        <Link className='text-violet-500 text-base font-medium ml-2' to='/login'>Ir a Login</Link>    
        </div>
        <div className='mt-8 flex justify-center items-center'>
        <p className='font-semibold text-3xl text-gray-500 mt-4'>AdinCoEs</p>
        <Link className='text-violet-500 text-base font-medium ml-2' to='/login'>Ir a Login</Link>    
        </div>
        </div>
      
        
      
    )
  }
  