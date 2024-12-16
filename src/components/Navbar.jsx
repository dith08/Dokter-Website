import { assets } from "../assets/assets";
import { NavLink, useNavigate } from "react-router-dom";
import { useState } from "react";

const Navbar = () => {

    const navigate = useNavigate();
    const [showmenu, setShowmenu] = useState(false);
    const [token,setToken]  = useState(true);

  return (
    <div className="flex items-center justify-between text-sm py-4 mb-5 border-b border-b-gray-400">
      <img onClick={()=>navigate('/')} className="w-16 cursor-pointer" src={assets.logo} alt="" />
      <ul className="hidden md:flex items-start gap-5 font-medium">
        <NavLink to='/'>
          <li className="py-1">HOME</li>
          <hr className="border-none bg-blue-500 outline-none h-0.5 w-3/5 m-auto hidden" />
        </NavLink>

        <NavLink to='/doctors'>
          <li className="py-1">DOKTER</li>
          <hr className="border-none bg-blue-500 outline-none h-0.5 w-3/5 m-auto hidden" />
        </NavLink>

        <NavLink to='/about'>
          <li className="py-1">TENTANG KAMI</li>
          <hr className="border-none bg-blue-500 outline-none h-0.5 w-3/5 m-auto hidden" />
        </NavLink>

        <NavLink to='/contact'>
          <li className="py-1">CONTACT</li>
          <hr className="border-none bg-blue-500 outline-none h-0.5 w-3/5 m-auto hidden" />
        </NavLink>
      </ul>
      <div className="flex items-center gap-4">
        {
            token
            ? <div className="flex items-center gap-4 relative group cursor-pointer">
                <img className="w-8 rounded-full" src={assets.profile} alt="" />
                <img className="w-2.5" src={assets.dropdown_icon} alt="" />
                <div className="absolute top-full right-0 pt-4 text-base font-medium text-gray-600 z-20 hidden group-hover:block">
                    <div className="min-w-[200px] bg-stone-100 rounded-md flex flex-col gap-4 p-4 shadow-lg">
                        <p onClick={()=>navigate('/my-profile')} className="hover:text-black transition-colors">Profil Saya</p>
                        <p onClick={()=>navigate('/my-appointments')} className="hover:text-black transition-colors">Jadwal</p>

                        <p onClick={()=>{
                            setToken(false);
                            navigate('/');
                        }} className="hover:text-black transition-colors">Keluar</p>
                    </div>
                </div>  
            </div>
            :<button onClick={() => navigate('/login')} className="bg-blue-500 text-white py-4 px-6 rounded-full font-medium hidden md:block hover:opacity-75">Buat Akun</button>
        }
        <img src={assets.menu_icon} alt="" className="w-6 cursor-pointer md:hidden" onClick={()=>setShowmenu(!showmenu)}/>
        {/* navbar mobile */}
        <div className={`${showmenu ? 'fixed w-full' : 'h-0 w-0'} md:hidden right-0 top-0 bottom-0 z-20 overflow-hidden bg-white transition-all`}> 
          <div className="flex items-center justify-between px-5 py-6">
            <img className="w-16" src={assets.logo} alt="" />
            <img className="w-7" onClick={()=>setShowmenu(false)} src={assets.cross_icon} alt="" />
          </div>
          <ul className="flex flex-col items-center gap-2 mt-5 px-5 text-lg font-medium">
            <NavLink onClick={()=>setShowmenu(false)} to='/'><p className='px-4 py-2 rounded inline-block'>Home</p></NavLink>
            <NavLink onClick={()=>setShowmenu(false)} to='/doctors'><p className='px-4 py-2 rounded inline-block'>DOKTER</p></NavLink>
            <NavLink onClick={()=>setShowmenu(false)} to='/about'><p className='px-4 py-2 rounded inline-block'>TENTANG KAMI</p></NavLink>
            <NavLink onClick={()=>setShowmenu(false)} to='/contact'><p className='px-4 py-2 rounded inline-block'>Contact</p></NavLink>
            {token ? (
              <button onClick={() => {
                setToken(false);
                setShowmenu(false);
                navigate('/');
              }} className='px-4 py-2 rounded inline-block text-red-500'>Keluar</button>
            ) : (
              <button onClick={() => {
                setShowmenu(false);
                navigate('/login');
              }} className='bg-blue-500 text-white px-6 py-3 rounded-full'>Buat Akun</button>
            )}
          </ul>
        </div>

        </div>
    </div>
  );
};


export default Navbar;