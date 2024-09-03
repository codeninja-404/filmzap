import { useState, useEffect, useCallback } from "react";
import Header from "../components/shared/Header";
import { useContentStore } from "../store/content";
import { Search } from "lucide-react";
import axios from "axios";
import toast from "react-hot-toast";
import SearchResults from "../components/SearchResults";
import { SMALL_IMG_BASE_URL } from "../utils/constants";

// Custom debounce function
const debounce = (func, delay) => {
  let timeoutId;
  return (...args) => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => func(...args), delay);
  };
};

const SearchPage = () => {
  const [activeTab, setActiveTab] = useState("movie");
  const [searchTerm, setSearchTerm] = useState("");
  const [results, setResults] = useState([]);
  const [suggestions, setSuggestions] = useState([]);
  const [isFocused, setIsFocused] = useState(false);
  const { setContentType } = useContentStore();
  const tabs = [
    { name: "Movie", value: "movie" },
    { name: "Tv Show", value: "tv" },
    { name: "Person", value: "person" },
  ];

  const handleTabChange = (tab) => {
    setActiveTab(tab);
    tab === "movie" ? setContentType("movie") : setContentType("tv");
    setResults([]);
    setSuggestions([]);
    setSearchTerm("");
  };

  const fetchSuggestions = async (term) => {
    if (term.length < 2) {
      setSuggestions([]);
      return;
    }
    try {
      const res = await axios.get(`/api/v1/search/${activeTab}/${term}`);
      setSuggestions(res.data.content.slice(0, 5)); // Limit to 5 suggestions
    } catch (error) {
      console.error("Error fetching suggestions:", error);
    }
  };

  const debouncedFetchSuggestions = useCallback(
    debounce(fetchSuggestions, 300),
    [activeTab],
  );

  useEffect(() => {
    debouncedFetchSuggestions(searchTerm);
  }, [searchTerm, debouncedFetchSuggestions]);

  const handleSearch = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.get(`/api/v1/search/${activeTab}/${searchTerm}`);
      setResults(res.data.content);
      setSuggestions([]);
    } catch (error) {
      if (error.response?.status === 404) {
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
      <div className="mx-auto container pt-28">
        <div className="flex justify-center gap-3 mb-4 transition-all duration-300">
          {tabs.map((tab) => (
            <button
              key={tab.value}
              className={`py-1 px-3 rounded font-semibold text-sm ${
                activeTab === tab.value
                  ? "bg-transition"
                  : "hover:bg-gray-800/50 bg-gray-800 transition-all duration-300"
              }`}
              onClick={() => handleTabChange(tab.value)}
            >
              {tab.name}
            </button>
          ))}
        </div>
        <form
          className="flex flex-col items-stretch mb-8 max-w-2xl mx-auto relative"
          onSubmit={handleSearch}
        >
          <div className="flex">
            <input
              type="text"
              className="py-2 px-3 border-r-0 rounded-md rounded-r-none w-full focus:outline-none focus:ring"
              placeholder={`Search for ${activeTab}`}
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              onFocus={() => setIsFocused(true)}
              onBlur={() => setTimeout(() => setIsFocused(false), 200)}
            />
            <button className="bg-transition rounded-md rounded-l-none p-2">
              <Search />
            </button>
          </div>
          {isFocused && suggestions.length > 0 && (
            <ul className="absolute top-12 left-0 px-2 right-0 flex rounded-md gap-2 flex-wrap shadow-lg z-10">
              {suggestions.map((suggestion, index) => (
                <li
                  key={suggestion.id || index}
                  className="relative px-3 py-2 transition-all duration-300 bg-gray-900/60 hover:bg-gray-700/60 rounded-md cursor-pointer"
                  onClick={() => {
                    setSearchTerm(suggestion.title || suggestion.name);
                    setSuggestions([]);
                  }}
                >
                  <div className="flex items-center">
                    <img
                      src={
                        activeTab === "person"
                          ? `${SMALL_IMG_BASE_URL}${suggestion.profile_path}`
                          : `${SMALL_IMG_BASE_URL}${suggestion.poster_path}`
                      }
                      alt={suggestion.title || suggestion.name}
                      className="w-10 h-15 object-cover rounded"
                    />
                    <div className="ml-2">
                      <p className="font-semibold">
                        {suggestion.title || suggestion.name}
                      </p>
                      {activeTab === "person" && (
                        <p className="text-xs text-gray-400">
                          {suggestion.known_for_department || "Actor/Actress"}
                        </p>
                      )}
                      {activeTab !== "person" && (
                        <p className="text-xs text-gray-400">
                          {suggestion.release_date}
                        </p>
                      )}
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </form>
        <div className="my-10">
          <SearchResults results={results} activeTab={activeTab} />
        </div>
      </div>
    </div>
  );
};

export default SearchPage;
