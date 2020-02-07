import React, { useState, useEffect } from 'react'
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css"
import SearchInput from './Components/SearchInput'
import Results from './Components/Results'
import { Badge, UncontrolledAlert } from 'reactstrap'

export default function App() {
  const [loading, setLoading] = useState(true)
  const [gifsData, setGifsData] = useState([])
  const [errorMessage, setErrorMessage] = useState('')

  const updateLoadingStatus = (status) => {
    setLoading(status)
  }

  const giphyTrending = async () => {
    await fetch(`https://api.giphy.com/v1/gifs/trending?api_key=OGINPHAsY1NNNhf6XIlpX1OygKXDFfXV&limit=15&rating=G`)
      .then(res => res.json())
      .then(data => {
        setGifsData(data.data)
      })
      .catch(err => setErrorMessage(err.message))
  }

  useEffect(() => {
    giphyTrending()
  }, [])

  const searchGiphy = async (searchTerm) => {
    setLoading(true)

    await fetch(`https://api.giphy.com/v1/gifs/search?api_key=OGINPHAsY1NNNhf6XIlpX1OygKXDFfXV&q=${searchTerm}&limit=15&offset=0&rating=G&lang=en`)
      .then(res => res.json())
      .then(searchResponse => {
        setGifsData(searchResponse.data)
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
      <h1 onClick={giphyTrending}><Badge color="secondary" >Giphy Search</Badge></h1>
      <SearchInput
        search={searchGiphy}
        gifsData={gifsData}
      />
      <Results
        loading={loading}
        gifsData={gifsData}
        updateLoadingStatus={updateLoadingStatus}
      />
    </div>
  )
}