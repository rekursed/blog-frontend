import * as actions from '../actions/postsActions'

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
        case actions.GET_POSTS:
            return {...state, loading: true}
        case actions.GET_POSTS_SUCCESS:
            console.log('in red')
            console.log(action.payload)
            return {posts: action.payload, loading: false, hasErrors: false}
        case actions.GET_POSTS_FAILURE:
            return {...state, loading: false, hasErrors: true}
        default:
            return state
    }
}
