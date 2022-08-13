import  {client}  from "../configs/database.js";

const getAllBooksSql = `SELECT * FROM books;`

const getBooksByGenreSql =  `SELECT * FROM books WHERE genre = $1`

const createBookSql = `INSERT INTO books(name,author,genre,since)
    VALUES($1,$2,$3,$4);
`

const deleteBookSql = `DELETE FROM books WHERE id = $1;`


export function getAllBooks(){
    return client.query(getAllBooksSql)
}

export function getBooksByGenre(genre){
    return client.query(getBooksByGenreSql,[genre])
}

export function createBook(name,author,genre,since){
    return client.query(createBookSql,[name,author,genre,since])
}

export function deleteBook(id){
    return client.query(deleteBookSql,[id])
}
