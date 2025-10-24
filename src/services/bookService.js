import axios from 'axios'

const API_URl = 'http://localhost:8080/api/books'

export const bookService = {

    // Get all Books
    getAllBooks: async () => {

        const resp = await axios.get(API_URl)
        return resp.data
    
    },

    // Get book by ID
    getBookById: async (id) => {

        const resp = await axios.get(`${API_URl}/${id}`)
        return resp.data

    },

    // Post create book
    createBook: async (book) => {

        const resp = await axios.post(API_URl, book)
        return resp.data

    },

    // Put update book
    updateBook: async (id, book) => {

        const resp = await axios.put(`${API_URl}/${id}`, book)
        return resp.data

    },

    // Delete book
    deleteBook: async (id) => {

        const resp = await axios.delete(`${API_URl}/${id}`)

    } 

}