import { useState, useEffect, useMemo } from "react";
import Logo from "../../components/logo/Logo";
import CameraListPageHeader from "../../components/CameraListPageHeader/CameraListPageHeader";
import CameraListsSection from "../../components/CameraListsSection/CameraListsSection";
import ListFooter from "../../components/ListFooter/ListFooter";
import "./CameraListPage.css";
import { Camera } from "../../assets/types";

const CameraListPage = () => {
  const [cameras, setCameras] = useState<Camera[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [search, setSearch] = useState<string>("");
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [itemsPerPage, setItemsPerPage] = useState<number>(10);

  const handleSearchValue = (value: string) => {
    setSearch(value);
    setCurrentPage(1);
  };

  const handleItemsPerPageChange = (itemsPerPage: number) => {
    setItemsPerPage(itemsPerPage);
    setCurrentPage(1);
  };

  async function fetchCameras() {
    try {
      const response = await fetch(
        "https://api-app-staging.wobot.ai/app/v1/fetch/cameras",
        {
          method: "GET",
          headers: {
            Authorization: "Bearer 4ApVMIn5sTxeW7GQ5VWeWiy",
          },
        }
      );

      if (!response.ok) {
        throw new Error(`Error: ${response.status}`);
      }

      const data = await response.json();
      setCameras(data.data);
      setLoading(false);
    } catch (error: any) {
      setError(error.message);
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchCameras();
  }, []);

  // Memoized filtered cameras based on search
  const filteredCameras = useMemo(() => {
    let filteredList = cameras;

    if (search) {
      filteredList = filteredList.filter((camera) =>
        camera.name.toLowerCase().includes(search.toLowerCase())
      );
    }

    return filteredList;
  }, [cameras, search]);

  // Pagination logic
  const startIndex = (currentPage - 1) * itemsPerPage;
  const paginatedCameras = filteredCameras.slice(
    startIndex,
    startIndex + itemsPerPage
  );

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  return (
    <main className="camera-list-page">
      <Logo />
      <CameraListPageHeader handleSearch={handleSearchValue} />
      {loading && <p>Loading cameras...</p>}
      {error && <p>Error: {error}</p>}
      {!loading && !error && (
        <>
          <CameraListsSection filteredCameras={paginatedCameras} />
          <ListFooter
            totalItems={filteredCameras.length}
            itemsPerPage={itemsPerPage}
            onPageChange={handlePageChange}
            onItemsPerPageChange={handleItemsPerPageChange}
          />
        </>
      )}
    </main>
  );
};

export default CameraListPage;
