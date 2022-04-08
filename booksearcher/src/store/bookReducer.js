const SET_ID = 'SET_ID';
const SET_BOOKS = 'SET_BOOKS';

const defaultState = {
    id: 'No ID',
    books: {}
};

export const bookReducer = (state = defaultState, action) => {
    switch (action.type) {
        case SET_ID:
            return {...state, id: action.payload};        
        case SET_BOOKS:
            return {...state, books: action.payload};
        default:
            return state;
    }
};

export const setId = (id) => ({type: SET_ID, payload: id});
export const setBooks = (books) => ({type: SET_BOOKS, payload: books});