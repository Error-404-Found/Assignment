import styles from '../components/Acceleration.module.css'
import Cards from './cards'

export default function Acceleration() {
    return (
        <section className={styles.acceleration}>
            <div className='container'>
                <div className='row'>
                    <div className='col-12 text-center'>
                        <h2 className={styles.acceleration_heading}>CRM Acceleration</h2>
                        <p className={styles.acceleration_content}>Everything CRM Integrations was supposed to be. And more.</p>
                    </div>
                </div>
                <Cards />
            </div>
        </section>
    )
}