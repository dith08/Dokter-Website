import { assets } from "../assets/assets"


const Contact = () => {
  return (
    <div>
      <div className="text-center text-2xl text-gray-500 pt-10">
        <p>Hubungi <span className="text-gray-800 font-semibold">Kami</span></p>
      </div> 

      <div className="my-10 flex flex-col md:flex-row gap-12 mb-28 text-sm justify-center">
        <img className="w-full md:max-w-[360px] " src={assets.contact_image} alt="" />

        <div className="flex flex-col justify-center gap-6 items-start">
          <p className="text-gray-600 text-lg font-bold">KANTOR KAMI</p>
          <p className="text-gray-500">Jalan Sudirman No. 123 <br /> Kudus, Indonesia </p>
          <p className="text-gray-500">Tel: (+62) 819-0612-8664 <br /> Email: Healtzyy@gmail.com</p>
          <p className="text-gray-600 text-lg font-bold">KARIR DI Healtzyy</p>
          <p className="text-gray-500">Pelajari lebih lanjut tentang tim kami dan lowongan pekerjaan.</p>
          <button className="border border-black px-8 py-4 text-sm hover:bg-black hover:text-white transition-all duration-300">Lihat Lowongan</button>
        </div> 
      </div>
    </div>
  )
}

export default Contact