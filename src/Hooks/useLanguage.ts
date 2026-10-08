const translations = {
    pt: {
        'page.title': 'Global Living | Dell Anno',
        'page.description': 'O luxo e o prazer de viver não mudam de um lugar para outro.',
        'welcome.title': 'Descubra o Dell Anno Global Living',
        'welcome.description':
            'Hoje em dia, não importa onde você esteja no mundo, morar com estilo, modernidade e sofisticação é um conceito único. O luxo e o prazer de viver não mudam de um lugar para outro. Compreender isto é desenvolver um design cada vez mais universal e, ao mesmo tempo, autêntico e exclusivo.',
        'welcome.greeting': 'Bem-vindo ao Dell Anno Global Living.',
        'quote.text':
            '“É impossível entrar numa loja Dell Anno e não se sentir num espaço global. Do design a qualidade, tudo reflete uma marca que efetivamente conquistou seu lugar na cena internacional.”',
        'stores.title': 'Padrão global de qualidade',
        'stores.description':
            'Nos últimos anos, a evolução da marca Dell Anno atingiu um padrão tão elevado que, hoje, ela está literalmente no topo do mundo, com sua flagship internacional localizada em Nova York.',
        'stores.quality':
            'E, como toda grande marca global, tudo o que você encontra em termos de qualidade, design e produto na loja de Nova York também está presente na flagship brasileira, em São Paulo, e em todas as lojas da marca no Brasil.',
        'universe.desktopIntro': 'Entrar em uma loja Dell Anno é mergulhar',
        'universe.mobileIntro': 'Entrar em uma loja',
        'universe.mobileContinuation': 'Dell Anno é mergulhar',
        'universe.conclusion': 'No Universo Dell Anno.',
        'cookies.description':
            'Utilizamos cookies para oferecer uma melhor experiência, melhorar o desempenho, analisar como você interage em nosso site e personalizar conteúdo. Para mais informações acesse nossa',
        'cookies.privacyPolicy': 'política de privacidade',
        'cookies.acceptAll': 'Aceitar todos os cookies',
        'video.play': 'Reproduzir',
        'video.pause': 'Pausar',
        'gallery.image': 'Imagem',
        'gallery.highlight': 'Destaque',
        'gallery.close': 'Fechar',
        'gallery.zoom': 'Ampliar ou reduzir',
        'gallery.previous': 'Imagem anterior',
        'gallery.next': 'Próxima imagem',
        'gallery.error': 'Não foi possível carregar a imagem.',
        'gallery.counterSeparator': ' de ',
    },
    en: {
        'page.title': 'Global Living | Dell Anno',
        'page.description': 'The luxury and pleasure of living remain the same wherever you are.',
        'welcome.title': 'Discover Dell Anno Global Living',
        'welcome.description':
            'Today, no matter where you are in the world, living with style, modernity, and sophistication is a universal concept. The luxury and joy of living don’t change from one place to another. Understanding this means creating a design that is increasingly global, yet authentic and exclusive',
        'welcome.greeting': 'Welcome to Dell Anno Global Living.',
        'quote.text':
            '“It is impossible to enter a Dell Anno store without feeling that you are in a global space. From design to quality, everything reflects a brand that has truly earned its place on the international scene.”',
        'stores.title': 'A global standard of quality',
        'stores.description':
            'Over the past few years, Dell Anno has raised the bar so high that today, it stands at the top—now with its international flagship in New York City.',
        'stores.quality':
            'Just like any true global brand, the same level of quality, design, and product you’ll find in our New York showroom is also present at our flagship in São Paulo and in every Dell Anno location across Brazil.\n\n Walking into a Dell Anno store is stepping into the world of Dell Anno.',
        'universe.desktopIntro': 'Entering a Dell Anno store means immersing yourself',
        'universe.mobileIntro': 'Entering a Dell Anno store',
        'universe.mobileContinuation': 'means immersing yourself',
        'universe.conclusion': 'In the Dell Anno Universe.',
        'cookies.description':
            'We use cookies to offer a better experience, improve performance, analyze how you interact with our website and personalize content. For more information, please see our',
        'cookies.privacyPolicy': 'privacy policy',
        'cookies.acceptAll': 'Accept all cookies',
        'video.play': 'Play',
        'video.pause': 'Pause',
        'gallery.image': 'Image',
        'gallery.highlight': 'Highlight',
        'gallery.close': 'Close',
        'gallery.zoom': 'Zoom in or out',
        'gallery.previous': 'Previous image',
        'gallery.next': 'Next image',
        'gallery.error': 'The image could not be loaded.',
        'gallery.counterSeparator': ' of ',
    },
};

export type Language = 'pt' | 'en';

export function useLanguage() {
    const language = import.meta.env.VITE_APP_LANG as Language;

    return (key: string) => (translations[language] as Record<string, string>)[key] || key;
}
