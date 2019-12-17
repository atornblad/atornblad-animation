(() => {

    let pages;
    let parallaxes;

    let onScroll = (e) => {
        for (let p of pages) {
            p.style.minHeight = `${(window.innerHeight)}px`;
        }
        for (let p of parallaxes) {
            let offset = p.offsetTop - window.scrollY;
            p.style.backgroundPositionY = `${(offset * -0.3).toFixed(1)}px`;
        }
    };

    let showPageLayout = () => {
        console.log('showing page layout...');
        document.body.classList.add('show-layout');
    };

    document.addEventListener('DOMContentLoaded', () => {
        const link = document.createElement('link');
        link.rel = 'stylesheet';
        link.type = 'text/css';
        link.media = 'screen';
        link.href = './main.css?' + Date.now();
        document.getElementsByTagName('head')[0].appendChild(link);

        debugElement = document.createElement('div');
        debugElement.style.position = 'absolute';
        debugElement.style.display = 'block';
        document.body.appendChild(debugElement);
        debugElement.style.backgroundColor = '#000';
        debugElement.style.color = '#fff';
    });

    window.addEventListener('load', () => {
        document.body.classList.add('loaded');

        pages = Array.from(document.querySelectorAll('section.page'));
        parallaxes = Array.from(document.querySelectorAll('section.parallax'));

        onScroll();

        if (document.cookie.match(/visited=true/)) {
            showPageLayout();
        }
        else {
            window.setTimeout(showPageLayout, 3000);
            document.cookie = 'visited=true; expires=Fri, 31 Dec 9999 23:59:59 GMT';
        }
    });

    window.addEventListener('scroll', onScroll);
    window.addEventListener('resize', onScroll);

})();
