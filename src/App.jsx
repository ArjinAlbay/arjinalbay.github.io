import Blog from './Routes/Blog';
import CV from './Routes/CV';
import Home from './Routes/Home';
import RootLayout from './Routes/RootLayout'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';



const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <Home> </Home>,
      },
      {
        path: "cv",
        element: <CV> </CV>,
      },
      {
        path: "blog",
        element: <Blog></Blog>,
      },
    ],
  },
]);

function App() {
  
  return (
   
      <RouterProvider router={router} />
   
  )
}

export default App
