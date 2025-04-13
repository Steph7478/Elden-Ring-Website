import { Link } from 'react-router-dom'

export default function Header() {
  return (
    <header className="relative flex min-h-screen w-full flex-col items-center justify-end bg-[length:100%_100%] bg-center bg-no-repeat sm:bg-none md:bg-none lg:bg-moldure">
      <div className="absolute -z-10 h-full w-full bg-homeheader bg-cover bg-center brightness-50"></div>
      <img
        src="/public/images/Decorations/eldenring.webp"
        className="max-w-[540px] sm:w-[420px] md:w-[520px] lg:w-[540px]"
      />
      <nav className="ml-5 mr-5 block">
        <ul className="flex flex-row flex-wrap justify-center gap-10 font-della text-xl font-bold text-light-yellow sm:mb-20 lg:mb-12">
          <li className="hover:scale-105 hover:text-yellow-200">
            <Link to="/guias">Guias</Link>
          </li>
          <li className="hover:scale-105 hover:text-yellow-200">
            <Link to="/personajes">Personajes</Link>
          </li>
          <li className="hover:scale-105 hover:text-yellow-200">
            <Link to="/objetos">Objetos</Link>
          </li>
          <li className="hover:scale-105 hover:text-yellow-200">
            <Link to="/noticias">Noticias</Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}
