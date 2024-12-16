import appointment_img from './appointment_img.png'
import header_img from './header_img.png'
import group_profiles from './group_profiles.png'
import profile_pic from './profile_pic.png'
import contact_image from './contact_image.png'
import about_image from './about_image.png'
import logo from './logo.svg'
import dropdown_icon from './dropdown_icon.svg'
import menu_icon from './menu_icon.svg'
import cross_icon from './cross_icon.png'
import chats_icon from './chats_icon.svg'
import verified_icon from './verified_icon.svg'
import arrow_icon from './arrow_icon.svg'
import info_icon from './info_icon.svg'
import upload_icon from './upload_icon.png'
import stripe_logo from './stripe_logo.png'
import razorpay_logo from './razorpay_logo.png'
import profile from './profile.png'
import doc1 from './doc1.png'
import doc2 from './doc2.png'
import doc3 from './doc3.png'
import doc4 from './doc4.png'
import doc5 from './doc5.png'
import doc6 from './doc6.png'
import doc7 from './doc7.png'
import doc8 from './doc8.png'
import doc9 from './doc9.png'
import doc10 from './doc10.png'
import doc11 from './doc11.png'
import doc12 from './doc12.png'
import doc13 from './doc13.png'
import doc14 from './doc14.png'
import doc15 from './doc15.png'
import Dermatologist from './Dermatologist.svg'
import Gastroenterologist from './Gastroenterologist.svg'
import General_physician from './General_physician.svg'
import Gynecologist from './Gynecologist.svg'
import Neurologist from './Neurologist.svg'
import Pediatricians from './Pediatricians.svg'


export const assets = {
    appointment_img,
    header_img,
    group_profiles,
    logo,
    chats_icon,
    verified_icon,
    info_icon,
    profile_pic,
    arrow_icon,
    contact_image,
    about_image,
    menu_icon,
    cross_icon,
    dropdown_icon,
    upload_icon,
    stripe_logo,
    razorpay_logo,
    profile
}

export const specialityData = [
    {
        speciality: 'Dokter Umum',
        image: General_physician
    },
    {
        speciality: 'Dokter Kandungan',
        image: Gynecologist
    },
    {
        speciality: 'Dokter Kulit',
        image: Dermatologist
    },
    {
        speciality: 'Dokter Anak',
        image: Pediatricians
    },
    {
        speciality: 'Dokter Saraf',
        image: Neurologist
    },
    {
        speciality: 'Dokter Pencernaan',
        image: Gastroenterologist
    },
]

