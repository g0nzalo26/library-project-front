import { Link } from 'react-router-dom'

export const Layout = ({ children }) => {
  return (

    <div className='min-h-screen bg-gray-100 flex flex-col'>
        <nav className='bg-blue-600 text-white shadow-lg'>
            <div className='container mx-auto px-6 py-4'>
                <div className='flex items-center justify-between'>
                    <Link to='/' className='text-2xl font-bold'>
                        Biblioteca
                    </Link>

                    <div className='flex gap-6'>
                        <Link to='/' className='hover:text-blue-200 transition'>
                            Inicio
                        </Link>
                        <Link to='/books' className='hover:text-blue-200 transition'>
                            Libros
                        </Link>
                    </div>
                </div>
            </div>
        </nav>

        <main className='container mx-auto px-6 py-8 flex-grow'>
            {children}
        </main>

        <footer className='bg-gray-800 text-white text-center py-4 mt-8'>
            <p>© 2025 Sistema de Gestión de Biblioteca</p>
        </footer>


    </div>


    
  )
}
