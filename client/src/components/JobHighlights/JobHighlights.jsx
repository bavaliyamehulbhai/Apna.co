import {
  Briefcase,
  IndianRupee,
  Clock,
  GraduationCap,
  Building2,
  Users,
} from "lucide-react";
import HighlightCard from "../HighlightCard/HighlightCard";

const JobHighlights = ({ job }) => {
  return (
    <div
      className="
      bg-white
      border
      rounded-2xl
      p-6
      mt-5
    "
    >
      <h2
        className="
        font-semibold
        text-xl
        mb-5
      "
      >
        Job Highlights
      </h2>

      <div
        className="
        grid
        grid-cols-2
        md:grid-cols-3
        gap-4
      "
      >
        <HighlightCard
          title="Experience"
          value={job.experience}
          icon={<Briefcase size={20} />}
        />
        <HighlightCard
          title="Salary"
          value={job.salary}
          icon={<IndianRupee size={20} />}
        />
        <HighlightCard
          title="Job Type"
          value={job.jobType}
          icon={<Building2 size={20} />}
        />
        <HighlightCard
          title="Education"
          value={job.education}
          icon={<GraduationCap size={20} />}
        />
        <HighlightCard
          title="Shift"
          value={job.shift}
          icon={<Clock size={20} />}
        />
        <HighlightCard
          title="Openings"
          value={job.openings}
          icon={<Users size={20} />}
        />
      </div>
    </div>
  );
};

export default JobHighlights;
