import React from 'react'
import './Body.css'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';


function Body() {
  return (
    <div className='body_main'>

      <div className='bg-image-container'>

      <div className=''>
        <div className='d-flex d-lg-none justify-content-between mt-3 px-5'>
      <ArrowBackIcon/>
      <button type="button" class="btn btn-outline-light">Light</button>
        
        </div>


        <div className='content'>
          <h1>Computer Science </h1>
        </div>
      </div>


      
      </div>
     <div className='d-none d-lg-flex justify-content-between mx-auto align-items-center container sticky-top'>
      <div className='posts'>
      <ul className='nav my-2 nav-underline'>
        <li className='nav-item'>
          <a className='nav-link active' href='/'>Zeya</a>
        </li>
        <li className='nav-item'>
          <a className='nav-link' href='/'>Mustafa</a>
        </li>
        <li className='nav-item'>
          <a className='nav-link' href='/'>Hello</a>
        </li>
      </ul>
      </div>

      <div>
        <button className='btn'>Login</button>
        <button className='btn primary'>Write Post</button>
      </div>


     </div>
      
      
      
      <hr className='mx-auto mt-0'/>
      
      
      
      </div>


    
  )
}

export default Body
