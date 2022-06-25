import React from 'react'
import { useParams } from 'react-router-dom'

export const PostDetail = () => {
  const { postId, userId } = useParams()

  return <div>Post Detail Post-{postId} - User {userId}</div>
}
