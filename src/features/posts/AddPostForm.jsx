import React, { useState } from 'react'
import { postAdded } from './postsSlice';
import { useDispatch,useSelector} from 'react-redux';
import { selectAllUsers } from '../users/usersSlice';
const AddPostForm = () => {
    const [title,setTitle] = useState('');
    const [content,setContent] = useState('');
    const [userId,setUserId] = useState('');
   
    const users = useSelector(selectAllUsers);

    const onTitleChanged = e => setTitle(e.target.value);
    const onContentChanged = e => setContent(e.target.value);
    const onAuthorChanged = e => setUserId(e.target.value);

    const dispatch = useDispatch();
    const handleSubmit = () =>{
        if(title && content){
            dispatch(postAdded(title,content,Number(userId)))
            setTitle('')
            setContent('')
        }
    }
    const canSave = Boolean(title) && Boolean(content) && Boolean(userId);
    const userOptions = users.map(user => (
        <option key={user.id} value={user.id}>
            {user.name}
        </option>
    ))
  return (
    <section>
        <h2>Add New Post</h2>
        <form>
            <label htmlFor="postTitle">Post Title:</label>
            <input 
            type="text"
            id='postTitle'
            name='postTitle'
            value={title}
            onChange={onTitleChanged}
            />
             <label htmlFor="postAuthor">Post Author:</label>
             <select id='postAuthor' value={userId} onChange={onAuthorChanged}>
                <option value=""></option>
                {userOptions}
             </select>  
            <label htmlFor="postContent">Content : </label>
            <input 
            type="text"
            id='postContent'
            name='postContent'
            value={content}
            onChange={onContentChanged}
            />
            <button
            onClick={handleSubmit}
            type='button'
            disabled={!canSave}
            >Save Post
            </button>
        </form>
    </section>
  )
}

export default AddPostForm