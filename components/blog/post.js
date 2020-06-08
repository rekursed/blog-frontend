import React from 'react'

const Post = ({post}) => {
    return (
        <div className="box">
            <article className="media">
                <div className="media-content">
                    <div className="content">
                        <p>
                            <strong>{post.title}</strong> <small>@{post.author.first_name}</small> <small>{new Date(post.created_at).toLocaleDateString()}</small>
                            <br/>
                            {post.summary_html}
                        </p>
                    </div>
                </div>
            </article>
        </div>

    )
}
export default Post
