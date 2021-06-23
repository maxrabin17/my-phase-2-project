import React, {useState} from 'react'
import {Button} from 'react-bootstrap'
import IndQuote from './IndQuote'

const Quotes = () => {
    
    const [quotes, setQuotes] = useState([])
    const handleQuotes = () => {
        fetch('https://www.breakingbadapi.com/api/quote/random')
        .then(response => response.json())
        .then(data => setQuotes(data))
    }

    return (
        <div className="quotes-background">
            <Button onClick={handleQuotes} className='quoteButton' variant="success">Click to get a Random Quote!</Button>
            {quotes.map(quote => 
            <IndQuote key={quote.quote_id} quote={quote}/>
            )}
        </div>
    )
}

export default Quotes

