import React from 'react';
import ProudCoder from '../svgs/ProudCoder';
import HackerMind from '../svgs/HackerMind';
import SourceCode from '../svgs/SourceCode';
import { motion, useViewportScroll } from 'framer-motion';

const Home = () => {
  const { scrollYProgress } = useViewportScroll();
  console.log(scrollYProgress);
  return (
    <motion.div
      className='container-main'
      style={{ pathLength: scrollYProgress }}
    >
      <section className='d-flex justify-content-space-between align-items-center vh-100'>
        <div className='mr-2'>
          <h1>Code Snips</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit id
            nihil, suscipit culpa numquam consectetur veniam dolor temporibus a
            omnis aperiam maxime dicta tempore laboriosam animi amet repellat
            inventore voluptatem odit. Eligendi reprehenderit labore quibusdam
            officiis assumenda laborum accusantium, voluptatibus alias tempora,
            modi omnis, vitae at sed sapiente nostrum veritatis.
          </p>
          <button className='btn btn-lg bg-purple titillium f-22 text-dark z-depth-1'>
            GET STARTED
          </button>
        </div>
        <ProudCoder width={'500'} />
      </section>
      <section className='d-flex justify-content-space-between  vh-100'>
        <HackerMind width={'800'} />
        <div className='mr-2'>
          <h1>Store Code in a Centralised Mongo Database</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit id
            nihil, suscipit culpa numquam consectetur veniam dolor temporibus a
            omnis aperiam maxime dicta tempore laboriosam animi amet repellat.
          </p>
          <button className='btn btn-lg bg-purple titillium f-22 text-dark z-depth-1'>
            GET STARTED
          </button>
        </div>
      </section>
      <section className='d-flex justify-content-space-between  vh-100'>
        <div className='mr-2'>
          <h1>Store Code in a Centralised Mongo Database</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit id
            nihil, suscipit culpa numquam consectetur veniam dolor temporibus a
            omnis aperiam maxime dicta tempore laboriosam animi amet repellat.
          </p>
          <button className='btn btn-lg bg-purple titillium f-22 text-dark z-depth-1'>
            GET STARTED
          </button>
        </div>
        <SourceCode width={'700'} />
      </section>
    </motion.div>
  );
};

export default Home;
