import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import './PostDetail.css'

export const PostDetail = () => {
  const { postId, userId } = useParams()

  const [post, setPost] = useState({})
  const [user, setUser] = useState({})

  const getPostAndUser = () => {
    axios
      .get(`${process.env.REACT_APP_API_BASE_URL}/posts/${postId}`)
      .then((res) => {
        setPost(res.data)
        getUser()
      })
      .catch((err) => console.log(err))
  }

  const getUser = () => {
    axios
      .get(`${process.env.REACT_APP_API_BASE_URL}/users/${userId}`)
      .then((res) => {
        setUser(res.data)
      })
      .catch((err) => console.log(err))
  }

  useEffect(() => {
    getPostAndUser()
  }, [])

  return (
    <div className="container">
      <div className="row">
        <div className="col-12">
          <h3 className="text-center text-uppercase pt-4">Post Detail</h3>
        </div>
      </div>
      <div className="row mt-3">
        <div className="col-md-9 col-lg-9 col-sm-12">
          <div className="card mb-3">
            <img
              src="https://source.unsplash.com/random/400*400/?city,night"
              className="card-img-top card-img-height"
              alt="..."
            />
            <div className="card-body">
              <h5 className="card-title">{post.title}</h5>
              <p className="card-text">{post.body}</p>
              <p className="card-text">
                <small className="text-muted">Last updated 3 mins ago</small>
              </p>
            </div>
          </div>
        </div>
        <div className="col-md-3 col-lg-3 col-sm-12">
          <div className="card">
            <img
              src="https://images.unsplash.com/photo-1641391503184-a2131018701b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NTl8fHVzZXIlMjBpbWFnZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
              className="card-img-top"
              alt="..."
            />
            <div className="card-body">
              <h5 className="card-title">User Information</h5>
              <p className="card-text">{user.name}</p>
            </div>
            <ul className="list-group list-group-flush">
              <li className="list-group-item">
                <a href={`mailto:${user.email}`}>{user.email}</a>
              </li>
              <li className="list-group-item">
                <a href={`tel:${user.phone}`}>{user.phone}</a>
              </li>
              <li className="list-group-item">
                <a href={`www.${user.website}`}>{user.website}</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}
