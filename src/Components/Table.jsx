import React from "react";

const Table = ({ userData, onBack }) => {
  return (
    <div className="p-4">
      <button
        onClick={onBack}
        className="mb-4 bg-blue-600 text-white py-2 px-4 rounded-md"
      >
        Back to Form
      </button>

      <table className="min-w-full divide-y divide-gray-200 border border-gray-300">
        <thead className="bg-[#E0FFFF]">
          <tr>
            <th className="px-4 py-3 text-left text-sm font-semibold text-[#4169E1]">
              S.No
            </th>
            <th className="px-4 py-3 text-left text-sm font-semibold text-[#4169E1] ">
              Name
            </th>
            <th className="px-4 py-3 text-left text-sm font-semibold text-[#4169E1]">
              Age
            </th>
            <th className="px-4 py-3 text-left text-sm font-semibold text-[#4169E1]">
              Email
            </th>
            <th className="px-4 py-3 text-left text-sm font-semibold text-[#4169E1]">
              Mobile
            </th>
            <th className="px-4 py-3 text-left text-sm font-semibold text-[#4169E1]">
              District
            </th>
            <th className="px-4 py-3 text-left text-sm font-semibold text-[#4169E1]">
              State
            </th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200">
          {userData.map((user, index) => (
            <tr key={index}>
              <td className="px-4 py-3 text-sm text-gray-800">{index + 1}</td>
              <td className="px-4 py-3 text-sm text-gray-800">{user.name}</td>
              <td className="px-4 py-3 text-sm text-gray-800">{user.age}</td>
              <td className="px-4 py-3 text-sm text-gray-800">{user.email}</td>
              <td className="px-4 py-3 text-sm text-gray-800">{user.mobile}</td>
              <td className="px-4 py-3 text-sm text-gray-800">
                {user.district}
              </td>
              <td className="px-4 py-3 text-sm text-gray-800">{user.state}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
