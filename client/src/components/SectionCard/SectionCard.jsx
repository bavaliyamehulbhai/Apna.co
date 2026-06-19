const SectionCard = ({ title, children }) => {
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
        text-xl
        font-semibold
      "
      >
        {title}
      </h2>

      <div className="mt-4">{children}</div>
    </div>
  );
};

export default SectionCard;
