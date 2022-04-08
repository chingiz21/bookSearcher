import { Fragment, useEffect, useState } from "react";
import './App.css';
import MainPage from "../pages/MainPage";
import { Request } from "../BookAPI/Request";
import { CircularProgress } from "@mui/material";
import { useDispatch } from "react-redux";
import { setBooks } from "../store/bookReducer";

const App = () => {
    const [isLoading, setIsLoading] = useState(true);
    const [result, setResult] = useState(null);
    const [inputValue, setInputValue] = useState('');
    const dispatch = useDispatch();
    // this key is no longer available, just paste there your own api key
    const key = 'AIzaSyDNF5Lm3tj0G0OR8T7tY01zKg7STyBVGWM';

    const onChangeHandler = (e) => {
        setInputValue(e.target.value);
    }

    const onClickHandler = (e) => {
        const bookApi = new Request('https://www.googleapis.com/books/v1');
        let data = {
            method: 'GET',
            data: {
                q: inputValue,
                key: key
            }
        }
        bookApi.getListOfBooks('volumes', data)
            .then(response => {
                setResult(response);
                setIsLoading(false);
                console.log('fetch')
            });
    };

    useEffect(() => {
        const bookApi = new Request('https://www.googleapis.com/books/v1');
        let data = {
            method: 'GET',
            data: {
                q: 'flowers',
                key: key
            }
        }
        bookApi.getListOfBooks('volumes', data)
            .then(response => {
                dispatch(setBooks(response));
                setResult(response);
                setIsLoading(false);
                console.log('fetch')
            });
        }, [])

    if (isLoading) {
        return (
            <div className="circular">
                <CircularProgress />
            </div>
        )
    }
    else {
        return (
            <Fragment>
                <MainPage books={result} onChange={onChangeHandler} onClick={onClickHandler} />
            </Fragment>
        )
    }
}

export default App;