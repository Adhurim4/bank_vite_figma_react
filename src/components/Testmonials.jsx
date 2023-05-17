import React from 'react'
import {feedback} from '../constants';
import styles from '../styles';
import FeedBackCard from './FeedBackCard';

const Testmonials = () => (
    <section id="clients" className={`${styles.paddingY} ${styles.flexCenter} flex-col relative`}>
      
    <div className="absolute z-[0] w-[60%] h-[60%] -right-[50%] rounded-full blue__gradient bottom-40" />


      <div className="w-full flex justify-between items-center md:flex-row flex-col sm:mb-16 mb-6 relative z-[1]">
        <h1 className={styles.heading2}>What people are <br className='sm:block hidden'/> people saying about us </h1>
        <div className='w-full md:mt-0 mt-6'>
          <p className={`${styles.paragraph} text-left max-w-[450px]`}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
           Est dolor voluptate ex vel, odit perferendis, repellendus facere? 
          Reprehenderit optio velit repellendus, recusandae quo vel sit.</p>
        </div>
      </div>
      <div className='flex flex-wrap sm:justify-start justify-center w-full feedback-contaoiner relative z-[1]'>
          {feedback.map((card)=> (
            <FeedBackCard key={card.id} {...card} />
          ))}
      </div>
    </section>
  )


export default Testmonials