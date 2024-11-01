import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

import PropTypes from 'prop-types'
import { useLoaderData } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getStoreReadList,getStoreWishList } from '../Utility/addToDb';
import Book from '../Book/Book';

function ListedBooks() {


    const [readList,setReadList] = useState([]);
    const [wishList,setWishList] = useState([]);
    const allBooks = useLoaderData();

    useEffect(() => {
           const storeReadList = getStoreReadList();
           const storedReadListInt = storeReadList.map(id => parseInt(id));
           const readBookList = allBooks.filter(book => storedReadListInt.includes(book.bookId));

           setReadList(readBookList)
    },[])  
    useEffect(() => {
           const storeWishList = getStoreWishList();
           const storedWishListInt = storeWishList.map(id => parseInt(id));
           const wishBookList = allBooks.filter(book => storedWishListInt.includes(book.bookId));

           setWishList(wishBookList)
    },[])  
  return (
    <div>

        <h3 className='text-3xl font-semibold mt-8 mb-8'>Listed Books</h3>
       
  <Tabs>
    <TabList>
      <Tab>Read List</Tab>
      <Tab>Wish List</Tab>
    </TabList>

    <TabPanel>
      <h2>Books I Read : {readList.length}</h2>
      <h2>
        {
            readList.map((book) => <Book key={book.id} book={book}></Book>)
        }
      </h2>
    </TabPanel>
    <TabPanel>
      <h2>Wish I will read : {wishList.length}</h2>
      <h2>
        {
            wishList.map((book) => <Book key={book.id} book={book}></Book>)
        }
      </h2>
    </TabPanel>
  </Tabs>

    </div>
  )
}

ListedBooks.propTypes = {

}

export default ListedBooks

