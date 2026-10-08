import { basename } from "../Utils/basename";

const MainVideo: React.FC = () => {
    return (
        <section className="relative w-full h-auto overflow-hidden">
            <video
                className="hidden md:block w-full h-auto object-cover"
                src={`${basename}/content/videos/video-desktop.mp4`}
                autoPlay
                muted
                loop
                playsInline
            />

            <video
                className="block md:hidden w-full h-auto object-cover"
                src={`${basename}/content/videos/video-mobile.mp4`}
                autoPlay
                muted
                loop
                playsInline
            />
        </section>
    );
};

export default MainVideo;