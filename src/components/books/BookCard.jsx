import { Link } from "react-router-dom"

export const BookCard = ({ book, onEdit, onDelete }) => {
    return (

        <article className="bg.white p-6 rounded-lg shadow-md">

            <Link to={`/books/${book.id}`}>
                <h2 className="text-xl font-semibold mb-2 hover:text-blue-600 transition cursor-pointer">
                    {book.title}
                </h2>
            </Link>


            <p className="text-gray-600 mb-1">Autor: {book.autor}</p>
            <p className="text-gray-600 mb-1">ISBN: {book.isbn}</p>
            <p className={`font-medium mb-4 ${book.available ? 'text-green-600' : 'text-red-600'}`}>
                {book.available ? 'Disponible' : 'No Disponible'}
            </p>

            <div className="flex gap-2">
                <button
                    onClick={() => onEdit(book)}
                    className="flex-1 bg-yellow-500 text-white py-2 px-4 rounded hover:bg-yellow-600 transition"
                >
                    Editar
                </button>

                <button
                    onClick={() => onDelete(book.id)}
                    className="flex-1 bg-red-500 text-white py-2 px-4 rounded hover:bg-red-600 transition"
                >
                    Eliminar
                </button>
            </div>

        </article>

    )
}
