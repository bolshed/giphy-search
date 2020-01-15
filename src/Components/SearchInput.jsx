import React, { Component } from 'react'
import { Button, InputGroup, InputGroupAddon, Input } from 'reactstrap'
import '../App.css'

export default class SearchInput extends Component {
    constructor() {
        super()
        this.state = {
            isLoaded: false,
            gifs: []
        }
    }

    componentDidMount() {
        fetch('https://api.giphy.com/v1/gifs/trending?api_key=OGINPHAsY1NNNhf6XIlpX1OygKXDFfXV&limit=25&rating=PG')
            .then(resp => {
                return resp.json()
            })
            .then(data => {
                const giphyData = data.data

                let gifs = []
                for (let i = 0; i < giphyData.length; i++) {
                    gifs.push(giphyData[i].images.preview_webp)
                }
                // let gifs = data.data.map((gif) => {
                //     return (
                //         <div key={gif.resp}>
                //         </div>
                //     )
                // })
                console.log(gifs)
            })
    }
    render() {
        return (
            <div>
                <InputGroup className='Search'>
                    <Input placeholder="Search GIFs" />
                    <InputGroupAddon addonType="append">
                        <Button> Search </Button>
                    </InputGroupAddon>
                </InputGroup>

            </div>
        )
    }
}