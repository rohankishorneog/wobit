import ListItemLayout from "../ListItemLayout/ListItemLayout";
import ListItem from "../ListItem/ListItem";
import { Camera } from "../../assets/types";

interface Props {
  filteredCameras: Camera[];
}
const ListItems = ({ filteredCameras }: Props) => {
  return (
    <>
      {filteredCameras &&
        filteredCameras.map((camera) => (
          <ListItemLayout>
            <ListItem camera={camera} />
          </ListItemLayout>
        ))}
    </>
  );
};

export default ListItems;
