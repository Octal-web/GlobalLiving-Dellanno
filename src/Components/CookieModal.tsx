import { useLanguage } from '../Hooks/useLanguage';
import React, { useState, useEffect } from 'react';

type CookieModalProps = {
    acceptCookies: () => void;
    visible: boolean;
};

const setCookie = (name: string, value: string, days: number) => {
    const expires = new Date(Date.now() + days * 864e5).toUTCString();
    document.cookie = `${name}=${encodeURIComponent(value)}; expires=${expires}; path=/`;
};

const getCookie = (name: string): string => {
    return document.cookie
        .split('; ')
        .reduce((r, v) => {
            const parts = v.split('=');
            return parts[0] === name ? decodeURIComponent(parts[1]) : r;
        }, '');
};

export const CookieModal: React.FC<CookieModalProps> = ({ acceptCookies, visible }) => {
    const lang = useLanguage();
    const [showModal, setShowModal] = useState<boolean>(true);
    const [isFadingOut, setIsFadingOut] = useState<boolean>(false);

    useEffect(() => {
        const notifyCookies = getCookie('notify-cookies');
        if (notifyCookies === '1') {
            setShowModal(false);
        }
    }, []);

    const handleAcceptCookies = () => {
        setCookie('notify-cookies', '1', 365);
        setIsFadingOut(true);
        acceptCookies();
        setTimeout(() => {
            setShowModal(false);
        }, 200);
    };

    return (
        <>
            {showModal && visible && (
                <div className={`fixed bottom-0 left-0 right-0 z-[999] ${isFadingOut ? 'animate-fade-out-down' : ''}`}>
                    <div className="container max-w-medium">
                        <div className="bg-white px-8 py-6 shadow-md mb-10">
                            <div>
                                <p>
                                    {lang('cookies.description')}{' '}
                                    <a href={import.meta.env.VITE_POLITICA_URL} className="underline" target="_blank" rel="noopener noreferrer">
                                        {lang('cookies.privacyPolicy')}
                                    </a>.
                                </p>
                            </div>
                            <button
                                onClick={handleAcceptCookies}
                                className="block bg-black text-center text-white h-14 leading-[3rem] font-medium uppercase px-4 ml-auto mt-5 transition-all hover:bg-opacity-90"
                            >
                                {lang('cookies.acceptAll')}
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};
