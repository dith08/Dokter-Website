import { useNavigate } from "react-router-dom";
import { AppContext } from "../context/AppContext";
import { useContext } from "react";

const TopDoctors = () => {

  const navigate = useNavigate();
  const {doctors} = useContext(AppContext);

  return (
    <div className="flex flex-col items-center gap-4 my-16 text-gray-800 md:mx-10">
      <h1 className="text-3xl font-medium">Dokter Terbaik Untuk Janji Temu</h1>
      <p className="sm:w-1/3 text-center text-sm">Cukup telusuri daftar lengkap dokter tepercaya kami, <br className="hidden md:block" />jadwalkan janji temu Anda tanpa repot.</p>
      <div className="w-full grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 pt-8 px-3 sm:px-0">
        {doctors.slice(0,10).map((item,index)=>(
          <div onClick={() => navigate(`/appointment/${item._id}`)} key={index} className="bg-white shadow-lg rounded-2xl overflow-hidden cursor-pointer hover:shadow-xl hover:translate-y-[-8px] hover:scale-105 transition-all duration-300 transform group">
            <div className="relative">
              <img className="w-full h-48 object-cover group-hover:brightness-90 transition-all duration-300" src={item.image} alt="" />
              <div className="absolute top-2 right-2 flex items-center gap-1.5 bg-gradient-to-r from-green-400/90 to-green-500/90 backdrop-blur-md px-3 py-1.5 rounded-full shadow-lg transform hover:scale-105 transition-all duration-300">
                <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
                <span className="hidden sm:inline text-xs font-semibold text-white">Tersedia</span>
                <svg className="w-3.5 h-3.5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
              </div>
            </div>
            <div className="p-5">
              <div className="border-l-4 border-blue-500 pl-3">
                <p className='text-gray-900 font-semibold text-lg mb-1 line-clamp-1 group-hover:text-blue-600 transition-colors'>{item.name}</p>
                <p className='text-gray-500 text-sm font-medium group-hover:text-blue-400 transition-colors'>{item.speciality}</p>
              </div>
              <div className="mt-4 flex justify-between items-center">
                <div className="flex items-center">
                  <svg className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                  </svg>
                  <span className="text-sm text-gray-600 ml-1">4.8</span>
                </div>
                <span className="text-xs text-blue-500 font-medium bg-blue-50 px-2 py-1 rounded-full">Janji Temu</span>
              </div>
            </div>
          </div>
        ))}
      </div>
      <button onClick={()=>navigate('/doctors')} className='bg-blue-50 text-gray-800 px-12 py-3 rounded-full mt-10 hover:scale-105 transition-all duration-300'>Selengkapnya</button>
    </div>    
  )
}

export default TopDoctors