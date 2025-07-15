import React, { useState } from "react";

const Form = ({ setShowPopup, setShowTable, sendValue }) => {
  const [userInfo, setUserInfo] = useState({
    name: "",
    age: "",
    email: "",
    mobile: "",
    district: "",
    state: "",
  });

  const handleChange = (e) => {
    setUserInfo({ ...userInfo, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    sendValue(userInfo);
    setShowPopup(false);
    setShowTable(true);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
      <form className="bg-[#E0FFFF] p-6 rounded-lg shadow-md w-full max-w-md space-y-4">
        <h1 className="text-2xl font-bold text-[#4169E1] text-center">
          Ascent24 Technologies
        </h1>
        <h2 className="text-xl font-bold text-[#4169E1] text-center">
          User Form
        </h2>

        {[
          { label: "Name", type: "text", name: "name" },
          { label: "Age", type: "number", name: "age" },
          { label: "Email", type: "email", name: "email" },
          { label: "Mobile Number", type: "text", name: "mobile" },
          { label: "District", type: "text", name: "district" },
          { label: "State", type: "text", name: "state" },
        ].map((field) => (
          <div key={field.name}>
            <label className="block text-gray-700 mb-1">{field.label}</label>
            <input
              type={field.type}
              name={field.name}
              onChange={handleChange}
              placeholder={`Enter the ${field.label}`}
              className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2"
            />
          </div>
        ))}

        <button
          type="submit"
          className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-md"
          onClick={handleSubmit}
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Form;
