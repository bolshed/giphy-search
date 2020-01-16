import React, { useState } from 'react'
import { Button, InputGroup, InputGroupAddon, Input } from 'reactstrap'
import '../App.css'

const SearchInput = (props) => {
    const [searchTerm, setSearchTerm] = useState("")

    const handleSearchInputChanges = (e) => {
        setSearchTerm(e.target.value)
    }

    const executeSearchFunction = (e) => {
        e.preventDefault()
        props.search(searchTerm)
    }

    const handleKeyDown = (e) => {
        if (e.key === 'Enter') {
            e.preventDefault()
            props.search(searchTerm)
        }
    }

    return (
        <InputGroup className='search'>
            <Input
                placeholder="Search GIFs"
                value={searchTerm}
                onChange={handleSearchInputChanges}
                type='text'
                onKeyDown={handleKeyDown}
            />
            <InputGroupAddon addonType="append">
                <Button onClick={executeSearchFunction}>Search</Button>
            </InputGroupAddon>
        </InputGroup>
    )
}

export default SearchInput
