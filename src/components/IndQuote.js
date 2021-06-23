import React from 'react'
import {Button} from 'react-bootstrap'


const IndQuote = ({quote}) => {
    
    const handleQuotes = () => {
        let favQuote = {
            author: quote.author,
            quote: quote.quote
        }
        let config = {
            method: "POST",
            headers: {
                "Content-type": "application/json",
                "Accepts": "application/json"
            },
            body: JSON.stringify(favQuote)
        }
        fetch("http://localhost:3000/favQuotes", config)
            .then(res => res.json())
            .then(data => console.log(data))
    }
    return (
        <div className="quotes-page">
            <h1>{quote.quote}</h1>
            <h1> - {quote.author}</h1>
            <Button onClick={handleQuotes} className="quote-button" variant="outline-light">Add to Favorites</Button>
        </div>
    )
}
    
export default IndQuote
    
    

