import { SMALL_IMG_BASE_URL } from "../utils/constants";

const SearchResults = ({ results, activeTab }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {results?.map((result) => (
        <div key={result.id} className="bg-gray-900/60 p-4 rounded-md">
          {activeTab === "movie" || activeTab === "tv" ? (
            <>
              <img
                src={`${SMALL_IMG_BASE_URL}${result.poster_path}`}
                alt={result.title || result.name}
                className="w-full h-64 object-cover rounded-md"
              />
              <h2 className="mt-2 text-lg font-semibold">
                {result.title || result.name}
              </h2>
              <p className="text-sm text-gray-400">{result.release_date}</p>
            </>
          ) : activeTab === "person" ? (
            <>
              <img
                src={`${SMALL_IMG_BASE_URL}${result.profile_path}`}
                alt={result.name}
                className="w-full h-64 object-cover rounded-md"
              />
              <h2 className="mt-2 text-lg font-semibold">{result.name}</h2>
              <p className="text-sm text-gray-400">
                Known for: {result.known_for_department}
              </p>
            </>
          ) : null}
        </div>
      ))}
    </div>
  );
};

export default SearchResults;
