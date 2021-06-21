import React from 'react'

const HomeQuote = ({q, handleDelete}) => {
    return (
        <ul>
            <li>{q.quote}</li>
            <li> - {q.author}</li>
            <button className="delete-quote" id={q.id} onClick={handleDelete}>Remove</button>
        </ul>
    )
}

export default HomeQuote
