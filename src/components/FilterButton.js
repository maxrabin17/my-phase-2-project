import React from 'react'

const FilterButton = ({handleFilter}) => {
    
    // const handleFilter = () => {
    //     const filteredChar = char.filter((c) => {
    //         return c.status == "Alive"
    //     })
    //     console.log(filteredChar)
    //     setChar(filteredChar)
    // }

    return (
        <div>
            <button onClick={handleFilter}>Filter</button>
        </div>
    )
}

export default FilterButton
