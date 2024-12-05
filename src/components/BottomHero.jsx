import React, { useEffect, useState, useRef } from 'react';


const BottomHero = () => {
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
          <div
            ref={textRef}
            className={`w-full py-16 px-8 text-white slide-up ${
              isVisible ? 'visible' : ''
            }`}
          >
        <h1 className='text-4xl font-bold mx-12 justify-center text-center '>Fueling Success Through Cutting-Edge Machine Learning Research</h1>
        <p className='text-md mx-auto justify-center text-center mt-9 max-w-4xl '>Advancing Machine Learning Research to Transform Industries and Shape a Visionary Future Our mission is to scale the boundaries of machine learning research, delivering impactful innovations that empower industries and redefine the possibilities of tomorrow. By bridging cutting-edge research with real-world applications, we aim to create intelligent systems that are not only efficient but also ethically aligned and inclusive.</p>
    <div className='flex flex-wrap md:flex-nowrap flex-col md:flex-row items-center justify-center gap-6 px-4 sm:px-8 md:px-24 py-40'>
        <div className='p-5 flex flex-col text-center font-poppins w-full'>
            <h1 className='text-xl font-semibold mb-5 text-[#e14d41]'>01</h1>
            <h1 className='text-lg font-bold mb-3'>Developing AI Models</h1>
            <p>Creating machine learning models that provide interpretable and transparent decision-making processes.</p>
        </div>
        <div className='p-5 flex flex-col text-center font-poppins w-full'>
            <h1 className='text-xl font-semibold mb-5 text-[#e14d41]'>02</h1>
            <h1 className='text-lg font-bold mb-3' >AI for Medical Imaging And Diagnostics</h1>
            <p>Enhancing diagnostic accuracy and speed using AI in medical imaging.</p>
        </div>
        <div className='p-5 flex flex-col text-center font-poppins w-full'>
            <h1 className='text-xl font-semibold mb-5 text-[#e14d41]'>03</h1>
            <h1 className='text-lg font-bold mb-3'>Human-AI Collaboration in Education</h1>
            <p>Designing AI tools that enhance personalized learning experiences while fostering human-AI collaboration.</p>
        </div>
        <div className='p-5 flex flex-col text-center font-poppins w-full'>
            <h1 className='text-xl font-semibold mb-5 text-[#e14d41]'>04</h1>
            <h1 className='text-lg font-bold mb-3'>AI for Environmental Sustainability</h1>
            <p>Leveraging AI to predict and mitigate environmental challenges, such as deforestation or climate change.</p>
        </div>
    </div>
    </div>
  )
}

export default BottomHero;