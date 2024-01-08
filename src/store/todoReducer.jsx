const initialState = {
    todoList: [id, new Date.getTime(Text = "Learn Redux", completed = false)]
}

//TYPES
export const ADD = 'ADD'
export const COMP = 'COMP'
export const DEL = 'DEL'
export const CLR = 'CLR'


//ACTION CREATOR FUNCTIONS
export const addTodo = (payload) => ({ type: ADD, payload })


//REDUCER
export const todoReducer (state = initialState, { type, payload }) => {
    switch (type) {

        case ADD:
            return { todoList[] }

        case COMP:
            return { ...state, ...payload }

        case DEL:
            return { ...state, ...payload }

        case CLR:
            return { ...state, ...payload }


        default:
            return state
    }
}
