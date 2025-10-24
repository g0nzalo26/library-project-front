import { useEffect, useState } from 'react'
import { bookService } from '../services/bookService'

import { BookCard, BookForm } from '../components/books'

import { LoadingSpinner } from '../components/common/LoadingSpinner'

export const BookList = () => {

    const [books, setBooks] = useState([])
    const [loading, setLoading] = useState(true)
    const [editingBook, setEditingBook] = useState(null)

    useEffect(() => {
        loadBooks();
    }, []);

    const loadBooks = async () => {
        try {

            const data = await bookService.getAllBooks()
            setBooks(data)
            setLoading(false)

        } catch (error) {

            console.error('Error al cargar libros', error)
            setLoading(false)

        }
    }

    if (loading) {
        return <LoadingSpinner message="Cargando Libros..." />
    }

    const handleEdit = (book) => {

        setEditingBook(book)
        window.scroll({ top: 0, behavior: 'smooth' })

    }

    const handleCancelEdit = () => {
        setEditingBook(null)
    }

    const handleDelete = async (id) => {

        if (window.confirm('¿Estas seguro de eliminar este libro?')) {

            await bookService.deleteBook(id)
            loadBooks()

        }

    }

    return (

        <main className="container mx-auto p-6">

            <BookForm onBookCreated={loadBooks} editingBook={editingBook} onCancelEdit={handleCancelEdit} />

            <header>
                <h1 className="text-3xl font-bold mb-6">Lista de Libros.</h1>

            </header>

            <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {
                    books.map((book) => (
                        <BookCard
                            key={book.id}
                            book={book}
                            onEdit={handleEdit}
                            onDelete={handleDelete}
                        />
                    ))
                }
            </section>

        </main>



    )
}
