import React from 'react'
import { selectAllUsers } from '../users/usersSlice'
import { useSelector } from 'react-redux'
const PostsAuthor = ({userId}) => {
    const users = useSelector(selectAllUsers);
    const author = users.find(user => user.id === userId)
  return (
    <span>by {author ? author.name : 'Desconocido'}</span>
  )
}

export default PostsAuthor