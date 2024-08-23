import express from "express";
import {
  getSimilarTvShows,
  getTrendingTvShow,
  getTvShowCredits,
  getTvShowDetails,
  getTvShowsByCategory,
  getTvShowTrailers,
} from "../controllers/tvShowController.js";
const router = express.Router();
router.get("/trending", getTrendingTvShow);
router.get("/:id/trailers", getTvShowTrailers);
router.get("/:id/details", getTvShowDetails);
router.get("/:id/credits", getTvShowCredits);
router.get("/:id/similar", getSimilarTvShows);
router.get("/:category", getTvShowsByCategory);
export default router;
