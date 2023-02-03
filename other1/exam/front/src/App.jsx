import Home from './Home'
import Red from './Red'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'

const router = createBrowserRouter([
  {
    path:'/',
    element: <Home/>,
  },
  {
      path:'/:id',
      element: <Home/>,
    },
    {
      path:'/:id',
      element: <Red/>,
    }
])

function App() {
  return (
    <div>
    <RouterProvider router={router} />
    </div>
  );
}

export default App;