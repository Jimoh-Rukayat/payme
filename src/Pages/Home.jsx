import React, {useState} from 'react'
import girl from '../assets/girl.png'
import logo from '../assets/logo.png'
import cards from '../assets/services cards.png'
import man from '../assets/man.png'
import {RiStarSFill} from 'react-icons/ri'
import {AiOutlineArrowRight, AiOutlineArrowLeft, AiFillCheckCircle} from 'react-icons/ai'
import {FaTimes, FaBars} from 'react-icons/fa'
import {Link} from 'react-router-dom'
import '../Styles/Home.css'



const Home = ()=>{
    const [mobile, setMobile] = useState(false)
    const handleMobile = ()=>{
        setMobile(!mobile)
    }
    return(
        <div className='grand-parent'>
        <div className='real-parent'>
            <div className='nav-parent'>
            <div className='pay'>
                <h4> Payme</h4>
            </div>
            <div className= {mobile? 'mobile-link' : 'naviga'}>
                <div className='nav-one'>
                    <Link to='/'>Home</Link>
                    <Link to='/*'>About</Link>
                    <Link to='/*'>Testimonials</Link>
                    <Link to='/*'>Contact</Link>
                </div>
                <div className='nav-two'>
                    <button className='button-one'>Sign in</button>
                    <button className='button-two'>Sign up</button>
                </div>
            </div>
           
            <div className='icons'>
                {mobile ? <FaTimes onClick={handleMobile}/>
                :
                <FaBars onClick={handleMobile}/>
                }
            </div>
        </div>
            <div className="home">
                <div className="home-parent">
                    <div className="home-hs">
                      <h1>Providing Best</h1>
                      <h2>WEB Services</h2>
                      <div className="home-down">
                        <p>Letter of on become he tended active enable to. Vicinity relation sensible sociable surprise screened no up as.</p>
                        <button className="started">Get Started</button>
                        <button className="explore">Explore</button>
                      </div>
                    </div>
                    <div className='girl-image'>
                        <img src={girl} alt={girl} style={{width: "450px", height: "600px"}}/>
                   </div>
                </div>
            </div>
            <div className="logo-texts">
                <img src={logo} alt={logo} style={{width: 120}}/>
                <h3>Umbraco</h3>
                <h3>Pearlfisher.</h3>
                <h3>Brightpearl</h3>
                <img src={logo} alt={logo} style={{width: 120}}/>
            </div>
            <div className="card-texts">
                <h1>Best <strong className="services" style={{color: "#25A4AD"}}>Services</strong></h1>
                <p>Letter of on become he tended active enable to. Vicinity relation sensible sociable surprise screened no up as.</p>
                <img src={cards} alt={cards}/>
                <div>
                <button className="explore" style={{padding: "10px", marginTop: "50px"}}>Explore all</button>
                </div>
            </div>
            <div className="box-shadow">
            <div className="features">
                <h1>Our <strong  className= "sub-feature"style={{color: "#25A4AD"}}>Features</strong></h1>
                <p>Letter of on become he tended active enable to. Vicinity relation sensible sociable surprise screened no up as.</p>
            </div>
            <div className="box-shadow-texts">
                <div className="box-shadow-one">
                    <h3 style={{color: "#25A4AD"}}>Work Load</h3>
                    <p>Outward clothes promise at gravity do excited. Sufficient particular impossible by reasonable oh expression is. Yet preference connection unpleasant yet melancholy but end appearance.</p>
                    <p style={{textDecoration: "underline", color: "#25A4AD", className: "p"}}>Learn More</p>
                </div>
                <div className="box-shadow-two">
                    <h3>Time Tracking</h3>
                    <p>Outward clothes promise at gravity do excited. Sufficient particular impossible by reasonable oh expression is. Yet preference connection unpleasant yet melancholy but end appearance.</p>
                    <p style={{textDecoration: "underline"}}>Learn More</p>
                </div>
                <div className="box-shadow-two">
                    <h3>Collaborations</h3>
                    <p>Outward clothes promise at gravity do excited. Sufficient particular impossible by reasonable oh expression is. Yet preference connection unpleasant yet melancholy but end appearance.</p>
                    <p style={{textDecoration: "underline"}}>Learn More</p>
                </div>
                {/* <div className="box-shadow-two2">
                    <h3>New</h3>
                    <p>Outward clothes promise at gravity do excited. Sufficient particular impossible by reasonable oh expression is. Yet preference connection unpleasant yet melancholy but end appearance.</p>
                    <p style={{textDecoration: "underline"}}>Learn More</p>
                </div> */}
            </div>
                <div className="explore-one">
                    <button className="explore" style={{padding: "10px"}}>Explore all</button>
                </div>
            </div>
            <div className="client-texts">
                <div>
                    <h1>What <strong style={{color: "#25A4AD"}} className="sub-client">Clients</strong> say</h1>
                    <p className="texts-p">Letter of on become he tended active enable to. Vicinity relation sensible sociable surprise screened no up as.</p>
                </div>
                <div className="client-image">
                    <div className="client-real">
                        <img src={man} alt={man} style={{width: 360}}/>
                    </div>
                    <div className="best-text">
                        <h3>Best Developers</h3>
                        <p>Outward clothes promise at gravity do excited. Sufficient particular impossible by reasonable oh expression is. Yet preference connection unpleasant yet melancholy but end appearance. And excellence partiality estimating terminated day everything.</p>
                        <span  className="icons-one" style={{color: "#F5B91E"}}><RiStarSFill/><RiStarSFill/><RiStarSFill/><RiStarSFill/><RiStarSFill/><RiStarSFill/></span>
                        <div className="robert-details">
                            <h3>Robert Johnson</h3>
                            <h5 style={{fontWeight: "100", fontSize: "15px"}}>Director of Behance</h5>
                        </div>
                    </div>
                </div>
                <span className="arrow-icons" style={{color: "#25A4AD"}}><AiOutlineArrowLeft/></span> <span className="arrow-icons" style={{color: "#25A4AD"}}><AiOutlineArrowRight/></span>
            </div>
            <div className="Pricing">
                <div className="Pricing-texts">
                    <h1>Our <strong style={{color: "#25A4AD"}} className="plan">Pricing Plan</strong></h1>
                </div>
                <div className="pricing-text-sub">
                <div className="starter">
                    <h3>For Starter</h3>
                    <h2 style={{fontSize: "40px"}}>$59</h2>
                    <div>
                        <p><AiFillCheckCircle/> Feedback Categorization</p>
                        <p><AiFillCheckCircle/> Features prioritization</p>
                        <p><AiFillCheckCircle/> Real-time collaboration</p>
                        <p><AiFillCheckCircle/> Feedback loop notifications</p>
                        <p><AiFillCheckCircle/> Essential dev tools integrations</p>
                    </div>
                    <button className="explore" id="click-button" style={{padding: "15px", marginTop: "50px"}}>Request Demo</button>
                </div>
                <div className="teams">
                    <h3>For Teams</h3>
                    <h2 style={{fontSize: "40px"}}>$99</h2>
                    <div>
                        <p><AiFillCheckCircle/> Feedback Categorization</p>
                        <p><AiFillCheckCircle/> Features prioritization</p>
                        <p><AiFillCheckCircle/> Real-time collaboration</p>
                        <p><AiFillCheckCircle/> Feedback loop notifications</p>
                        <p><AiFillCheckCircle/> Essential dev tools integrations</p>
                    </div>
                    <button style={{padding: "15px", marginTop: "50px"}} id="click-button" className= "started">Request Demo</button>
                </div>
                <div className="company">
                    <h3>For Company</h3>
                    <h2 style={{fontSize: "35px"}}>Custom</h2>
                    <div>
                        <p><AiFillCheckCircle/> Real-time collaboration</p>
                        <p><AiFillCheckCircle/> Feedback loop notifications</p>
                        <p><AiFillCheckCircle/> Essential dev tools integrations</p>
                    </div>
                    <button className="explore" id="click-button" style={{padding: "15px", marginTop: "110px"}}>Contact Us</button>
                </div>
                </div>
            </div>
            <div className="frequently">
                <div className="faq">
                    <h1>FAQs</h1>
                </div>
                <div className="one-parent">
                <div className="one" id="one-one">
                    <div style={{color: "#25A4AD" , fontSize: "50px"}} className="signs">-</div>
                    <div>
                    <p>she met humoured sir breeding her. Six curiosity day assurance bed necessary.</p>
                    <p id="one-p">Relation so in confined smallest children unpacked delicate. Why sir end believe uncivil respect. Always get adieus nature day course for common. My little garret repair to desire he esteem.</p>
                    </div>
                </div>
                <div className="one">
                    <div style={{fontSize: "40px"}} className="signs">+</div>
                    <div>
                        <p>And excellence partiality estimating terminated day everything?</p>
                    </div>
                </div>
                <div className="one">
                    <div style={{fontSize: "40px"}} className="signs">+</div>
                    <div>
                        <p>Latter person am secure of estate genius at?</p>
                    </div>
                </div>
                <div className="one">
                    <div style={{fontSize: "40px"}} className="signs">+</div>
                    <div>
                        <p>Whatever landlord yourself at by pleasure of children be?</p>
                    </div>
                </div>
                </div>
            </div>
            <div className="footer">
                <div className="footer-head">
                    <h1> People who are ready took these courses!</h1>
                </div>
                <div className="move">
                <button className="sched" style={{padding: "15px", marginTop: "50px"}}>Schedule demo</button>
                </div>
                <div className="footer-bottom">
                    <div className="texts" id="new-class">
                        <h2 style={{fontSize: "25px"}}>Payme</h2>
                        <p style={{width: "250px"}}>Crechterwoord K12 182 DK Alknjkcb, All Rights Reserved</p>
                    </div>
                    <div  className="texts">
                        <h4>Links</h4>
                        <p>Overons</p>
                        <p>Social Media</p>
                        <p>Counters</p>
                        <p>Contact</p>
                    </div>
                    <div  className="texts">
                        <h4>Company</h4>
                        <p>Terms & Conditions</p>
                        <p>Privacy Policy</p>
                        <p>Contact</p>
                    </div>
                    <div  className="texts">
                        <h4>Get in touch</h4>
                        <p style={{width: "200px"}}>Crechterwoord K12 182 DK Alknjkcb</p>
                        <p>085-132567</p>
                        <p>info@payme.net</p>
                    </div>
                </div>
                <div className="footer-end">
                <p>© 2021 Payme. All rights reserved</p>
            </div>
            </div>
        </div>
        </div>
    )
}


export default Home;