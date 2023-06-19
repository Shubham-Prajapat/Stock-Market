import React from 'react'
import './Feature.css'

const feature = () => {
  return (
    <div>
         <section className="section bottom-animate">
            <div className="container">
              <div className="row md-m-25 px-b m-40 px-b justify-content-center text-center">
                  <div className="col-lg-6">
                      <h3 className="" style={{fontSize:"3rem", marginTop:"40px", marginBottom:"50px"}}>Our Ideal Features</h3>
                  </div>
              </div>
                <div className="row">
                  <div className="col-sm-4">
                    <div className="serviceBox">
                        <div className="service-icon">
                            <i className="fa fa-history"></i>
                        </div>
                        <div className="service-Content">
                            <h3 className="title">
                              24*7
                            </h3>
                            <p className="description showMore">
                                We are providing 24*7 customized support on any query for about stock market.
                            </p>
                        </div>
                    </div>
                  </div>
                  {/* <div className="col-sm-4">
                    <div className="serviceBox">
                        <div className="service-icon">
                            <i className="fa fa-envelope"></i>
                        </div>
                        <div className="service-Content">
                            <h3 className="title">
                              SMS
                            </h3>
                            <p className="description showMore">
                                Support given through SMS and on our own instant, All GSM and CDMA networks.
                            </p>
                        </div>
                    </div>
                  </div> */}
                  <div className="col-sm-4">
                    <div className="serviceBox">
                        <div className="service-icon">
                            <i className="fa fa-envelope"></i>
                        </div>
                        <div className="service-Content">
                            <h3 className="title">
                            1 to 1
                            </h3>
                            <p className="description showMore">
                                Support given through SMS and on our own instant, All GSM and CDMA networks.
                            </p>
                        </div>
                    </div>
                  </div>
                  <div className="col-sm-4">
                    <div className="serviceBox">
                        <div className="service-icon">
                            <i className="fa fa-folder"></i>
                        </div>
                        <div className="service-Content">
                            <h3 className="title">
                              Record
                            </h3>
                            <p className="description showMore">
                                Update track sheets, stock reports and commodity reports guides.
                            </p>
                        </div>
                    </div>
                  </div>
                </div>
            </div>
            <img src="https://www.idealstock.in/webasset/images/header-bg03.png" alt=""/>
        </section>
    </div>
  )
}

export default feature