import { useEffect, useRef } from 'react';
import { ImageHighlight } from "../Types/ImageHighlight";

import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import bgPattern from '../assets/img/bg-pattern.jpg';

import HoverImage from './HoverImage';
import { useLanguage } from '../Hooks/useLanguage';

type HighLightProps = {
    images: ImageHighlight[];
    withBackground: boolean;
};

const Highlights: React.FC<HighLightProps> = ({ images, withBackground }) => {
    const lang = useLanguage();
    const bgRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {  
        if (!withBackground) return;

        gsap.registerPlugin(ScrollTrigger);     
        gsap.fromTo(bgRef.current, 
        {
            backgroundPositionY: '100%',
        },
        {
            backgroundPositionY: '0%',
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
            className={`max-md:py-16 bg-no-repeat ${withBackground ? 'bg-cover bg-center' : ''}`}
            style={withBackground ? {
                backgroundImage: `url(${bgPattern})`
            } : {}}
        >
            <div>
                <div className="grid sm:grid-cols-2 gap-4">
                    {images.map((image, index) => (
                        <HoverImage key={index} src={image.img} alt={`${lang('gallery.highlight')} ${index + 1}`} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Highlights;
