import React from 'react'

export const Login = () => {
  return (
    <div className="container">
      <h3 className="text-center text-uppercase pt-4">Please login below</h3>
      <div className="mx-auto contact-form-container shadow-sm p-3 rounded lh-2 text-muted">
        <form>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">
              Email address
            </label>
            <input type="email" className="form-control" id="email" required />
          </div>
          <div className="mb-3">
            <label htmlFor="password" className="form-label">
              Password
            </label>
            <input
              type="password"
              className="form-control"
              id="password"
              required
            />
          </div>
          <div className="d-grid">
            <button type="submit" className="btn btn-primary">
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}
