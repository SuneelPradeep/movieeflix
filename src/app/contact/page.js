import React from 'react'
import ContactCard from '../components/ContactCard'
import styles from '@/app/contact/contact.module.css'
import ContactForm from '../components/ContactForm'

const page = () => {
  return (
    <>
    <div className={styles.container}>
    <h1> Contact Us </h1>
    <ContactCard />
    <section className={styles.contact_section}>
      <h2> We'd love to hear <span> from you</span></h2>
      <ContactForm />
    </section>
    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3800.036283104626!2d83.33615027492658!3d17.742929492465837!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a3944aafcf07c1d%3A0xbb8f1b2bc2cec560!2sMVP%20Cir%2C%20Sector-%206%2C%20MVP%20Colony%2C%20Visakhapatnam%2C%20Andhra%20Pradesh%20530017!5e0!3m2!1sen!2sin!4v1697132809212!5m2!1sen!2sin" 
    width={600} height={450} style={{border:0}} allowFullScreen={true} loading="lazy" className={styles.mapping} referrerpolicy="no-referrer-when-downgrade"></iframe>
    </div>
    
    </>
  )
}

export default page