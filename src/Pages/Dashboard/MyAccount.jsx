import React, { useRef, useState } from "react";
import useAuth from "../../Hooks/useAuth";

const MyAccount = () => {
  const { user } = useAuth();
  const [change, setChange] = useState(false);
  const fileInputRef = useRef(null);

  const handleClick = () => {
    fileInputRef.current.click();
  };

  return (
    <div className="">
      <div className="border-b-2 px-4 py-4 pb-5 bg-orange-500  flex items-center gap-6 border-white">
        <h2 className="text-xl font-medium text-white">Personal Information</h2>
        <button
          onClick={() => setChange(!change)}
          className="link link-hover">
          Change information
        </button>
      </div>
      <div className="mt-5 p-5">
        <div className="mb-5">
          <label htmlFor="picture" className="text-lg font-normal">
            Profile Picture
          </label>
          <img
            src={
              user?.photoURL
                ? user?.photoURL
                : "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"
            } // Provide the URL to your default profile picture
            alt="Profile Picture"
            className="mt-2 w-20 h-20 block focus:border-[#ED6620] border-slate-400 border-[1px] outline-none rounded-full cursor-pointer"
            onClick={handleClick}
          />
          <input
            id="picture"
            ref={fileInputRef}
            type="file"
            className="hidden"
            onChange={(event) => {
              // Handle the file upload logic here
              const selectedFile = event.target.files[0];
              // Do something with the selected file (e.g., upload to server, display preview, etc.)
            }}
            disabled={!change}
          />
        </div>
        <div className="mb-5">
          <label htmlFor="name" className="text-lg font-normal">
            Name
          </label>
          <input
            id="name"
            className="mt-2 w-full block focus:border-[#ED6620] border-slate-400 border-[1px] outline-none p-3 rounded-md"
            type="text"
            defaultValue={user?.displayName}
            readOnly={!change}
          />
        </div>
        <div className="mb-5">
          <label htmlFor="email" className="text-lg font-normal">
            Email Address
          </label>
          <input
            id="email"
            className="mt-2 w-full block focus:border-[#ED6620] border-slate-400 border-[1px] outline-none p-3 rounded-md"
            defaultValue={user?.email}
            type="email"
            readOnly={!change}
          />
        </div>
        <div className="mb-5">
          <label htmlFor="number" className="text-lg font-normal">
            Mobile Number
          </label>
          <input
            id="number"
            className="mt-2 w-full block focus:border-[#ED6620] border-slate-400 border-[1px] outline-none p-3 rounded-md"
            type="number"
            readOnly={!change}
          />
        </div>

        <div className="mb-5">
          <label htmlFor="dob" className="text-lg font-normal">
            Date of year
          </label>
          <input
            id="dob"
            className="mt-2 w-full block focus:border-[#ED6620] border-slate-400 border-[1px] outline-none p-3 rounded-md"
            type="date"
            readOnly={!change}
          />
        </div>
        <div className="mb-5">
          <h2 className="text-lg font-normal">Gender</h2>
          <div className="flex items-center gap-5">
            <div>
              <input
                type="radio"
                className="cursor-pointer"
                defaultChecked
                disabled={!change}
                name="gender"
                id="male"
              />
              <label htmlFor="male" className="text-lg ml-2 cursor-pointer">
                Male
              </label>
            </div>
            <div>
              <input
                type="radio"
                className="cursor-pointer"
                disabled={!change}
                name="gender"
                id="female"
              />
              <label htmlFor="female" className="text-lg ml-2 cursor-pointer">
                Female
              </label>
            </div>
            <div>
              <input
                type="radio"
                className="cursor-pointer"
                disabled={!change}
                name="gender"
                id="others"
              />
              <label htmlFor="others" className="text-lg ml-2 cursor-pointer">
                Others
              </label>
            </div>
          </div>
        </div>
        <div className="mb-5">
          <label htmlFor="address" className="text-lg font-normal">
            Address
          </label>
          <textarea
            id="address"
            className="mt-2 w-full block h-32 resize-none focus:border-[#ED6620] border-slate-400 border-[1px] outline-none p-3 rounded-md"
            placeholder="#House: 33, #Road: 7, #Block: 3, Village: Abc, #"
            readOnly={!change}></textarea>
        </div>
        <div className={change ? "block mt-6" : "hidden"}>
          <button className="btn btn-success">save</button>
        </div>
      </div>
    </div>
  );
};

export default MyAccount;
