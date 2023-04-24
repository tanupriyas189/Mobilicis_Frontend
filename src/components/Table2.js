import React from "react";

function Table2({ tableData }) {
  return (
    <div className="w-full border rounded-lg p-2">
      <div className="grid grid-cols-3 gap-4 rounded-md font-semibold">
        <div className="bg-gray-200 rounded-md px-4 py2">City</div>
        <div className="bg-gray-200 rounded-md px-4 py2">Average Income</div>
        <div className="bg-gray-200 rounded-md px-4 py2">User count</div>
      </div>
      <div className="flex flex-col pt-2 space-y-2">
        {tableData &&
          tableData.map((item) => (
            <div key={item._id} className="grid grid-cols-3 gap-4">
              <div className="bg-gray-100 rounded-md px-4 py2 overflow-auto whitespace-nowrap">
                {item.city}
              </div>
              <div className="bg-gray-100 rounded-md px-4 py2 overflow-auto whitespace-nowrap">
                {item.avgIncome}
              </div>
              <div className="bg-gray-100 rounded-md px-4 py2 overflow-auto whitespace-nowrap">
                {item.userCount}
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}

export default Table2;
