import { assets } from "../assets/assets"


const About = () => {
  return (
    <div>

      <div className="text-center text-2xl pt-10text-gray-600">
        <p>Tentang<span className="text-gray-800 font-medium"> Kami</span></p>
      </div>

      <div className="my-10 flex flex-col md:flex-row gap-12">
        <img className="w-fulll max-w-[360px]" src={assets.about_image} alt="" />
        <div className="flex flex-col justify-center gap-6 md:w-2/4 text-sm text-gray-600">
          <p>Selamat datang di Healthzyy, mitra terpercaya Anda dalam mengelola kebutuhan kesehatan Anda dengan nyaman dan efisien. Di Healthzyy, kami memahami tantangan yang dihadapi individu ketika harus membuat janji dengan dokter dan mengelola catatan kesehatan mereka.</p>
          <p>Healthzyy berkomitmen untuk keunggulan dalam teknologi kesehatan. Kami terus berusaha meningkatkan platform kami, mengintegrasikan kemajuan terbaru untuk meningkatkan pengalaman pengguna dan memberikan layanan yang unggul. Baik Anda membuat janji pertama atau mengelola perawatan berkelanjutan, Healthzyy hadir untuk mendukung Anda di setiap langkah.</p>
          <p className="text-gray-800">Visi Kami</p>
          <p>Visi kami di Healthzyy adalah menciptakan pengalaman kesehatan yang lancar bagi setiap pengguna. Kami bertujuan untuk menjembatani kesenjangan antara pasien dan penyedia layanan kesehatan, memudahkan Anda untuk mengakses perawatan yang Anda butuhkan, saat Anda membutuhkannya.</p>
        </div>
      </div>

      <div className="text-xl my-4 mt-20">
        <p>Mengapa <span className="text-gray-800 font-semibold">PILIH KAMI</span></p>
      </div>

      <div className="flex flex-col md:flex-row mb-20 ">
        <div className="border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[-15px] hover:bg-blue-500 hover:text-white transition-all duration-300">
          <b>Efisiensi:</b>
          <p>Penjadwalan janji yang efisien yang sesuai dengan gaya hidup sibuk Anda.</p>
        </div>

        <div className="border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[-15px] hover:bg-blue-500 hover:text-white transition-all duration-300">
          <b>Kenyamanan:</b>
          <p>Akses ke jaringan profesional kesehatan terpercaya di area Anda.</p>
        </div>

        <div className="border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[-15px] hover:bg-blue-500 hover:text-white transition-all duration-300">
          <b>Personalisasi:</b>
          <p>Rekomendasi dan pengingat yang disesuaikan untuk membantu Anda menjaga kesehatan.</p>
        </div>
      </div>

    </div>
  )
}

export default About


