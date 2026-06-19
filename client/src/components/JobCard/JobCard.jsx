import React from "react";
import { Link } from "react-router-dom";

const JobCard = ({ job }) => {
  return (
    <div
      className="
        bg-white
        rounded-2xl
        border
        hover:border-blue-500
        hover:shadow-lg
        transition-all
        duration-300
        p-5
        flex
        flex-col
        justify-between
        h-full
      "
    >
      <div>
        {/* Badges Container */}
        <div className="flex flex-wrap gap-2 mb-3">
          {job.featured && (
            <span className="bg-yellow-100 text-yellow-700 font-semibold px-2.5 py-1 rounded-full text-xs">
              ⭐ Featured
            </span>
          )}
          {job.urgentHiring && (
            <span className="bg-red-100 text-red-700 font-semibold px-2.5 py-1 rounded-full text-xs animate-pulse">
              Urgently Hiring
            </span>
          )}
          <span className="bg-green-100 text-green-700 font-semibold px-2.5 py-1 rounded-full text-xs">
            Posted {job.postedAt}
          </span>
        </div>

        <div className="flex items-start gap-4 mb-4">
          <img
            src={job.companyLogo}
            alt={job.company}
            className="h-12 w-12 rounded-lg object-cover border border-gray-100 bg-white"
          />
          <div>
            <h3 className="font-semibold text-lg text-gray-900 leading-tight">
              {job.title}
            </h3>
            <p className="text-gray-600 font-medium text-sm mt-0.5">
              {job.company}
            </p>
          </div>
        </div>

        <div className="text-gray-500 text-sm space-y-1 mb-5">
          <p>
            <span className="font-medium text-gray-700">Location: </span>{job.location}
          </p>
          <p>
            <span className="font-medium text-gray-700">Salary: </span>{job.salary}
          </p>
        </div>
      </div>

      <div>
        <Link
          to={`/jobs/${job.id}`}
          className="text-blue-600 font-medium hover:underline text-sm inline-block"
        >
          View Details
        </Link>
      </div>
    </div>
  );
};

export default JobCard;
