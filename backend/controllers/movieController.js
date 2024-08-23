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

export const getMovieTrailers = async (req, res) => {
  const { id } = req.params;
  try {
    const data = await fetchFromTMDB(
      `https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`,
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

export const getMovieDetails = async (req, res) => {
  const { id } = req.params;
  try {
    const data = await fetchFromTMDB(
      `https://api.themoviedb.org/3/movie/${id}?language=en-US`,
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

export const getSimilarMovies = async (req, res) => {
  const { id } = req.params;
  try {
    const data = await fetchFromTMDB(
      `https://api.themoviedb.org/3/movie/${id}/similar?language=en-US&page=1`,
    );
    res.status(200).json({ success: true, similar: data.results });
  } catch (error) {
    console.error("Error in similar movies controller:", error.message);
    res.status(500).json({ success: false, message: "Internal Server Error" });
  }
};

export const getMoviesByCategory = async (req, res) => {
  const { category } = req.params;
  try {
    const data = await fetchFromTMDB(
      `https://api.themoviedb.org/3/movie/${category}?language=en-US&page=1`,
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
