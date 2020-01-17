import React, { useState, useEffect } from 'react'
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css"
import Loader from 'react-loader-spinner'
import SearchInput from './Components/SearchInput'
import Results from './Components/Results'
import { Badge, UncontrolledAlert } from 'reactstrap'



export default function App() {
  const [isLoading, setLoading] = useState(true)
  const [gifsData, setGifsData] = useState([])
  const [errorMessage, setErrorMessage] = useState('')

  useEffect(() => {
    const giphyTrending = async () => {
      await fetch(`https://api.giphy.com/v1/gifs/trending?api_key=OGINPHAsY1NNNhf6XIlpX1OygKXDFfXV&limit=50&rating=R`)
        .then(res => res.json())
        .then(data => {
          setGifsData(data.data)
          setLoading(false)
        })
        .catch(err => setErrorMessage(err.message))
    }
    giphyTrending()
  }, [])

  const searchGiphy = async (searchTerm) => {
    setLoading(true)

    await fetch(`https://api.giphy.com/v1/gifs/search?api_key=OGINPHAsY1NNNhf6XIlpX1OygKXDFfXV&q=${searchTerm}&limit=50&offset=0&rating=G&lang=en`)
      .then(res => res.json())
      .then(searchResponse => {
        setGifsData(searchResponse.data)
        setLoading(false)
      })
      .catch(err => setErrorMessage(err.message))
  }

  if (errorMessage) {
    return (
      <div>
        <UncontrolledAlert color="secondary">{errorMessage}</UncontrolledAlert>
      </div>
    )
  }

  return (
    <div className='App'>
      <h1><Badge color="secondary">Giphy Search</Badge></h1>
      <SearchInput isLoading={isLoading} search={searchGiphy} />
      {isLoading ?
        <Loader className='loader' type="Circles" color="yellow" height={120} width={120} />
        :
        <Results isLoading={isLoading} gifsData={gifsData} />}
    </div>
  )
}