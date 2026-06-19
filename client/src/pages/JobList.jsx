import { Link } from "react-router-dom";

const JobList = () => {
  return (
    <div className="max-w-7xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">
        Job Listings
      </h1>
      
      <div className="flex flex-col gap-4">
        <Link to="/jobs/1" className="text-blue-600 hover:underline">
          Frontend Developer
        </Link>
        <Link to="/jobs/2" className="text-blue-600 hover:underline">
          MERN Developer
        </Link>
        <Link to="/jobs/3" className="text-blue-600 hover:underline">
          UI/UX Designer
        </Link>
        <Link to="/jobs/4" className="text-blue-600 hover:underline">
          Data Scientist
        </Link>
        <Link to="/jobs/5" className="text-blue-600 hover:underline">
          DevOps Engineer
        </Link>
      </div>
    </div>
  );
};

export default JobList;