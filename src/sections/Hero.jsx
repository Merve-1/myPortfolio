import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { PerspectiveCamera } from '@react-three/drei';
import HackerRoom from '@/components/HackerRoom';
import {Leva, useControls} from "leva";
import { useMediaQuery } from 'react-responsive';
import { calculateSizes } from '../constants';
import Target from '../components/Target';
import HeroCamera from '../components/heroCamera';
import Button from '../components/Button';

const Hero = () => {
  const controls = useControls('HackerRoom',{
    positionX:{value:2.5,min:-10,max: 10}
  , positionY:{value:2.5,min:-10,max: 10},
  positionZ:{value:2.5,min:-10,max: 10},
  rotationX:{value:2.5,min:-10,max: 10},
  rotationY:{value:2.5,min:-10,max: 10},
  rotationZ:{value:2.5,min:-10,max: 10},
  scale:{value:2.5,min:-10,max: 10}

});


const isSmall = useMediaQuery({maxWidth:480});
const isMobile = useMediaQuery({maxWidth:768});
const isTablet = useMediaQuery({minWidth:768, maxWidth:1024});

const sizes = calculateSizes(isSmall, isMobile, isTablet)
  return (
    <section className="min-h-screen w-full flex flex-col items-center" id="home">
      {/* Hero Text Section */}
      <div className="hero-text-container absolute top-1/4 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full mx-auto flex flex-col  gap-3 text-center  z-10">
        <p className="sm:text-3xl text-2xl font-medium text-white font-generalsans flex items-center justify-center gap-3">
          Hi, I am Marwa
          <img
            src="/hacker.png" // Ensure this path is correct
            alt="Hacker icon"
            className="w-8 h-8 sm:w-10 sm:h-10"
          />
        </p>
        <p className="hero_tag text-gray_gradient">Crafting Innovation, Securing the Future</p>
      </div>

      <div className="w-full h-full absolute inset-0 flex justify-center items-center z-0">
      <Leva hidden />

        <Suspense fallback={<div>Loading...</div>}>

          <Canvas>
            <PerspectiveCamera makeDefault position={[0, 0, 20]} />
            <HeroCamera isMobile= {isMobile}>

            <ambientLight intensity={0.5} />
            <directionalLight position={[5, 5, 5]} intensity={0.8} />
            <HackerRoom 
            //scale={0.02} 
            // position={[0, 0, 0]} 
            // rotation={[0,  280, 0]}
            scale ={sizes.deskScale}
            position ={sizes.deskPosition}
            rotation ={[0,-Math.PI, 0]}
            />
            </HeroCamera>
            
            <group>
              <Target position={sizes.targetPosition}/>
            </group>
          </Canvas>
        </Suspense>
      </div>
      <div className='absolute bottom-7 left-0 right-0 w-full z-10 c-space'>
        <a href="#contact" className='w-fit'>
          <Button name="Let's work together" isBeam containerClass="sm:w-fit w-full sm:min-w-96"/>
        </a>
      </div>
    </section>
  );
};

export default Hero;
