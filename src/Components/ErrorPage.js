import React from 'react'
import Footer from './Footer'
import Navbar from './Navbar'
import errorimage from './errorpage.svg'

const ErrorPage = () => {
  return (
    <>
    <Navbar/>
      <div className='flex justify-center items-center pt-7'>
        <img src={errorimage} alt="" />
        </div>

        <Footer/>
    </>
  )
}

export default ErrorPage