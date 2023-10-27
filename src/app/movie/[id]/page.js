import React from 'react'
import styles from '@/app/styles/common.module.css'
import Image from 'next/image'

const page = async ({params}) => {
 
  const id = params.id
  const URL = `${process.env.URLVARYINGID}?ids=${id}&lang=en`
  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': process.env.RAPIDAPIKEY,
      'X-RapidAPI-Host': process.env.RAPIDAPIHOST
    }
  };
  
  const res = await fetch(URL,options)
  const data = await res.json()
  const id_data = data[0]?.details
  //console.log('seee',id_data);
  return (
    <div className={styles.container}>
      <h2 className={styles.movie_title}> Netflix \  <span>{id_data?.type} </span> <span>[ {id_data?.maturity.rating?.value} ] </span></h2>
      <div>
        <Image src={id_data?.backgroundImage.url} alt={id_data?.title} width={id_data?.backgroundImage.width ? Number(id_data?.backgroundImage.width): 600} height={id_data?.backgroundImage.height ? Number(id_data?.backgroundImage.height) : 300} />
      </div>
      <div>
        <h1> {id_data?.title} ({(id_data?.releaseYear)}) </h1>
         <span style={{display:'flex',flexDirection:'row',gap:'1.5rem',fontSize:'1.6rem',marginTop:'1rem'}}>Genres : {id_data?.genres?.map(item=> (<h6 style={{display:'flex',flexDirection:'row',color :'grey',justifyContent:'flex-start',alignItems:'center',fontSize:'1.2rem'}}>{item.name} </h6>))}</span>
         {id_data?.type==='show' &&<span style={{display:'flex',flexDirection:'row',gap:'1.5rem',fontSize:'1.6rem',marginTop:'1rem'}}>Seasons : <span style={{fontSize:'1.5rem'}}>{id_data?.type==='show' ? id_data?.seasonCount : ''} </span></span>}
        <p> {id_data?.synopsis} </p>
      </div>
      
        
    </div>
  )
}

export default page