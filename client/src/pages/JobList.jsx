import React, { useState, useEffect } from "react";
import jobs from "../data/jobs.json";
import JobCard from "../components/JobCard/JobCard";

const JobList = () => {
  const [search, setSearch] = useState("");
  const [debouncedSearch, setDebouncedSearch] = useState("");
  const [location, setLocation] = useState("");
  const [experience, setExperience] = useState("");
  const [jobType, setJobType] = useState("");

  // Search Debouncing
  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedSearch(search);
    }, 300);

    return () => {
      clearTimeout(handler);
    };
  }, [search]);

  const filteredJobs = jobs.filter((job) => {
    const matchSearch = job.title
      .toLowerCase()
      .includes(debouncedSearch.toLowerCase());

    const matchLocation =
      location === "" || job.location === location;

    const matchExperience =
      experience === "" || job.experience === experience;

    const matchType =
      jobType === "" || job.jobType === jobType;

    return matchSearch && matchLocation && matchExperience && matchType;
  });

  const handleClearFilters = () => {
    setSearch("");
    setLocation("");
    setExperience("");
    setJobType("");
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-6">
      {/* Page Heading */}
      <h1 className="text-3xl font-bold mb-6 text-gray-900">
        Jobs For You
      </h1>

      {/* Search Bar */}
      <div className="bg-white border border-gray-150 rounded-2xl p-4 mb-6 shadow-sm">
        <input
          type="text"
          placeholder="Search jobs"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full border border-gray-200 rounded-xl px-4 py-3 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100 transition-all text-gray-800"
        />
      </div>

      {/* Filters Section */}
      <div className="bg-white border border-gray-150 rounded-2xl p-5 mb-6 shadow-sm">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-semibold text-gray-900">
            Filters
          </h2>
          <button
            onClick={handleClearFilters}
            className="text-sm font-semibold text-blue-600 hover:text-blue-800 transition-colors cursor-pointer"
          >
            Clear Filters
          </button>
        </div>

        {/* Dropdowns Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {/* Location Filter */}
          <div className="flex flex-col gap-1.5">
            <label className="text-xs font-semibold text-gray-500 uppercase tracking-wider">
              Location
            </label>
            <select
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              className="border border-gray-200 rounded-xl px-3 py-2.5 outline-none focus:border-blue-500 transition-colors bg-white text-gray-700 cursor-pointer"
            >
              <option value="">All Locations</option>
              <option value="Ahmedabad">Ahmedabad</option>
              <option value="Remote">Remote</option>
              <option value="Bangalore">Bangalore</option>
              <option value="Hyderabad">Hyderabad</option>
              <option value="Pune">Pune</option>
              <option value="Mumbai">Mumbai</option>
            </select>
          </div>

          {/* Experience Filter */}
          <div className="flex flex-col gap-1.5">
            <label className="text-xs font-semibold text-gray-500 uppercase tracking-wider">
              Experience
            </label>
            <select
              value={experience}
              onChange={(e) => setExperience(e.target.value)}
              className="border border-gray-200 rounded-xl px-3 py-2.5 outline-none focus:border-blue-500 transition-colors bg-white text-gray-700 cursor-pointer"
            >
              <option value="">All Experience</option>
              <option value="0-1 Years">0-1 Years</option>
              <option value="1-3 Years">1-3 Years</option>
              <option value="2-4 Years">2-4 Years</option>
              <option value="3-5 Years">3-5 Years</option>
              <option value="3+ Years">3+ Years</option>
              <option value="3-6 Years">3-6 Years</option>
              <option value="4+ Years">4+ Years</option>
            </select>
          </div>

          {/* Job Type Filter */}
          <div className="flex flex-col gap-1.5">
            <label className="text-xs font-semibold text-gray-500 uppercase tracking-wider">
              Job Type
            </label>
            <select
              value={jobType}
              onChange={(e) => setJobType(e.target.value)}
              className="border border-gray-200 rounded-xl px-3 py-2.5 outline-none focus:border-blue-500 transition-colors bg-white text-gray-700 cursor-pointer"
            >
              <option value="">All Job Types</option>
              <option value="Full Time">Full Time</option>
              <option value="Part Time">Part Time</option>
              <option value="Contract">Contract</option>
              <option value="Remote">Remote</option>
            </select>
          </div>
        </div>
      </div>

      {/* Jobs Count */}
      <p className="mb-4 text-gray-500 text-sm font-medium">
        <span className="font-semibold text-blue-600 text-base">
          {filteredJobs.length}
        </span>{" "}
        Jobs Found
      </p>

      {/* Job Grid or Empty State */}
      {filteredJobs.length === 0 ? (
        <div className="text-center py-10">
          <span className="text-4xl block mb-2">🔍</span>
          <h3 className="text-lg font-bold text-gray-800">No Jobs Found</h3>
          <p className="text-gray-500 text-sm">Try Different Filters</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {filteredJobs.map((job) => (
            <JobCard key={job.id} job={job} />
          ))}
        </div>
      )}
    </div>
  );
};

export default JobList;