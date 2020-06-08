import axios from 'axios'

export const GET_POSTS = 'GET POSTS'
export const GET_POSTS_SUCCESS = 'GET_POSTS_SUCCESS'
export const GET_POSTS_FAILURE = 'GET_POSTS_FAILURE'
import config from "../config";

export const getPosts = () => ({
    type: GET_POSTS,
})

export const getPostsSuccess = posts => ({
    type: GET_POSTS_SUCCESS,
    payload: posts,
})

export const getPostsFailure = () => ({
    type: GET_POSTS_FAILURE,
})

export function fetchPosts() {
    return async dispatch => {
        dispatch(getPosts())
        try {
            const res = await axios.get(`${config.BACKEND_URL}/all`)
            console.log(res.data)
            dispatch(getPostsSuccess([...res.data]))
        } catch (e) {
            dispatch(getPostsFailure())
        }
    }

}
