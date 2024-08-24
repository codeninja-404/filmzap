import { User } from "../models/userModel.js";
import { fetchFromTMDB } from "../services/tmdbService.js";
export const searchPerson = async (req, res) => {
  const { query } = req.params;
  try {
    const data = await fetchFromTMDB(
      `https://api.themoviedb.org/3/search/person?query=${query}&include_adult=false&language=en-US&page=1`,
    );
    if (data.results.length === 0) {
      return res
        .status(404)
        .json({ success: false, message: "Person not found" }); // Return 404 if no results found. 400 for bad request. 401 for unauthorized, 403 for forbidden, and 404 for not found. 500 for internal server error. 200 for success. 201 for created, 202 for accepted, 204 for no content, and 304 for not modified. 206 for partial content. 410 for gone, 412 for precondition failed, 415 for unsupported media type, 429 for too many requests, and 501 for not implemented. 503 for service unavailable. 504 for gateway timeout. 511 for network authentication required. 200: OK, 2
    }
    await User.findByIdAndUpdate(req.user._id, {
      $push: {
        searchHistory: {
          id: data.results[0].id,
          image: data.results[0].profile_path,
          title: data.results[0].name,
          type: "person",
          createdAt: new Date(),
        },
      },
    });
    res.status(200).json({ success: true, content: data.results });
  } catch (error) {
    console.error("Error in search person controller:", error.message);
    res.status(500).json({ success: false, message: "Internal Server Error" });
  }
};

export const searchMovie = async (req, res) => {
  const { query } = req.params;
  try {
    const data = await fetchFromTMDB(
      `https://api.themoviedb.org/3/search/movie?query=${query}&include_adult=false&language=en-US&page=1`,
    );
    if (data.results.length === 0) {
      return res
        .status(404)
        .json({ success: false, message: "Movie not found" });
    }
    await User.findByIdAndUpdate(req.user._id, {
      $push: {
        searchHistory: {
          id: data.results[0].id,
          image: data.results[0].poster_path,
          title: data.results[0].original_title,
          type: "movie",
          createdAt: new Date(),
        },
      },
    });
    res.status(200).json({ success: true, content: data.results });
  } catch (error) {
    console.error("Error in search movie controller:", error.message);
    res.status(500).json({ success: false, message: "Internal Server Error" });
  }
};

export const searchTv = async (req, res) => {
  const { query } = req.params;
  try {
    const data = await fetchFromTMDB(
      `https://api.themoviedb.org/3/search/tv?query=${query}&include_adult=false&language=en-US&page=1`,
    );
    if (data.results.length === 0) {
      return res
        .status(404)
        .json({ success: false, message: "TV Show not found" });
    }
    await User.findByIdAndUpdate(req.user._id, {
      $push: {
        searchHistory: {
          id: data.results[0].id,
          image: data.results[0].poster_path,
          title: data.results[0].original_name,
          type: "tv",
          createdAt: new Date(),
        },
      },
    });
    res.status(200).json({ success: true, content: data.results });
  } catch (error) {
    console.error("Error in search tv controller:", error.message);
    res.status(500).json({ success: false, message: "Internal Server Error" });
  }
};
