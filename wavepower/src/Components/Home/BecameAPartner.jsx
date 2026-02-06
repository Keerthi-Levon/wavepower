import React from 'react'
import dotsicon from '../../assets/dots_icon.png';
import round_dot from '../../assets/RoundDot.png';

const BecameAPartner = () => {
  return (
    <div className='container-fluid partner-section'>

      <div className='container'>
        <div className='row align-items-center'>

    
          <div className='col-lg-6 content-section d-flex flex-column justify-content-end'>
                <h1>Become a Partner</h1>
                <p>Used and supported in over 178 countries around the globe.</p>
                <p>We’ll work with you to open more doors and close more sales across all verticals.</p>
          </div>

          
          <div className='col-lg-6 position-relative'>

           
           <div className='icon-section'>
               <img className='dots-icon' src={dotsicon} alt="" />
               <img className='round-icon' src={round_dot} alt="" />

           </div>
            
            <div className='partner-form shadow'>

              <div className='row'>
                <div className='col-md-6'>
                  <label className='form-label'>First Name</label>
                  <input className='form-control' placeholder='Enter first name'/>
                </div>

                <div className='col-md-6'>
                  <label className='form-label'>Last Name</label>
                  <input className='form-control' placeholder='Enter last name'/>
                </div>
              </div>

              <div className='row mt-2'>
                <div className='col-12'>
                  <label className='form-label'>Email</label>
                  <input className='form-control' placeholder='Enter email'/>
                </div>
              </div>

              <div className='row mt-2'>
                <div className='col-md-6'>
                  <label className='form-label'>Company</label>
                  <input className='form-control' placeholder='Enter company'/>
                </div>

                <div className='col-md-6'>
                  <label className='form-label'>Phone</label>
                  <input className='form-control' placeholder='Enter phone'/>
                </div>
              </div>

              <div className='row mt-2'>
                <div className='col-12'>
                  <label className='form-label'>Your Country</label>
                  <input className='form-control' placeholder='Enter country'/>
                </div>
              </div>

               <div className='d-flex align-items-center justify-content-center mt-2'>
                  <button className='apply-btn'>Apply</button>
               </div>

            </div>

          </div>
        </div>
      </div>

      {/* Blue Background */}
      <div className='blue-background-container'></div>

    </div>
  )
}

export default BecameAPartner
