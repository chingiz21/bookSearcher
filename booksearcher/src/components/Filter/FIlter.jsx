import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setFilter } from '../../store/filterReducer';
import './Filter.css';

const Filter = () => {
    const dispatch = useDispatch();
    const books = useSelector(state => state.books.books);
    
    const onChangeHandler = (e) => {
        dispatch(setFilter(e.target.value));
    }

    return (
        <div className="filters__container">
            <form className="filter__form_w">
                <span className="form__label">Categories</span>
                {books === undefined ? <div></div> : <select className="form__select" onChange={onChangeHandler}>
                    <option className='form__option'>All</option>
                    {books.items.map(book => 
                        book.volumeInfo.categories === undefined ? '' :
                        book.volumeInfo.categories.map(category =>
                            <option className='form__option'>{category}</option>
                        )
                    )}
                </select>}
            </form>
        </div>
        
    )
}

export default React.memo(Filter);