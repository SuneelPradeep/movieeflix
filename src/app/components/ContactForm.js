'use client'

import React, { useState } from 'react'
import styles from '@/app/contact/contact.module.css'
import { Mulish } from 'next/font/google'

// const inter = Inter({ subsets: ['latin'] })
const mulish = Mulish({
  weight :['400','500', '600','700','800','900'],
  subsets : ['latin'],
  display : 'swap'
})
const ContactForm = () => {
 
    const [data,setData] = useState({
        username : '', email : '',phone : '',msg : ''
    })
    const [status,setStatus] = useState('')
//console.log('data  is',data);
//console.log('and status is',status);
const handleChange = (e)=>{
    let name = e.target.name;
    let value = e.target.value;

    setData({...data, [name] : value})
}
    const handleSubmit = async(e)=>{
        e.preventDefault()
        try {
            const response = await fetch('/api/contact',{
                method : "POST",
                headers : {"Content-Type" : "application/json"},
                 body : JSON.stringify({
                    username : data.username,
                    email : data.email,
                    phone : data.phone,
                    message : data.msg
                 })
            })
            //console.log('respnose is',response.status,response);
            if(response.status ===200){
                setData({ username : '', email : '',phone : '',msg : '' })
                setStatus('success')
             }else{
                 setStatus('failed')
             }
        } catch (error) {
            //console.log('error is',error);
        }
        
    }

  return (
    <form className={styles.contact_form} onSubmit={handleSubmit}>
        <div className={styles.input_field}>
            <label htmlFor='username' className={styles.label}> Name
                <input className={mulish.className} autoComplete='off' required={true} type='text' name='username' id='username' placeholder='enter your name' value={data.username} onChange={handleChange} />
            </label>
        </div>
        <div className={styles.input_field}>
            <label htmlFor='email' className={styles.label}> Email
                <input className={mulish.className} autoComplete='off' required={true}  type='email' name='email' id='email' placeholder='enter your email' value={data.email} onChange={handleChange}  />
            </label>
        </div>
        <div className={styles.input_field}>
            <label htmlFor='phone' className={styles.label}>Number
                <input className={mulish.className} autoComplete='off' required={true}  type='number' name='phone' id='phone' placeholder='enter your number' value={data.phone} onChange={handleChange}  />
            </label>
        </div>
        <div className={styles.input_field}>
            <label htmlFor='message' className={styles.label}> Message
                <textarea className={mulish.className}  autoComplete='off' required={true}  name='msg' id='message' placeholder='enter your message' value={data.msg} onChange={handleChange}  />
            </label>
        </div>
 <div>
    {status ==='success' && <p className={styles.success_msg}>your message has been delivered!</p>}
    {status ==='failed' && <p className={styles.error_msg}>There was an error submtting your message</p>}
    <button type='submit' className={mulish.className} >Send a Message</button></div>

    </form>

   
  )
}

export default ContactForm