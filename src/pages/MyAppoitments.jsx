import { useNavigate } from "react-router-dom";
import { AppContext } from "../context/AppContext";
import { useContext } from "react";

const MyAppointments = () => {
  const navigate = useNavigate();
  const {doctors} = useContext(AppContext);

  return (
    <div>
      <p className="pb-3 mt-12 font-medium text-zinc-600 border-b">Jadwal Saya</p>
      
      {/* Ini gridnya diubah jadi grid-cols-1 biar dokter kebawah */}
      <div>
        {doctors.slice(0,3).map((item,index) => (
          <div key={index} className="grid grid-cols-1 gap-6 py-2 border-b sm:flex sm:gap-6">
            
            <div>
              <img className="w-32 bg-indigo-50 rounded-md" src={item.image} alt="Foto Profil Dokter" />
            </div>

            <div className="flex-1 text-sm text-zinc-600">
              <p className="font-semibold text-neutral-800">{item.name}</p>
              <p>{item.speciality}</p>
              <p className="text-zinc-700font-medium mt-2">Alamat:</p>
              <p className="text-sm">{item.address.line1}</p>
              <p className="text-sm">{item.address.line2}</p>
              <p className="text-xs mt-1"><span className="font-medium text-neutral-700 text-sm">Tanggal & Waktu:</span> 25 Juli 2024 | 20:30</p>
            </div>

            <div className="flex flex-col gap-2 justify-end">
              <button className="text-sm text-stone-500 text-center sm:min-w-48 py-2 border rounded-lg hover:bg-blue-500 hover:text-white transition duration-300">Bayar Online</button>
              <button className="text-sm text-stone-500 text-center sm:min-w-48 py-2 border rounded-lg hover:bg-blue-500 hover:text-white transition duration-300">Batalkan Jadwal</button>
            </div>
            
          </div>
        ))}
      </div>
    </div>
  )
}

export default MyAppointments