function userReducer(state, action) {
    switch (action.type) {
        case "LOGIN":
        case "REGISTER":
            return action.username
        case "LOGOUT":
            return ""
        default:
            return state
    }
}

function todoReducer(state, action) {
    switch (action.type) {
        case 'CREATE_TODO':
            const newTodo = {
                title: action.title,
                desc:  action.desc,
                dateCreated: action.dateCreated,
                dateCompleted: action.dateCompleted,
                complete: action.complete,
            }
            return [...state, newTodo];
        case 'TOGGLE_TODO':
            let updatedTodo
            if (action.complete) {
                updatedTodo = {
                    title: action.title,
                    desc:  action.desc,
                    dateCreated: action.dateCreated,
                    dateCompleted: action.dateCompleted,
                    complete: action.complete.toString(),
                }
            }
            else {
                updatedTodo = {
                    title: action.title,
                    desc:  action.desc,
                    dateCreated: action.dateCreated,
                    dateCompleted: null,
                    complete: action.complete.toString(),
                }
            }

            const currentState = state
            currentState[action.index] = updatedTodo
            return currentState
        default:
            return state
    }
}

export default function appReducer(state, action) {
    return {
        user: userReducer(state.user, action),
        todos: todoReducer(state.todos, action)
    }
}