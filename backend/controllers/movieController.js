import { fetchFromTMDB } from "../services/tmdbService.js";

export const getTrendingMovie = async (req, res) => {
  try {
    const data = await fetchFromTMDB(
      "https://api.themoviedb.org/3/movie/popular?language=en-US",
    );
    const randomMovie =
      data.results[Math.floor(Math.random() * data.results?.length)];

    res.json({ success: true, content: randomMovie });
  } catch (error) {
    console.log("Error in trending movie controller", error.message);
    res.status(500).json({ success: false, message: "Internal Server Error" });
  }
};
