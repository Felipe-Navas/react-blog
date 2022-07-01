import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'

export const AllPosts = () => {
  const [posts, setPosts] = useState([])
  const [loader, setLoader] = useState(false)

  const getAllPosts = () => {
    setLoader(true)
    fetch(`${process.env.REACT_APP_API_BASE_URL}/posts`)
      .then((response) => response.json())
      .then((json) => {
        setPosts(json)
        setLoader(false)
      })
  }

  const deletePost = (postId) => {
    let action = window.confirm(
      `Are you sure you want to delete this post?\nId: ${postId}`
    )
    if (action) {
      axios
        .delete(`${process.env.REACT_APP_API_BASE_URL}/posts/${postId}`)
        .then((response) => {
          showAlert(`Post with id (${postId}) deleted successfully!`, 'success')
          getAllPosts()
        })
        .catch((error) => {
          console.log(error)
          showAlert(`Error deleting post: ${error.message}`, 'danger')
        })
    }
  }

  const showAlert = (message, type) => {
    const wrapper = document.createElement('div')
    wrapper.innerHTML = [
      `<div className="alert alert-${type} alert-dismissible" role="alert">`,
      `   <div>${message}</div>`,
      '   <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>',
      '</div>',
    ].join('')
    const alertPlaceholder = document.getElementById('liveAlertPlaceholder')

    alertPlaceholder.append(wrapper)
  }

  useEffect(() => {
    getAllPosts()
  }, [])

  return (
    <div>
      <section className="container pt-2">
        <h3 className="text-center text-uppercase py-4">All Posts</h3>
        <div id="liveAlertPlaceholder"></div>
        <div className="row">
          {loader ? (
            <div className="col-12 text-center">
              <div className="spinner-border text-primary" role="status">
                <span className="visually-hidden">Loading...</span>
              </div>
            </div>
          ) : (
            posts.map((post, index) => {
              return (
                <div key={index} className="col-lg-4 col-md-4 col-sm-12 mt-2">
                  <div className="card">
                    <img
                      src="https://source.unsplash.com/random/400*400/?city,night"
                      className="card-img-top"
                      style={{ height: '300px' }}
                      alt="..."
                    />
                    <div className="card-body">
                      <h5 className="card-title">{post.title}</h5>
                      <p className="card-text">{post.body}</p>
                      <div className="d-flex justify-content-between">
                        <NavLink
                          to={`/posts/${post.id}/${post.userId}`}
                          className="btn btn-primary text-uppercase"
                        >
                          <i className="fa-solid fa-circle-info me-1"></i>
                          Details
                        </NavLink>
                        <NavLink
                          to={`/edit/${post.id}/${post.userId}`}
                          className="btn btn-warning text-uppercase"
                        >
                          <i className="fa-solid fa-pen-to-square me-1"></i>{' '}
                          Edit
                        </NavLink>
                        <button
                          className="btn btn-danger text-uppercase"
                          onClick={() => deletePost(post.id)}
                        >
                          <i className="fa-solid fa-trash me-1"></i> Delete
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              )
            })
          )}
        </div>
      </section>
    </div>
  )
}
