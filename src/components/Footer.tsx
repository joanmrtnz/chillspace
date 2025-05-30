
import {getTranslations} from 'next-intl/server';

export default async function Footer() {
    const tF = await getTranslations('footer');
    const tUi = await getTranslations('ui');


    return (
        <footer className="relative  border border-white/20 text-[var(--color-slate-500)] py-8 sm:py-10 flex flex-col items-center text-center ">
            <div className="w-full max-w-5xl flex flex-col sm:flex-row justify-around items-start px-4 mb-6">

                <div className="flex-1 min-w-[150px] mb-6 sm:mb-0 text-left">
                    <h4 className="text-md font-semibold mb-3">{tF('links')}</h4>
                    <ul className="space-y-1 text-sm">
                        <li><a href="/" className="hover:underline">{tUi('home')}</a></li>
                        <li><a href="/playlists" className="hover:underline">{tUi('playlists')}</a></li>
                        <li><a href="/chillroom" className="hover:underline">{tUi('chillroom')}</a></li>
                        <li><a href="/products" className="hover:underline">{tUi('products')}</a></li>
                        <li><a href="/spotify-login" className="hover:underline">{tUi('login-btn')}</a></li>
                    </ul>
                </div>

                <div className="flex-1 min-w-[150px] mb-6 sm:mb-0 text-left">
                    <h4 className="text-md font-semibold mb-3">{tF('comunity')}</h4>
                    <ul className="space-y-1 text-sm">
                        <li>
                            <a
                                href="https://github.com/joanmrtnz/chillspace"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="hover:underline"
                            >
                                Github
                            </a>
                        </li>
                        <li>
                            <a
                                href="https://www.linkedin.com/in/joan-mart%C3%ADnez-744477136/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="hover:underline"
                            >
                                Linkedin
                            </a>
                        </li>
                        <li>
                            <a
                                href="https://x.com/jnmrtnzdev"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="hover:underline"
                            >
                                X
                            </a>
                        </li>
                    </ul>
                </div>

                <div className="flex-1 min-w-[150px] text-left">
                    <h4 className="text-md font-semibold mb-3">{tF('more')}</h4>
                    <ul className="space-y-1 text-sm">
                        <li><a href="/about" className="hover:underline">{tUi('about')}</a></li>
                    </ul>
                </div>

            </div>

            <div className="text-sm mb-4 mt-4">
                © 2025 chillspace. {tF('all-rights')} 
            </div>


        </footer>
    );
}
