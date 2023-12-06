export function Home ( {user, setUser} ) {
    const handleLogout = () => {
        setUser([])
    }

    return(
        <div>
            <h1 className='text-5xl font-semibold'>Bienvenido</h1>
            <h2>{user}</h2>
            <div className='mt-8 flex flex-col gap-y-4'>
                <button 
                    className='active:scale-[.98] active:duration-75 hover:scale-[1.01] ease-in-out transition-all py-3 rounded-xl bg-green-500 text-white text-lg font-bold'
                    onClick={handleLogout}
                >Cerrar Sesion</button>
            </div>
            
        </div>
    )
}