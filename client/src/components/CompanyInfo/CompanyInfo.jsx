import React from "react";

const CompanyInfo = ({ company }) => {
  return (
    <div className="mt-5">
      {/* Dummy data for now */}
      <div className="flex items-center gap-3">
        <div className="h-10 w-10 bg-gray-200 rounded-md"></div>
        <div>
          <h3 className="font-semibold">{company}</h3>
        </div>
      </div>
      
      <div className="mt-4 space-y-2 text-sm text-gray-600">
        <p>15000+ Employees</p>
        <p>120 Open Jobs</p>
      </div>
    </div>
  );
};

export default CompanyInfo;
