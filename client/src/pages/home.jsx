import { useEffect, useState } from 'react'
import { Link } from '../Link.jsx'
import { BuildingOffice2Icon, BuildingStorefrontIcon, AcademicCapIcon } from '@heroicons/react/24/solid'

export default function HomePage () {

    const [sistema, setSistema] = useState('');

    return (
        <div className='bg-white px-40 py-20 rounded-3xl border-2 border-gray-100'>
            <h1 className='text-6xl font-semibold'>JAEB</h1>
            <p className='font-semibold text-2xl text-green-500 mt-4 pb-3'>Web Developments</p>

            <div className='mt-8 flex items-center'>            
            <BuildingOffice2Icon className='w-6 h-6'/>            
            <p className='font-semibold text-3xl text-purple-500 mt-4 ml-4 pb-5 underline underline-offset-8'>AdInCoHa</p>             
            </div>
            <form onChange={e => setSistema('1')}>
            <Link className='active:scale-[.98] active:duration-75 hover:scale-[1.01] ease-in-out transition-all py-2 rounded-xl bg-purple-500 text-white text-lg font-bold p-3 mr-2'
            to='/login'            
            >Acceder</Link>
            <Link className='active:scale-[.98] active:duration-75 hover:scale-[1.01] ease-in-out transition-all py-2 rounded-xl bg-purple-500 text-white text-lg font-bold p-3 mr-2'
            to='/login'>Conoce más</Link>
            <Link className='active:scale-[.98] active:duration-75 hover:scale-[1.01] ease-in-out transition-all py-2 rounded-xl bg-purple-500 text-white text-lg font-bold p-3'
            to='/login'>Registrate</Link>
            </form>

            <div className='mt-8 flex items-center'>
                <BuildingStorefrontIcon className='w-6 h-6'/>
            <p className='font-semibold text-3xl text-blue-500 mt-4 ml-4 pb-5 underline underline-offset-8'>AdInNeg</p>                
            </div>
            <Link className='active:scale-[.98] active:duration-75 hover:scale-[1.01] ease-in-out transition-all py-2 rounded-xl bg-blue-500 text-white text-lg font-bold p-3 mr-2'
            to='/login'>Acceder</Link>
            <Link className='active:scale-[.98] active:duration-75 hover:scale-[1.01] ease-in-out transition-all py-2 rounded-xl bg-blue-500 text-white text-lg font-bold p-3 mr-2'
            to='/login'>Conoce más</Link>
            <Link className='active:scale-[.98] active:duration-75 hover:scale-[1.01] ease-in-out transition-all py-2 rounded-xl bg-blue-500 text-white text-lg font-bold p-3'
            to='/login'>Registrate</Link>

            <div className='mt-8 flex items-center'>
                <AcademicCapIcon className='w-6 h-6'/>
                <p className='font-semibold text-3xl text-gray-500 mt-4 ml-4 pb-5 underline underline-offset-8'>AdInCoEs</p>            
            </div>
            <Link className='active:scale-[.98] active:duration-75 hover:scale-[1.01] ease-in-out transition-all py-2 rounded-xl bg-gray-500 text-white text-lg font-bold p-3 mr-2'
            to='/login'>Acceder</Link>    
            <Link className='active:scale-[.98] active:duration-75 hover:scale-[1.01] ease-in-out transition-all py-2 rounded-xl bg-gray-500 text-white text-lg font-bold p-3 mr-2'
            to='/login'>Conoce más</Link>
            <Link className='active:scale-[.98] active:duration-75 hover:scale-[1.01] ease-in-out transition-all py-2 rounded-xl bg-gray-500 text-white text-lg font-bold p-3'
            to='/login'>Registrate</Link>    
        </div>
      
        
      
    )
  }
  