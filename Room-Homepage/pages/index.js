import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Box from '../components/box'
import React, {useState} from "react" 
import { useEmblaCarousel } from 'embla-carousel/react'
import {css,cond} from '../utilities/css'


export default function Home() {

  const [open,setOpen] = useState(false)
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true })



  return (
    <div>
      <Head>
        <title>Frontend Mentor | Room homepage</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>


      <div className={styles.wrap}>

        <div className={styles.navigation}>

          <div className={css(styles.menu,cond(styles.menumobile,open))}>

            <button type="button" className={styles.hamburger}
            onClick={()=>setOpen(!open)}
            >

            {!open?(  
              <img src="./images/icon-hamburger.svg" alt="icon" />
            
            ): <img src="./images/icon-close.svg" alt="icon" />}

            </button>

            {!open?(
              <img src="/images/logo.svg"  alt="logo"  className={styles.logo}/>
            ):null}    


            {open?( 
              <div className={styles.linkmobile}>

                <a href="*"> home</a>
                <a href="*"> shop</a>
                <a href="*"> about</a>
                <a href="*"> contact</a>

              </div>

            ):null}  

            <div className={styles.link}>

              <a href="*"> home</a>
              <a href="*"> shop</a>
              <a href="*"> about</a>
              <a href="*"> contact</a>

            </div> 

          </div>  

        </div>


        
        <div className={styles.viewportCss} ref={emblaRef}>

          <div className={styles.containerCss}>

            <div className={styles.slideCss}> 

              <div className={css(styles.top,cond(styles.topmobile,open))}>  

                <div className={styles.hero}>

                  <img src="images/desktop-image-hero-1.jpg" alt="image" className={styles.image} />

                </div>

                <Box padding="top">

                  <h1>Discover innovative ways to decorate</h1>
                  <p>We provide unmatched quality, comfort, and style for property owners across the country. 
                    Our experts combine form and function in bringing your vision to life. Create a room in your 
                    own style with our collection and make your property a reflection of you and what you love.
                  </p>

                  <p className={styles.shop} >SHOP NOW  <span> <svg width="40" height="12" xmlns="http://www.w3.org/2000/svg"><path d="M34.05 0l5.481 5.527h.008v.008L40 6l-.461.465v.063l-.062-.001L34.049 12l-.662-.668 4.765-4.805H0v-1h38.206l-4.82-4.86L34.05 0z" fill="#000" fill-rule="nonzero"/></svg></span> </p>  
          
                </Box>

              </div>

            </div>


            <div className={styles.slideCss}> 

              <div className={css(styles.top,cond(styles.topmobile,open))}>  

                <div className={styles.hero}>

                  <img src="images/desktop-image-hero-2.jpg" alt="image" className={styles.image} />

                </div>

                <Box padding="top">

                  <h1>We are available all across the globe</h1>
                  <p>With stores all over the world, it's easy for you to find furniture for your home or place of business. 
                    Locally, we’re in most major cities throughout the country. Find the branch nearest you using our 
                    store locator. Any questions? Don't hesitate to contact us today.
                  </p>

                  <p className={styles.shop} >SHOP NOW  <span> <svg width="40" height="12" xmlns="http://www.w3.org/2000/svg"><path d="M34.05 0l5.481 5.527h.008v.008L40 6l-.461.465v.063l-.062-.001L34.049 12l-.662-.668 4.765-4.805H0v-1h38.206l-4.82-4.86L34.05 0z" fill="#000" fill-rule="nonzero"/></svg></span> </p>  
          
                </Box>

              </div>

            </div>


            <div className={styles.slideCss}> 

              <div className={css(styles.top,cond(styles.topmobile,open))}>  

                <div className={styles.hero}>

                 <img src="images/desktop-image-hero-3.jpg" alt="image" className={styles.image} />

                </div>

                <Box padding="top">

                  <h1>Manufactured with the best materials</h1>
                  <p>Our modern furniture store provide a high level of quality. Our company has invested in advanced technology 
                    to ensure that every product is made as perfect and as consistent as possible. With three decades of 
                    experience in this industry, we understand what customers want for their home and office.
                  </p>

                  <p className={styles.shop} >SHOP NOW  <span> <svg width="40" height="12" xmlns="http://www.w3.org/2000/svg"><path d="M34.05 0l5.481 5.527h.008v.008L40 6l-.461.465v.063l-.062-.001L34.049 12l-.662-.668 4.765-4.805H0v-1h38.206l-4.82-4.86L34.05 0z" fill="#000" fill-rule="nonzero"/></svg></span> </p>  

                </Box>

              </div>

            </div>


          </div>

        </div>      


        <div className={styles.switch}>

          <button type="button" className={styles.button}
          onClick={()=>
          emblaApi.scrollPrev()}
          >

            <svg width="14" height="24" xmlns="http://www.w3.org/2000/svg"><path d="M13 0L1 12l12 12" stroke="#FFF" fill="none" fill-rule="evenodd"/></svg>          

          </button>

          <button className={styles.button}
          onClick={()=>
          emblaApi.scrollNext()}
          >

            <svg width="14" height="24" xmlns="http://www.w3.org/2000/svg"><path d="M1 0l12 12L1 24" stroke="#FFF" fill="none" fill-rule="evenodd"/></svg>

          </button>
        
        </div>  


      </div>
             

      <div className={styles.wrap}>
        <div className={styles.bottom}>

          <div className={styles.column1}>

            <img src="images/image-about-dark.jpg" alt="image" className={styles.image} />

          </div>

          <Box padding="bottom">

            <h4>ABOUT OUR FURNITURE</h4>
            <p> Our multifunctional collection blends design and function to suit your individual taste.
            Make each room unique, or pick a cohesive theme that best express your interests and what
            inspires you. Find the furniture pieces you need, from traditional to contemporary styles
            or anything in between. Product specialists are available to help you create your dream space.</p>

          </Box>

          <div className={styles.column3}>

            <img src="images/image-about-light.jpg" alt="image" className={styles.image} />

          </div>

          
        </div>

      </div>  
      
    </div>
  )
}
