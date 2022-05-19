
import Image from 'next/image'
import styles from '../components/Hero.module.css'

export default function Hero() {
    return (
        <section className={styles.hero}>
            <div className='container'>
              <div className='row'>
                <div className='col-lg-6 col-md-6 col-sm-12 my-auto'>
                  <h1 className={styles.hero_headingOne}>Don't just integrate <span className={styles.hero_headingTwo}>Accelerate your CRM</span></h1>
                  <p className={styles.hero_content}>Propel your sales team into a state of flow with CRM Accelerations. Switch out boring hours of repetitive work with high-impact activities. Build a repeatable sales process.</p>
                  <button className={styles.hero_cta}>GET STARTED</button>
                </div>
                <div className='col-lg-6 col-md-6 col-sm-12'>
                  <Image src='/images/Group 1006.png' alt='Hero Image' width={528} height={521} />
                </div>
              </div>
            </div>
        </section>
    )
}