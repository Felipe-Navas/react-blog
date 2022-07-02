import axios from 'axios'
import React, { useState } from 'react'

export const Signup = () => {
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [phoneNumber, setPhoneNumber] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const signUp = (e) => {
    e.preventDefault()
    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    }

    const reqData = {
      name: `${firstName} ${lastName}`,
      email,
      phone: phoneNumber,
      password,
    }

    axios
      .post(`${process.env.REACT_APP_API_BASE_URL}/users`, reqData, config)
      .then((res) => {
        setFirstName('')
        setLastName('')
        setEmail('')
        setPhoneNumber('')
        setPassword('')
        showAlert(`Registration successfully! please proceed to login`, 'success')
      })
      .catch((err) => {
        console.log(err)
        showAlert(`Registration failed!`, 'error')
      })
  }

  const showAlert = (message, type) => {
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
      <h3 className="text-center text-uppercase pt-4">Create an Account</h3>
      <div id="liveAlertPlaceholder"></div>
      <div className="mx-auto contact-form-container shadow-sm p-3 rounded lh-2 text-muted">
        <form
          onSubmit={(e) => {
            signUp(e)
          }}
        >
          <div className="mb-3">
            <label htmlFor="firstName" className="form-label">
              First Name
            </label>
            <input
              onChange={(e) => setFirstName(e.target.value)}
              type="text"
              className="form-control"
              id="firstName"
              value={firstName}
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="lastName" className="form-label">
              Last Name
            </label>
            <input
              onChange={(e) => setLastName(e.target.value)}
              type="text"
              className="form-control"
              id="lastName"
              value={lastName}
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="phone" className="form-label">
              Phone Number
            </label>
            <input
              onChange={(e) => setPhoneNumber(e.target.value)}
              type="text"
              className="form-control"
              value={phoneNumber}
              id="phone"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">
              Email Address
            </label>
            <input
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              className="form-control"
              id="email"
              value={email}
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="password" className="form-label">
              Password
            </label>
            <input
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              className="form-control"
              id="password"
              value={password}
              required
            />
          </div>
          <div className="d-grid">
            <button type="submit" className="btn btn-primary">
              Signup
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}
