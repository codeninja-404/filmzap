import { fetchFromTMDB } from "../services/tmdbService.js";
export const searchPerson = async (req, res) => {
  //https://api.themoviedb.org/3/search/person?query=b&include_adult=false&language=en-US&page=1
  const { query } = req.params;
  try {
    const data = await fetchFromTMDB(
      `https://api.themoviedb.org/3/search/person?query=${query}&include_adult=false&language=en-US&page=1`,
    );
    res.status(200).json({ success: true, content: data.results });
  } catch (error) {
    console.error("Error in search person controller:", error.message);
    res.status(500).json({ success: false, message: "Internal Server Error" });
  }
};

export const searchMovie = async (req, res) => {};
export const searchTv = async (req, res) => {};
