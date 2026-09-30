import { Children } from 'react'
import Layout from './components/Layout.jsx'
import MainPage from './pages/1-index/MainPage.jsx'
import { createBrowserRouter,RouterProvider } from 'react-router-dom'
import CategoriesPage from './pages/categories/CategoriesPage.jsx'


const router=createBrowserRouter([
  {
    path:'/',
    element:<Layout/>,
    // errorElement: <ErrorPage />, // مستقبلاً سنضع هنا صفحة 404 احترافية
    children:[
      {
        index:true,
        element:<MainPage/>
      },
      {
        path:'products/',
        element: <div className="container mt-5 text-white"><h2>All Products Page (Coming Soon)</h2></div>
      },
      {
       path: "vendor/:slug",
       element: <div className="container mt-5 text-white"><h2>Vendor Profile (Coming Soon)</h2></div>

      },
      {
        path:'categories/',
        element:<CategoriesPage/>
      }

    ]
  }
])

const App = () => {
  return <RouterProvider router={router}/>
}

export default App