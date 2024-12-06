import { useState } from "react";
import SearchIcon from "../../assets/icons/SearchIcon";
import "./CameraListPageHeader.css";

interface CameraListPageHeader {
  handleSearch: (name: string) => void;
}

const CameraListPageHeader = ({ handleSearch }: CameraListPageHeader) => {
  const [searchValue, setSearchValue] = useState<string>();
  const handleLocalSearchValue = (value: string) => {
    setSearchValue(value);
    console.log("here", searchValue);
  };
  return (
    <section className="header-section">
      <div className="header-text">
        <h4 className="header-title">Cameras</h4>
        <p className="header-desc">Manage your cameras here</p>
      </div>
      <div className="search">
        <input
          placeholder="search"
          className="search-input"
          onChange={(e) => handleLocalSearchValue(e.target.value || "")}
        />
        <button
          className="search-button"
          onClick={() => handleSearch(searchValue || "")}
        >
          <SearchIcon />
        </button>
      </div>
    </section>
  );
};

export default CameraListPageHeader;
