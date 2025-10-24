import { useEffect, useState } from "react"
import { Link, useNavigate, useParams } from "react-router-dom"

import { bookService } from "../services/bookService"
import { LoadingSpinner } from '../components/common/LoadingSpinner'

export const BookDetail = () => {

    const { id } = useParams()
    const navigate = useNavigate()
    const [book, setBook] = useState(null)
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    useEffect(() => {
        loadBook()
    }, [id])

    const loadBook = async () => {

        try {

            const data = await bookService.getBookById(id)
            setBook(data)
            setLoading(false)

        } catch (error) {

            console.error('Error al cargar libro', error)
            setError('No se pudo cargar el Libro...')
            setLoading(false)

        }

    }

    const handleDelete = async () => {

        if( window.confirm('¿Estás seguro de eliminar este libro?')){
            try {
                
                await bookService.deleteBook(id)
                navigate('/books')

            } catch (error) {
                
                console.error('Error al eliminar libro', error)

            }
        }

    }

    if( loading ){
        return <LoadingSpinner message="Cargando detalle del Libro..." />
    }

    if( error || !book ){

        return (
            <div className="text-center p-8">
                <p className="text-red-600 text-xl mb-4">{error || 'Libro no encontrado'}</p>
                <Link to='/books' className="text-blue-600 hover:underline">
                    Volver a la lista
                </Link>
            </div>
        )

    }


    return (

        <div className="max-w-4xl mx-auto">
            <Link to="/books" className="text-blue-600 hover:underline mb-4 inline-block">
                Volver a la lista
            </Link>

            <article>
                <header className="mb-6">
                    <h1 className="text-4xl font-bold mb-2">{book.title}</h1>
                    <p className="text-xl text-gray-600">Autor: {book.autor}</p>
                </header>

                <section className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                    <div>
                        <h2 className="text-lg font-semibold mb-2">Información del Libro</h2>
                        <dl className="space-y-2">
                            <div>
                                <dt className="text-gray-600 inline">ISBN:</dt>
                                <dd className="inline ml-2 font-medium">{book.isbn}</dd>
                            </div>

                            <div>
                                <dt className="text-gray-600 inline">Estado: </dt>
                                <dd className={`inline ml-2 font-medium ${book.available ? 'text-green-600' : 'text-red-600'}`}
                                >
                                    {book.available ? 'Disponible' : 'No Disponible'}
                                </dd>
                            </div>
                        </dl>
                    </div>

                    <div>
                        <h2 className="text-lg font-semibold mb-2">ID del Sistema</h2>
                        <p className="text-gray-600">#{book.id}</p>
                    </div>

                </section>

                <footer className="flex gap-4 pt-6 border-t">
                    <button
                        onClick={() => navigate(`/books/edit/${book.id}`)}
                        className="flex-1 bg-yellow-500 text-white py-3 px-6 rounded-lg hover:bg-yellow-600 transition"
                    >
                        Editar
                    </button>
                    <button
                        onClick={handleDelete}
                        className="flex-1 bg-red-500 text-white py-3 px-6 rounded-lg hover:bg-red-600 transition"
                    >
                        Editar
                    </button>

                </footer>

            </article>
        </div>

    )
}
