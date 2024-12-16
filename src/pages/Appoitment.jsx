import { useParams } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { AppContext } from "../context/AppContext";
import { assets } from "../assets/assets";
import RelatedDoctors from "../components/RelatedDoctors";

const Appoinment = () => {
  const { docId } = useParams();
  const { doctors, currencySymbol } = useContext(AppContext);
  const daysOfWeek = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];

  const [docInfo, setDocInfo] = useState(null);
  const [docSlots, setDocSlots] = useState([]);
  const [slotIndex, setSlotIndex] = useState(0);
  const [slotTime, setSlotTime] = useState("");

  const fetchDocInfo = async () => {
    const docInfo = doctors.find((doc) => doc._id === docId);
    setDocInfo(docInfo);
  };

  const getAvaibleSlots = async () => {
    let today = new Date(); // Buat object `today` (ini adalah tanggal sekarang)
    let slots = []; // Array kosong buat nyimpen semua slot waktu
    let displayedDays = new Set(); // Set buat nyimpen hari yg udah ditampilkan
  
    for (let i = 0; i < 7; i++) { // Loop 7 kali buat 7 hari ke depan
      let currentDate = new Date(today); // Copy data tanggal sekarang ke variabel baru
      currentDate.setDate(today.getDate() + i); // ⛔️ **SET**: atur tanggal `currentDate` jadi 1 hari ke depan
  
      if (!displayedDays.has(currentDate.getDay())) { 
        // ✅ **GET**: Ngambil "hari ke berapa" dari currentDate (Misal: 0=Sunday, 1=Monday)
        let dailySlots = []; // Array kosong buat slot waktu dalam 1 hari
  
        for (let hour = 9; hour <= 21; hour++) { // Loop dari jam 9 pagi sampai jam 21 malam
          for (let minute = 0; minute < 60; minute += 30) { 
            let slotDateTime = new Date(currentDate); // Copy currentDate ke slotDateTime
            slotDateTime.setHours(hour); // ⛔️ **SET**: Ubah jam slot ke 09:00, 09:30, dst
            slotDateTime.setMinutes(minute); // ⛔️ **SET**: Ubah menit slot ke 00 atau 30 (misal 09:00, 09:30)
  
            let formattedTime = slotDateTime.toLocaleTimeString([], {
              hour: "2-digit",
              minute: "2-digit",
            }); 
            // ✅ **GET**: Ngambil data waktu dari slotDateTime dalam format '09:00', '09:30', dst
  
            dailySlots.push({
              dateTime: new Date(slotDateTime), // Copy waktu slot ini
              time: formattedTime, // Masukkan waktu ke variabel 'time'
            });
          }
        }
  
        slots.push({
          day: currentDate.getDay(), // ✅ **GET**: Ngambil "hari ke berapa" dari currentDate (contoh: 1 = Senin)
          date: currentDate.getDate(), // ✅ **GET**: Ngambil tanggal dari currentDate (contoh: tanggal 9)
          dailySlots: dailySlots, // Tambahin slot waktu dari jam 09:00 - 21:30
        });
  
        displayedDays.add(currentDate.getDay()); // ⛔️ **SET**: Tandai bahwa hari ini udah ditambahkan
      }
    }
  
    setDocSlots(slots); // ⛔️ **SET**: Masukkan semua data slot ke variabel atau state
    console.log(slots); // ✅ **GET**: Ngambil data slot dan tampilkan di console
  };
  

  useEffect(() => {
    fetchDocInfo();
  }, [doctors, docId]);

  useEffect(() => {
    if (docInfo) {
      getAvaibleSlots();
    }
  }, [docInfo]);

  return (
    docInfo && (
      <div>
        <div className="flex flex-col sm:flex-row gap-4">
          <div>
            <img
              className="w-full bg-blue-500 sm:max-w-72 rounded-lg"
              src={docInfo.image}
              alt=""
            />
          </div>

          <div className="flex-1 border border-gray-400 rounded-lg p-8 py-7 bg-white mx-2 sm:mx-0 mt-[-80px] sm:mt-0">
            <p className="flex items-center gap-2 text-2xl font-semibold text-gray-800">
              {docInfo.name}
              <img className="w-5" src={assets.verified_icon} alt="" />
            </p>
            <div className="flex items-center gap-2 text-sm text-gray-600 mt-1">
              <p>
                {docInfo.degree} - {docInfo.speciality}
              </p>
              <button className="py-0.5 px-2 border text-xs rounded-full">
                {docInfo.experience}
              </button>
            </div>

            <div>
              <p className="flex items-center gap-1 text-sm text-gray-600 mt-3 font-medium">
                About <img src={assets.info_icon} alt="" />
              </p>
              <p className="text-sm text-gray-600 mt-2 max-w-[700px]">
                {docInfo.about}
              </p>
            </div>
            <p className="text-gray-600 font-medium mt-4">
              Appointment fee:{" "}
              <span className="font-semibold text-gray-800">
                {currencySymbol}
                {docInfo.fees}
              </span>
            </p>
          </div>
        </div>

        <div className="sm:ml-72 sm:pl-4 mt-4 font-medium text-gray-700">
          <p>Booking Slots</p>
          <div className="flex gap-3 items-center w-full overflow-x-scroll">
            {docSlots.map((item, index) => (
              <div
                onClick={() => setSlotIndex(index)}
                key={index}
                className={`text-center py-6 min-w-16 rounded-full cursor-pointer ${
                  slotIndex === index
                    ? "bg-blue-500 text-white"
                    : "border border-gray-200"
                }`}
              >
                <p>{daysOfWeek[item.day]}</p>
                <p>{item.date}</p>
              </div>
            ))}
          </div>

          <div className="flex items-center gap-3 w-full overflow-x-scroll mt-4">
            {docSlots[slotIndex]?.dailySlots.map((slot, index) => (
              <p
                onClick={() => setSlotTime(slot.time)}
                key={index}
                className={`text-sm font-light cursor-pointer rounded-full px-4 py-2 flex-shrink-0 ${
                  slot.time === slotTime
                    ? "bg-blue-500 text-white"
                    : "text-gray-600 border border-gray-300"
                }`}
              >
                {slot.time.toLowerCase()}
              </p>
            ))}
          </div>
          <button className="bg-blue-500 text-white px-12 py-3 rounded-full mt-10 hover:scale-105 transition-all duration-300">Buat Janji Temu</button>
        </div>

        {/* listing related doctors */}
        <RelatedDoctors docId={docId} speciality={docInfo.speciality} />

      </div>
    )
  );
};

export default Appoinment;
