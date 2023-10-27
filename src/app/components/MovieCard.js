import React from 'react'
import styles from '@/app/styles/common.module.css'
import Image from 'next/image';
import Link from 'next/link';

const MovieCard = (data) => {

const {id,title,synopsis} = data?.jawSummary
// //console.log('data in movieCard is',data);

  return (
    <div className={styles.card}>
        <div className={styles.card_image}>
        <Link href={`/movie/${id}`}><Image src={data.jawSummary.backgroundImage.url} alt={title} width={300} height={200} /> </Link>
        </div>
        <div className={styles.card_data}>
            <h2> {title?.substring(0,18)}</h2>
            <p> {`${synopsis?.substring(0,75)} ...`} </p>
            <Link href={`/movie/${id}`}>
                <button> Show More </button>
            </Link>
        </div>
    </div>
    // <div>{synopsis}</div>
  )
}

export default MovieCard