
export const LoadingSpinner = ({ message = 'Cargando...' }) => {
  return (
    <div className="flex flex-col items-center justify-center p-8">
        <div className="animate-spin rounded-full size-16 border-b-4 border-blue-600 mb-4"></div>
        <p className="text-gray-600 text-lg">{message}</p>
    </div>
  )
}
