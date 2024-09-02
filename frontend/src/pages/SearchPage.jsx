import { useState } from "react";
import Header from "../components/shared/Header";
import { useContentStore } from "../store/content";
import { Search } from "lucide-react";
import axios from "axios";
import toast from "react-hot-toast";

const SearchPage = () => {
  const [activeTab, setActiveTab] = useState("movie");
  const [searchTerm, setSearchTerm] = useState("");

  const [results, setResults] = useState([]);
  const { setContentType } = useContentStore();
  const tabs = [
    { name: "Movie", value: "movie" },
    { name: "TvShows", value: "tv" },
    { name: "Person", value: "person" },
  ];

  const handleTabChange = (tab) => {
    setActiveTab(tab);
    tab === "movie" ? setContentType("movie") : setContentType("tv");
    setResults([]);
  };
  const handleSearch = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.get(`/api/v1/search/${activeTab}/${searchTerm}`);
      setResults(res.data.content);
    } catch (error) {
      if (error.response.status === 404) {
        toast.error(
          "Nothing found, make sure you are searching under the right category",
          {
            style: {
              borderRadius: "10px",
              background: "#333",
              color: "#fff",
            },
          },
        );
      } else {
        toast.error("An error occurred, please try again later", {
          style: {
            borderRadius: "10px",
            background: "#333",
            color: "#fff",
          },
        });
      }
    }
  };

  return (
    <div className="min-h-screen">
      <Header />
      <div className="mx-auto container  pt-28">
        <div className="flex justify-center gap-3 mb-4 transition-all duration-300">
          {tabs.map((tab) => (
            <button
              key={tab.value}
              className={`py-1 px-3 rounded font-semibold text-sm ${
                activeTab === tab.value
                  ? "bg-transition"
                  : "hover:bg-gray-800/50 bg-gray-800 transition-all duration-300"
              }`}
              onClick={() => {
                handleTabChange(tab.value);
              }}
            >
              {tab.name}
            </button>
          ))}
        </div>
        <form
          className="flex  items-stretch mb-8 max-w-2xl mx-auto"
          onSubmit={handleSearch}
        >
          <input
            type="text"
            className="py-2 px-3 border-r-0 rounded-md rounded-r-none w-full focus:outline-none focus:ring"
            placeholder={`Search for ${activeTab}`}
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <button className="bg-transition rounded-md rounded-l-none p-2">
            {" "}
            <Search />
          </button>
        </form>
      </div>
    </div>
  );
};

export default SearchPage;
