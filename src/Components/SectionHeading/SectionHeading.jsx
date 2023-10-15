import "./SelectionHeading.css";
const SectionHeading = (props) => {
  return (
    <p className="display-5 p-2 text-center underline">
      {props.title || "Unknown"}
    </p>
  );
};
export default SectionHeading;
