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

  useEffect(() => {
    getAllPosts()
  }, [])

  return (
    <div>
      <section className="container pt-2">
        <h3 className="text-center text-uppercase py-4">All Posts</h3>
        <div className="row">
          {loader ? (
            <div className='col-12 text-center'>
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
                      style={ { height: '300px' } }
                      alt="..."
                    />
                    <div className="card-body">
                      <h5 className="card-title">{post.title}</h5>
                      <p className="card-text">{post.body}</p>
                      <div className="d-grid">
                        <NavLink to={`/posts/${post.id}/${post.userId}`} className="btn btn-warning">
                          Read More
                        </NavLink>
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
