import { useParams } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { AppContext } from "../context/AppContext";
import { assets } from "../assets/assets";
import RelatedDoctors from "../components/RelatedDoctors";
import Notification from "../components/Notification";  // Import Notification
import { ToastContainer, toast } from "react-toastify";  // ⬅️ Import react-toastify
import "react-toastify/dist/ReactToastify.css"; // ⬅️ Import CSS Toastify

const Appoinment = () => {
  const { docId } = useParams();
  const { doctors, currencySymbol } = useContext(AppContext);
  const daysOfWeek = ["MIN", "SEN", "SEL", "RAB", "KAM", "JUM", "SAB"];

  const [docInfo, setDocInfo] = useState(null);
  const [docSlots, setDocSlots] = useState([]);
  const [slotIndex, setSlotIndex] = useState(0);
  const [slotTime, setSlotTime] = useState("");
  const [notification, setNotification] = useState(""); // State untuk menampung pesan notifikasi

  const fetchDocInfo = async () => {
    const docInfo = doctors.find((doc) => doc._id === docId);
    setDocInfo(docInfo);
  };

  const getAvaibleSlots = async () => {
    let today = new Date();
    let slots = [];
    let displayedDays = new Set();

    for (let i = 0; i < 7; i++) {
      let currentDate = new Date(today);
      currentDate.setDate(today.getDate() + i);

      if (!displayedDays.has(currentDate.getDay())) {
        let dailySlots = [];
        for (let hour = 9; hour <= 21; hour++) {
          for (let minute = 0; minute < 60; minute += 30) {
            let slotDateTime = new Date(currentDate);
            slotDateTime.setHours(hour);
            slotDateTime.setMinutes(minute);
            let formattedTime = slotDateTime.toLocaleTimeString([], {
              hour: "2-digit",
              minute: "2-digit",
            });
            dailySlots.push({
              dateTime: new Date(slotDateTime),
              time: formattedTime,
            });
          }
        }

        slots.push({
          day: currentDate.getDay(),
          date: currentDate.getDate(),
          dailySlots: dailySlots,
        });

        displayedDays.add(currentDate.getDay());
      }
    }

    setDocSlots(slots);
  };

  useEffect(() => {
    fetchDocInfo();
  }, [doctors, docId]);

  useEffect(() => {
    if (docInfo) {
      getAvaibleSlots();
    }
  }, [docInfo]);

  const handleAppointment = () => {
    if (!slotTime) {
      toast.error("Pilih Jam Terlebih Dahulu!"); // Jika waktu belum dipilih
      return;
    }

    // Setel notifikasi sukses saat janji temu dibuat
    setNotification(`Janji temu dengan ${docInfo.name} berhasil dibuat pada pukul ${slotTime}.`);
    setSlotTime(""); // Reset slotTime setelah membuat janji temu
  };

  return (
    docInfo && (
      <div>
        {/* Komponen ToastContainer */}
        <ToastContainer position="top-right" autoClose={5000} hideProgressBar={false} closeButton={true} />

        {/* Komponen Notification untuk menampilkan pesan */}
        {notification && <Notification message={notification} onClose={() => setNotification("")} />}

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
                Tentang <img src={assets.info_icon} alt="" />
              </p>
              <p className="text-sm text-gray-600 mt-2 max-w-[700px]">
                {docInfo.about}
              </p>
            </div>
            <p className="text-gray-600 font-medium mt-4">
              Biaya Konsultasi:{" "}
              <span className="font-semibold text-gray-800">
                {currencySymbol}
                {docInfo.fees}
              </span>
            </p>
          </div>
        </div>

        <div className="sm:ml-72 sm:pl-4 mt-4 font-medium text-gray-700">
          <p>Jadwal Tersedia</p>
          <div className="flex gap-3 items-center w-full overflow-x-scroll">
            {docSlots.map((item, index) => (
              <div
                onClick={() => setSlotIndex(index)}
                key={index}
                className={`text-center py-6 min-w-16 rounded-full cursor-pointer ${slotIndex === index ? "bg-blue-500 text-white" : "border border-gray-200"}`}
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
                className={`text-sm font-light cursor-pointer rounded-full px-4 py-2 flex-shrink-0 ${slot.time === slotTime ? "bg-blue-500 text-white" : "text-gray-600 border border-gray-300"}`}
              >
                {slot.time}
              </p>
            ))}
          </div>

          <button 
            onClick={handleAppointment} 
            className="bg-blue-500 text-white px-12 py-3 rounded-full mt-10"
          >
            Buat Janji Temu
          </button>
        </div>

        <RelatedDoctors docId={docId} speciality={docInfo.speciality} />
      </div>
    )
  );
};

export default Appoinment;
