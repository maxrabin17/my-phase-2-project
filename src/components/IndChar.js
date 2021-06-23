import React from 'react'

const IndChar = ({ character }) => {
    
    const handleSubmit = (e) => {
        e.preventDefault()
        let favCharacter = {
            name: character.name,
            image: character.img
        }
        let config = {
            method: "POST",
            headers: {
                "Content-type": "application/json",
                "Accepts": "application/json"
            },
            body: JSON.stringify(favCharacter)
        }
        fetch("http://localhost:3000/favCharacters", config)
            .then(res => res.json())
            .then(data => console.log(data))
    }
    return (
        <div className='char-card-container'>
            <div className='char-card'>
                <div className='char-card-front'>
                    <img className="char-image" src={character.img} alt="" />
                </div>
                <div className='char-card-back'>
                    <br/>
                    <h4><strong>{character.name}</strong></h4>
                    <h5>Nickname: {character.nickname}</h5>
                    <h5>Portrayed By: {character.portrayed}</h5>
                    <h5>Status: {character.status}</h5>
                    <h5>Occupation(s): {character.occupation.join(', ')}</h5>
                    <form onSubmit={handleSubmit}>
                        <input className="fav-char-button" type="submit" value="Add to Favorites" />
                    </form>
                </div>
            </div>
        </div>
    )
}

export default IndChar    




