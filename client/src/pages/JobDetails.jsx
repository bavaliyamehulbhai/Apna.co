import { useParams } from "react-router-dom";
import jobs from "../data/jobs.json";
import JobHeader from "../components/JobHeader/JobHeader";
import JobHighlights from "../components/JobHighlights/JobHighlights";
import AboutJob from "../components/AboutJob/AboutJob";
import CompanyInfo from "../components/CompanyInfo/CompanyInfo";
import ApplyButton from "../components/ApplyButton/ApplyButton";
import RelatedJobs from "../components/RelatedJobs/RelatedJobs";

const JobDetails = () => {
  const { id } = useParams();

  const job = jobs.find((item) => item.id === Number(id));

  if (!job) {
    return (
      <div className="p-10 text-center">
        Job Not Found
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 py-6 pb-24 lg:pb-6">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        
        {/* Left Side */}
        <div className="lg:col-span-2">
          
          <JobHeader job={job} />

          <JobHighlights job={job} />

          <AboutJob job={job} />

          {/* Skills Section */}
          <div className="bg-white border rounded-xl p-6 mt-5">
            <h2 className="font-semibold text-lg">
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
                    rounded-full
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

        {/* Right Side */}
        <div className="lg:col-span-1">
          <div className="lg:sticky lg:top-24 space-y-5">
            
            {/* Desktop Apply Card */}
            <div className="hidden lg:block bg-white border rounded-2xl p-6 shadow-sm hover:shadow-md transition-all">
              <ApplyButton />
            </div>

            {/* Company Info & Hiring Activity Cards */}
            <CompanyInfo job={job} />

          </div>
        </div>

      </div>

      {/* Mobile Sticky Apply Bar */}
      <div className="fixed bottom-0 left-0 right-0 bg-white p-4 border-t lg:hidden z-50 shadow-[0_-4px_12px_rgba(0,0,0,0.05)]">
        <ApplyButton />
      </div>
    </div>
  );
};

export default JobDetails;