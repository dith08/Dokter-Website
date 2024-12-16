import { assets } from "../assets/assets"

const Header = () => {
  return (
    <div className="flex flex-col md:flex-row flex-wrap bg-gradient-to-br from-blue-500 via-sky-500 to-indigo-500 rounded-xl px-6 md:px-10 lg:px-20 shadow-lg overflow-hidden">

      {/* Left side */}
      <div className="md:w-1/2 flex flex-col items-start justify-center gap-6 py-10 m-auto md:py-[8vw]">
        <p className="text-4xl md:text-5xl lg:text-6xl text-white font-extrabold leading-tight md:leading-tight lg:leading-tight drop-shadow-lg">
          Buat Janji Temu <br /> Dengan Dokter Terpercaya
        </p>
        <div className="mb-10 flex flex-col md:flex-row gap-4 items-center text-white text-base font-light">
          <img className="w-32" src={assets.group_profiles} alt="Dokter profiles" />
          <p className="text-center md:text-left">
            Cukup telusuri daftar lengkap dokter tepercaya kami, <br className="hidden md:block" />
            jadwalkan janji temu Anda tanpa repot.
          </p>
        </div>
        <a 
          href="#speciality" 
          className="flex items-center gap-2 font-semibold bg-white px-8 py-4 rounded-full text-gray-700 text-base shadow-md transition-transform transform hover:scale-105 hover:shadow-xl">
          Buat Janji Temu <img className="w-4" src={assets.arrow_icon} alt="Panah" />
        </a>
      </div>

      {/* Right side */}
      <div className="md:w-1/2 relative flex items-center justify-center">
        <img 
          className='w-10/12 md:w-full md:absolute bottom-0 h-auto rounded-xl shadow-xl transition-transform transform hover:scale-110' 
          src={assets.header_img} 
          alt="Header image" 
        />
      </div>

    </div>
  )
}

export default Header
