import { Bookmark, Share2 } from "lucide-react";
import InfoBadge from "../InfoBadge/InfoBadge";

const JobHeader = ({ job }) => {
  return (
    <div
      className="
        bg-white
        border
        rounded-2xl
        p-6
        shadow-sm
      "
    >
      {/* Top Row: Logo, Title, Company, Location, Verified */}
      <div className="flex flex-col md:flex-row items-start justify-between gap-4">
        {/* Left Side */}
        <div className="flex gap-4">
          <img
            src={job.companyLogo}
            alt={job.company}
            className="
              h-16
              w-16
              rounded-lg
              object-cover
              border
            "
          />
          <div>
            <h1
              className="
                text-2xl
                font-bold
              "
            >
              {job.title}
            </h1>
            <p
              className="
                text-lg
                font-medium
                mt-1
              "
            >
              {job.company}
              {job.verified && (
                <span
                  className="
                    inline-block
                    ml-2
                    bg-green-100
                    text-green-700
                    px-3
                    py-1
                    rounded-full
                    text-sm
                  "
                >
                  ✔ Verified
                </span>
              )}
            </p>
            <p
              className="
                text-gray-500
                mt-1
              "
            >
              {job.location}
            </p>
          </div>
        </div>
      </div>

      {/* Salary */}
      <div className="mt-5">
        <p
          className="
            text-green-600
            font-semibold
            text-xl
          "
        >
          {job.salary}
        </p>
      </div>

      {/* Meta Information Row */}
      <div
        className="
          flex
          flex-wrap
          gap-3
          mt-4
        "
      >
        <InfoBadge text={job.experience} />
        <InfoBadge text={job.jobType} />
        <InfoBadge text={`${job.openings} Openings`} />
      </div>

      {/* Action Buttons Row */}
      <div
        className="
          flex
          gap-3
          mt-5
        "
      >
        <button
          className="
            flex
            items-center
            gap-2
            border
            px-4
            py-2
            rounded-lg
          "
        >
          <Bookmark size={18} />
          Save
        </button>
        <button
          className="
            flex
            items-center
            gap-2
            border
            px-4
            py-2
            rounded-lg
          "
        >
          <Share2 size={18} />
          Share
        </button>
      </div>

      {/* Posted Date */}
      <p
        className="
          text-sm
          text-gray-500
          mt-4
        "
      >
        Posted {job.postedAt}
      </p>
    </div>
  );
};

export default JobHeader;
