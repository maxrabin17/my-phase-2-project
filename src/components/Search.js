import React, {useState} from 'react'
import {Form} from 'react-bootstrap'


const Search = ({ getInput }) => {
    const [text, setText] = useState('')
    const handleSearch = (inp) => {
        setText(inp)
        getInput(inp)
    }
    return (
        <div>
            <Form.Group>
                <Form.Control 
                className="search-button"
                size="lg" 
                type="text" 
                placeholder="Search Characters by Name" 
                value={text} 
                onChange={(e) => handleSearch(e.target.value)}/>
            </Form.Group>
        </div>
    )
}

export default Search
