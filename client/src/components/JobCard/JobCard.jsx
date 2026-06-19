import React from "react";
import { Link } from "react-router-dom";

const JobCard = ({ job }) => {
  return (
    <div
      className="
        border
        rounded-xl
        p-4
        hover:shadow-md
        hover:border-blue-500
        hover:shadow-lg
        transition
        transition-all
        bg-white
        flex
        flex-col
        justify-between
      "
    >
      <div>
        <div className="flex items-start gap-4 mb-3">
          <img
            src={job.companyLogo}
            alt={job.company}
            className="h-12 w-12 rounded-lg object-cover"
          />
          <div>
            <h3 className="font-semibold text-lg text-gray-900">
              {job.title}
            </h3>
            <p className="text-gray-600">
              {job.company}
            </p>
          </div>
        </div>
        <div className="text-gray-500 space-y-1 mb-4">
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
          className="text-blue-600 font-medium hover:underline"
        >
          View Details
        </Link>
      </div>
    </div>
  );
};

export default JobCard;
