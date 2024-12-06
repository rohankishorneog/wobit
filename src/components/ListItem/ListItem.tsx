import Cloud from "../../assets/icons/Cloud";
import Edge from "../../assets/icons/Edge";
import GreenDot from "../../assets/icons/GreenDot";
import RedDot from "../../assets/icons/RedDot";
import Warning from "../../assets/icons/Warning";
import NotInterested from "../../assets/NotInterested";
import { Camera } from "../../assets/types";
import Status from "../Status/Status";
import "./ListItem.css";
interface Props {
  camera: Camera;
}

const ListItem = ({ camera }: Props) => {
  return (
    <>
      <div className="name">
        <div className="name-content">
          <div className="name-current_status">
            <span className="name-dot">
              {camera.current_status === "Online" ? <GreenDot /> : <RedDot />}
            </span>
            <p className="name-camera">{camera.name}</p>

            <span className="name-icon">
              {camera.hasWarning && <Warning />}
            </span>
          </div>
        </div>
        <p className="name-email">{}</p>
      </div>
      <div className="list-item health">
        <div className="health-cloud">
          <span className="cloud-label">
            <Cloud />
          </span>
          <span className="cloud-spin">{camera.health.cloud}</span>
        </div>
        <div className="health-battery">
          <span className="battery-label">
            <Edge />
          </span>
          <span className="battery-spin">{camera.health.device}</span>
        </div>
      </div>
      <p className="list-item location">{camera.location}</p>
      <p className="list-item recorder">{camera.location}</p>
      <p className="list-item tasks">{camera.tasks} Tasks</p>
      <Status active={camera.status === "Active"} />
      <div className="list-item action">
        <NotInterested />
      </div>
    </>
  );
};

export default ListItem;
