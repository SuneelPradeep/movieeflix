import React from 'react'
import styles from '@/app/styles/navbar.module.css'
import Link from 'next/link'
import Image from 'next/image'
import Nav from './Nav'

const Header = () => {
  return (
    <header className={styles.main_header}>
         <Link href='/'>
          <Image src='/movieflix.png' alt='logo' width={150} height={100} style={{marginTop : '2.2rem'}}  />
         </Link>

         <Nav />
    </header>
  )
}

export default Header