import React, { useRef } from 'react';
import { basename } from '../Utils/basename';

const HoverImage: React.FC<{ src: string; alt?: string }> = ({ src, alt = '' }) => {
    const imageRef = useRef<HTMLImageElement>(null);
    const containerRef = useRef<HTMLDivElement>(null);

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        const container = containerRef.current;
        const image = imageRef.current;

        if (!container || !image) return;

        image.classList.remove('transition-transform');

        const { left, top, width, height } = container.getBoundingClientRect();
        const x = (e.clientX - left) / width - 0.5;
        const y = (e.clientY - top) / height - 0.5;

        const moveX = -x * 10;
        const moveY = -y * 10;

        image.style.transform = `translate(-50%, -50%) translate(${moveX}%, ${moveY}%)`;
    };

    const handleMouseLeave = () => {
        const image = imageRef.current;
        if (!image) return;

        image.classList.add('transition-transform', 'duration-300', 'ease-out');
        image.style.transform = 'translate(-50%, -50%)';
    };

    return (
        <div
            ref={containerRef}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            className="relative aspect-[200/160] overflow-hidden"
        >
            <img
                ref={imageRef}
                src={`${basename}/content/highlights/${src}`}
                alt={alt}
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none select-none w-[112%] max-w-[112%] h-[112%] object-cover"
                draggable={false}
            />
        </div>
    );
};

export default HoverImage;
