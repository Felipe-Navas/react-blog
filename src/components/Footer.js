import React from 'react'

export const Footer = () => {
  return (
    // <div className='container-fluid bg-primary bg-gradient text-white bottom-0 position-absolute' style={{ minHeight: '14rem' }}>
    <div className='mt-5 container-fluid bg-black bg-gradient text-white' style={{ minHeight: '14rem' }}>
      <div className='row pt-4 text-center'>
        <div className='col-lg-4 col-md-4 col-sm-12'>
          <h5>Quick Links</h5>
          <div className='d-flex flex-column mb-2'>
            <a href="#" className='text-white p-1'>About us</a>
            <a href="#" className='text-white p-1'>Our Posts</a>
            <a href="#" className='text-white p-1'>Our Team</a>
            <a href="#" className='text-white p-1'>Contact us</a>
          </div>
        </div>
        <div className='col-lg-4 col-md-4 col-sm-12 mb-2'>
          <h5>Newsletter</h5>
          <div className='d-flex flex-column justify-content-around' style={{minHeight: "8rem"}}>
            <input type="text" className='form-control' placeholder='Subscribe to the newsletter' />
            <button className='btn btn-warning'>Subscribe</button>
          </div>
        </div>
        <div className='col-lg-4 col-md-4 col-sm-12'>
          <h5>Contact Address</h5>
          <div className='d-flex flex-column'>
            <p><i className='px-1 fa-solid fa-location-arrow'></i> 16 Huston Street - NY</p>
            <p><i className='px-1 fa-solid fa-location-arrow'></i> 14th Street - Kansas City</p>
            <p><i className='px-1 fa-solid fa-location-arrow'></i> 4th Street - Hawkings</p>
          </div>
        </div>
      </div>
    </div>
  )
}
