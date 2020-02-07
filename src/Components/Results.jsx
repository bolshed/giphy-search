import React, { useState } from 'react'
import { Progress } from 'reactstrap';


import '../App.css'

export default function Results(props) {

    const [loadingCounter, updateLoadingCounter] = useState(1)
    const imageLoaded = () => {
        updateLoadingCounter(loadingCounter + 1)
        if (loadingCounter >= props.gifsData.length) {
            props.updateLoadingStatus(false)
            updateLoadingCounter(loadingCounter - props.gifsData.length)

        }
    }

    const renderProgress = (percent) => {
        return (
            <div className="progressBar">
                <Progress
                    style={props.loading ? {} : { visibility: 'hidden' }}
                    animated color="warning"
                    value={percent}
                    max={props.gifsData.length}
                />
            </div>)
    }

    return (
        <div className="results">
            {renderProgress(loadingCounter)}

            <div className='gifsGallery'>
                {props.gifsData.map(gif => (
                    <div className='gifs' key={gif.id}>
                        <img src={gif.images.fixed_height.url}
                            alt=''
                            onLoad={imageLoaded}
                        />
                    </div>))
                }
            </div>
        </div>
    )
}