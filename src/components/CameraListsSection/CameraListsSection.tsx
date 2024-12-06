import { useState, useMemo } from "react";
import LocationIcon from "../../assets/icons/LocationIcon";
import RssFeedIcon from "../../assets/icons/RssFeedIcon";
import { Camera } from "../../assets/types";
import SelectFilter from "../Filters/SelectFilter";
import ListHeader from "../ListHeader/ListHeader";
import ListItems from "../ListItems/ListItems";
import "./CameraListsSection.css";

interface CameraListsSectionProps {
  filteredCameras: Camera[];
}

const CameraListsSection = ({ filteredCameras }: CameraListsSectionProps) => {
  const [locationFilter, setLocationFilter] = useState<string | null>(null);
  const [statusFilter, setStatusFilter] = useState<string | null>(null);

  // Extract unique locations from the filtered cameras
  const locations = useMemo(() => {
    const locationSet = new Set<string>();
    filteredCameras.forEach((camera) => {
      if (camera.location) {
        locationSet.add(camera.location); // Add each location to the set
      }
    });
    // Add "All" option
    return [
      { value: "", label: "All" },
      ...Array.from(locationSet).map((location) => ({
        value: location,
        label: location,
      })),
    ];
  }, [filteredCameras]);

  // Extract unique status options from the filtered cameras
  const statusOptions = useMemo(() => {
    const statusSet = new Set<string>();
    filteredCameras.forEach((camera) => {
      if (camera.status) {
        statusSet.add(camera.status); // Add each status to the set
      }
    });
    // Add "All" option
    return [
      { value: "", label: "All" },
      ...Array.from(statusSet).map((status) => ({
        value: status,
        label: status,
      })),
    ];
  }, [filteredCameras]);

  // Handle changes in the location filter
  const handleLocationFilter = (value: string) => {
    setLocationFilter(value || null); // Reset to null if "All" is selected
  };

  // Handle changes in the status filter
  const handleStatusFilter = (value: string) => {
    setStatusFilter(value || null); // Reset to null if "All" is selected
  };

  // Filter cameras based on the selected location and status
  const filteredList = useMemo(() => {
    return filteredCameras.filter((camera) => {
      const matchesLocation =
        !locationFilter || camera.location === locationFilter;
      const matchesStatus = !statusFilter || camera.status === statusFilter;
      return matchesLocation && matchesStatus;
    });
  }, [filteredCameras, locationFilter, statusFilter]);

  return (
    <section className="camera-lists-section">
      <div className="filters">
        {/* Location Filter */}
        <SelectFilter
          placeholder="Location"
          options={locations}
          name="location"
          icon={<LocationIcon />}
          onChange={handleLocationFilter}
        />

        {/* Status Filter */}
        <SelectFilter
          placeholder="Status"
          options={statusOptions}
          name="status"
          icon={<RssFeedIcon />}
          onChange={handleStatusFilter}
        />
      </div>
      <ListHeader />
      <ListItems filteredCameras={filteredList} />{" "}
      {/* Pass the filtered list */}
    </section>
  );
};

export default CameraListsSection;
