import React, {useState, useEffect} from 'react'
import '../App.css';
import HomeChar from './HomeChar';
import HomeQuote from './HomeQuote';

const Home = () => {
    const [char, setChar] = useState([])
    const [quote, setQuote] = useState([])

    useEffect(() => {
        fetch(`http://localhost:3000/favCharacters`)
        .then(res => res.json())
        .then(data => setChar(data))

        fetch(`http://localhost:3000/favQuotes`)
        .then(res => res.json())
        .then(data => setQuote(data))
        // .then(data => console.log(data))
    }, [])

const handleDeleteChar = (e) => {
    let config = {
        method: "DELETE",
        headers: {
            "Content-type": "application/json",
            "Accepts": "application/json"
        }
    }
    fetch(`http://localhost:3000/favCharacters/${e.target.id}`, config)
        .then(res => res.json())
        .then(data => console.log(data))

        filterChar(e.target.id)

    } 

    const filterChar = (id) => {
        const updatedChar = char.filter((char) => {
            return parseInt(id) !== char.id
        })
        setChar(updatedChar)
    }

const handleDeleteQuote = (e) => {
    let config = {
        method: "DELETE",
        headers: {
            "Content-type": "application/json",
            "Accepts": "application/json"
        }
    }
    fetch(`http://localhost:3000/favQuotes/${e.target.id}`, config)
        .then(res => res.json())
        .then(data => console.log(data))

        filterQuote(e.target.id)

    } 

    const filterQuote = (id) => {
        const updatedQuote = quote.filter((quote) => {
            return parseInt(id) !== quote.id
        })
        setQuote(updatedQuote)
    }

    
    return (
        <div className="home-page-container">
            <h1>Welcome to Breaking Bad Quick Facts & Quotes</h1>
            <div className="home-page-elements">
                <div className="character-column">
                    <h2>Favorite Characters</h2>
                        <div className="fav-char">
                            {char.map(c => <HomeChar c={c} handleDelete={handleDeleteChar}/>)}
                        </div>
                </div>
                <div className="quote-column">
                    <h2>Favorite Quotes</h2>
                        <div className="fav-quote">
                            {quote.map(q => <HomeQuote q={q} handleDelete={handleDeleteQuote}/>)}
                        </div>
                </div>
            </div>
        </div>
    )
}

export default Home
