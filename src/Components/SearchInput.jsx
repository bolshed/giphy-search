import React, { Component } from 'react'
import { Button, InputGroup, InputGroupAddon, Input } from 'reactstrap'
import '../App.css'

export default class SearchInput extends Component {
    render() {
        return (
            <InputGroup className='Search'>
                <Input placeholder="Search GIFs" />
                <InputGroupAddon addonType="append">
                    <Button> Search </Button>
                </InputGroupAddon>
            </InputGroup>
        )
    }
}