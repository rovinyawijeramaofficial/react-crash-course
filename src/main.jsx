import React from 'react'
import ReactDom from 'react-dom/client'
import {RouterProvider, createBrowserRouter} from 'react-router-dom';
import Posts, {loader as postLoader} from './routes/Posts'
import './index.css'
import NewPost, {action as newPostAction} from './routes/NewPost';
import PostDetails, {loader as postDetailsLoader} from './routes/PostDetails'; 
import RootLayout from './routes/RootLayout';

const router = createBrowserRouter([
  {path: '/', element:<RootLayout/> , children: [
    {path:'/', element:<Posts/>, loader:postLoader,
    children: [{path:'/create-post', element:<NewPost/>, action:newPostAction},
      {path: '/:postId', element:<PostDetails/>, loader: postDetailsLoader}
    ],
    },
  ],
},    
]);

ReactDom.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>    
)
 