//reducers take 2 things:
// 1.) the action (info of what happened)
// 2.) copy of the current state

function posts(state = [], action) {
    switch (action.type) {
        case "INCREMENT_LIKES":
            const i = action.index
            return [
                ...state.slice(0, i),
                {...state[i], likes: state[i].likes + 1 },
                ...state.slice(i + 1)
            ]

        default:
            return state;
    }
}

export default posts