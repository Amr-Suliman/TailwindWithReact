import Home from './Components/Home/Home'
import About from './Components/About/About'
import Portfolio from './Components/Portfolio/Portfolio'
import Contact from './Components/Contact/Contact'
import Layout from './Components/Layout/Layout'
import NotFound from './Components/NotFound/NotFound'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

const routers = createBrowserRouter([
  {
    path: '/', element: <Layout />, children: [
      { index: true, element: <Home /> },
      { path: '/about', element: <About /> },
      { path: '/portfolio', element: <Portfolio /> },
      { path: '/contacts', element: <Contact /> },
      { path: '*', element: <NotFound /> },
    ]

  }])


function App() {



  return (
    <>
      <RouterProvider router={routers}></RouterProvider>
    </>
  )
}

export default App
