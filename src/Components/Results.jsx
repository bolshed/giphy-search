import React from 'react'
import { CardImg } from 'reactstrap'
import '../App.css'

export default function Results(props) {
    return (
        <div className='gifsContainer'>
            {props.gifsData.map(gif => (
                <div key={gif.id}>
                    <CardImg className='gifs' src={gif.images.fixed_height_small.url} alt={gif.title} />
                </div>))}
        </div>
    )
}