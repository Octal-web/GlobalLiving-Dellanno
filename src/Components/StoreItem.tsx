import { useLanguage } from '../Hooks/useLanguage';
import { Store } from "../Types/Store";

import { ImageGalleryList } from "../Data/ImageGalleryList";
import { ImageHighlightList } from "../Data/ImageHighlightList";

import Gallery from './Gallery';
import Highlights from './Highlights';
import { Reveal } from './Reveal';
import { basename } from "../Utils/basename";

type StoreItemProps = {
    item: Store;
    index: number;
};

const StoreItem: React.FC<StoreItemProps> = ({ item, index }) => {
    const lang = useLanguage();
    const storeImages = ImageGalleryList.filter(img => img.storeId === item.id);
    const storeHighlights = ImageHighlightList.filter(img => img.storeId === item.id);

    return (
        <>
            <div className="max-md:container">
                <div className="flex max-md:flex-col items-center">
                    <Reveal className="md:w-2/3 max-w-[1145px]" direction="left">
                        <img
                            src={`${basename}/content/stores/${item.img}`}
                            alt={`Dell Anno ${item.nome.replace(/<br\s*\/?>/gi, ' ')}`}
                        />
                    </Reveal>

                    <Reveal className="md:w-1/3 md:pr-[5%] xl:pr-[15%]" direction="left" delay={4}>
                        <h3
                            className="relative md:pl-20 pt-20 md:pt-10 text-2xl font-semibold max-md:text-center uppercase mb-4 before:absolute before:left-1/2 max-md:before:-translate-x-1/2 md:before:left-0 max-md:before:-bottom-8 md:before:top-0 before:w-full md:before:w-1/2 before:h-px before:bg-black"
                            dangerouslySetInnerHTML={{ __html: `Dell Anno<br>${item.nome}` }}
                        />
                    </Reveal>
                </div>
            </div>

            <div className="container max-w-large mt-16 md:mt-20">
                <Highlights images={storeHighlights} withBackground={false} />
            </div>

            <Gallery images={storeImages} withBackground={false} />

            {index === 0 && (
                <div className="container max-w-large">
                    <Reveal className="sm:text-xl text-center !leading-relaxed max-w-5xl px-12 md:px-20 2xl:px-28 mx-auto mt-10 mb-20 md:mb-40 whitespace-pre-line" direction="bottom" delay={2}>
                        <p>
                            {lang('stores.quality')}
                        </p>
                    </Reveal>
                </div>
            )}
        </>
    );
};

export default StoreItem;