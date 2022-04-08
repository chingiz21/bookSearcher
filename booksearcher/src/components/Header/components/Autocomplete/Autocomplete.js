import React from 'react'
import './Autocomplete.css';

const Autocomplete = ({ books }) => {
    return (
        <div className='autocomplete'>
            <ul className='autocomplete__list'>
                {books.map((item) =>
                    <li className='autocomplete__item'>{item.volumeInfo.title}</li>
                )}
            </ul>
        </div>
    )
}

export default Autocomplete;