import React, { useContext, useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { AppContext } from '../context/AppContext';

const Doctors = () => {
  const navigate = useNavigate();
  const { speciality } = useParams();
  const { doctors } = useContext(AppContext);
  const [filterDoc, setFilterDoc] = useState([]);
  const [showFilter, setShowFilter] = useState(false);

  const applyFilter = () => {
    if (speciality) {
      setFilterDoc(doctors.filter((doc) => doc.speciality === speciality));
    } else {
      setFilterDoc(doctors);
    }
  };

  useEffect(() => {
    applyFilter();
  }, [doctors, speciality]);

  return (
    <div>
      <p className="ml-3 text-gray-800 text-2xl font-semibold">Jelajahi Dokter Spesialis Kami</p>

      <div className="flex flex-col sm:flex-row items-start gap-5 mt-5">
        <button 
          className={`ml-3 py-2 px-5 border rounded-xl text-sm font-bold transition-all sm:hidden ${showFilter ? 'bg-blue-600 text-white' : 'bg-white text-blue-600 border-blue-600'}`} 
          onClick={() => setShowFilter(prev => !prev)}
        >
          Filter
        </button>

        <div className={`w-[280px] flex-shrink-0 flex flex-col gap-4 text-sm text-gray-700 p-5 bg-white shadow-lg rounded-2xl ${!showFilter && 'hidden sm:flex'}`}>
          {['Dokter Umum', 'Dokter Kandungan', 'Dokter Kulit', 'Dokter Anak', 'Dokter Saraf', 'Dokter Pencernaan'].map((item) => (
            <p 
              key={item} 
              onClick={() => speciality === item ? navigate('/doctors') : navigate(`/doctors/${item}`)} 
              className={`w-full pl-4 py-2.5 border border-gray-300 rounded-xl transition-all cursor-pointer hover:bg-blue-100 hover:scale-105 ${speciality === item ? 'bg-blue-200 text-black' : ''}`}>
              {item}
            </p>
          ))}
        </div>

        <div className="flex-1 overflow-y-auto p-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-6">
            {filterDoc.map((item, index) => (
              <div
                onClick={() => navigate(`/appointment/${item._id}`)}
                key={index}
                className="bg-white border border-gray-200 shadow-lg rounded-3xl overflow-hidden cursor-pointer transform hover:scale-105 hover:shadow-2xl transition-all duration-500"
              >
                <div className="relative w-full h-64 overflow-hidden rounded-t-3xl">
                  <img className="w-full h-full object-cover transform hover:scale-110 transition-all duration-500" src={item.image} alt="" />
                  <div className="absolute inset-0 bg-gradient-to-t from-blue via-transparent to-transparent"></div>
                </div>
                <div className="p-4">
                  <div className="flex items-center gap-2 text-sm text-green-500 mb-2">
                    <span className="w-3 h-3 bg-green-500 rounded-full"></span>
                    <p>Tersedia
                    </p>
                  </div>
                  <p className="text-gray-900 font-extrabold text-xl mb-2">{item.name}</p>
                  <p className="text-gray-600 text-md mb-4">{item.speciality}</p>
                  <button className="w-full py-3 bg-gradient-to-r from-blue-500 to-blue-700 text-white rounded-xl font-bold text-center hover:opacity-90 transition-all">Buat Janji Temu</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Doctors;
