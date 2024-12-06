import ListItemLayout from "../ListItemLayout/ListItemLayout";
import "./ListHeader.css";

const columns = [
  "NAME",
  "HEALTH",
  "LOCATION",
  "RECORDER",
  "TASKS",
  "STATUS",
  "ACTIONS",
];

const ListHeader = () => {
  return (
    <ListItemLayout>
      {columns.map((column) => (
        <p className="column-text">{column}</p>
      ))}
    </ListItemLayout>
  );
};

export default ListHeader;
