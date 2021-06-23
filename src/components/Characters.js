import React, {useState, useEffect} from 'react'
import Search from './Search'
import IndChar from './IndChar'

const Characters = () => {
    
    const [characters, setCharacters] = useState([])
    const [search, setSearch] = useState('')
    useEffect(() => {
        fetch(`https://www.breakingbadapi.com/api/characters?name=${search}`)
        .then(res => res.json())
        .then(data => setCharacters(data))
    }, [search])
    
    return (
        <div className="char-background-image">
            <Search getInput={(inp) => {
                setSearch(inp)
            }}/>
            <section className='cards'>
                {characters.map(character => 
                <IndChar key={character.char_id} character={character}/>  
                )}
            </section>
        </div>
    )
}

export default Characters


