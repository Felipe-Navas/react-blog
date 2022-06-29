import React from 'react'
import { useState } from 'react'

export const CreatePost = () => {
  const [title, setTitle] = useState()
  const [body, setbody] = useState()
  const [loading, setLoading] = useState(false)

  const createPost = (e) => {
    e.preventDefault()
    setLoading(true)
    fetch(`${process.env.REACT_APP_API_BASE_URL}/posts`, {
      method: 'POST',
      body: JSON.stringify({
        title,
        body,
        userId: 1,
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    })
      .then((response) => response.json())
      .then((json) => {
        setLoading(false)
        console.log(json)
        postCreated(`Post '${json.title}' created successfully!`, 'success')
      })
      .catch((error) => {
        setLoading(false)
        postCreated(`Error creating post: ${error.message}`, 'danger')
      })
  }

  const postCreated = (message, type) => {
    const wrapper = document.createElement('div')
    wrapper.innerHTML = [
      `<div class="alert alert-${type} alert-dismissible" role="alert">`,
      `   <div>${message}</div>`,
      '   <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>',
      '</div>',
    ].join('')
    const alertPlaceholder = document.getElementById('liveAlertPlaceholder')

    alertPlaceholder.append(wrapper)
  }

  return (
    <div className="container">
      <h3 className="text-center text-uppercase pt-4">Create Post</h3>
      <div id="liveAlertPlaceholder"></div>
      {loading ? (
        <div className="col-12 text-center">
          <div className="spinner-border text-primary" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
      ) : (
        <div className="mx-auto contact-form-container shadow-sm p-3 rounded lh-2 text-muted">
          <form
            onSubmit={(e) => {
              createPost(e)
            }}
          >
            <div className="mb-3">
              <label htmlFor="title" className="form-label">
                Post Title
              </label>
              <input
                onChange={(e) => {
                  setTitle(e.target.value)
                }}
                type="text"
                className="form-control"
                id="title"
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="description" className="form-label">
                Post Description
              </label>
              <textarea
                onChange={(e) => {
                  setbody(e.target.value)
                }}
                className="form-control"
                id="description"
                required
              ></textarea>
            </div>
            <div className="d-grid">
              <button type="submit" className="btn btn-primary">
                Create Post
              </button>
            </div>
          </form>
        </div>
      )}
    </div>
  )
}
