import { Link } from "react-router-dom"

export const Home = () => {
    return (

        <div className="text-center">
            <header className="mb-12">
                <h1 className="text-5xl font-bold text-blue-600 mb-4">
                    Bienvenido a Biblioteca Virtual
                </h1>
                <p className="text-xl text-gray-600">
                    Sistema de Gestión de Libros y Prestamos
                </p>
            </header>

            <section className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
                
                <div className="bg-white p-6 rounded-lg shadow-md">
                    <div className="text-4xl mb-4">📚</div>
                    <h2 className="text-xl font-semibold mb-2">Catálogo</h2>
                    <p className="text-gray-600 mb-4">
                        Explora la colección de Libros Disponibles
                    </p>
                    <Link
                        to='/books'
                        className="inline-block bg-blue-500 text-white py-2 px-6 rounded hover:bg-blue-600 transition"
                    >
                        Ver Libros
                    </Link>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-md">
                    <div className="text-4xl mb-4">👤</div>
                    <h2 className="text-xl font-semibold mb-2">Mi Perfil</h2>
                    <p className="text-gray-600 mb-4">
                        Gestiona tus préstamos y reservas
                    </p>
                    <button className="bg-gray-400 text-white py-2 px-6 rounded cursor-not-allowed">
                        Próximamente
                    </button>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-md">
                    <div className="text-4xl mb-4">📊</div>
                    <h2 className="text-xl font-semibold mb-2">Estadísticas</h2>
                    <p className="text-gray-600 mb-4">
                        Información sobre el sistema
                    </p>
                    <button className="bg-gray-400 text-white py-2 px-6 rounded cursor-not-allowed">
                        Próximamente
                    </button>
                </div>

            </section>
        </div>

    )
}
