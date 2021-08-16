const initialState = {
    books: [
    //     {
    //         id: 1,
    //         title: 'JScript',
    //         author: 'jJson'
    //     },
    //     {
    //       id: 2,
    //       title: 'React',
    //       author: 'ReRan'
    //   },

    ]
};

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case 'BOOKS_LOADED':
            return {
                books: action.payload
            };
            default:  
            return state;
    }
   
};

export default reducer;