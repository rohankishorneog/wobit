import "./Status.css";

const Status = ({ active }: { active: boolean }) => {
  return (
    <p className={`status ${active ? "active" : "inactive"}`}>
      {active ? "Active" : "Inactive"}
    </p>
  );
};

export default Status;
