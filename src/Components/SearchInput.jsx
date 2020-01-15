import React, { Component } from 'react'
import { Button, InputGroup, InputGroupAddon, Input, Card, CardImg } from 'reactstrap'
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
        fetch('https://api.giphy.com/v1/gifs/trending?api_key=OGINPHAsY1NNNhf6XIlpX1OygKXDFfXV&limit=40')
            .then(resp => {
                return resp.json()
            })
            .then(data => {
                let gifs = data.data.map((gif) => {
                    return (
                        <div key={gif.id}>
                            <Card>
                                <CardImg top width="10%" src={gif.images.preview_gif.url} alt={gif.title} />
                            </Card>
                        </div>
                    )
                })
                this.setState({ gifs: gifs })
                console.log("STATE:", this.state.gifs)
            })
            .catch(function () {
                alert("Error loading")
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
                <div className='gifs'>
                    {this.state.gifs}
                </div>
            </div>
        )
    }
}