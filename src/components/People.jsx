import React from 'react'
import styles from '../styles'
import {workers} from '../constants'

const People = () => {
  return (
    <section id='people' className='flex justify-center items-center md:flex-row flex-col py-[150px]'>

        <div className="flex justify-center items-center flex-1">
            <h1 className={`${styles.heading2} text-white font-poppins`}>Some of our workers <br className='sm:block hidden '/> and their positions. <br className='sm:block hidden '/> Meet them. </h1>
       </div>
       <div className='flex justify-start items-start flex-1 md:flex-row flex-col  md:my-0 my-10'>
            {workers.map((worker,index) => (
                <div key={worker.id} className="flex justify-center  items-center flex-row"> 
                    <img src={worker.logo} alt="logo" className={`${index % 2 === 0 ? 'md:mt-[-40px] mt-5 border-b-2 border-white pb-[5px]' : 'md:mt-[40px] mt-5 border-t-2 border-white pt-[5px]'   } rounded-full`} />
                    <p className={`${styles.paragraph} mx-3 text-white} ${index % 2 === 0 ? 'md:mt-[-60px] mt-5' : 'md:mt-[60px] mt-5' } `}>{worker.position}</p>
                </div>
            ))}
       </div>
    </section>
  )
}

export default People