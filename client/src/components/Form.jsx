import * as React from 'react';
import { useState } from 'react'
import { Link } from '../Link.jsx'

const URL = import.meta.env.VITE_BACKEND_URL || "http://localhost:3000";

export default function Form( {setUser} ) {

    const [result, setResult] = useState('');
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState(false);

    function valida(){
        if(email === "" || password ===""){
            setError(true)
            return
        } else{
            setUser([email]);
        }
        setError(false)
        setUser([email])
    }

    return (
        <div className='bg-white px-10 py-20 rounded-3xl border-2 border-gray-100'>
            <h1 className='text-5xl font-semibold'>Bienvenido</h1>
            <p className='font-medium text-lg text-gray-500 mt-4'>Por favor ingresa tu Email y contraseña.</p>
            <div className='mt-8'>
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
                <div className='mt-8 flex justify-between items-center'>
                    <div>
                        <input 
                            type='checkbox'
                            id='remember'
                        />
                        <label className='ml-2 font-semibold txt-base' for='remember'>Remember for 30 days</label>
                    </div>
                    <button className='font-medium text-base text-violet-500'>Forgot password</button>
                </div>
                <div className='mt-8 flex flex-col gap-y-4'>
                    <button className='active:scale-[.98] active:duration-75 hover:scale-[1.01] ease-in-out transition-all py-3 rounded-xl bg-green-500 text-white text-lg font-bold'
                        onClick={ async () =>{
                            
                            valida();
                            const res = await fetch(`${URL}/projects`)                            
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
                <Link className='text-violet-500 text-base font-medium ml-2' to='/'>Ir a Home</Link>
                </div>
            </div>
        </div>
    )
}