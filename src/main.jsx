import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import ErrorPage from './Components/ErrorPage/ErrorPage';
import Home from './Components/Home/Home';
import DashBoard from './Components/DashBoard/DashBoard';
import Root from './Components/Root/Root';
import BookDetail from './Components/BookDetail/BookDetail';
import ListedBooks from './Components/ListedBooks/ListedBooks';
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement:<ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
          path:"listedBooks",
          element: <ListedBooks></ListedBooks>,
          loader: () => fetch('/Data.json/booksData.json')
      },
      {
         path:"books/:bookId",
         element: <BookDetail></BookDetail>,
         loader: () => fetch('/Data.json/booksData.json').then(res => res.json()),
         
      },
      {
        path: "dashboard",
        element: <DashBoard></DashBoard>
      },
    ],
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
 <RouterProvider router={router} />
  </StrictMode>,
)
