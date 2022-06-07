

export const todoReducer = (state = [], action) => {
    switch (action.type) {
        case 'add':

            return [...state, action.payload];
        case 'delete':
            return state.filter(todo => todo.id !== action.payload); //payload seria el numero id 12321321321 ejemplo  

        case 'toggle':
            return state.map(todo =>
                (todo.id === action.payload)
                    ? { ...todo, done: !todo.done }
                    : todo
            );
        // case  'toggle':
        //     return state.map ( todo => {
        //         if( todo.id === action.payload ) {
        //             return{
        //                 ...todo,
        //                 done: !todo.done
        //             }
        //         } else{
        //             return  todo;
        //         }
        //     })    

        default:
            return state;
    }
}