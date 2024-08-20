import React from 'react'

import { Button, FormControl, Image } from 'react-bootstrap'
import './HomeScreen.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBell, faEnvelope, faGlobe, faHouse, faLayerGroup, faPhone, faShirt, faStarHalfStroke, faTag, faUser } from '@fortawesome/free-solid-svg-icons';
import { faStar } from '@fortawesome/free-solid-svg-icons/faStar';
import Underline from '../../../Components/UserComponents/Underline/Underline';
import NavbarUser from '../../../Components/UserComponents/NavbarUser/NavbarUser';
import { AspectRatio, Box, CardContent, Grid, Typography } from '@mui/joy';
import Card from '@mui/joy/Card';
import { faCopyright } from '@fortawesome/free-solid-svg-icons/faCopyright';
import { faFacebook, faInstagram, faLinkedin, faTwitter, faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import Footer from '../../../Components/UserComponents/Footer/Footer';



export default function HomeScreen() {
  return (
    <div>
       <header>
            {/* ************************************ Navbar Debut  ******************************************* */}
            <NavbarUser />
            {/* ************************************ Navbar Fin  ******************************************* */}
            
            {/* ************************************ Banniere Debut  ******************************************* */}
            
            <section>
                <div>
                    <div style={{width:'100%', height:'590px', marginTop:'60px'}}>
                        <Image src='https://res.cloudinary.com/dtquwiu3x/image/upload/v1721423968/ban-tailleur-2_cwbdh0.png' style={{width:'100%', height:'100%'}}/>
                    </div>
                    <div className='content-text-ban1'>
                        <div>
                            <h1 className='content-text-ban1-title'>SAMA TAILLEUR</h1>
                            <h4 className='content-text-ban1-para'>LA PLATFORME REFERENCE POUR TROUVER  <br />DES TAILLEURS PROFESSIONNELS</h4>
                        </div>
                        <div className='d-flex '>
                            <button id='content-text-ban1-btn'>Nos tailleurs</button>
                            <button id='content-text-ban1-btn-2'>Nos Vendeurs</button>
                        </div>
                    </div>
                </div>
            </section>
            {/* ************************************ Banniere Fin  ******************************************* */}
       </header>
         <main>
            {/* ************************************ Qui sommes nous Debut  ******************************************* */}
            <section>
                <div id='content-two-setion-two'>
                <div className='mt-5'><h3>Bienvenue chez Sama Tailleur</h3></div>
                    <div id='content-two-setion-two-separator'></div>
                    <div  className='mt-5' id='content-two-setion-two-para'>
                        
                        <p className='text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur, doloribus perspiciatis 
                            velit perferendis voluptatem quaerat deserunt laboriosam officia porro aliquam sapiente 
                            eaque, dicta ab sunt doloremque at veniam laudantium vel accusantium, soluta fugit! 
                            Aliquam ab eos dignissimos nemo officiis blanditiis.</p>
                    </div>
                </div>
                <div className='container content-troisieme-icones-main-principal'>
                    <div className='content-troisieme-icones-main'>
                        <div className='content-troisieme-icones-main-icons'><FontAwesomeIcon icon={faBell} id='content-troisieme-icones-main-icons-font' /></div>
                        <div id='content-two-setion-two-separator-content-icons-section-about'>
                        <h5 className='text-center'>Lorem ipsum dolor sit amet.</h5>
                        <div id='content-two-setion-two-separator-title'></div>
                            <p className='text-center'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. At praesentium, placeat,
                                 perferendis optio nemo minus, cum ab suscipit aliquam necessitatibus veritatis
                                  excepturi iusto saepe nobis quae impedit eveniet! Quas, alias?
                            </p>
                        </div>
                    </div>
                    <div className='content-troisieme-icones-main'>
                        <div className='content-troisieme-icones-main-icons'><FontAwesomeIcon icon={faBell} id='content-troisieme-icones-main-icons-font' /></div>
                        <div id='content-two-setion-two-separator-content-icons-section-about'>
                        <h5 className='text-center'>Lorem ipsum dolor sit amet.</h5>
                        <div id='content-two-setion-two-separator-title'></div>
                            <p className='text-center'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. At praesentium, placeat,
                                 perferendis optio nemo minus, cum ab suscipit aliquam necessitatibus veritatis
                                  excepturi iusto saepe nobis quae impedit eveniet! Quas, alias?
                            </p>
                        </div>
                    </div>
                    <div className='content-troisieme-icones-main'>
                        <div className='content-troisieme-icones-main-icons'><FontAwesomeIcon icon={faBell} id='content-troisieme-icones-main-icons-font' /></div>
                        <div id='content-two-setion-two-separator-content-icons-section-about'>
                            <h5 className='text-center'>Lorem ipsum dolor sit amet.</h5>
                            <div id='content-two-setion-two-separator-title'></div>
                            <p className='text-center'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. At praesentium, placeat,
                                 perferendis optio nemo minus, cum ab suscipit aliquam necessitatibus veritatis
                                  excepturi iusto saepe nobis quae impedit eveniet! Quas, alias?
                            </p>
                        </div>
                    </div>

                </div>

            </section>
            {/* ************************************ Qui sommes nous Fin  ******************************************* */}


            {/* ************************************ Nos modéles Debut  ******************************************* */}
            <section>
                <div className='ss-style-doublediagonal-main'>
                    <div className='ss-style-doublediagonal-corp'>
                        <div className='ss-style-doublediagonal-section'>
                            <section className='mt-5 col-3 ss-style-doublediagonal'>
                        
                            </section>

                        </div>

                    </div>

                </div>

                <div>
                   
                    <Underline
                        title="Quelques un de nos modéles"
                        // titleColor="#0000"
                        // separatorColor="#33FF57"
                        separatorBackground="#00838d"
                    />
                    <div>

                    </div>
                </div>
            </section>
           
            <section className='mt-4'>
                <div className='content-flexible-cards-products'>
                    <div>
                        <div className="card card-content-modeles-man">
                            <div className="image-card-content-modeles-man w-100">
                                <Image src='https://res.cloudinary.com/dtquwiu3x/image/upload/v1721757327/modele1_rf0py1.png' className="text-card-content-modeles-man" />
                                </div>
                            
                        </div>
                        {/* seconde */}
                        <div className="card icons_content-card_modeles_main_two" id='icons_content-card_modeles_main_two'>
                            <div>
                            <div className="avatar-section">
                            <Image src='https://res.cloudinary.com/dtquwiu3x/image/upload/v1717500940/baraka6_yaanlx.jpg' className='avatar-section' />
                            </div>
                            <p className='avatar-section-text'>Abdou Ndiaye</p>
                            

                            </div>
                            <div className="info-section">
                            <div>
                                <h3 className="name-content-card-madeles">Robe droite mains évasés</h3>
                                <h3 className="title-content-card-madeles">$300</h3>
                            </div>
                            <div className="icons-content-card-madeles">
                            <FontAwesomeIcon icon={faStar} className='icon-content-card-madeles' />
                            <FontAwesomeIcon icon={faStar} className='icon-content-card-madeles' />
                            <FontAwesomeIcon icon={faStar} className='icon-content-card-madeles' />
                            <FontAwesomeIcon icon={faStar} className='icon-content-card-madeles' />
                            <FontAwesomeIcon icon={faStarHalfStroke} className='icon-content-card-madeles' />
                            
                            </div>
                            </div>
                            
                            
                        </div>
                        
                    </div>
                    <div>
                        <div className="card card-content-modeles-man">
                            <div className="image-card-content-modeles-man w-100">
                                <Image src='https://res.cloudinary.com/dtquwiu3x/image/upload/v1721757327/modele1_rf0py1.png' className="text-card-content-modeles-man" />
                                </div>
                            
                        </div>
                        {/* seconde */}
                        <div className="card icons_content-card_modeles_main_two" id='icons_content-card_modeles_main_two'>
                            <div>
                            <div className="avatar-section">
                            <Image src='https://res.cloudinary.com/dtquwiu3x/image/upload/v1717500940/baraka6_yaanlx.jpg' className='avatar-section' />
                            </div>
                            <p className='avatar-section-text'>Abdou Ndiaye</p>
                            

                            </div>
                            <div className="info-section">
                            <div>
                                <h3 className="name-content-card-madeles">Robe droite mains évasés</h3>
                                <h3 className="title-content-card-madeles">$300</h3>
                            </div>
                            <div className="icons-content-card-madeles">
                            <FontAwesomeIcon icon={faStar} className='icon-content-card-madeles' />
                            <FontAwesomeIcon icon={faStar} className='icon-content-card-madeles' />
                            <FontAwesomeIcon icon={faStar} className='icon-content-card-madeles' />
                            <FontAwesomeIcon icon={faStar} className='icon-content-card-madeles' />
                            <FontAwesomeIcon icon={faStarHalfStroke} className='icon-content-card-madeles' />
                            
                            </div>
                            </div>
                            
                            
                        </div>
                        
                    </div>
                    <div>
                        <div className="card card-content-modeles-man">
                            <div className="image-card-content-modeles-man w-100">
                                <Image src='https://res.cloudinary.com/dtquwiu3x/image/upload/v1721757327/modele1_rf0py1.png' className="text-card-content-modeles-man" />
                                </div>
                            
                        </div>
                        {/* seconde */}
                        <div className="card icons_content-card_modeles_main_two" id='icons_content-card_modeles_main_two'>
                            <div>
                            <div className="avatar-section">
                            <Image src='https://res.cloudinary.com/dtquwiu3x/image/upload/v1717500940/baraka6_yaanlx.jpg' className='avatar-section' />
                            </div>
                            <p className='avatar-section-text'>Abdou Ndiaye</p>
                            

                            </div>
                            <div className="info-section">
                            <div>
                                <h3 className="name-content-card-madeles">Robe droite mains évasés</h3>
                                <h3 className="title-content-card-madeles">$300</h3>
                            </div>
                            <div className="icons-content-card-madeles">
                            <FontAwesomeIcon icon={faStar} className='icon-content-card-madeles' />
                            <FontAwesomeIcon icon={faStar} className='icon-content-card-madeles' />
                            <FontAwesomeIcon icon={faStar} className='icon-content-card-madeles' />
                            <FontAwesomeIcon icon={faStar} className='icon-content-card-madeles' />
                            <FontAwesomeIcon icon={faStarHalfStroke} className='icon-content-card-madeles' />
                            
                            </div>
                            </div>
                            
                            
                        </div>
                        
                    </div>
                    <div>
                        <div className="card card-content-modeles-man">
                            <div className="image-card-content-modeles-man w-100">
                                <Image src='https://res.cloudinary.com/dtquwiu3x/image/upload/v1721757327/modele1_rf0py1.png' className="text-card-content-modeles-man" />
                                </div>
                            
                        </div>
                        {/* seconde */}
                        <div className="card icons_content-card_modeles_main_two" id='icons_content-card_modeles_main_two'>
                            <div>
                            <div className="avatar-section">
                            <Image src='https://res.cloudinary.com/dtquwiu3x/image/upload/v1717500940/baraka6_yaanlx.jpg' className='avatar-section' />
                            </div>
                            <p className='avatar-section-text'>Abdou Ndiaye</p>
                            

                            </div>
                            <div className="info-section">
                            <div>
                                <h3 className="name-content-card-madeles">Robe droite mains évasés</h3>
                                <h3 className="title-content-card-madeles">$300</h3>
                            </div>
                            <div className="icons-content-card-madeles">
                            <FontAwesomeIcon icon={faStar} className='icon-content-card-madeles' />
                            <FontAwesomeIcon icon={faStar} className='icon-content-card-madeles' />
                            <FontAwesomeIcon icon={faStar} className='icon-content-card-madeles' />
                            <FontAwesomeIcon icon={faStar} className='icon-content-card-madeles' />
                            <FontAwesomeIcon icon={faStarHalfStroke} className='icon-content-card-madeles' />
                            
                            </div>
                            </div>
                            
                            
                        </div>
                        
                    </div>
                    

                </div>
            </section>

            
            {/* <section>
                <div className='content-cards-one-main'>
                    <div className="card1  content-card1s-one">
                        
                            <p>This is heading</p>
                            <p className="small">Card description with lots of great facts and interesting details.</p>
                            <div className="go-corner content_go_corner_one" href="#">
                            <div className="go-arrow content_go_corner_one">
                            <a  href="#">
                                →
                                </a>
                            </div>
                            </div>
                        
                    </div>
                    <div className="card1  content-card1s-one">
                            <p>This is heading</p>
                            <p className="small">Card description with lots of great facts and interesting details.</p>
                            <div className="go-corner content_go_corner_one" href="#">
                            <div className="go-arrow content_go_corner_one">
                            <a  href="#">
                                →
                                </a>
                            </div>
                            </div>
                       
                    </div>
                    <div className="card1  content-card1s-one">
                        
                            <p>This is heading</p>
                            <p className="small">Card description with lots of great facts and interesting details.</p>
                            <div className="go-corner content_go_corner_one" href="#">
                            <div className="go-arrow content_go_corner_one">
                            <a  href="#">
                                →
                                </a>
                            </div>
                            </div>
                       
                    </div>
                    <div className="card1  content-card1s-one">
                        
                            <p>This is heading</p>
                            <p className="small">Card description with lots of great facts and interesting details.</p>
                            <div className="go-corner content_go_corner_one" href="#">
                            <div className="go-arrow content_go_corner_one">
                            <a  href="#">
                                →
                                </a>
                            </div>
                            </div>
                       
                    </div>

                </div>
            </section> */}
            {/* ************************************ Nos modéles Fin  ******************************************* */}

            {/* ************************************ Nos separator Debut 2  ******************************************* */}
            <section className='mt-5'>
            <svg id="curveUpColor" xmlns="http://www.w3.org/2000/svg" version="1.1" width="100%" height="100" viewBox="0 0 100 100" preserveAspectRatio="none">
				<path d="M0 100 C 20 0 50 0 100 100 Z"/>
			</svg>
            <section class="col-2 color ss-style-curvedown">
			</section>
            <svg id="curveDownColor" xmlns="http://www.w3.org/2000/svg" version="1.1" width="100%" height="100" viewBox="0 0 100 100" preserveAspectRatio="none">
				<path d="M0 0 C 50 100 80 100 100 0 Z"/>
			</svg>

            </section>
            {/* ************************************ Nos separator Fin 2 ******************************************* */}


            {/* ************************************ Nos vendeurs Debut  ******************************************* */}
            <section  >
                <div>
                <Underline
                        title="Quelques un de nos vendeurs"
                        // titleColor="#0000"
                        // separatorColor="#33FF57"
                        separatorBackground="#00838d"
                    />
                    <div className='Card_Mentor_main-content_vendeur'>
                    <div className="Card_Mentor">
                    
                            <div className="card1-mentors">
                            <div className="section_left-mentor">
                            <Image src='https://res.cloudinary.com/dtquwiu3x/image/upload/v1721842895/bazin1_lykajo.png' alt="" id='section-left'/>
                            </div>
                            <div className="section_right">
                            <p> <span><FontAwesomeIcon icon={faUser}  id='iccon-sectionright-content'/> </span>Vendeur: Haby Ndiaye <span id="prop"></span></p>
                            <p> <span><FontAwesomeIcon icon={faEnvelope} id='iccon-sectionright-content' /></span>Email: ndiaye@gmail.com<span id="prop"> </span></p>
                            <p> <span><FontAwesomeIcon icon={faPhone} id='iccon-sectionright-content' /></span>Tel: 772586677<span id="prop"> </span></p>
                            <p> <span><FontAwesomeIcon icon={faShirt} id='iccon-sectionright-content' /></span>Nom tissu: Bazzin riche<span id="prop"></span></p>
                            <p> <span><FontAwesomeIcon icon={faTag} id='iccon-sectionright-content' /></span>Prix: <span id="prop">25000 FCFA</span></p>
                            <p> 
                                <span><FontAwesomeIcon icon={faLayerGroup} id='iccon-sectionright-content' /></span>Categorie:tissu bazin <span id="prop">
                                
                                </span>
                                </p>
                            
                            <div className='d-flex btn-content-section-right mt-5 '>
                            <button className='btn1-vendeurs-tailleur'><a href='#'  id='link-detail-maison-content'>Voir détail</a></button>
                            
                            <button className='btn2-vendeurs-tailleur' >Plus d'info</button>
                            </div>
                            </div>
                            </div>
                            <div className="card1-mentors">
                            <div className="section_left-mentor">
                            <Image src='https://res.cloudinary.com/dtquwiu3x/image/upload/v1721842880/bazin_meq5tw.png' alt="" id='section-left'/>
                            </div>
                            <div className="section_right">
                            <p> <span><FontAwesomeIcon icon={faUser}  id='iccon-sectionright-content'/> </span>Vendeur: Khalil Sow <span id="prop"></span></p>
                            <p> <span><FontAwesomeIcon icon={faEnvelope} id='iccon-sectionright-content' /></span>Email: khalil@gmail.com<span id="prop"> </span></p>
                            <p> <span><FontAwesomeIcon icon={faPhone} id='iccon-sectionright-content' /></span>Tel: 786886659<span id="prop"> </span></p>
                            <p> <span><FontAwesomeIcon icon={faShirt} id='iccon-sectionright-content' /></span>Nom tissu: Bazzin riche<span id="prop"></span></p>
                            <p> <span><FontAwesomeIcon icon={faTag} id='iccon-sectionright-content' /></span>Prix: <span id="prop">35000 FCFA</span></p>
                            <p> 
                                <span><FontAwesomeIcon icon={faLayerGroup} id='iccon-sectionright-content' /></span>Categorie:tissu bazin <span id="prop">
                                
                                </span>
                                </p>
                            
                            <div className='d-flex btn-content-section-right mt-5 '>
                            <button className='btn1-vendeurs-tailleur'><a href='#'  id='link-detail-maison-content'>Voir détail</a></button>
                            
                            <button className='btn2-vendeurs-tailleur' >Plus d'info</button>
                            </div>
                            </div>
                            </div>
                           
                            
                            
                        
                    
                    </div>
                   
                    </div>
                </div>
            </section>
            {/* ************************************ Nos vendeurs Fin  ******************************************* */}


            {/* ************************************ Nos chiffres clés Debut  ******************************************* */}
            
            <section className='ss-style-boxes'>
                <div>
                <Underline
                        title="Quelques chiffres clés"
                        titleColor="#ffff"
                        // separatorColor="#33FF57"
                        separatorBackground="#00838d"
                    />
                    <div className='chiffre-cles-main-content'>
                        <div className='flex flex-col justify-center items-center'>
                        <div className='chiffre-cles-main-content-one'>
                            <div className='chiffre-cles-main-content-two'><h4>+200</h4></div>
                            {/* <div><p>Lorem ipsum dolor sit amet.</p></div> */}
                        </div>
                        <h5 className='text-white mt-2'>Tailleurs</h5>

                        </div>

                        <div className='flex flex-col justify-center items-center'>
                        <div className='chiffre-cles-main-content-one'>
                            <div className='chiffre-cles-main-content-two'><h4>+500</h4></div>
                            {/* <div><p>Lorem ipsum dolor sit amet.</p></div> */}
                        </div>
                        <h5 className='text-white mt-2'>Vendeurs</h5>

                        </div>
                        <div className='flex flex-col justify-center items-center'>
                        <div className='chiffre-cles-main-content-one'>
                           <div className='chiffre-cles-main-content-two'> <h4>+300</h4></div>
                           {/* <div><p>Lorem ipsum dolor sit amet.</p></div> */}
                        </div>
                        <h5 className='text-white mt-2'>Clients satisfait</h5>

                        </div>

                        <div className='flex flex-col justify-center items-center'>
                        <div className='chiffre-cles-main-content-one'>
                            <div className='chiffre-cles-main-content-two'><h4>+600</h4></div>
                            {/* <div><p>Lorem ipsum dolor sit amet.</p></div> */}
                            
                        </div>
                        <h5 className='text-white mt-2'>Utilisateurs</h5>

                        </div>

                        <div className='flex flex-col justify-center items-center'>
                        <div className='chiffre-cles-main-content-one'>
                            <div className='chiffre-cles-main-content-two'><h4>+100</h4></div>
                            {/* <div><p>Lorem ipsum dolor sit amet.</p></div> */}
                            
                        </div>
                        <h5 className='text-white mt-2'>Partenaires</h5>
                        </div>
                        <div className='flex flex-col justify-center items-center'>
                        <div className='chiffre-cles-main-content-one'>
                            <div className='chiffre-cles-main-content-two'><h4>+450</h4></div>
                            
                            {/* <div><p>Lorem ipsum dolor sit amet.</p></div> */}
                            
                        </div>
                        <h5 className='text-white mt-2'>Founisseur</h5>

                        </div>
                    </div>

                </div>
            </section>
          
            {/* ************************************ Nos chiffres clés Fin  ******************************************* */}


            {/* ************************************ Nos partenaires Debut  ******************************************* */}
            <section>
                <div className='mt-5'>
                <Underline
                        title="Nos partenaires"
                        // titleColor="#ffff"
                        // separatorColor="#33FF57"
                        separatorBackground="#00838d"
                    />
                    <div className='mb-3  mt-5 flex' >
                        <Box
                            sx={{
                                width: '100%',
                                // maxWidth: 500,
                                display: 'flex',
                                // flexWrap: 'wrap',
                                gap: 2,
                            }}
                            className='animatedBox'
                        >
            
                            <Card
                            className='card-animation-content'
                            
                            variant="outlined" sx={{ flex: '1 1 240px'}}>
                                
                                <Grid minHeight="90px" maxHeight="100px" sx={{display:'flex', justifyContent:'center', alignItems:'center'}} >
                                    <div style={{width:'90px', height:'90px', borderRadius:'50%', display:'flex',justifyContent:'center',alignItems:'center'}}>
                                        <img
                                        src="https://res.cloudinary.com/dtquwiu3x/image/upload/v1722279459/logo-fond-blanc_eidsr5.png"
                                        
                                        alt=""
                                        className='h-100 w-100'
                                        style={{borderRadius:'50%'}}
                                        />

                                    </div>
                            </Grid>
                            </Card>
                            <Card
                            className='card-animation-content'
                            
                            variant="outlined" sx={{ flex: '1 1 240px'}}>
                                
                                <Grid minHeight="90px" maxHeight="100px" sx={{display:'flex', justifyContent:'center', alignItems:'center'}} >
                                    <div style={{width:'90px', height:'90px', borderRadius:'50%', display:'flex',justifyContent:'center',alignItems:'center'}}>
                                        <img
                                        src="https://res.cloudinary.com/dtquwiu3x/image/upload/v1722279459/logo-fond-blanc_eidsr5.png"
                                        
                                        alt=""
                                        className='h-100 w-100'
                                        style={{borderRadius:'50%'}}
                                        />

                                    </div>
                            </Grid>
                            </Card>
                            <Card
                            className='card-animation-content'
                            
                            variant="outlined" sx={{ flex: '1 1 240px'}}>
                                
                                <Grid minHeight="90px" maxHeight="100px" sx={{display:'flex', justifyContent:'center', alignItems:'center'}} >
                                    <div style={{width:'90px', height:'90px', borderRadius:'50%', display:'flex',justifyContent:'center',alignItems:'center'}}>
                                        <img
                                        src="https://res.cloudinary.com/dtquwiu3x/image/upload/v1722279459/logo-fond-blanc_eidsr5.png"
                                        
                                        alt=""
                                        className='h-100 w-100'
                                        style={{borderRadius:'50%'}}
                                        />

                                    </div>
                            </Grid>
                            </Card>
                            <Card
                            className='card-animation-content'
                            
                            variant="outlined" sx={{ flex: '1 1 240px'}}>
                                
                                <Grid minHeight="90px" maxHeight="100px" sx={{display:'flex', justifyContent:'center', alignItems:'center'}} >
                                    <div style={{width:'90px', height:'90px', borderRadius:'50%', display:'flex',justifyContent:'center',alignItems:'center'}}>
                                        <img
                                        src="https://res.cloudinary.com/dtquwiu3x/image/upload/v1722279459/logo-fond-blanc_eidsr5.png"
                                        
                                        alt=""
                                        className='h-100 w-100'
                                        style={{borderRadius:'50%'}}
                                        />

                                    </div>
                            </Grid>
                            </Card>
                            <Card
                            className='card-animation-content'
                            
                            variant="outlined" sx={{ flex: '1 1 240px'}}>
                                
                                <Grid minHeight="90px" maxHeight="100px" sx={{display:'flex', justifyContent:'center', alignItems:'center'}} >
                                    <div style={{width:'90px', height:'90px', borderRadius:'50%', display:'flex',justifyContent:'center',alignItems:'center'}}>
                                        <img
                                        src="https://res.cloudinary.com/dtquwiu3x/image/upload/v1722279459/logo-fond-blanc_eidsr5.png"
                                        
                                        alt=""
                                        className='h-100 w-100'
                                        style={{borderRadius:'50%'}}
                                        />

                                    </div>
                            </Grid>
                            </Card>
                        
                
                
            
                
            
                        </Box>

                    </div>
                    <div className='animatedBox' >
                        <Box
                            sx={{
                                width: '100%',
                                // maxWidth: 500,
                                display: 'flex',
                                // flexWrap: 'wrap',
                                gap: 2,
                            }}
                            className='animatedBox'
                        >
            
                            <Card
                            
                             variant="outlined" sx={{ flex: '1 1 240px'}}
                             className='card-animation-content1'
                             >
                                
                                <Grid minHeight="90px" maxHeight="100px" sx={{display:'flex', justifyContent:'center', alignItems:'center'}} >
                                    <div style={{width:'90px', height:'90px', borderRadius:'50%', display:'flex',justifyContent:'center',alignItems:'center'}}>
                                        <img
                                        src="https://res.cloudinary.com/dtquwiu3x/image/upload/v1722279459/logo-fond-blanc_eidsr5.png"
                                        
                                        alt=""
                                        className='h-100 w-100'
                                        style={{borderRadius:'50%'}}
                                        />

                                    </div>
                            </Grid>
                            </Card>
                            <Card
                            
                             variant="outlined" sx={{ flex: '1 1 240px'}}
                             className='card-animation-content1'
                             >
                                
                                <Grid minHeight="90px" maxHeight="100px" sx={{display:'flex', justifyContent:'center', alignItems:'center'}} >
                                    <div style={{width:'90px', height:'90px', borderRadius:'50%', display:'flex',justifyContent:'center',alignItems:'center'}}>
                                        <img
                                        src="https://res.cloudinary.com/dtquwiu3x/image/upload/v1722279459/logo-fond-blanc_eidsr5.png"
                                        
                                        alt=""
                                        className='h-100 w-100'
                                        style={{borderRadius:'50%'}}
                                        />

                                    </div>
                            </Grid>
                            </Card>
                            <Card
                            
                             variant="outlined" sx={{ flex: '1 1 240px'}}
                             className='card-animation-content1'
                             >
                                
                                <Grid minHeight="90px" maxHeight="100px" sx={{display:'flex', justifyContent:'center', alignItems:'center'}} >
                                    <div style={{width:'90px', height:'90px', borderRadius:'50%', display:'flex',justifyContent:'center',alignItems:'center'}}>
                                        <img
                                        src="https://res.cloudinary.com/dtquwiu3x/image/upload/v1722279459/logo-fond-blanc_eidsr5.png"
                                        
                                        alt=""
                                        className='h-100 w-100'
                                        style={{borderRadius:'50%'}}
                                        />

                                    </div>
                            </Grid>
                            </Card>
                            <Card
                            
                             variant="outlined" sx={{ flex: '1 1 240px'}}
                             className='card-animation-content1'
                             >
                                
                                <Grid minHeight="90px" maxHeight="100px" sx={{display:'flex', justifyContent:'center', alignItems:'center'}} >
                                    <div style={{width:'90px', height:'90px', borderRadius:'50%', display:'flex',justifyContent:'center',alignItems:'center'}}>
                                        <img
                                        src="https://res.cloudinary.com/dtquwiu3x/image/upload/v1722279459/logo-fond-blanc_eidsr5.png"
                                        
                                        alt=""
                                        className='h-100 w-100'
                                        style={{borderRadius:'50%'}}
                                        />

                                    </div>
                            </Grid>
                            </Card>
                            <Card
                            
                             variant="outlined" sx={{ flex: '1 1 240px'}}
                             className='card-animation-content1'
                             >
                                
                                <Grid minHeight="90px" maxHeight="100px" sx={{display:'flex', justifyContent:'center', alignItems:'center'}} >
                                    <div style={{width:'90px', height:'90px', borderRadius:'50%', display:'flex',justifyContent:'center',alignItems:'center'}}>
                                        <img
                                        src="https://res.cloudinary.com/dtquwiu3x/image/upload/v1722279459/logo-fond-blanc_eidsr5.png"
                                        
                                        alt=""
                                        className='h-100 w-100'
                                        style={{borderRadius:'50%'}}
                                        />

                                    </div>
                            </Grid>
                            </Card>
                            
                
                
            
                
            
                        </Box>

                    </div>


                </div>
            </section>
            {/* ************************************ Nos partenaires Fin  ******************************************* */}


            {/* ************************************ Footer Debut  ******************************************* */}
            <footer>
                <Footer/>
            </footer>
            {/* ************************************ Footer Fin  ******************************************* */}

         </main>

         <footer>

         </footer>

    </div>
  )
}
