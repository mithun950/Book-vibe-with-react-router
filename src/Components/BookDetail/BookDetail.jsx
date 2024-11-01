import React from 'react';
import PropTypes from 'prop-types'
import { useLoaderData, useParams } from 'react-router-dom'
import { addToStoredReadList, addToStoredWishList } from '../Utility/addToDb';

function BookDetail() {
   

   
    const {bookId} = useParams();
    console.log("URL bookId from useParams:", bookId);
    
    const data = useLoaderData();
   
    const id = parseInt(bookId);

   
    
   


    const book = data.find(book => book.bookId === id);
    console.log(book,bookId,id);
    

    const {image, bookId:currentBookId} = book;



    const handleMarkAsRead = (id) => {
               addToStoredReadList(id);
    }

    const handleWishList = (id) => {
        addToStoredWishList(id);
    }
  return (
    <div>
         <h3>Book details : {currentBookId}</h3>

         <div className='grid-cols-1  md:grid grid-cols-2 mt-5'>

         <img className='h-[400px]  object-cover' src={image} alt="" />

         <div className='mt-4'>
         <button onClick={()=> handleMarkAsRead(bookId)} className="btn btn-outline btn-success">Mark as Read</button>


         <button onClick={()=>handleWishList(bookId)} className="btn bg-[#50B1C9] ml-4"> Add to Wishlist</button>
         </div>

         </div>
    </div>
  )
}

BookDetail.propTypes = {

}

export default BookDetail

