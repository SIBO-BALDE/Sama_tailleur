import React from 'react'
import { FormControl, Image } from 'react-bootstrap'
import NavbarUser from '../../../Components/UserComponents/NavbarUser/NavbarUser'
import Footer from '../../../Components/UserComponents/Footer/Footer'
import imageban from '../../../Images/ban-deux.jpg'
// import imageban from '../../../Images/ban-une.PNG'
import './AboutScreen.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDiamond } from '@fortawesome/free-solid-svg-icons'
import Underline from '../../../Components/UserComponents/Underline/Underline'
import image2 from '../../../Images/image ia2.jpeg'
import image1 from '../../../Images/image ia1.jpeg'
import image3 from '../../../Images/image ia3.jpeg'
import image4 from '../../../Images/image ia3.jpeg'
export default function AboutScreen() {
  return (
    <div>
        <header>
            {/* ************************************ Navbar Debut  ******************************************* */}
            <NavbarUser />
            {/* ************************************ Navbar Fin  ******************************************* */}
            
            {/* ************************************ Banniere Debut  ******************************************* */}
            
            <section>
                <div style={{backgroundColor:'black'}}>
                    <div style={{width:'100%', height:'570px', marginTop:'60px'}}>
                        <Image src={imageban} style={{width:'100%', height:'100%',opacity:'0.6'}}/>
                    </div>
                    {/* <div className='content-text-ban-appropos2'>
                        <div className='content-text-ban-appropos-cards d-flex flex-column justify-content-center align-items-center' id='content-text-ban-appropos-cards1'>
                            <div className='content-text-ban-appropos-cards-content'><FontAwesomeIcon icon={faDiamond} className='content-text-ban-appropos-cards-icons' /></div>
                            <p className='text-white text-center'>Nos objectifs sont de ble bla bleu okay du mama</p>
                        </div>
                        <div className='content-text-ban-appropos-cards d-flex flex-column justify-content-center align-items-center' id='content-text-ban-appropos-cards'>
                        <div className='content-text-ban-appropos-cards-content'><FontAwesomeIcon icon={faDiamond} id='content-text-ban-appropos-cards-icons' /></div>
                        <p className='text-white text-center'>Nos objectifs sont de ble bla bleu okay du mama</p>
                        </div>
                        <div className='content-text-ban-appropos-cards d-flex flex-column justify-content-center align-items-center' id='content-text-ban-appropos-cards2'>
                        <div className='content-text-ban-appropos-cards-content'><FontAwesomeIcon icon={faDiamond} className='content-text-ban-appropos-cards-icons' /></div>
                        <p className='text-white text-center'>Nos objectifs sont de ble bla bleu okay du mama</p>
                        </div>
                       
                    </div> */}
                    <div className='content-text-ban-appropos2'>
                        <h2>Découvrez Sama-tailleur la Solution Incontournable pour les Passionnés de Couture</h2>
                        <h6 >Sama-tailleur simplifie la gestion de vos projets de couture avec une plateforme élégante.
                         Publiez vos modèles, recevez des commandes, et achetez des tissus en toute simplicité.</h6>
                        
                       
                    </div>
                </div>
            </section>
            {/* ************************************ Banniere Fin  ******************************************* */}
       </header>
        <main>
             {/* ************************************ Premier section Debut   ******************************************* */}
             <section className='mt-2'>
             <Underline
                        title="A propos de Sama Tailleur"
                        // titleColor="#ffff"
                        // separatorColor="#33FF57"
                        separatorBackground="#00838d"
                    />
                <div className='mt-4' style={{backgroundColor:'#00838d',width:'100%',height:'auto',paddingTop:'20px',paddingBottom:'20px'}}>
                    
                    <div className=' content-main-trois-about'>
                        <div style={{width:'680px', height:'590px'}} className='content-main-trois-about-image-content'><Image src={image2} style={{width:'100%', height:'100%'}} className='content-main-trois-about-image' /></div>
                        <div className='text-white content-main-trois-about-deux'>
                            <h3 className='content-gradient'>Bienvenue sur Sama-Tailleur</h3>
                            <p style={{textAlign:'justify'}}>
                             Votre plateforme dédiée à l'univers de la couture sur mesure. Que vous soyez un couturier passionné ou un client à la recherche de créations uniques, Sama-Tailleur est conçue pour répondre à tous vos besoins en matière de mode et de textile.
                            </p>
                            {/* <div className='line-paragraph-content' id='line-paragraph-content'></div> */}
                            
                            <p style={{textAlign:'justify'}}>
                                Pour les couturiers :
                                Sama-Tailleur vous offre la possibilité de partager vos créations avec un large public. Publiez vos modèles, gérez vos commandes en toute simplicité, et mettez en avant votre savoir-faire. Notre plateforme vous permet de créer un lien direct avec vos clients, tout en vous offrant un espace pour exposer votre talent.
                            </p>
                            <p style={{textAlign:'justify'}}>
                                Pour les clients :
                                Trouvez le modèle parfait pour chaque occasion en parcourant les créations de nos couturiers partenaires. Personnalisez vos commandes en choisissant des tissus de qualité, disponibles auprès des vendeurs de notre plateforme. Vous pouvez même prendre vos mesures directement en ligne pour une expérience de commande simplifiée et sur mesure.

                            </p>
                            <p style={{textAlign:'justify'}}>
                                Pour les vendeurs de tissus :
                                Sama-Tailleur vous connecte avec une clientèle de couturiers et de particuliers en quête de matériaux de qualité. Mettez en avant votre inventaire et élargissez votre réseau de clients grâce à notre plateforme intuitive et facile à utiliser.
                            </p>
                            <p style={{textAlign:'justify'}}>
                              Notre mission est de rendre la couture sur mesure accessible à tous, en facilitant la collaboration entre couturiers, clients et vendeurs de tissus. 
                            </p>
                            <p style={{textAlign:'justify'}}>Grâce à Sama-Tailleur, créez des pièces uniques qui vous ressemblent, sans compromis.
                                Rejoignez-nous dès aujourd'hui et découvrez une nouvelle manière de vivre la mode sur mesure.
                            </p>
                        </div>
                    </div>
                </div>
             </section>


             {/* ************************************ Premier section Fin 2  ******************************************* */}




             {/* ************************************ Deuxiéme section Debut 2  ******************************************* */}
             <section>
             <Underline
                        title="Quelques chiffres clés"
                        // titleColor="#ffff"
                        // separatorColor="#33FF57"
                        separatorBackground="#00838d"
                    />
                <div className=' d-flex justify-content-center w-100 mt-3' >
                    
                    <div className='content-main-apropos-seconde' style={{height:'190px'}}>
                    <div className='content-section-deux-appropos'>
                    <div>
                        <h1 className='text-white title-chiffres-about'>+300</h1>
                        <p className='text-white text-center'>Coutriers</p>
                    </div>
                    <div>
                        <h1 className='text-white title-chiffres-about'>+250</h1>
                        <p className='text-white text-center'>Objectifs</p>
                    </div>
                    <div>
                        <h1 className='text-white title-chiffres-about'>+500</h1>
                        <p className='text-white text-center'>Vendeurs</p>
                    </div>

                    </div>
                        
                    </div>
                </div>
             </section>
             {/* ************************************ Deuxiéme section Fin 2  ******************************************* */}


             {/* ************************************ troisiéme section Debut 2  ******************************************* */}
             <section className='section3-content-main-prncipal mt-5'>
             <Underline
                        title="Quelques uns de nos vendeurs et coutriers"
                        // titleColor="#ffff"
                        // separatorColor="#33FF57"
                        separatorBackground="#00838d"
                    />
                <div className='section3-content-main-prncipal-one mt-3' style={{backgroundColor:'#212E53'}}>
                    <div className='section3-content-main-prncipal-secondo container ' id='section3-content-main-principal-secondo'>
                        <div style={{width:'100%',height:'390px'}}>
                            <Image src={image1} style={{width:'100%', height:'100%'}} />
                        </div>
                        <div style={{width:'100%',height:'390px'}}>
                            <Image src={image2} style={{width:'100%', height:'100%'}} />
                        </div>
                        <div style={{width:'100%',height:'390px'}}>
                            <Image src={image3} style={{width:'100%', height:'100%'}} />
                        </div>
                        <div style={{width:'100%',height:'390px'}}>
                            <Image src={image4} style={{width:'100%', height:'100%'}} />
                        </div>
                        <div style={{width:'100%',height:'390px'}}>
                            <Image src={image4} style={{width:'100%', height:'100%'}} />
                        </div>
                        <div style={{width:'100%',height:'390px'}}>
                            <Image src={image4} style={{width:'100%', height:'100%'}} />
                        </div>
                        
                        

                    </div>

                </div>
             </section>
             {/* ************************************ troisiéme section Fin 2  ******************************************* */}
        </main>
        <footer>
            <Footer/>
        </footer>
    </div>
  )
}
