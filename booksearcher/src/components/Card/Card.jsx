import './Card.css';
import { useDispatch, useSelector } from 'react-redux';
import { setId } from '../../store/bookReducer';

const Card = ({ book, children }) => {
    const dispatch = useDispatch();

    const onClickHandler = () => {
        dispatch(setId(book.id));
    };

    return (
        <div className="wrapper__card" onClick={onClickHandler}>
            <div className="card__img">
                <img src={(book.volumeInfo.imageLinks !== undefined) ? book.volumeInfo.imageLinks.thumbnail : ''} className='bookPict' />
            </div>
            <div className="card__descr">
                <div className="card__descr_category">{book.volumeInfo.categories}</div>
                <div className="card__descr_title">{book.volumeInfo.title}</div>
                <div className="card__descr_author">{book.volumeInfo.authors}</div>
                <hr />
                {children}
            </div>
        </div>
    )
}

export default Card;