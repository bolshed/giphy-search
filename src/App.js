import React, { useState, useEffect } from 'react'
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css"
import Loader from 'react-loader-spinner'
import SearchInput from './Components/SearchInput'
import Results from './Components/Results'

function App() {
    const [isLoading, setLoading] = useState(true)
    const [gifsData, setGifsData] = useState([])

    const giphyTrending = async () => {
        await fetch(`https://api.giphy.com/v1/gifs/trending?api_key=OGINPHAsY1NNNhf6XIlpX1OygKXDFfXV&limit=40`)
            .then(res => res.json())
            .then(data => {
                setGifsData(data.data)
                setLoading(false)
            })
            .catch(err => {
                console.log(err.message)
            })
    }

    useEffect(() => {
        giphyTrending()
    }, [])

    const searchGiphy = async (searchTerm) => {
        setLoading(true)

        await fetch(`https://api.giphy.com/v1/gifs/search?api_key=OGINPHAsY1NNNhf6XIlpX1OygKXDFfXV&q=${searchTerm}&limit=40&offset=0&rating=G&lang=en`)
            .then(res => res.json())
            .then(searchResponse => {
                setGifsData(searchResponse.data)
                setLoading(false)
            })
            .catch(err => {
                console.log(err.message)
            })
    }

    if (isLoading) return (
        <div className='loader'>
            <Loader type="Circles" color="yellow" height={120} width={120} />
        </div >)


    return (

        <div className='App'>
            <SearchInput isLoading={isLoading} search={searchGiphy} />
            <Results isLoading={isLoading} gifsData={gifsData} />
        </div>
    )
}

export default App
