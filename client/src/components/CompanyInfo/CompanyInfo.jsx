import React from "react";
import StatItem from "../StatItem/StatItem";

const CompanyInfo = ({ job }) => {
  return (
    <div className="space-y-5">
      {/* Main Company Card */}
      <div
        className="
          bg-white
          border
          rounded-2xl
          p-6
          shadow-sm
          hover:shadow-md
          transition-all
          duration-300
        "
      >
        {/* Company Logo */}
        <img
          src={job.companyLogo}
          alt={job.company}
          className="
            h-16
            w-16
            rounded-lg
            border
            object-contain
            bg-white
          "
        />

        {/* Company Name */}
        <h3
          className="
            text-lg
            font-semibold
            mt-4
            text-gray-900
          "
        >
          {job.company}
        </h3>

        {/* Verified Badge */}
        {job.verified && (
          <span
            className="
              inline-block
              mt-2
              px-3
              py-1
              bg-green-50
              text-green-700
              border
              border-green-150
              rounded-full
              text-xs
              font-medium
            "
          >
            Verified Employer
          </span>
        )}

        {/* Company Stats Grid */}
        <div
          className="
            grid
            grid-cols-2
            gap-4
            mt-5
            pt-4
            border-t
            border-gray-100
          "
        >
          <StatItem label="Employees" value={job.employees} />
          <StatItem label="Open Jobs" value={job.openJobs} />
        </div>

        {/* Industry */}
        <div className="mt-4 pt-4 border-t border-gray-100">
          <p className="text-gray-500 text-sm">Industry</p>
          <p className="font-semibold text-gray-900 mt-0.5">{job.industry}</p>
        </div>

        {/* Website Link */}
        <div className="mt-4 pt-4 border-t border-gray-100">
          <p className="text-gray-500 text-sm mb-1">Website</p>
          <a
            href={job.website}
            target="_blank"
            rel="noreferrer"
            className="
              text-blue-600
              break-all
              hover:underline
              font-medium
              text-sm
            "
          >
            {job.website}
          </a>
        </div>

        {/* Company Description */}
        <div className="mt-5 pt-4 border-t border-gray-100">
          <h4 className="font-semibold text-gray-900 text-sm">About Company</h4>
          <p
            className="
              text-gray-600
              mt-2
              text-sm
              leading-6
            "
          >
            {job.companyDescription}
          </p>
        </div>
      </div>

      {/* Hiring Activity Card */}
      <div
        className="
          bg-white
          border
          rounded-2xl
          p-6
          shadow-sm
          hover:shadow-md
          transition-all
          duration-300
        "
      >
        <h4
          className="
            font-semibold
            text-gray-900
          "
        >
          Hiring Activity
        </h4>

        <p className="mt-3 text-gray-700 text-sm">
          {job.applicants} Candidates Applied
        </p>

        {job.activelyHiring && (
          <span
            className="
              inline-block
              mt-3
              px-3
              py-1
              bg-blue-50
              text-blue-700
              border
              border-blue-150
              rounded-full
              text-xs
              font-medium
            "
          >
            Actively Hiring
          </span>
        )}
      </div>
    </div>
  );
};

export default CompanyInfo;
