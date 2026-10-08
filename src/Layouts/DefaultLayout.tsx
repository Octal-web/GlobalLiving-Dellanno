import Lenis from 'lenis';
import { ReactNode, useEffect, useRef, useState } from 'react';

import ApercuProBold from '../assets/fonts/ApercuPro-Bold.woff2';
import ApercuProMedium from '../assets/fonts/ApercuPro-Medium.woff2';
import ApercuPro from '../assets/fonts/ApercuPro.woff2';

import { CookieModal } from '../Components/CookieModal';
import { useLanguage } from '../Hooks/useLanguage';

interface DefaultLayoutProps {
    children: ReactNode;
    title?: string;
    description?: string;
}

export default function DefaultLayout({
    children,
    title,
    description,
}: DefaultLayoutProps) {
    const lang = useLanguage();
    const pageTitle = title ?? lang('page.title');
    const pageDescription = description ?? lang('page.description');

    const [notifyCookie, setNotifyCookie] = useState(false);
    const [trackingEnabled, setTrackingEnabled] = useState(false);
    const lenisRef = useRef<Lenis | null>(null);

    useEffect(() => {
        const style = document.createElement('style');
        style.innerHTML = `
            @font-face {
                font-family: 'Apercu Pro';
                src: url(${ApercuPro}) format('woff2');
                font-weight: normal;
                font-style: normal;
            }
            @font-face {
                font-family: 'Apercu Pro';
                src: url(${ApercuProMedium}) format('woff2');
                font-weight: 500;
                font-style: normal;
            }
            @font-face {
                font-family: 'Apercu Pro';
                src: url(${ApercuProBold}) format('woff2');
                font-weight: bold;
                font-style: normal;
            }
        `;
        document.head.appendChild(style);
    }, []);

    useEffect(() => {
        lenisRef.current = new Lenis({
            duration: 1.2,
            easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        });

        function raf(time: number) {
            lenisRef.current?.raf(time);
            requestAnimationFrame(raf);
        }

        requestAnimationFrame(raf);

        return () => {
            lenisRef.current?.destroy();
        };
    }, []);

    const acceptCookies = () => {
        setTrackingEnabled(true);
    };

    useEffect(() => {
        const notify = document.cookie
            .split('; ')
            .some((cookie) => cookie.startsWith('notify-cookies=1'));
        setNotifyCookie(notify);
    }, []);

    useEffect(() => {
        const timer = setTimeout(() => {
            if (notifyCookie || trackingEnabled) {
                // Google Tag Manager
                const gtmScript = document.createElement('script');
                gtmScript.innerHTML = `
                    (function(w,d,s,l,i){
                        w[l]=w[l]||[];
                        w[l].push({'gtm.start': new Date().getTime(), event:'gtm.js'});
                        var f=d.getElementsByTagName(s)[0],
                            j=d.createElement(s),
                            dl=l!='dataLayer'?'&l='+l:'';
                        j.async=true;
                        j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;
                        f.parentNode.insertBefore(j,f);
                    })(window,document,'script','dataLayer','GTM-MLRF8T2');
                `;
                document.head.appendChild(gtmScript);

                const gtagScript = document.createElement('script');
                gtagScript.src = 'https://www.googletagmanager.com/gtag/js?id=AW-812340317';
                gtagScript.async = true;
                document.head.appendChild(gtagScript);

                const gtagInit = document.createElement('script');
                gtagInit.innerHTML = `
                    window.dataLayer = window.dataLayer || [];
                    function gtag(){dataLayer.push(arguments);}
                    gtag('js', new Date());
                    gtag('config', 'AW-812340317');
                `;
                document.head.appendChild(gtagInit);

                const conversionScript = document.createElement('script');
                conversionScript.innerHTML = `
                    function gtag_report_conversion(url) {
                        var callback = function () {
                            if (typeof(url) != 'undefined') {
                                window.location = url;
                            }
                        };
                        gtag('event', 'conversion', {
                            'send_to': 'AW-812340317/cImPCO7O4bIDEN2orYMD',
                            'event_callback': callback
                        });
                        return false;
                    }
                `;
                document.head.appendChild(conversionScript);

                const noscript = document.createElement('noscript');
                noscript.innerHTML = `
                    <iframe src="https://www.googletagmanager.com/ns.html?id=GTM-MLRF8T2" height="0" width="0" style="display:none;visibility:hidden"></iframe>
                `;
                document.body.appendChild(noscript);
            }
        }, 100);

        return () => clearTimeout(timer);
    }, [notifyCookie, trackingEnabled]);

    return (
        <>
            <title>{pageTitle}</title>
            <meta name="description" content={pageDescription} />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <meta name="author" content="Octal Web" />

            <meta property="og:title" content={pageTitle} />
            <meta property="og:description" content={pageDescription} />
            <meta property="og:image" content="/assets/preview.jpg" />
            <meta property="og:type" content="website" />
            <meta property="og:url" content="https://global-living.meusite.com" />

            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:title" content={pageTitle} />
            <meta name="twitter:description" content={pageDescription} />
            <meta name="twitter:image" content="/assets/preview.jpg" />

            <main className="min-h-screen font-primary overflow-hidden">
                {children}
            </main>

            {!notifyCookie && (
                <CookieModal
                    acceptCookies={acceptCookies}
                    visible={true}
                />
            )}
        </>
    );
}