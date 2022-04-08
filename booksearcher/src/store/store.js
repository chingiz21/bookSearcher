import { createStore, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { filterReducer } from './filterReducer';
import { bookReducer} from './bookReducer';

const rootReducer = combineReducers({
    books: bookReducer,
    filter: filterReducer
})

export const store = createStore(rootReducer, composeWithDevTools());