import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import React, { useEffect, useState, useRef } from 'react';

const About = () => {
  const [isVisible, setIsVisible] = useState(false);
  const textRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      {
        threshold: 0.1,
      }
    );

    if (textRef.current) {
      observer.observe(textRef.current);
    }

    return () => {
      if (textRef.current) {
        observer.disconnect();
      }
    };
  }, []);

  return (
    <div>
      <Navbar />
      <div 
        ref={textRef}
        className={`min-h-screen w-full text-center mt-20 font-poppins text-white 
          ${isVisible ? 'visible opacity-100' : 'opacity-0'}
          transition-opacity duration-1000 ease-in-out`}>
        <h1 className='text-2xl font-bold'>About Us?</h1>
        <p className='px-6 sm:px-12 md:px-24 lg:px-60 text-md sm:text-lg md:text-xl mx-auto py-4'>
          Our mission is to make machine learning accessible, efficient, and impactful for individuals and businesses alike. 
          We aim to break down the complex barriers that often surround machine learning, providing user-friendly solutions 
          that empower everyone—from novice learners to seasoned professionals. We believe that by simplifying the application 
          of these advanced technologies, we can create lasting improvements across various industries.
          
          Through the use of cutting-edge algorithms, we are focused on developing models that are not only powerful but also 
          adaptable to a wide range of use cases. Whether it's automating tasks, enhancing decision-making, or providing insights 
          into complex datasets, our goal is to deliver tangible results that address real-world challenges.
          
          We strive to build solutions that are both intuitive and efficient, ensuring that they are accessible to all skill levels. 
          By integrating advanced technology with human-centric design, we enable businesses and individuals to unlock the full potential 
          of machine learning. Our vision is to bridge the gap between technical innovation and everyday usability, allowing everyone to 
          benefit from the transformative power of machine learning.
        </p>
      </div>
      <Footer></Footer>
    </div>
  );
}

export default About;
