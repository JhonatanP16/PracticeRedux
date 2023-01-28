import React from 'react'
import { selectAllPost,getPostsStatus,getPostsError,fetchPosts } from './postsSlice';
import { useSelector,useDispatch} from 'react-redux'
import { useEffect } from 'react';
import PostsExcerpt from './PostsExcerpt';


const PostsList = () => {
    /* const posts = useSelector(state => state.posts); */
    const dispatch = useDispatch();
    const posts = useSelector(selectAllPost);
    const postStatus = useSelector(getPostsStatus);
    const error = useSelector(getPostsError);
    
    useEffect(() => {
        if (postStatus === 'idle') {
            dispatch(fetchPosts())
        }
    }, [postStatus, dispatch])

    let content;
    if (postStatus === 'loading') {
        content = <p>"Loading..."</p>;
    } else if (postStatus === 'succeeded') {
        const orderedPosts = posts.slice().sort((a, b) => b.date.localeCompare(a.date))
        content = orderedPosts.map(post => <PostsExcerpt key={post.id} post={post} />)
    } else if (postStatus === 'failed') {
        content = <p>{error}</p>;
    }

    return (
        <section>
            <h2>Posts</h2>
            {content}
        </section>
    )
}

export default PostsList