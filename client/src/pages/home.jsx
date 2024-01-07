import { useEffect, useState } from 'react'
import { Link } from '../Link.jsx'
import { BuildingOffice2Icon, BuildingStorefrontIcon, AcademicCapIcon} from '@heroicons/react/24/solid'

export default function HomePage () {

    const [sistema, setSistema] = useState('');

    return (
        
        <div className='text-center'>
            <div>
                <h1 className='text-6xl font-semibold mt-4'>JAEB</h1>
                <p className='font-semibold text-2xl text-green-500 mt-4 pb-5'>Web Developments</p>
            </div>
            {/* https://www.youtube.com/watch?v=Pxs2WKdvBRU */}
            {/* Como crear un PROYECTO desde CERO con Tailwind. (Responsive) min 22:00*/}
            <section className="w-[90%] max-w-lg mx-auto bg-white shadow-2xl md:flex md:rounded-2xl
            md:max-w-lg pt-10 pb-6">
                {/* <div className="flex w-full h-screen">         */}
                {/* <div className='w-full flex items-center justify-center'> */}
                

                {/* <div className='bg-white px-40 py-20 rounded-3xl border-2 border-gray-100 mt-6'> 
                        <div className='bg-gradient-to-b from-light-slate-blue to-light-royal-blue rounded-b-2xl p-10 text-white text-center'>
                        */}
                
                {/* <article className='bg-gradient-to-b from-light-slate-blue to-light-royal-blue rounded-b-2xl p-10 text-white text-center'> */}
                <article className='rounded-b-2xl pl-10 text-white text-center md:w-1/2 md:grid md content-center'>
                    <div className='flex items-center'>            
                        <BuildingOffice2Icon className='w-8 h-8 text-black'/>            
                        <p className='font-semibold text-3xl text-purple-500 ml-4 underline underline-offset-8'>
                            AdInCoHa
                        </p>
                    </div>            
                    <div className='mt-4 flex items-center pb-4'>
                        <Link className='active:scale-[.98] active:duration-75 hover:scale-[1.01] ease-in-out transition-all py-2 rounded-xl bg-purple-500 text-white text-lg font-bold p-3 mr-2'
                        to='/login'>Conoce más</Link>            
                    </div>            
                    
                    <div className='flex items-center'>
                        <BuildingStorefrontIcon className='w-8 h-8 text-black'/>
                       <p className='font-semibold text-3xl text-blue-500 ml-4 underline underline-offset-8'>
                            AdInNeg
                        </p>
                    </div>            
                    <div className='mt-4 flex items-center pb-4'>
                        <Link className='active:scale-[.98] active:duration-75 hover:scale-[1.01] ease-in-out transition-all py-2 rounded-xl bg-blue-500 text-white text-lg font-bold p-3 mr-2'
                        to='/login'>Conoce más</Link>
                    </div>
                </article>
                
                {/* <article className='bg-gradient-to-b from-light-slate-blue to-light-royal-blue rounded-b-2xl p-10 text-white text-center'> */}
                <article className='rounded-b-2xl pl-10 text-white text-center'>
                    <div className='flex items-center'>
                        <AcademicCapIcon className='w-8 h-8 text-black'/>
                        <p className='font-semibold text-3xl text-gray-500 ml-4 underline underline-offset-8'>
                            AdInCoEs
                        </p>            
                    </div>            
                    <div className='mt-4 flex items-center pb-4'>
                        <Link className='active:scale-[.98] active:duration-75 hover:scale-[1.01] ease-in-out transition-all py-2 rounded-xl bg-gray-500 text-white text-lg font-bold p-3 mr-2'
                        to='/login'>Conoce más</Link>
                    </div>

                    <div className='flex items-center'>
                        <AcademicCapIcon className='w-8 h-8 text-black'/>
                        <p className='font-semibold text-3xl text-gray-500 ml-4 underline underline-offset-8'>
                            AdInSoport
                        </p>            
                    </div>            
                    <div className='mt-4 flex items-center pb-4'>
                        <Link className='active:scale-[.98] active:duration-75 hover:scale-[1.01] ease-in-out transition-all py-2 rounded-xl bg-gray-500 text-white text-lg font-bold p-3 mr-2'
                        to='/login'>Conoce más</Link>
                    </div>
                
                </article>

            </section>
    
            {/* <div className='mt-10'> */}
            <section className="w-[90%] max-w-lg mx-auto md:flex justify-center md:rounded-2xl pt-6 gap-4">
                {/* className='mt-8 flex items-center'             */}
                {/* className='active:scale-[.98] active:duration-75 hover:scale-[1.01] ease-in-out transition-all py-2 rounded-xl bg-green-500 text-white text-lg font-bold p-3 mr-2' */}
                <div className='flex justify-center items-center pb-3 aling-left'>
                    <Link className='bg-dark-gray-blue 
                        text-white rounded-xl py-3 text-center font-bold 
                        hover:bg-gradient-to-b from-light-slate-blue to-light-dark-blue p-3'
                    to='/login'>Acceder</Link>    
                </div>
                <div className='flex justify-center items-center pb-3'>    
                    <Link className='bg-dark-gray-blue 
                        text-white rounded-xl py-3 text-center font-bold 
                        hover:bg-gradient-to-b from-light-slate-blue to-light-dark-blue p-3'
                    to='/register'>Registrate</Link> 
                </div>
            </section>            
          
        </div>
      
    )
  }
  