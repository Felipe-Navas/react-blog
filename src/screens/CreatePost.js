import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { useParams } from 'react-router-dom'

export const CreatePost = () => {
  const { postId, userId } = useParams()

  const [title, setTitle] = useState()
  const [body, setbody] = useState()
  const [loading, setLoading] = useState(false)
  const [isEdit, setIsEdit] = useState(false)

  const populateData = () => {
    if (postId) {
      setIsEdit(true)
      setLoading(true)
      fetch(`${process.env.REACT_APP_API_BASE_URL}/posts/${postId}`)
        .then((response) => response.json())
        .then((json) => {
          setTitle(json.title)
          setbody(json.body)
          setLoading(false)
        })
    }
  }

  const createPost = (e) => {
    e.preventDefault()
    setLoading(true)

    let reqBody = JSON.stringify({
      title,
      body,
      userId: userId || 1,
    })

    let methodType = 'POST'
    let uri = 'posts'

    if (postId) {
      methodType = 'PUT'
      uri = `posts/${postId}`
    }

    fetch(`${process.env.REACT_APP_API_BASE_URL}/${uri}`, {
      method: methodType,
      body: reqBody,
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    })
      .then((response) => response.json())
      .then((json) => {
        setLoading(false)
        console.log(json)
        if (isEdit) {
          showAlert(`Post '${json.title}' Edited successfully!`, 'success')
        } else {
          showAlert(`Post '${json.title}' Created successfully!`, 'success')
        }
      })
      .catch((error) => {
        setLoading(false)
        showAlert(`Error creating post: ${error.message}`, 'danger')
      })
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
    populateData()
  }, [])

  return (
    <div className="container">
      <h3 className="text-center text-uppercase pt-4">
        {postId ? 'Edit' : 'Create'} Post
      </h3>
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
                value={title}
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
                value={body}
                required
              ></textarea>
            </div>
            <div className="d-grid">
              <button type="submit" className="btn btn-primary">
                {postId ? 'Edit' : 'Create'} Post
              </button>
            </div>
          </form>
        </div>
      )}
    </div>
  )
}
