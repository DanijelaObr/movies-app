import { BrowserRouter, Routes, Route } from "react-router-dom";
import { lazy, Suspense } from 'react'
import Navbar from './components/Navbar'

const Home = lazy (() => import('./pages/Home'))
const Search = lazy (() => import('./pages/Search'))
const MovieDetails = lazy (() => import('./pages/MovieDetails'))
const Favorites = lazy (() => import('./pages/Favorites'))


function App() {
  return (
    <BrowserRouter>
    <Navbar />
    <Suspense fallback={<div>Loading...</div>}>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/search" element={<Search />}/>
      <Route path="/movie/:id" element={<MovieDetails />} />
      <Route path="/favorites" element={<Favorites />} />
    </Routes>
    </Suspense>
    </BrowserRouter>
  )
}

export default App