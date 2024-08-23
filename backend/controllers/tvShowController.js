import { fetchFromTMDB } from "../services/tmdbService.js";

export const getTrendingTvShow = async (req, res) => {
  try {
    const data = await fetchFromTMDB(
      "https://api.themoviedb.org/3/tv/popular?language=en-US",
    );
    const randomMovie =
      data.results[Math.floor(Math.random() * data.results?.length)];

    res.json({ success: true, content: randomMovie });
  } catch (error) {
    console.log("Error in trending movie controller", error.message);
    res.status(500).json({ success: false, message: "Internal Server Error" });
  }
};

export const getTvShowTrailers = async (req, res) => {
  const { id } = req.params;
  try {
    const data = await fetchFromTMDB(
      `https://api.themoviedb.org/3/tv/${id}/videos?language=en-US`,
    );
    res.json({ success: true, trailers: data.results });
  } catch (error) {
    if (error.message.includes("404")) {
      return res
        .status(404)
        .json({ success: false, message: "Trailers not found" });
    }
    console.error("Error in movie trailers controller:", error.message);
    res.status(500).json({ success: false, message: "Internal Server Error" });
  }
};

export const getTvShowDetails = async (req, res) => {
  const { id } = req.params;
  try {
    const data = await fetchFromTMDB(
      `https://api.themoviedb.org/3/tv/${id}?language=en-US`,
    );
    res.status(200).json({ success: true, content: data });
  } catch (error) {
    if (error.message.includes("404")) {
      return res
        .status(404)
        .json({ success: false, message: "DeTails not found" });
    }
    console.error("Error in movie details controller:", error.message);
    res.status(500).json({ success: false, message: "Internal Server Error" });
  }
};
export const getTvShowCredits = async (req, res) => {
  const { id } = req.params;
  try {
    const data = await fetchFromTMDB(
      `https://api.themoviedb.org/3/tv/${id}/credits?language=en-US`,
    );
    res.status(200).json({ success: true, credits: data.cast });
  } catch (error) {
    console.error("Error in movie credits controller:", error.message);
    res.status(500).json({ success: false, message: "Internal Server Error" });
  }
};

export const getSimilarTvShows = async (req, res) => {
  const { id } = req.params;
  try {
    const data = await fetchFromTMDB(
      `https://api.themoviedb.org/3/tv/${id}/similar?language=en-US&page=1`,
    );
    res.status(200).json({ success: true, similar: data.results });
  } catch (error) {
    console.error("Error in similar movies controller:", error.message);
    res.status(500).json({ success: false, message: "Internal Server Error" });
  }
};

export const getTvShowsByCategory = async (req, res) => {
  const { category } = req.params;
  try {
    const data = await fetchFromTMDB(
      `https://api.themoviedb.org/3/tv/${category}?language=en-US&page=1`,
    );
    res.status(200).json({ success: true, content: data.results });
  } catch (error) {
    if (error.message.includes("404")) {
      return res
        .status(404)
        .json({ success: false, message: "Movies not found" });
    }
    console.error("Error in movies by category controller:", error.message);
    res.status(500).json({ success: false, message: "Internal Server Error" });
  }
};
