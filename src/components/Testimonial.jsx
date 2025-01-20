import React from 'react'

const Testimonial = () => {
  return (
    <div className='d-flex flex-column justify-content-center align-items-center gap-3 my-5 py-5 bg-light' style={{margin: "auto 0"}}>
        <img src='/assets/Sisyphus.png' height={40}/>
        <h1 className='col-10 p-3' style={{fontSize: "2rem"}}>We’ve been using Untitled to kick start every new project and can’t imagine working without it.</h1>
        <img src='/assets/faceImg.png' className='rounded-circle' height={60}/>
        <div>
          <p className='fw-bold mb-0'>Candice Wu</p>
          <p className='fw-lighter'>Product Manager, Sisyphus</p>
        </div>
        
      
    </div>
  )
}

export default Testimonial
