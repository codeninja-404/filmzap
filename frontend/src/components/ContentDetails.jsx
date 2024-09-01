import { ORIGINAL_IMG_BASE_URL } from "../utils/constants";
import { formatReleaseDate } from "../utils/dateFunction";

const ContentDetails = ({ content }) => {
  return (
    <div
      className="flex flex-col md:flex-row items-center justify-between gap-20 
max-w-6xl mx-auto mb-10"
    >
      <div className="mb-4 md:mb-0 text-center md:text-left">
        <h2 className="text-3xl md:text-5xl  font-bold text-balance">
          {content?.title || content?.name}
        </h2>

        <p className="mt-2 text-lg">
          {formatReleaseDate(content?.release_date || content?.first_air_date)}{" "}
          |{" "}
          {content?.adult ? (
            <span className="text-red-600">18+</span>
          ) : (
            <span className="text-green-600">PG-13</span>
          )}{" "}
        </p>
        <p className="mt-4 text-lg">{content?.overview}</p>
      </div>
      <img
        src={ORIGINAL_IMG_BASE_URL + content?.poster_path}
        alt="Poster image"
        className="max-h-[350px] rounded-md"
      />
    </div>
  );
};

export default ContentDetails;
