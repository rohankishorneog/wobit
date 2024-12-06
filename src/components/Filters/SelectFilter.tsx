import { ReactNode, useState } from "react";
import "./SelectFilter.css";
import ArrowDownIcon from "../../assets/icons/ArrowDownIcon";

interface SelectProps {
  name: string;
  icon: ReactNode;
  options: { value: string; label: string }[];
  placeholder: string;
  onChange: (value: string) => void; // Add onChange prop
}

const SelectFilter = ({
  icon,
  placeholder,
  options,
  onChange,
}: SelectProps) => {
  const [selected, setSelected] = useState<string>();
  const [showDropdown, setShowDropdown] = useState<boolean>(false);

  const handleSelect = (value: string) => {
    setSelected(value); // Set selected value
    setShowDropdown(false); // Close dropdown
    onChange(value); // Trigger the onChange callback with the selected value
  };

  return (
    <div className="select-filter">
      <div
        className="select-filter-container"
        onClick={() => setShowDropdown((prev) => !prev)}
      >
        <div className="select-text">
          <span className="icon-container">{icon}</span>
          <p className="placeholder">{selected || placeholder}</p>
        </div>

        <span>
          <ArrowDownIcon />
        </span>
      </div>

      {showDropdown && (
        <div className="select-options">
          {options.map((option) => (
            <p
              key={option.value}
              onClick={() => handleSelect(option.value)}
              className="select-option"
            >
              {option.label}
            </p>
          ))}
        </div>
      )}
    </div>
  );
};

export default SelectFilter;
