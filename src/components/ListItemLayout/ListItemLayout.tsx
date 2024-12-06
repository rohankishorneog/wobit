import { ReactNode } from "react";
import "./ListItemLayout.css";

interface ListItemLayoutProps {
  children: ReactNode;
}

const ListItemLayout = ({ children }: ListItemLayoutProps) => {
  return (
    <div className="list-header">
      <input type="checkbox" className="checkbox" />
      <div className="column-texts">{children}</div>
    </div>
  );
};

export default ListItemLayout;
