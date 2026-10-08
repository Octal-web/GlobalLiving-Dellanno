import { useLanguage } from '../Hooks/useLanguage';
import { useEffect, useRef } from 'react';

import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import bgPattern from '../assets/img/bg-pattern.jpg';

import { Reveal } from './Reveal';

const Welcome: React.FC = () => {
    const lang = useLanguage();
    const bgRef = useRef<HTMLDivElement | null>(null);
    const titleRef = useRef<HTMLHeadingElement | null>(null);

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

        const letters = titleRef.current?.querySelectorAll('span span');

        if (letters) {
            gsap.set(letters, {
                opacity: 0,
                rotateY: -90,
                x: -20,
            });

            gsap.to(letters, {
                opacity: 1,
                rotateY: 0,
                x: 0,
                duration: 0.6,
                stagger: 0.04,
                ease: 'back.out(1.7)',
                scrollTrigger: {
                    trigger: titleRef.current,
                    start: 'top 80%',
                    toggleActions: 'play none none none',
                },
            });
        }
    }, []);

    return (
        <section
            ref={bgRef}
            className="pt-20 sm:pt-30 md:pt-40 2xl:pt-50 pb-20 sm:pb-30 xl:pb-40 bg-cover bg-center"
            style={{
                backgroundImage: `url(${bgPattern})`,
            }}
        >   
            <div className="container max-w-large">
                <h2
                    ref={titleRef}
                    className="text-2xl md:text-3xl font-medium uppercase text-center mb-5 xl:mb-10 flex justify-center flex-wrap"
                >
                    {lang('welcome.title').split(' ').map((word, i) => (
                        <span key={i} className="inline-block mr-2 whitespace-nowrap">
                            {word.split('').map((char, j) => (
                                <span key={j} className="inline-block">
                                    {char}
                                </span>
                            ))}
                        </span>
                    ))}
                </h2>

                <Reveal className="md:text-xl text-center leading-relaxed max-w-5xl px-2 mx-auto" direction="bottom" delay={2}>
                    <p>
                        {lang('welcome.description')}
                    </p>
                    <p>
                        {lang('welcome.greeting')}
                    </p>
                </Reveal>
            </div>
        </section>
    );
};

export default Welcome;