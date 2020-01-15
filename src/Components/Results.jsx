import React, { useState, useEffect } from 'react'
import { CardImg } from 'reactstrap'
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css"
import Loader from 'react-loader-spinner'
import '../App.css'

const Results = (props) => {
    return (
        props.isLoading ? <div className='loader'>
            <Loader type="Circles" color="yellow" height={120} width={120} />
        </div >
            :
            <div className='gifsContainer'>
                {props.gifsData.map(gif => (
                    <div key={gif.id}>
                        <CardImg className='gifs' src={gif.images.fixed_height_small.url} alt={gif.title} />
                    </div>))}
            </div>
    )
}

export default Results




