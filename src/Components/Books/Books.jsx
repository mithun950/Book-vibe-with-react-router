
import PropTypes from 'prop-types'
import { useEffect, useState } from 'react'
import Book from '../Book/Book';

function Books() {

    const [books,setBooks] = useState([]);

    useEffect (() =>{
           fetch('/Data.json/booksData.json')
           .then(res => res.json())
           .then(data => setBooks(data))
    },[])

  return (
    <div className='mt-10'>
      <h2 className='text-4xl text-center font-bold'>Books</h2>
       <div className='grid-cols-1 sm:grid grid-cols-2 lg:grid-cols-3 gap-6 mt-8'>
       {
        books.map((book) => <Book key={book.id} book={book}></Book>)
       }

       </div>
    </div>
  )
}

Books.propTypes = {

}

export default Books

