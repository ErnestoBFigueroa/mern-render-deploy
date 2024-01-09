import { useEffect, useState } from 'react'
import { Link } from '../Link.jsx'
import { BuildingOffice2Icon, BuildingStorefrontIcon, AcademicCapIcon, BellAlertIcon} from '@heroicons/react/24/solid'

// https://www.youtube.com/watch?v=zWc4Y78DAB0
// Diseño Responsivo con Tailwind CSS | Uso de los Breakpoints | Tailwind Responsive

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
                <article className='rounded-b-2xl pl-8 text-white text-center md:w-1/2 md:grid md content-center'>
                    <div className='flex items-center'>            
                        <BuildingOffice2Icon className='w-8 h-8 text-black'/>            
                        <Link className='active:scale-[.98] active:duration-75 hover:scale-[1.01] ease-in-out transition-all py-2 rounded-xl bg-purple-500 text-white text-lg font-bold p-3 mr-2 ml-4'
                        to='/Adincoha'>AdInCoHa</Link>                        
                    </div>            
                    <div className='mt-2 flex items-center pb-4'>
                        <p className='font-semibold text-md text-purple-500 underline underline-offset-8 text-left'>
                            Administración Integral de Conjuntos Habitacionales.
                        </p>
                    </div>            
                    
                    <div className='flex items-center'>
                        <BuildingStorefrontIcon className='w-8 h-8 text-black'/>
                        <Link className='active:scale-[.98] active:duration-75 hover:scale-[1.01] ease-in-out transition-all py-2 rounded-xl bg-blue-500 text-white text-lg font-bold p-3 mr-2 ml-4'
                        to='/Adincoha'>AdInNeg</Link>
                    </div>            
                    <div className='mt-4 flex items-center pb-4'>
                        <p className='font-semibold text-md text-blue-500 underline underline-offset-8 text-left'>
                            Administración Integral de Negocios.
                        </p>                        
                    </div>
                </article>
                
                {/* <article className='bg-gradient-to-b from-light-slate-blue to-light-royal-blue rounded-b-2xl p-10 text-white text-center'> 
                className='rounded-b-2xl pl-10 text-white text-center'*/}
                <article className='rounded-b-2xl pl-8 text-white text-center md:w-1/2 md:grid md content-center'>
                    <div className='flex items-center'>
                        <AcademicCapIcon className='w-8 h-8 text-black'/>
                        <Link className='active:scale-[.98] active:duration-75 hover:scale-[1.01] ease-in-out transition-all py-2 rounded-xl bg-gray-500 text-white text-lg font-bold p-3 mr-2 ml-4'
                        to='/Adincoha'>AdInCoEs</Link>
                    </div>            
                    <div className='mt-4 flex items-center pb-4'>                        
                        <p className='font-semibold text-md text-gray-500 underline underline-offset-8 text-left'>
                        Administración Integral de Control Escolar.
                        </p>            
                    </div>

                    <div className='flex items-center'>
                        <BellAlertIcon className='w-8 h-8 text-black'/>
                        <Link className='active:scale-[.98] active:duration-75 hover:scale-[1.01] ease-in-out transition-all py-2 rounded-xl bg-green-500 text-white text-lg font-bold p-3 mr-2 ml-4'
                        to='/Adincoha'>AdInSoport</Link>                        
                    </div>            
                    <div className='mt-4 flex items-center pb-4'>
                        <p className='font-semibold text-md text-green-500 ml-4 underline underline-offset-8 text-left'>
                            Administración Integral de Soporte.
                        </p>            
                    </div>
                
                </article>

            </section>
    
            {/* <div className='mt-10'> */}
            <section className="w-[90%] max-w-lg mx-auto flex md:flex justify-center pt-8 gap-4 pb-3">
                {/* className='mt-8 flex items-center'             */}
                {/* className='active:scale-[.98] active:duration-75 hover:scale-[1.01] ease-in-out transition-all py-2 rounded-xl bg-green-500 text-white text-lg font-bold p-3 mr-2' */}
                <div className='justify-center items-center aling-left'>
                    <Link className='bg-dark-gray-blue 
                        text-white rounded-xl py-3 text-center font-bold 
                        hover:bg-gradient-to-b from-light-slate-blue to-light-dark-blue p-3'
                    to='/login'>Acceder</Link>    
                </div>
                <div className='justify-center items-center'>    
                    <Link className='bg-dark-gray-blue 
                        text-white rounded-xl py-3 text-center font-bold 
                        hover:bg-gradient-to-b from-light-slate-blue to-light-dark-blue p-3'
                    to='/register'>Registrate</Link> 
                </div>
            </section>            
          
        </div>
      
    )
  }
  