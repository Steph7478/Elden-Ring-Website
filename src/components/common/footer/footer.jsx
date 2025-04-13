import {
  FaFacebook,
  FaTwitch,
  FaInstagram,
  FaYoutube,
  FaXTwitter,
} from 'react-icons/fa6'

export default function Footer() {
  return (
    <footer className="flex items-center justify-center overflow-hidden bg-musgo p-0 sm:flex-row-reverse sm:gap-x-20 md:flex-row lg:flex-row">
      <div className="flex flex-grow flex-col items-center justify-center sm:pr-5 md:mb-5 md:pl-5 md:pr-14 lg:mb-5 lg:p-0 xl:ml-8 xl:items-start">
        <div>
          <h3 className="m-0 p-0 text-base">
            Entérate de las últimas noticias
          </h3>
          <p className="m-0 p-0 pb-1 text-sm">Suscríbete gratis aquí:</p>
          <input
            type="email"
            className="m h-8 w-60 border-2 border-white bg-musgo p-2 text-white"
            placeholder="exemplo@email.com"
          />
        </div>
      </div>

      <div className="overflow-hidden pb-5 pl-0 pt-5 sm:pl-5">
        <h3 className="m-0 p-0 pb-2 text-base">Síguenos en:</h3>

        <div>
          <span className="mb-2 flex flex-row gap-2">
            <FaTwitch size={25} />
            <FaInstagram size={25} />
            <FaXTwitter size={25} />
            <FaFacebook size={25} />
            <FaYoutube size={25} />
          </span>
        </div>

        <div className="flex flex-row flex-wrap gap-5 sm:gap-y-0">
          <p className="m-0 p-0">Información legal</p>
          <p className="m-0 p-0">Condiciones de uso</p>
          <p className="m-0 p-0">Políticas de cookies</p>
        </div>

        <p className="m-0 -translate-x-[5%] scale-90">
          © 2023 Anderson Carrión Cuellar. Proyecto académico, todos los
          derechos de diseño reservados
        </p>
      </div>
    </footer>
  )
}
