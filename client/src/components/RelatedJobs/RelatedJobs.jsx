import React from "react";
import JobCard from "../JobCard/JobCard";

const RelatedJobs = ({ currentJob, jobs }) => {
  const relatedJobs = jobs.filter(
    (item) =>
      item.category === currentJob.category &&
      item.id !== currentJob.id
  );

  if (relatedJobs.length === 0) {
    return (
      <p>
        No related jobs found
      </p>
    );
  }

  const jobsToShow = relatedJobs.slice(0, 4);

  return (
    <div
      className="
        bg-white
        border
        rounded-2xl
        p-6
        mt-6
      "
    >
      <h2
        className="
          text-xl
          font-semibold
          mb-5
        "
      >
        Related Jobs
      </h2>
      <div
        className="
          grid
          md:grid-cols-2
          gap-4
        "
      >
        {jobsToShow.map((job) => (
          <JobCard
            key={job.id}
            job={job}
          />
        ))}
      </div>
    </div>
  );
};

export default RelatedJobs;
