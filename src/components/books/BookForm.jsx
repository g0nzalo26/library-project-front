import { useEffect, useState } from "react"
import { bookService } from "../../services/bookService"

export const BookForm = ({ onBookCreated, editingBook, onCancelEdit }) => {


    // Estado de Formulario
    // formData = Objeto que guarda los valores del formulario
    const [formData, setFormData] = useState({

        title: '',
        autor: '',
        isbn: '',
        available: true

    })

    // Cargar datos del libro cuando se esta editando

    useEffect(() => {

        if (editingBook) {
            setFormData(editingBook)
        } else {
            setFormData({
                title: '',
                autor: '',
                isbn: '',
                available: true
            })
        }

    }, [editingBook])


    // Manejo de cambio de inputs
    const handleChange = (e) => {

        const { name, value, type, checked } = e.target

        setFormData({
            ...formData,
            [name]: type === 'checkbox' ? checked : value
        })

    }


    // Envio del Formulario
    const handleSubmit = async (e) => {

        // Evita que se recargue la pagina
        e.preventDefault()

        // Dejarlo en un trycatch

        if (editingBook) {

            // Llamada al metodo Edit
            await bookService.updateBook(editingBook.id, formData)
            onCancelEdit()

        } else {
            // Llamada al metodo Post
            await bookService.createBook(formData)
        }



        // Limpiar Formulario
        setFormData({

            title: '',
            autor: '',
            isbn: '',
            available: true

        })

        // Notifica al padre que recargue la lista
        onBookCreated()

    }

    const handleCancel = () => {

        setFormData({
            title: '',
            author: '',
            isbn: '',
            available: true
        })

        onCancelEdit()
    }

    return (

        <form
            onSubmit={handleSubmit}
            className="bg-white p-6 rounded-lg shadow-md mb-6"
        >
            <h2 className="text-2xl font-bold mb-4">
                {
                    editingBook ? 'Editar Libro' : 'Agregar Nuevo Libro'
                }
            </h2>

            <div className="mb-4">
                <label className="block text-gray-700 mb-2" l>Titulo</label>
                <input
                    type="text"
                    name="title"
                    value={formData.title}
                    onChange={handleChange}
                    required
                    className="w-full border border-gray-300 p-2 rounded"
                />
            </div>

            <div className="mb-4">
                <label className="block text-gray-700 mb-2">Autor</label>
                <input
                    type="text"
                    name="autor"
                    value={formData.autor}
                    onChange={handleChange}
                    required
                    className="w-full border border-gray-300 p-2 rounded"
                />
            </div>

            <div className="mb-4">
                <label className="block text-gray-700 mb-2">ISBN</label>
                <input
                    type="text"
                    name="isbn"
                    value={formData.isbn}
                    onChange={handleChange}
                    required
                    className="w-full border border-gray-300 p-2 rounded"
                />
            </div>

            <div className="mb-4 flex items-center">
                <input
                    type="checkbox"
                    name="available"
                    checked={formData.available}
                    onChange={handleChange}
                    className="mr-2"
                />
                <label className="text-gray-700">Disponible</label>
            </div>

            <div className="flex gap-2">
                <button
                    type="submit"
                    className="w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition"
                >
                    {editingBook ? 'Actualizar Libro' : 'Crear Libro'}
                </button>

                {editingBook && (
                    <button
                        type="button"
                        onClick={handleCancel}
                        className="flex-1 bg-gray-500 text-white py-2 px-4 rounded hover:bg-gray-600 transition"
                    >
                        Cancelar
                    </button>
                )}
            </div>

        </form>

    )
}
