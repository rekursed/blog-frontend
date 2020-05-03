export const initialState = {
    posts: [],
    loading: false,
    hasErrors: false,
}

export default function postsReducer(state = initialState, action) {
    switch (action.type) {
        default:
            return state
    }
}
