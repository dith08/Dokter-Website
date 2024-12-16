import { useContext, useEffect, useState } from "react";
import { AppContext } from "../context/AppContext";
import { useNavigate } from "react-router-dom"; // Mengambil fungsi navigate untuk navigasi antar halaman

const RelatedDoctors = ({ speciality, docId }) => {
  // Mengambil data 'doctors' dari context yang sudah didefinisikan di AppContext
  const { doctors } = useContext(AppContext);
  const navigate = useNavigate(); // Menggunakan hook untuk navigasi
  const [relDoc, setRelDoc] = useState([]); // State untuk menyimpan daftar dokter yang relevan

  // useEffect untuk memfilter daftar dokter berdasarkan speciality dan mengecualikan dokter dengan docId yang sama
  useEffect(() => {
    if (doctors && doctors.length > 0 && speciality) {
      // Memfilter dokter berdasarkan speciality dan mengecualikan dokter yang id-nya sama dengan docId
      const doctorsData = doctors.filter(
        (doc) =>
          doc.speciality?.toLowerCase() === speciality.toLowerCase() && // Mengecek apakah speciality dokter cocok dengan speciality yang dipilih
          doc._id !== docId // Mengecek apakah id dokter tidak sama dengan docId yang sedang dilihat
      );
      setRelDoc(doctorsData); // Memperbarui state dengan daftar dokter yang relevan
    }
  }, [doctors, speciality, docId]); // useEffect dijalankan setiap kali doctors, speciality, atau docId berubah

  return (
    <div className="flex flex-col items-center gap-4 my-16 text-gray-800 md:mx-10">
      {/* Judul dan deskripsi */}
      <h1 className="text-3xl font-medium">Dokter Terbaik Untuk Dipesan</h1>
      <p className="sm:w-1/3 text-center text-sm">
        Cukup telusuri daftar dokter terpercaya kami yang lengkap.
      </p>

      {/* Menampilkan daftar dokter yang relevan */}
      <div className="w-full grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 pt-5 gap-y-6 px-3 sm:px-0">
        {/* Menggunakan slice(0, 10) untuk membatasi jumlah dokter yang ditampilkan menjadi 10 */}
        {relDoc.slice(0, 10).map((item, index) => (
          <div
            // Navigasi ke halaman appointment saat card dokter diklik
            onClick={() => navigate(`/appointment/${item._id}`).scrollTo(0, 0)}
            key={index}
            className="border border-blue-300 rounded-xl overflow-hidden cursor-pointer hover:translate-y-[-10px] transition-all duration-500"
          >
            {/* Menampilkan gambar dokter */}
            <img className="bg-blue-50" src={item.image} alt={item.name} />
            <div className="p-4">
              {/* Status ketersediaan dokter */}
              <div className="flex items-center gap-2 text-sm text-center text-green-500">
                <p className="w-2 h-2 bg-green-500 rounded-full"></p>
                <p>Tersedia</p>
              </div>
              {/* Menampilkan nama dokter */}
              <p className="text-gray-900 font-medium text-lg">{item.name}</p>
              {/* Menampilkan spesialisasi dokter */}
              <p className="text-gray-600 text-sm">{item.speciality}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Tombol untuk melihat lebih banyak dokter */}
      <button
        onClick={() => navigate("/doctors")}
        className="bg-blue-50 text-gray-800 px-12 py-3 rounded-full mt-10 hover:scale-105 transition-all duration-300"
      >
        Lihat Lainnya
      </button>
    </div>
  );
};


export default RelatedDoctors;
