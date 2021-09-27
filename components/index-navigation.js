import Link from 'next/link';
import LogoSVG from './logo-svg';

export default function IndexNavigation() {

    const scrollToElement = (selector) => {
        const elementY = document.getElementById(selector).getBoundingClientRect().top;
        const header = document.querySelector('.header');
        const offset = header.offsetHeight;
        const yPos = elementY - offset;
        const scrollY = window.scrollY;
        window.scrollTo({ top: yPos + scrollY, behavior: 'smooth' });
    }

    return (
        <div className="w-full sticky top-0 z-1500">
            <header className="text-gray-800 body-font bg-yellow-400 header">
                <div className="container mx-auto flex flex-wrap p-4 pb-2 flex-col md:flex-row items-center">
                    <nav className="flex lg:w-2/5 flex-wrap items-center text-sm sm:text-lg md:ml-auto font-semibold">

                        <div className="mr-5 hover:text-gray-600">
                            <button className="font-semibold" onClick={() => scrollToElement('news')}>News</button>
                        </div>
                        <div className="mr-5 hover:text-gray-600">
                            <button className="font-semibold" onClick={() => scrollToElement('events')}>Events</button>
                        </div>
                        <div className="mr-5 hover:text-gray-600">
                            <button className="font-semibold" onClick={() => scrollToElement('about')}>About</button>
                        </div>
                        <div className="mr-5 hover:text-gray-600">
                            <button className="font-semibold" onClick={() => scrollToElement('contact')}>Contact</button>
                        </div>
                    </nav>
                    <div className="flex order-first lg:order-none lg:w-1/5 title-font font-medium items-center text-gray-900 lg:items-center lg:justify-center mb-0 md:mb-0">
                        <LogoSVG />
                        <div className="ml-3 text-md sm:text-xl hover:text-gray-600">
                            <Link href="/">
                                Alpha Games
                            </Link>
                        </div>
                    </div>

                    <div className="lg:w-2/5 inline-flex lg:justify-end sm:ml-2 lg:ml-0">
                        <p className="font-medium">01359 250707</p>
                    </div>
                </div>
            </header>
        </div>
    )
}