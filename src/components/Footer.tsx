

export default function Footer() {
    return (
        <footer className="relative bg-[var(--navy)] text-[var(--light-slate)] py-8 sm:py-10 flex flex-col items-center text-center border-t border-t-[var(--dark-navy)]">
            <div className="w-full max-w-5xl flex flex-col sm:flex-row justify-around items-start px-4 mb-6">

                <div className="flex-1 min-w-[150px] mb-6 sm:mb-0 text-left">
                    <h4 className="text-md font-semibold mb-3">Enlaces</h4>
                    <ul className="space-y-1 text-sm">
                        <li><a href="/about" className="hover:underline">Playlists</a></li>
                        <li><a href="/faq" className="hover:underline">ChillRoom</a></li>
                        <li><a href="/products" className="hover:underline">Products</a></li>
                        <li><a href="/contact" className="hover:underline">Iniciar sesión en Spotify</a></li>
                    </ul>
                </div>

                <div className="flex-1 min-w-[150px] mb-6 sm:mb-0 text-left">
                    <h4 className="text-md font-semibold mb-3">Comunidad</h4>
                    <ul className="space-y-1 text-sm">
                        <li>
                            <a
                                href="https://github.com/joanmrtnz"
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
                    <h4 className="text-md font-semibold mb-3">Más</h4>
                    <ul className="space-y-1 text-sm">
                        <li><a href="/privacy" className="hover:underline">Política de Privacidad</a></li>
                        <li><a href="/terms" className="hover:underline">Términos y Condiciones</a></li>
                    </ul>
                </div>

            </div>

            <div className="text-sm mb-4 mt-4">
                © 2025 Chill Space. Todos los derechos reservados.
            </div>


        </footer>
    );
}
