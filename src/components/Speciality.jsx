import { Link } from "react-router-dom"
import { specialityData } from "../assets/assets"


const Speciality = () => {
    return (
      <div id="speciality" className="bg-gradient-to-b from-blue-50 to-white py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Temukan Spesialis</h1>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Cukup telusuri daftar lengkap dokter tepercaya kami, 
              <br className="hidden md:block" />
              jadwalkan janji temu Anda tanpa repot.
            </p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
            {specialityData.map((item,index) => (
              <Link 
                onClick={() =>scrollTo(0, 0)} 
                className="group p-4 bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-300 flex flex-col items-center"
                key={index} 
                to={`/doctors/${item.speciality}`}
              >
                <div className="w-16 h-16 sm:w-20 sm:h-20 mb-4 group-hover:scale-110 transition-transform duration-300">
                  <img 
                    className="w-full h-full object-contain" 
                    src={item.image} 
                    alt={item.speciality} 
                  />
                </div>
                <p className="text-sm font-medium text-gray-700 text-center">
                  {item.speciality}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </div>
    )
}

export default Speciality