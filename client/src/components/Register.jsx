import * as React from 'react';
import { useState } from 'react'
import { Link } from '../Link.jsx'
import { HomeIcon} from '@heroicons/react/24/solid'

const URL = import.meta.env.VITE_BACKEND_URL || "http://localhost:3000";

// export default function Register( {setUser} ) {
    export default function Register() {
    const [result, setResult] = useState('');
    const [user, setUser] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState(false);

    const [checkSistema, setcheckSistema] = useState('');

    function valida(){
        if(email === "" || password ==="" || checkSistema ==="" || user ===""){
            setError(true)            
            return
        } else{
            setUser([email]);            
        }
        setError(false)
        setUser([email])
    }

    function uncheck(){        
        var checkbox1 = document.getElementById("AdInCoHa");
        var checkbox2 = document.getElementById("AdInNeg"); 
        var checkbox3 = document.getElementById("AdInCoEs"); 
       checkbox1.onclick = function(){ 
        if(checkbox1.checked != false){ 
            checkbox2.checked =null;
            checkbox3.checked =null; }
             }  
       checkbox2.onclick = function(){ 
            if(checkbox2.checked != false){ 
            checkbox1.checked=null;
            checkbox3.checked =null;
            }
        }
        checkbox3.onclick = function(){ 
            if(checkbox3.checked != false){ 
            checkbox1.checked=null;
            checkbox2.checked =null;
            }
        }
        
       }

    return (
        // <div className='bg-white px-10 py-20 rounded-3xl border-2 border-gray-100'>
        <div className='w-[90%] max-w-lg mx-auto bg-white px-10 py-1 rounded-3xl border-2 border-gray-100'>
            <h1 className='text-5xl font-semibold text-gray-500'>Registro</h1>
                        
            <p className='font-medium text-lg text-gray-500 mt-4'>Por favor ingresa tu nombre de usuario, correo y contraseña.</p>
            <div className='mt-8'>
            <div>
                    <label className='text-lg font-semibold'>Usuario</label>
                    <input 
                        className='w-full border-2 border-gray-100 rounded-xl p-4 mt-1 bg-transparent'
                        value={user}
                        onChange={e => setUser(e.target.value)}
                        placeholder='Enter your user'
                    />
                </div>
                <div>
                    <label className='text-lg font-semibold'>Email</label>
                    <input 
                        className='w-full border-2 border-gray-100 rounded-xl p-4 mt-1 bg-transparent'
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                        placeholder='Enter your email'
                    />
                </div>
                <div>
                    <label className='text-lg font-semibold'>Password</label>
                    <input 
                        className='w-full border-2 border-gray-100 rounded-xl p-4 mt-1 bg-transparent'
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                        placeholder='Enter your password'
                        type='password'
                    />
                </div>
                {error && <p className='font-semibold text-red-500'>Todos los campos son obligatorios.</p>}
                
                <p className='font-medium text-lg text-gray-500 mt-1'>Selecciona un sistema.</p>
                <div className='mt-6 flex justify-between items-center'>
                    <div>
                        <input 
                            type='checkbox'
                            id='AdInCoHa'                            
                            onChange={e => {
                                uncheck();
                                setcheckSistema(1)
                            }}
                        />
                        {/* <BuildingOffice2Icon className='w-4 h-4'/>        */}
                        <label className='ml-2 mr-4 font-semibold txt-base' for='AdInCoHa'>AdInCoHa</label>

                        <input 
                            type='checkbox'
                            id='AdInNeg'
                            onChange={e => {
                                uncheck();
                                setcheckSistema(2)
                            }}
                            
                        />
                        <label className='ml-2 mr-4 font-semibold txt-base' for='AdInNeg'>AdInNeg</label>

                        <input 
                            type='checkbox'
                            id='AdInCoEs'
                            onChange={e => {
                                uncheck();
                                setcheckSistema(3)
                            }}
                        />
                        <label className='ml-2 font-semibold txt-base' for='AdInCoEs'>AdInCoEs</label>
                    </div>
                    <div>
                        
                    </div>
                    <div>
                        
                    </div>
                </div>

                {/* <div className='mt-8 flex justify-between items-center'>
                    <button className='font-medium text-base text-violet-500'>Forgot password</button>
                </div> */}

                <div className='mt-8 flex flex-col gap-y-4'>
                    <button className='active:scale-[.98] active:duration-75 hover:scale-[1.01] ease-in-out transition-all py-3 rounded-xl bg-green-500 text-white text-lg font-bold'
                        onClick={ async () =>{
                            
                            valida();
                            //const res = await fetch(`${URL}/projects`)
                            const res = await fetch(`${URL}/api/login`)
                            const data = await res.json();
                            console.log(data);
                            setResult(data);
                            
                            
                            }}
                    >
                        Sign in
                    </button>
                    <pre>{JSON.stringify(result, null, 2)}</pre>

                    {/* <button className='flex rounded-xl py-3 border-2 border-gray-100 items-center justify-center gap-2 active:scale-[.98] active:duration-75 hover:scale-[1.01] ease-in-out transition-all'>
                        Sign in with Google
                    </button> */}
                </div>
                <div className='mt-4 flex justify-center items-center'>
                    <p className='font-semibold text-base'>Don't have an account?</p>
                    <button className='text-violet-500 text-base font-medium ml-2'>Sign up</button>
                </div>
                <div className='mt-4 flex justify-center items-center'>
                <HomeIcon className='w-6 h-6 text-black'/>
                <Link className='text-violet-500 text-base font-medium ml-2' to='/'>Ir a Home</Link>
                </div>
            </div>
        </div>
    )
}