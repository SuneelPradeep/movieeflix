import Link from 'next/link'
import MovieCard from '@/app/components/MovieCard';
import styles from '@/app/styles/common.module.css'


const page = async() => {
 
   await new Promise( resolve => setTimeout(resolve, 1000))
  const url = process.env.URL;
 const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': process.env.RAPIDAPIKEY,
		'X-RapidAPI-Host': process.env.RAPIDAPIHOST
	}
};


 const res = await fetch(url, options)
 const data =  await res.json()
  const main_data = data?.titles
//  //console.log('maindata is',main_data);

 return (
    <section className={styles.movieSection}>
      <div className={styles.container}>
    <h1> Movies & Series</h1>
    <div className={styles.card_section}>
    {
      main_data.map((item)=>{
        return (
              <MovieCard key={item.id} {...item} />
        )
      })
    }
    </div>
    
        </div>
    </section>
  )
}

export default page