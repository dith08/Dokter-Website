import { assets } from "../assets/assets"

const Footer = () => {
  return (
    <div className="md:mx-10">
        <div className="flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm">

        {/* left section */}
        <div>
            <img className="w-20 mb-5" src={assets.logo} alt="" />
            <p className="w-full md:w-2/3 text-gray-600 leading-6 text-sm">Di Healtzyy, kami berkomitmen untuk memberikan layanan kesehatan terbaik, memastikan setiap orang menerima perawatan yang layak mereka dapatkan. Misi kami adalah menawarkan layanan kesehatan yang terjangkau dan dapat diakses oleh masyarakat di seluruh dunia.</p>
        </div>

        {/* center section */}
        <div>
            <p className="text-xl font-medium mb-5">Daftar Isi</p>
            <ul className="flex flex-col gap-3 text-gray-500">
                <li>Home</li>
                <li>About us</li>
                <li>Contact us</li>
                <li>Privacy Policy</li>
            </ul>
        </div>

        {/* right section */}
        <div>
            <p className="text-xl font-medium mb-5">Hubungi Kami</p>  
            <ul className="flex flex-col gap-3 text-gray-500">
                <li>+62-819-0612-8664</li>
                <li>Healtzyy@gmail.com</li>
            </ul>
        </div>

        </div>

        <div>
            <hr />
            <p className="py-5 text-center text-sm">Copyright © 2024 Healtzyy - All Right Reserved.</p>
        </div>
    </div>
  )
}

export default Footer
