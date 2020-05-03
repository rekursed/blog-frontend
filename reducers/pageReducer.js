export const initialState = {
    posts: [],
    loading: false,
    hasErrors: false,
    title: 'init',
}

export default function postsReducer(state = initialState, action) {
    switch (action.type) {
        case 'TITLE':
            return {...state, title: action.payload};
        default:
            return state
    }
}
