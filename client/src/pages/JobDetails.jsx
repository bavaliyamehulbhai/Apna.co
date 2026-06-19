import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import jobs from "../data/jobs.json";
import JobHeader from "../components/JobHeader/JobHeader";
import JobHighlights from "../components/JobHighlights/JobHighlights";
import AboutJob from "../components/AboutJob/AboutJob";
import CompanyInfo from "../components/CompanyInfo/CompanyInfo";
import RelatedJobs from "../components/RelatedJobs/RelatedJobs";
import JobSkeleton from "../components/Skeletons/JobSkeleton";

const JobDetails = () => {
  const { id } = useParams();
  const [loading, setLoading] = useState(true);
  const [saved, setSaved] = useState(false);
  const [open, setOpen] = useState(false);

  const job = jobs.find((item) => item.id === Number(id));

  // Reset states and simulate loading when route (id) changes
  useEffect(() => {
    setLoading(true);
    setSaved(false); // Reset saved status for new job details
    setOpen(false); // Close modal when navigating
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, [id]);

  if (!job) {
    return (
      <div className="p-10 text-center text-gray-500">
        Job Not Found
      </div>
    );
  }

  if (loading) {
    return <JobSkeleton />;
  }

  const shareJob = () => {
    navigator.clipboard.writeText(window.location.href);
    alert("Link copied!");
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-6 pb-24 lg:pb-6">
      {/* Breadcrumb Navigation */}
      <nav className="flex items-center gap-2 text-sm text-gray-500 mb-5">
        <Link to="/" className="hover:text-blue-600 transition-colors">
          Home
        </Link>
        <span>/</span>
        <Link to="/" className="hover:text-blue-600 transition-colors">
          Jobs
        </Link>
        <span>/</span>
        <span className="text-gray-850 font-medium truncate max-w-[200px] md:max-w-none">
          {job.title}
        </span>
      </nav>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left Side */}
        <div className="lg:col-span-2">
          <JobHeader job={job} />

          <JobHighlights job={job} />

          <AboutJob job={job} />

          {/* Skills Section */}
          <div className="bg-white border border-gray-150 rounded-2xl p-6 mt-5 shadow-sm">
            <h2 className="font-semibold text-lg text-gray-900">
              Skills Required
            </h2>
            <div className="flex flex-wrap gap-3 mt-4">
              {job.skills.map((skill) => (
                <span
                  key={skill}
                  className="
                    px-4
                    py-2
                    bg-gray-100
                    text-gray-700
                    rounded-full
                    text-sm
                    font-medium
                  "
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* Related Jobs Section */}
          <RelatedJobs currentJob={job} jobs={jobs} />
        </div>

        {/* Right Side (Sidebar) */}
        <div className="lg:col-span-1">
          <div className="lg:sticky lg:top-24 space-y-5">
            {/* Desktop Apply Card */}
            <div className="hidden lg:block bg-white border border-gray-150 rounded-2xl p-6 shadow-sm hover:shadow-md transition-all duration-300">
              <button
                onClick={() => setOpen(true)}
                className="w-full bg-blue-600 text-white py-3 rounded-xl font-semibold hover:bg-blue-700 hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 shadow-sm cursor-pointer"
              >
                Apply Now
              </button>
              <div className="grid grid-cols-2 gap-3 mt-3">
                <button
                  onClick={() => setSaved(!saved)}
                  className="flex items-center justify-center gap-2 border border-gray-200 text-gray-700 py-2.5 rounded-xl font-medium hover:bg-gray-50 hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 text-sm cursor-pointer"
                >
                  {saved ? "❤️ Saved" : "♡ Save Job"}
                </button>
                <button
                  onClick={shareJob}
                  className="flex items-center justify-center gap-2 border border-gray-200 text-gray-700 py-2.5 rounded-xl font-medium hover:bg-gray-50 hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 text-sm cursor-pointer"
                >
                  Share Job
                </button>
              </div>
            </div>

            {/* Company Info & Hiring Activity Cards */}
            <CompanyInfo job={job} />
          </div>
        </div>
      </div>

      {/* Mobile Sticky Apply Bar */}
      <div className="fixed bottom-0 left-0 right-0 bg-white p-4 border-t lg:hidden z-50 shadow-[0_-4px_12px_rgba(0,0,0,0.08)]">
        <div className="flex gap-3 max-w-lg mx-auto">
          <button
            onClick={() => setOpen(true)}
            className="flex-[2] bg-blue-600 text-white py-3 rounded-xl font-semibold hover:bg-blue-700 active:scale-[0.98] transition-all duration-300 shadow-sm cursor-pointer text-center"
          >
            Apply Now
          </button>
          <button
            onClick={() => setSaved(!saved)}
            className="flex-[1] flex items-center justify-center gap-2 border border-gray-200 text-gray-700 py-3 rounded-xl font-medium hover:bg-gray-50 active:scale-[0.98] transition-all duration-300 text-sm cursor-pointer"
          >
            {saved ? "❤️ Saved" : "♡ Save"}
          </button>
          <button
            onClick={shareJob}
            className="flex-[1] flex items-center justify-center gap-2 border border-gray-200 text-gray-700 py-3 rounded-xl font-medium hover:bg-gray-50 active:scale-[0.98] transition-all duration-300 text-sm cursor-pointer"
          >
            Share
          </button>
        </div>
      </div>

      {/* Apply Success Modal */}
      {open && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-[100] p-4 animate-fade-in">
          <div className="bg-white rounded-2xl p-6 max-w-sm w-full text-center shadow-xl transform transition-all animate-zoom-in">
            <div className="h-12 w-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4 text-green-600 text-2xl font-bold">
              ✓
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">
              Job Applied Successfully
            </h3>
            <p className="text-gray-500 text-sm mb-6 leading-relaxed">
              Your application has been submitted to <strong>{job.company}</strong>. They will review it and reach out if your profile fits.
            </p>
            <button
              onClick={() => setOpen(false)}
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2.5 rounded-xl transition-all duration-300 active:scale-[0.98] cursor-pointer"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default JobDetails;