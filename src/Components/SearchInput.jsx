import React, { Component } from 'react'
import { Button, InputGroup, InputGroupAddon, Input, CardImg } from 'reactstrap'
import { GridList, GridListTile } from '@material-ui/core';
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css"
import Loader from 'react-loader-spinner'
import '../App.css'

export default class SearchInput extends Component {
    constructor() {
        super()
        this.state = {
            isLoading: true,
            gifs: []
        }
    }

    async componentDidMount() {
        try {
            const response = await fetch(`https://api.giphy.com/v1/gifs/trending?api_key=OGINPHAsY1NNNhf6XIlpX1OygKXDFfXV&limit=40`);
            if (!response.ok) {
                throw alert(response.statusText);
            }
            const data = await response.json();
            let gifs = data.data.map((gif) => {
                return (
                    <div key={gif.id} className='gifs'>
                        <CardImg src={gif.images.fixed_width.url} alt={gif.title} />
                    </div>
                )
            })
            setTimeout(() => {
                this.setState({
                    gifs: gifs,
                    isLoading: false
                })
            }, 3000);
        }
        catch (error) {
            alert(error);
        }
    }

    render() {

        if (this.state.isLoading) {
            return <div className='loader'>
                <Loader type="Circles" color="yellow" height={80} width={80} />
            </div>
        }
        return (
            <div className='main'>
                <InputGroup className='search'>
                    <Input placeholder="Search GIFs" />
                    <InputGroupAddon addonType="append">
                        <Button> Search </Button>
                    </InputGroupAddon>
                </InputGroup>
                <div className='gifsContainer'>
                    {this.state.gifs}
                </div>
            </div>
        )
    }
}

{/* <div className={classes.root}>
    <GridList cellHeight={160} className={classes.gridList} cols={4}>
        <GridListTile key={gif.id} cols={1}>
            <img src={gif.images.fixed_width.url} alt={gif.title} />
        </GridListTile>
        )
                    </GridList>
</div> */}