import {combineReducers} from 'redux'
import postsReducer from './pageReducer'

// const rootReducer = (state = {foo: ''}, action) => {
//     switch (action.type) {
//         case 'FOO':
//             return {...state, foo: action.payload};
//         default:
//             return state
//     }
// };

const rootReducer = combineReducers({
    posts: postsReducer,
})

export default rootReducer
