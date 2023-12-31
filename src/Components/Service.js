import React,{useEffect} from 'react'
import Footer from './Footer'
import './service.css'
import {SiPayoneer} from "react-icons/si";
import se from '../assest/serv.jpg'
import { useMediaQuery } from 'react-responsive';
import {HiOutlineSupport} from "react-icons/hi";
import {GiTrade} from "react-icons/gi";
import {AiOutlinePayCircle} from "react-icons/ai";
import {MdTextsms, MdCall, MdSupportAgent} from "react-icons/md";




const Service = () => {
  const isMobile = useMediaQuery({ maxWidth: 768 });

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <div>
     <div className='mainContact'>
                <div className="container-fluid page-header py-5 mb-5 wow fadeIn" data-wow-delay="0.1s">

                    <div className="container text-center py-5">
                        <h1 className="display-2 text-dark mb-4 animated slideInDown">Services</h1>
                        <nav aria-label="breadcrumb animated slideInDown">
                            <ol className="breadcrumb justify-content-center mb-0">
                                <li className="breadcrumb-item"><a href="/">Home</a></li>
                                {/* <li className="breadcrumb-item"><a href="#">Pages</a></li> */}
                                <li className="breadcrumb-item text-dark" aria-current="page" >Services</li>
                            </ol>
                        </nav>
                    </div>
                </div>
            </div>
            <section id="services-1" class="services-1 sections-bg">
      <div class="container aos-init aos-animate" data-aos="fade-up">

        <div class="section-header">
          <h2>Our Services</h2>
          <p>Bulleye trade is the market leader in the International Commodity market providing investors with personalized and prompt services. Bulleye trade  with over a decade of expertise has been awarded time and time again by MCX. </p>
        </div>

        <div class="row gy-4 aos-init aos-animate" data-aos={isMobile ? undefined : "zoom-out-down"} data-aos-offset="500"
                        data-aos-duration="500">

          <div class="col-lg-4 col-md-6">
            <div class="service-item  position-relative">
              <div class="icon">
                {/* <i class="bi bi-activity"></i> */}
                <HiOutlineSupport className='fa-fade'/>
              </div>
              <h3>24/7 Online Support</h3>
              <p> Our clients can get advice and find responses to questions quickly 24/7 and in real-time.</p>
              {/* <a href="#" class="readmore stretched-link">Read more <i class="bi bi-arrow-right"></i></a> */}
            </div>
          </div>

          <div class="col-lg-4 col-md-6" >
            <div class="service-item position-relative">
              <div class="icon">
              <MdTextsms className='fa-fade'/>
              </div>
              <h3>Sms Service</h3>
              <p>SMS Service: Our SMS customer service platform raises support options for our clients.</p>
              {/* <a href="#" class="readmore stretched-link">Read more <i class="bi bi-arrow-right"></i></a> */}
            </div>
          </div>

          <div class="col-lg-4 col-md-6">
            <div class="service-item position-relative">
              <div class="icon">
              <MdCall className='fa-fade'/>
              </div>
              <h3>Sure Advisory Calls</h3>
              <p> We provide all information to our clients via Advisory Calls.</p>
              {/* <a href="#" class="readmore stretched-link">Read more <i class="bi bi-arrow-right"></i></a> */}
            </div>
          </div>
          <div class="col-lg-4 col-md-6">
            <div class="service-item position-relative">
              <div class="icon">
              <MdSupportAgent className='fa-fade'/>
              </div>
              <h3>Exceutive Support</h3>
              <p> We have high-level experienced trading executives for client support always.</p>
              {/* <a href="#" class="readmore stretched-link">Read more <i class="bi bi-arrow-right"></i></a> */}
            </div>
          </div>

          <div class="col-lg-4 col-md-6">
            <div class="service-item position-relative">
              <div class="icon">
              <GiTrade className='fa-fade'/>
              </div>
              <h3>Trade On Call</h3>
              <p>Call On Trade is a facility that allows you to trade in the stock markets using your registered mobile phone with our executive. </p>
              {/* <a href="#" class="readmore stretched-link">Read more <i class="bi bi-arrow-right"></i></a> */}
            </div>
          </div>

          <div class="col-lg-4 col-md-6">
            <div class="service-item position-relative">
              <div class="icon">
              <AiOutlinePayCircle className='fa-fade'/>
              </div>
              <h3>Payin Payout</h3>
              <p> Payin and Payouts are the days when brokers and exchanges make payments or delivery the securities.</p>
              {/* <a href="#" class="readmore stretched-link">Read more <i class="bi bi-arrow-right"></i></a> */}
            </div>
          </div>

          <div class="col-lg-4 col-md-6">
            <div class="service-item position-relative">
              <div class="icon">
              <SiPayoneer className='fa-fade'/>
              </div>
              <h3>Brokerage Fee</h3>
              <p> Our brokerage fee per trade is flat 10/- for every our clients.</p>
              {/* <a href="#" class="readmore stretched-link">Read more <i class="bi bi-arrow-right"></i></a> */}
            </div>
          </div>

        </div>

      </div>
    </section>
    {/* <section id="service-2" className='service-2'>
    <div className='container'>
    <div className='row'>
        <div className='col-lg-6' data-aos="fade-right" data-aos-offset="500"
                        data-aos-duration="500">
        <img src={se} alt="" className='img-fluid'></img>
        </div>
        <div class="col-lg-6 d-flex justify-content-center flex-column aos-init aos-animate" data-aos="fade-up">
            <h3>Sunt consequatur ad ut est nulla</h3>
            <p>Cupiditate placeat cupiditate placeat est ipsam culpa. Delectus quia minima quod. Sunt saepe odit aut quia voluptatem hic voluptas dolor doloremque.</p>
            <ul>
              <li><i class="bi bi-check"></i> <span>Ullamco laboris nisi ut aliquip ex ea commodo consequat.</span></li>
              <li><i class="bi bi-check"></i><span> Duis aute irure dolor in reprehenderit in voluptate velit.</span></li>
              <li><i class="bi bi-check"></i> <span>Facilis ut et voluptatem aperiam. Autem soluta ad fugiat</span>.</li>
            </ul> */}
            {/* <a href="#" class="btn btn-get-started align-self-start">Get Started</a> */}
          {/* </div>
    </div>


    </div>

    </section> */}
    <Footer/>
    </div>
  )
}

export default Service