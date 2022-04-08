const SET_FILTER = 'SET_FILTER';

const defaultState = {
    filter: 'none',
};

export const filterReducer = (state = defaultState, action) => {
    switch (action.type) {
        case SET_FILTER:
            return {...state, filter: action.payload};        
        default:
            return state;
    }
};

export const setFilter = (filterOption) => ({type: SET_FILTER, payload: filterOption});