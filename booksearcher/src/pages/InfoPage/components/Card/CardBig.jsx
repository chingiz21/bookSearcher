import './CardBig.css';
import google from '../../../../imgs/google.svg';
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { Button, CircularProgress } from '@mui/material';
import { Request } from '../../../../BookAPI/Request';
import { setId } from '../../../../store/bookReducer';

const CardBig = () => {
    const [book, setBook] = useState(null);
    const [loading, setLoading] = useState(true);
    const bookId = useSelector(state => state.books.id);
    const dispatch = useDispatch();
    const key = 'AIzaSyDNF5Lm3tj0G0OR8T7tY01zKg7STyBVGWM';

    const backClickHandler = () => {
        dispatch(setId('No ID'));
    };

    useEffect(() => {
        const bookApi = new Request('https://www.googleapis.com/books/v1');
        let data = {
            method: 'GET',
            id: bookId,
            key: key
        };

        bookApi.getBook('volumes', data)
            .then(response => {
                console.log(response);
                setBook(response);
                setLoading(false);
                return response
            })
    }, []);

    if (loading) {
        return (
            <div className="circular">
                <CircularProgress />
            </div>
        )
    }
    else {
        return (
            <div className="wrapper__card_b">
                <div className="card__img_b">
                    <img src={book.volumeInfo.imageLinks.large} className='bookPict_b' />
                </div>
                <div className="card__descr_b">
                    <Button variant='outlined' sx={ {marginBottom: 5} } onClick={backClickHandler}>Back</Button>
                    <div className="card__descr_category_b">{book.volumeInfo.categories}</div>
                    <div className="card__descr_title_b">{book.volumeInfo.title}</div>
                    <div className="card__descr_author_b">{book.volumeInfo.authors === undefined ? book.volumeInfo.authors : book.volumeInfo.authors.join(', ')}</div>
                    <hr />
                    {book.volumeInfo.description === undefined ? "No description for this book" : book.volumeInfo.description.replace(/<[^>]+>/g)}
                    <hr />
                    <div className='google-play'>
                        <a target="_blank" href={book.volumeInfo.infoLink}>
                            <img src={google} className='google-play_img_b' />
                        </a>
                    </div>
                </div>
            </div>
        )
    }
}

export default CardBig;