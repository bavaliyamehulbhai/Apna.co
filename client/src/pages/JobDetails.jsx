import React from "react";
import { useParams } from "react-router-dom";
import jobs from "../data/jobs.json";
import CompanyInfo from "../components/CompanyInfo/CompanyInfo";

const JobDetails = () => {
  const { id } = useParams();

  const job = jobs.find((item) => item.id === Number(id));

  if (!job) {
    return <div className="p-10">Job Not Found</div>;
  }

  return (
    <div className="max-w-7xl mx-auto px-4 py-6">
      <div
        className="
          grid
          grid-cols-1
          lg:grid-cols-3
          gap-6
        "
      >
        {/* Left Section */}
        <div className="lg:col-span-2">
          {/* Job Header Card */}
          <div
            className="
              bg-white
              border
              rounded-xl
              p-6
            "
          >
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
              "
            >
              {job.company}
            </p>
            <p
              className="
                text-gray-600
              "
            >
              {job.location}
            </p>
            <p
              className="
                text-green-600
                font-semibold
              "
            >
              {job.salary}
            </p>

            {/* Job Meta Information */}
            <div className="flex gap-4 mt-4">
              <div>{job.experience}</div>
              <div>{job.jobType}</div>
              <div>{job.openings} Openings</div>
            </div>
          </div>

          {/* Job Description & Skills */}
          <div
            className="
              bg-white
              border
              rounded-xl
              p-6
              mt-5
            "
          >
            <h2 className="text-xl font-bold mb-4">Job Description</h2>
            <p>{job.description}</p>

            <div className="mt-5">
              <h3 className="font-semibold mb-3">Skills</h3>
              <div className="flex flex-wrap gap-2">
                {job.skills.map((skill) => (
                  <span
                    key={skill}
                    className="
                      px-3
                      py-1
                      bg-gray-100
                      rounded-full
                    "
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Right Sidebar */}
        <div className="lg:col-span-1">
          <div
            className="
              lg:sticky
              lg:top-24
            "
          >
            {/* Sidebar Card */}
            <div
              className="
                bg-white
                border
                rounded-xl
                p-5
              "
            >
              <button
                className="
                  w-full
                  bg-blue-600
                  text-white
                  py-3
                  rounded-lg
                  font-semibold
                "
              >
                Apply Now
              </button>

              {/* Company Info */}
              <CompanyInfo company={job.company} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobDetails;