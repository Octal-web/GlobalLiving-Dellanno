import { useEffect, useRef } from 'react';

import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import bgPattern from '../assets/img/bg-pattern.jpg';

import { Reveal } from './Reveal';
import { basename } from '../Utils/basename';

const AnotherImage: React.FC = () => {
    const bgRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {  
        gsap.registerPlugin(ScrollTrigger);     
        gsap.fromTo(bgRef.current, 
        {
            backgroundPositionY: '50%',
        },
        {
            backgroundPositionY: '20%',
            duration: 1,
            ease: 'none',
            scrollTrigger: {
                trigger: bgRef.current,
                start: 'top bottom',
                end: 'bottom top',
                scrub: true
            }
        });
    }, []);

    return (
        <section
            ref={bgRef}
            className="max-sm:mb-16 sm:py-30 md:py-40 bg-cover bg-center"
            style={{
                backgroundImage: `url(${bgPattern})`,
            }}
        >   
            <div className="md:container max-w-[87rem]">
                <Reveal direction="top">
                    <img src={`${basename}/content/display/ff7768b9f5ec306a87c8bd6020c3cba0.jpg`} />
                </Reveal>
            </div>
        </section>
    );
};

export default AnotherImage;