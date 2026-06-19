import SectionCard from "../SectionCard/SectionCard";

const AboutJob = ({ job }) => {
  return (
    <>
      <SectionCard title="Responsibilities">
        <ul
          className="
          list-disc
          ml-5
          mb-2
        "
        >
          {job.responsibilities?.map((item, index) => (
            <li key={index} className="text-gray-700 mb-1">
              {item}
            </li>
          ))}
        </ul>
      </SectionCard>

      <SectionCard title="Requirements">
        <ul
          className="
          list-disc
          ml-5
          mb-2
        "
        >
          {job.requirements?.map((item, index) => (
            <li key={index} className="text-gray-700 mb-1">
              {item}
            </li>
          ))}
        </ul>
      </SectionCard>

      <SectionCard title="Benefits">
        <ul
          className="
          list-disc
          ml-5
          mb-2
        "
        >
          {job.benefits?.map((item, index) => (
            <li key={index} className="text-gray-700 mb-1">
              {item}
            </li>
          ))}
        </ul>
      </SectionCard>
    </>
  );
};

export default AboutJob;
