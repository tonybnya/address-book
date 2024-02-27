import './App.css'
import {
  createBrowserRouter,
  RouterProvider,
  Outlet,
} from "react-router-dom";
import Navbar from './components/Navbar'
import LandingPage from './pages/LandingPage'
import ContactsPage from './pages/ContactsPage'
import SingleContactPage from './pages/SingleContactPage'
import ErrorPage from './pages/ErrorPage'
import Footer from './components/Footer'

const Layout = () => {
  return (
    <div>
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  )
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <LandingPage />,
      },
      {
        path: "/contacts",
        element: <ContactsPage />,
      },
      {
        path: "/single-contact/:id",
        element: <SingleContactPage />,
      },
    ],
  },
  {
    path: '/',
    element: <LandingPage />
  },
  {
    path: 'contacts',
    element: <ContactsPage />
  },
  {
    path: '*',
    element: <ErrorPage />
  }
])

function App() {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  )
}

export default App
