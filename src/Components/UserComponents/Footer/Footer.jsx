import React from 'react'
import { Button, FormControl, Image } from 'react-bootstrap'
import './Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBell, faEnvelope, faGlobe, faHouse, faLayerGroup, faPhone, faShirt, faStarHalfStroke, faTag, faUser } from '@fortawesome/free-solid-svg-icons';
import { AspectRatio, Box, CardContent, Grid, Typography } from '@mui/joy';
import { faCopyright } from '@fortawesome/free-solid-svg-icons/faCopyright';
import { faFacebook, faInstagram, faLinkedin, faTwitter, faWhatsapp } from '@fortawesome/free-brands-svg-icons';


export default function Footer() {
  return (
    <div>
        {/* ************************************ Footer Debut  ******************************************* */}
        <section className='mt-5'> 
                <div>
                    <div className='footer-content-topone d-flex justify-content-around'>
                        <div className=' footer-content-topone-icons-content'>
                            <div className='footer-content-topone-icons'> <FontAwesomeIcon icon={faLinkedin} /></div>
                            <div className='footer-content-topone-icons'> <FontAwesomeIcon icon={faTwitter} /></div>
                            <div className='footer-content-topone-icons'> <FontAwesomeIcon icon={faInstagram} /></div>
                            <div className='footer-content-topone-icons'> <FontAwesomeIcon icon={faFacebook} /></div>
                        </div>
                        <div className='d-flex'>
                            <FormControl placeholder='balde@gmail.com' className='footer-content-topone-input' />
                            <Button className='footer-content-topone-boutton'>S'abonner</Button>
                            </div>
                    </div>
                    <div className='footer-content-bottomone'>
                        <div className='d-flex justify-content-around pt-4'>
                            <div>
                                <h5 className='text-white mb-3 '>About us</h5>
                                <h6 className='text-white'>Lorem, ipsum.</h6>
                                <h6 className='text-white'>Lorem, ipsum.</h6>
                                <h6 className='text-white'>Lorem, ipsum.</h6>
                            </div>
                            <div>
                            <h5 className='text-white mb-3 '>Contact us</h5>
                            <h6 lassName=''><FontAwesomeIcon icon={faPhone} style={{color:'#00838d'}} /><span className='ms-3 text-white'>77 698 88 77</span></h6>
                            <h6><FontAwesomeIcon icon={faWhatsapp} style={{color:'#00838d'}} /><span className='ms-3 text-white'>77 998 58 10</span></h6>
                            
                            <h6><FontAwesomeIcon icon={faEnvelope} style={{color:'#00838d'}} /><span className='ms-3 text-white'>samataileur@gmai.com</span></h6>
                            
                            
                            </div>
                            <div>
                            <h5 className='text-white mb-3 '>Lien utiles</h5>
                            <h6 className='text-white'>Lorem, ipsum.</h6>
                            <h6 className='text-white'>Lorem, ipsum.</h6>
                            <h6 className='text-white'>Lorem, ipsum.</h6>
                            </div>

                        </div>
                        <div className='d-flex justify-content-center m-3'>
                            <hr className='w-50 text-white' />
                            </div>
                        <div className='d-flex justify-content-center text-white'><p className='me-2'><FontAwesomeIcon icon={faCopyright} /></p><span>2024 Copyright sama-tailleur tout droit reservé</span></div>
                    </div>
                </div>
            </section>
            {/* ************************************ Footer Fin  ******************************************* */}
        
    </div>
  )
}

