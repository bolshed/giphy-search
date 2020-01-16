import React, { useState, useEffect } from 'react'
import { Button, InputGroup, InputGroupAddon, Input, CardImg } from 'reactstrap'
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css"
import Loader from 'react-loader-spinner'
import '../App.css'

const SearchInput = (props) => {
    return (
        props.isLoading ?
            <div className='loader'>
                <Loader type="Circles" color="yellow" height={120} width={120} />
            </div >
            :
            <InputGroup className='search'>
                <Input placeholder="Search GIFs" />
                <InputGroupAddon addonType="append">
                    <Button> Search </Button>
                </InputGroupAddon>
            </InputGroup>
    )
}

export default SearchInput
