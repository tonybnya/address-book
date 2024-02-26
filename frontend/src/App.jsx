import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './pages/Layout';
import LandingPage from './pages/LandingPage'
import ContactsPage from './pages/ContactsPage'
import SingleContactPage from './pages/SingleContactPage'
import NotFoundPage from './pages/NotFoundPage'

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Layout />}>
            <Route index element={<LandingPage />} />
            <Route path='landing' element={<LandingPage />} />
            <Route path='landing-page' element={<LandingPage />} />
            <Route path='home' element={<LandingPage />} />
            <Route path='contacts' element={<ContactsPage />} />
            <Route path='single-contact' element={<SingleContactPage />} />
            <Route path='*' element={<NotFoundPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