export const doctors = [
    {
        _id: 'doc1',
        name: 'Dr. Andi Wijaya',
        image: doc1,
        speciality: 'Dokter Umum',
        degree: 'S.Ked., dr.',
        experience: '5 Tahun',
        about: 'Dr. Andi Wijaya adalah dokter umum berpengalaman yang fokus pada perawatan kesehatan preventif. Ia telah menangani pasien selama lebih dari 5 tahun dengan perawatan yang dipersonalisasi.',
        fees: 100.000,
        address: {
            line1: 'Jalan Merdeka No. 17',
            line2: 'Jakarta Pusat, DKI Jakarta'
        }
    },
    {
        _id: 'doc2',
        name: 'Dr. Siti Nurhaliza',
        image: doc2,
        speciality: 'Dokter Kandungan',
        degree: 'S.Ked., Sp.OG',
        experience: '7 Tahun',
        about: 'Dr. Siti Nurhaliza adalah dokter kandungan yang berpengalaman dalam menangani kehamilan dan kesehatan reproduksi wanita. Ia terkenal karena pendekatan ramah pasiennya.',
        fees: 150.000,
        address: {
            line1: 'Jalan Sudirman No. 27',
            line2: 'Bandung, Jawa Barat'
        }
    },
    {
        _id: 'doc3',
        name: 'Dr. Eko Santoso',
        image: doc3,
        speciality: 'Dokter Kulit',
        degree: 'S.Ked., Sp.KK',
        experience: '3 Tahun',
        about: 'Dr. Eko Santoso adalah seorang dokter spesialis kulit yang ahli dalam mengatasi masalah kulit seperti jerawat, eksim, dan infeksi kulit lainnya.',
        fees: 120.000,
        address: {
            line1: 'Jalan Diponegoro No. 37',
            line2: 'Surabaya, Jawa Timur'
        }
    },
    {
        _id: 'doc4',
        name: 'Dr. Budi Prasetyo',
        image: doc4,
        speciality: 'Dokter Anak',
        degree: 'S.Ked., Sp.A',
        experience: '6 Tahun',
        about: 'Dr. Budi Prasetyo adalah dokter spesialis anak yang berdedikasi untuk memastikan kesehatan anak-anak dari bayi hingga remaja.',
        fees: 140.000,
        address: {
            line1: 'Jalan Pemuda No. 47',
            line2: 'Semarang, Jawa Tengah'
        }
    },
    {
        _id: 'doc5',
        name: 'Dr. Rina Lestari',
        image: doc5,
        speciality: 'Dokter Saraf',
        degree: 'S.Ked., Sp.N',
        experience: '8 Tahun',
        about: 'Dr. Rina Lestari adalah dokter spesialis saraf yang memiliki pengalaman luas dalam menangani pasien dengan gangguan saraf seperti stroke dan epilepsi.',
        fees: 180.000,
        address: {
            line1: 'Jalan Cendana No. 57',
            line2: 'Medan, Sumatera Utara'
        }
    },
    {
        _id: 'doc6',
        name: 'Dr. Sigit Prasetia Kurniawan',
        image: doc6,
        speciality: 'Dokter Pencernaan',
        degree: 'S.Ked., Sp.PD-KGEH',
        experience: '10 Tahun',
        about: 'Dr. Sigit Prasetia Kurniawan adalah spesialis Pencernaan yang ahli dalam menangani masalah pencernaan seperti asam lambung dan gangguan usus.',
        fees: 200.000,
        address: {
            line1: 'Jalan Mawar No. 67',
            line2: 'Makassar, Sulawesi Selatan'
        }
    },
    {
        _id: 'doc7',
        name: 'Dr. I Ketut Suardana',
        image: doc7,
        speciality: 'Dokter Umum',
        degree: 'S.Ked., dr.',
        experience: '4 Tahun',
        about: 'Dr. I Ketut Suardana adalah dokter umum yang terkenal dengan pelayanan ramah dan diagnosa yang akurat.',
        fees: 110.000,
        address: {
            line1: 'Jalan Kenanga No. 17',
            line2: 'Yogyakarta, DI Yogyakarta'
        }
    },
    {
        _id: 'doc8',
        name: 'Dr. Hendra Saputra',
        image: doc8,
        speciality: 'Dokter Kandungan',
        degree: 'S.Ked., Sp.OG',
        experience: '9 Tahun',
        about: 'Dr. Hendra Saputra adalah spesialis kandungan dengan fokus pada kehamilan berisiko tinggi dan kesuburan.',
        fees: 160.000,
        address: {
            line1: 'Jalan Anggrek No. 27',
            line2: 'Balikpapan, Kalimantan Timur'
        }
    },
    {
        _id: 'doc9',
        name: 'Dr. Maria Sulastri',
        image: doc9,
        speciality: 'Dokter Kulit',
        degree: 'S.Ked., Sp.KK',
        experience: '2 Tahun',
        about: 'Dr. Maria Sulastri adalah dokter kulit yang fokus pada perawatan kecantikan dan pengobatan jerawat.',
        fees: 125.000,
        address: {
            line1: 'Jalan Melati No. 37',
            line2: 'Denpasar, Bali'
        }
    },
    {
        _id: 'doc10',
        name: 'Dr. Ahmad Rizki',
        image: doc10,
        speciality: 'Dokter Saraf',
        degree: 'S.Ked., Sp.N',
        experience: '5 Tahun',
        about: 'Dr. Ahmad Rizki adalah spesialis saraf yang berfokus pada pengobatan gangguan neurologis kompleks dan rehabilitasi pasien.',
        fees: 170.000,
        address: {
            line1: 'Jalan Pahlawan No. 12',
            line2: 'Palembang, Sumatera Selatan'
        }
    },
    {
        _id: 'doc11',
        name: 'Dr. Dewi Kartika',
        image: doc11,
        speciality: 'Dokter Anak',
        degree: 'S.Ked., Sp.A',
        experience: '7 Tahun',
        about: 'Dr. Dewi Kartika adalah dokter anak yang ahli dalam penanganan kesehatan anak dengan pendekatan holistik dan penuh kasih.',
        fees: 135.000,
        address: {
            line1: 'Jalan Raya Bogor No. 45',
            line2: 'Bogor, Jawa Barat'
        }
    },
    {
        _id: 'doc12',
        name: 'Dr. Gunawan Wiranto',
        image: doc12,
        speciality: 'Dokter Pencernaan',
        degree: 'S.Ked., Sp.PD-KGEH',
        experience: '6 Tahun',
        about: 'Dr. Gunawan Wiranto adalah spesialis pencernaan yang berpengalaman dalam menangani berbagai penyakit sistem pencernaan.',
        fees: 190.000,
        address: {
            line1: 'Jalan Ahmad Yani No. 22',
            line2: 'Surakarta, Jawa Tengah'
        }
    },
    {
        _id: 'doc13',
        name: 'Dr. Fitri Handayani',
        image: doc13,
        speciality: 'Dokter Kandungan',
        degree: 'S.Ked., Sp.OG',
        experience: '4 Tahun',
        about: 'Dr. Fitri Handayani adalah dokter kandungan muda dengan keahlian dalam konsultasi kesehatan reproduksi dan persalinan.',
        fees: 145.000,
        address: {
            line1: 'Jalan Veteran No. 33',
            line2: 'Malang, Jawa Timur'
        }
    },
    {
        _id: 'doc14',
        name: 'Dr. Ricky Setiawan',
        image: doc14,
        speciality: 'Dokter Umum',
        degree: 'S.Ked., dr.',
        experience: '3 Tahun',
        about: 'Dr. Ricky Setiawan adalah dokter umum dengan pendekatan modern dan fokus pada pencegahan penyakit.',
        fees: 95.000,
        address: {
            line1: 'Jalan Gatot Subroto No. 88',
            line2: 'Tangerang, Banten'
        }
    },
    {
        _id: 'doc15',
        name: 'Dr. Nina Permata',
        image: doc15,
        speciality: 'Dokter Kulit',
        degree: 'S.Ked., Sp.KK',
        experience: '5 Tahun',
        about: 'Dr. Nina Permata adalah spesialis kulit yang ahli dalam prosedur kecantikan dan pengobatan kondisi kulit kompleks.',
        fees: 130.000,
        address: {
            line1: 'Jalan Kebon Jeruk No. 55',
            line2: 'Jakarta Barat, DKI Jakarta'
        }
    }
]