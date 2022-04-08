import { useSelector } from "react-redux";
import Header from "../../components/Header";
import CardsList from "./components/CardsList/CardsList";
import CardBig from '../InfoPage/components/Card';
import { filterBooks } from "../../helpers/filterBooksByCategory";
import React from "react";

const MainPage = ({ books, onChange, onClick }) => {
    const filterOption = useSelector(state => state.filter.filter);

    const filtered = filterBooks(books, filterOption);
    
    const bookId = useSelector(state => state.books.id);
    
    return (
        <div>
            <Header onChange={onChange} onClick={onClick} books={books.items} />
            {bookId === 'No ID' ? <CardsList books={filtered} /> : <CardBig />}
        </div>
    )
}

export default React.memo(MainPage);