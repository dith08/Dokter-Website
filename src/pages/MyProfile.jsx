import { assets } from "../assets/assets";
import { useState } from "react";

const MyProfile = () => {
  const [userdData, setUserData] = useState({
    name: "Admin Healthzyy",
    image: assets.logo,
    email: "Healtzyy@gmail.com",
    phone: "+62 819-0612-8664",
    address: {
      line1: "Jl. Patimura No. 20",
      line2: "kudus, Jawa Tengah",
    },
    gender: "Laki-laki",
    dob: "2000-01-01",
  });

  const [isEdit, setIsEdit] = useState(false);

  return (
    <div className="max-w-lg flex flex-col gap-4 text-sm">
      <img className="w-36 rounded" src={userdData.image} alt="" />
      {isEdit ? (
        <input
          className="bg-gray-50 text-3xl font-medium max-w-60 mt-4"
          type="text"
          value={userdData.name}
          onChange={(e) =>
            setUserData((prev) => ({ ...prev, name: e.target.value }))
          }
        />
      ) : (
        <p className="text-3xl font-medium text-neutral-800 mt-4">
          {userdData.name}
        </p>
      )}
      <hr className="bg-zinc-500 h-[-1px] border-none" />

      <div>
        <p className="text-neutral-500 underline mt-3">Informasi Kontak</p>
        <div className="grid grid-cols-[1fr_2fr] gap-y-2.5 mt-3 text-neutral-700">
          <p className="font-medium">Email:</p>
          <p className="text-blue-500">{userdData.email}</p>
          <p className="font-medium">Telepon:</p>
          {isEdit ? (
            <input
              className="bg-gray-100"
              type="text"
              value={userdData.phone}
              onChange={(e) =>
                setUserData((prev) => ({ ...prev, phone: e.target.value }))
              }
            />
          ) : (
            <p className="text-blue-500">{userdData.phone}</p>
          )}
          <p className="font-medium">Alamat:</p>
          {isEdit ? (
            <p>
              <input
                className="bg-gray-100"
                onChange={(e) =>
                  setUserData((prev) => ({
                    ...prev,
                    address: { ...prev.address, line1: e.target.value },
                  }))
                }
                value={userdData.address.line1}
                type="text"
              />
              <br />
              <input
                className="bg-gray-100"
                onChange={(e) =>
                  setUserData((prev) => ({
                    ...prev,
                    address: { ...prev.address, line2: e.target.value },
                  }))
                }
                value={userdData.address.line2}
                type="text"
              />
            </p>
          ) : (
            <p className="text-gray-500">
              {userdData.address.line1}
              <br />
              {userdData.address.line2}
            </p>
          )}
        </div>
      </div>

      <div>
        <p className="text-neutral-500 underline mt-3">Informasi Dasar</p>
        <div className="grid grid-cols-[1fr_2fr] gap-y-2.5 mt-3 text-neutral-700">
          <p>Jenis Kelamin:</p>
          {isEdit ? (
            <select
              className="max-w-20 bg-gray-100"
              onChange={(e) =>
                setUserData((prev) => ({ ...prev, gender: e.target.value }))
              }
              value={userdData.gender}
            >
              <option value="Laki-laki">Laki-laki</option>
              <option value="Perempuan">Perempuan</option>
            </select>
          ) : (
            <p className="text-gray-500">{userdData.gender}</p>
          )}
          <p className="font-medium">Tanggal Lahir:</p>
          {isEdit ? (
            <input
              className="max-w-20 bg-gray-100"
              type="date"
              onChange={(e) =>
                setUserData((prev) => ({ ...prev, dob: e.target.value }))
              }
              value={userdData.dob}
            />
          ) : (
            <p className="text-gray-500">{userdData.dob}</p>
          )}
        </div>
      </div>

      <div className="mt-10">
        {isEdit ? (
          <button 
            className="border border-blue-500 px-8 py-2 rounded-full hover:bg-blue-500 hover:text-white transition duration-300" 
            onClick={() => setIsEdit(false)}
          >
            Simpan Informasi
          </button>
        ) : (
          <button 
            className="border border-blue-500 px-8 py-2 rounded-full hover:bg-blue-500 hover:text-white transition duration-300" 
            onClick={() => setIsEdit(true)}
          >
            Ubah
          </button>
        )}
      </div>
    </div>
  );
};

export default MyProfile;