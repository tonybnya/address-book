import './App.css'
import {
  createBrowserRouter,
  RouterProvider,
  Outlet,
} from "react-router-dom";
import Navbar from './components/Navbar'
import AddContactPage from './pages/AddContactPage';
import ContactsPage from './pages/ContactsPage'
import ErrorPage from './pages/ErrorPage'
import LandingPage from './pages/LandingPage'
import SingleContactPage from './pages/SingleContactPage'
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
      {
        path: "/add_contact",
        element: <AddContactPage />,
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
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
