import React from 'react'
import MyNav from '../components/MyNav'
import MyCarousel from '../components/MyCarousel'
import MyFooter from '../components/MyFooter'
import MyBookList from '../components/MyBookList'
import MySearchBar from '../components/MySearchBar'
import { useState, useEffect } from 'react'

const Home = () => {

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const [books, setBooks] = useState([]);
  //const [renderBooks, setRenderBooks] = useState([]);

  const [query, setQuery] = useState('');//testo che vado a mettere nella SearchBar
  

  const getBooks = async () => {
    setLoading(true);
    try {
      const data = await fetch("https://epibooks.onrender.com/");
      const response = await data.json();
      setBooks(response);
      //setRenderBooks(response);
      setLoading(false);
    } catch (error) {
      if (error) {
        setError("Errore durante la ricezione dei dati");
      }
    }
  }

  useEffect(() => {
    getBooks();
  }, [])

  const filterBooks = books.filter(book => book.title.toLowerCase().includes(query.toLowerCase()));

  return (
    <>
      <MyNav />
      <MyCarousel />
      <MySearchBar setQuery={setQuery}/>
      <MyBookList loading={loading} error={error} filterBooks={filterBooks}/>
      <MyFooter />
    </>
  )
}

export default Home;