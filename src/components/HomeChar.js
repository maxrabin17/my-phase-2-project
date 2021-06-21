import React from 'react'

const HomeChar = ({c, handleDelete}) => {
    return (
        <section>
            <h3 className="head-name">{c.name}</h3>
            <img src={c.image} alt="CharPic" />
            <br/>
            <button className="delete-char" id={c.id} onClick={handleDelete}>Remove</button>
        </section>
    )
}

export default HomeChar
