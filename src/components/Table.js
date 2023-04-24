import React from "react";

function Table({ tableData }) {
  return (
    <div className="w-full border rounded-lg p-2">
      <div className="grid grid-cols-9 gap-4 rounded-md font-semibold">
        <div className="bg-gray-200 rounded-md px-4 py2">First Name</div>
        <div className="bg-gray-200 rounded-md px-4 py2">Last Name</div>
        <div className="bg-gray-200 rounded-md px-4 py2">E-mail</div>
        <div className="bg-gray-200 rounded-md px-4 py2">Gender</div>
        <div className="bg-gray-200 rounded-md px-4 py2">Income</div>
        <div className="bg-gray-200 rounded-md px-4 py2">City</div>
        <div className="bg-gray-200 rounded-md px-4 py2">Car</div>
        <div className="bg-gray-200 rounded-md px-4 py2">Quote</div>
        <div className="bg-gray-200 rounded-md px-4 py2">Phone Price</div>
      </div>
      <div className="flex flex-col pt-2 space-y-2">
        {tableData &&
          tableData.map((item) => (
            <div key={item._id} className="grid grid-cols-9 gap-4">
              <div className="bg-gray-100 rounded-md px-4 py2 overflow-auto whitespace-nowrap">
                {item.first_name}
              </div>
              <div className="bg-gray-100 rounded-md px-4 py2 overflow-auto whitespace-nowrap">
                {item.last_name}
              </div>
              <div className="bg-gray-100 rounded-md px-4 py2 overflow-auto whitespace-nowrap">
                {item.email}
              </div>
              <div className="bg-gray-100 rounded-md px-4 py2 overflow-auto whitespace-nowrap">
                {item.gender}
              </div>
              <div className="bg-gray-100 rounded-md px-4 py2 overflow-auto whitespace-nowrap">
                {item.income}
              </div>
              <div className="bg-gray-100 rounded-md px-4 py2 overflow-auto whitespace-nowrap">
                {item.city}
              </div>
              <div className="bg-gray-100 rounded-md px-4 py2 overflow-auto whitespace-nowrap">
                {item.car}
              </div>
              <div className="bg-gray-100 rounded-md px-4 py2 overflow-auto whitespace-nowrap">
                {item.quote}
              </div>
              <div className="bg-gray-100 rounded-md px-4 py2 overflow-auto whitespace-nowrap">
                {item.phone_price}
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}

export default Table;
