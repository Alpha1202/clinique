import React from 'react'

import './index.css'

const index = () => {
  return (
    <div className="wrapper">
      <div className="divA" />
      <div className="divB">
        <div className="divBWrapper">
          <div className="formLogo">
            <h2>myClinique</h2>
          </div>
          <div className="back-form-wrapper">
            <div className="formWrapper">
              <div className="form">
                <div className="formInput">


                  <div className="formItem">
                    <p>Login As</p>

                    <input className="input" />
                  </div>
                  <div className="formItem">
                    <p>Username</p>

                    <input className="input" />
                  </div>
                  <div className="formItem">
                    <p>Password</p>

                    <input className="input" />
                  </div>
                  <div className="formItem2">

                    <div className='btnWrapper'>
                      <button className='btn'>Login</button>
                    </div>

                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default index
