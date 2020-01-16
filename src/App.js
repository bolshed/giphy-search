import React, { useState, useEffect } from 'react'
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css"
import Loader from 'react-loader-spinner'
import SearchInput from './Components/SearchInput'
import Results from './Components/Results'

function App() {
    const [isLoading, setLoading] = useState(true)
    const [gifsData, setGifsData] = useState([])
    const [searchTerm, setSearchTerm] = useState("trending");


    const fetchGiphyData = async () => {
        await fetch(`https://api.giphy.com/v1/gifs/${searchTerm}?api_key=OGINPHAsY1NNNhf6XIlpX1OygKXDFfXV&limit=40`)
            .then(res => res.json())
            .then(data => {
                setGifsData(data.data)
                setLoading(false)
            }).catch(err => {
                console.log(err.message)
            })
    }

    useEffect(() => {
        fetchGiphyData()
    })


    return (
        <div className='App'>
            <SearchInput isLoading={isLoading} gifsData={gifsData} />
            <Results isLoading={isLoading} gifsData={gifsData} />
        </div>
    )
}

export default App
