import { Routes, Route } from "react-router-dom"
import { BookDetail, BookList, Home } from "../pages/index.js"

export const AppRoutes = () => {
  return (

    <Routes>
        <Route path='/' element={<Home /> } ></Route>
        <Route path='/books' element={<BookList /> } ></Route>
        <Route path='/books/:id' element={<BookDetail /> } ></Route>
    </Routes>
    
  )
}
