import styles from '../components/Cards.module.css'
import Image from 'next/image'

export default function Acceleration() {
    return (
        <div className='row'>
            <div className='col-lg-4 col-md-4 col-sm-12'>
                <div className={styles.card}>
                    <Image src='/images/Group 1006-3.png' width={60} height={60} alt='Icon 1' />
                    <h3 className={styles.card_title}>Never update your contacts manually</h3>
                    <p className={styles.card_description}>Any contact you add in CRM gets updated automatically in Klenty. Set up Triggers to drive leads from Klenty back into the CRM.  Save hours everyday to focus on critical activities</p>
                </div>
            </div>
            <div className='col-lg-4 col-md-4 col-sm-12'>
                <div className={styles.card}>
                    <Image src='/images/Group 1006-4.png' width={60} height={60} alt='Icon 2' />
                    <h3 className={styles.card_title}>Engage instantly with prospects who show intent</h3>
                    <p className={styles.card_description}>Auto-sync email engagement data like opens, clicks and replies from Klenty right into your CRM. Get notified immediately. Followup without skipping a beat.</p>
                </div>
            </div>
            <div className='col-lg-4 col-md-4 col-sm-12'>
                <div className={styles.card}>
                    <Image src='/images/Group 1006-5.png' width={60} height={60} alt='Icon 2' />
                    <h3 className={styles.card_title}>Outreach without leaving your CRM</h3>
                    <p className={styles.card_description}>Engage with prospects straight from your CRM.Book meetings using Klenty- without ever logging into Klenty. No more switching screens to execute sales outreach.</p>
                </div>
            </div>
        </div>
    )
}