
import React from 'react'
import TAbox from '../components/TAbox'
import TechStackOrbit from '../components/TechStackOrbit';
import {useState} from "react";
import Button from '../components/Button';
import Girl from '/public/assets/girl.webp';
import Grid from '/public/assets/grid3.png';

const About = () => {
  const [hasCopied, setHasCopied] = useState(false);
  const handleCopy = () =>{

    navigator.clipboard.writeText('marwa.alazaab@gmail.com');

    setHasCopied(true);
    
    setTimeout(()=>{
      setHasCopied(false);
    },2000)
  }

  return (
    <section className="c-space my-20" id="#about">
      <div className="grid xl:grid-cols-3 xl:grid-rows-6 md:grid-cols-2 grid-cols-1 gap-5 h-full">
        <div className="col-span-1 xl:row-span-3">
          <div className="grid-container">
            <img src={Girl} alt="grid-1" className="w-full sm:h-[276px] h-fit object-contain" />

            <div>
            <p className='grid-headtext'>Hi, I'm Marwa</p>
            <p className='grid-subtext'>Passionate full-stack developer with 
              hands-on experience in building dynamic web applications, 
              also experienced in cybersecurity, ensuring secure and 
              robust application development.</p>
          </div>
          </div>
        </div>

        <div className="col-span-1 xl:row-span-3">
          <div className="grid-container">
            <TechStackOrbit/>    
            <div>
              <p className="grid-headtext">Tech Stack</p>
            
              <p className='grid-subtext'>Proficient in React.js, Node.js, and web3.js for 
              blockchain integration. Skilled in frontend design, backend development, 
              and database management.</p>
            </div>
           </div>
        </div>

        <div className="col-span-1 xl:row-span-4">
        <div className="grid-container">
          <div className="rounded-3xl w-full sm:h-[326px] h-fit flex justify-center items-center mt-16">
            <TAbox />
          </div>
          <div className="mt-14"> {/* Added spacing */}
            <p className="grid-headtext">Cybersecurity TA</p>
            <p className="grid-subtext mb-8"> {/* Added bottom margin */}
              Guiding students through the complexities of cybersecurity, blockchain, DFIR, and Secure Programming.
            </p>
            <Button name="Contact Me" isBeam containerClass="w-full mt-6" /> {/* Increased top margin */}
          </div>
        </div>
      </div>

          <div className="xl:col-span-2 xl:row-span-3 flex flex-col items-center justify-center space-y-6"> {/* Centering the whole card */}
      <div className="grid-container text-center"> {/* Centering the content */}
        <img src={Grid} alt="grid-3" className="w-full sm:h-[266px] h-fit object-contain mx-auto mt-14" /> {/* Ensuring the image is centered */}
        <div className="mt-6">
          <p className="grid-headtext">Web Developer with a Security Mindset</p>
          <p className="grid-subtext">
            I’m passionate about web development—bringing ideas to life through code while keeping security at the core of every project.
          </p>
        </div>
      </div>
    </div>


        <div className="xl:col-span-1 xl:row-span-2">
        <div className="grid-container flex flex-col items-center justify-center space-y-4"> {/* Flexbox for centering */}
          <img
            src="assets/grid4.png"
            alt="grid-4"
            className="w-full md:h-[126px] sm:h-[276px] h-fit object-cover sm:object-top"
          />
          <div className="space-y-2 text-center"> {/* Ensuring consistent centering */}
            <p className="grid-headtext">Contact me</p>
            <div className="copy-container flex items-center justify-center space-x-2" onClick={handleCopy}>
              <img src={hasCopied ? 'assets/tick.svg' : 'assets/copy.svg'} alt="copy" />
              <p className="lg:text-2xl md:text-xl font-medium text-gray_gradient text-white">
                marwa.alazaab@gmail.com
              </p>
              </div>

            </div>
          </div>

        </div>
      </div>

     
    </section>
  )
}

export default About

