import { Router } from "express";
import { getAllBooks,getBooksByGenre,createBook,deleteBook } from "../services/books.service.js";
const router = Router()

router.get('/', async (req,res) => {
    try{

        const result = await getAllBooks()
        res.json({
            message: "All books",
            books: result.rows
        })

    }catch(err){
        res.json({
            message:err
        })
    }
})

router.get('/:genre', async (req,res) => {
    try{
        const genre = req.params.genre

        const result = await getBooksByGenre(genre)

        res.json({
            message: "All books",
            book: result.rows
        })

    }catch(err){
        res.json({
            message:err
        })
    }
})

router.post('/', async (req,res) => {
    try{

        const {name,author,genre,since} = req.body

        await createBook(name,author,genre,since)
        res.json({
            message: "Book added"
        })
    }catch(err){
        res.json({
            message:err
        })
    }
})

router.delete('/:id', async (req,res) => {
    try{

        const id = req.params.id
        await deleteBook(id)

        res.json({
            message:"Book deleted"
        })
    }catch(err){
        res.json({
            message:err
        })
    }
})


export default router