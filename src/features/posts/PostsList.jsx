import React from 'react'
import { selectAllPost } from './postsSlice';
import { useSelector} from 'react-redux'
import PostsAuthor from './PostsAuthor';

const PostsList = () => {
    /* const posts = useSelector(state => state.posts); */
    const posts = useSelector(selectAllPost);
    const renderedPosts = posts.map(post => (
        <article key={post.id}>
            <h3>{post.title}</h3>
            <p>{post.content.substring(0,100)}</p>
            <p className='postCredit'>
                <PostsAuthor userId={post.userId}/>
            </p>
        </article>
    ))
    
  return (
    <section>
        <h2>Posts</h2>
        {renderedPosts}
    </section>
  )
}

export default PostsList