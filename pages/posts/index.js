import React, {useEffect} from "react";
import {connect} from "react-redux";
import Layout from "../../components/layout";
import Post from "../../components/blog/post";
import {fetchPosts} from "../../store/actions/postsActions";


const PostsPage = ({dispatch, loading, posts, hasErrors}) => {
    useEffect(() => {
        dispatch(fetchPosts())
    }, [dispatch])

    const renderPosts = () => {
        if (loading) return <p>Loading posts...</p>
        if (hasErrors) return <p>Unable to display posts.</p>
        // console.log(posts);
        if (posts.length > 0) {
            console.log(posts)
            return posts.map(post => <div className="column is-3"><Post key={post.id} post={post}/></div>)
                }
                }
                return (
                <Layout>
                    <div className="columns">
                        {renderPosts()}
                    </div>
                </Layout>
                );
                }

                const mapStateToProps = state => ({
                    loading: state.posts.loading,
                    posts: state.posts.posts,
                    hasErrors: state.posts.hasErrors,
                })

                // PostsPage.getInitialProps = ({store, isServer, pathname, query}) => {
//     // store.dispatch({type: 'TITLE', payload: 'This is a title'}); // The component can read from the store's state when rendered
//     store.dispatch(fetchPosts())
//     return {custom: 'custom'}; // You can pass some custom props to the component from here
// }

                    export default connect(mapStateToProps)(PostsPage);
