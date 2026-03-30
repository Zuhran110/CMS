import express from "express";
import AuthMiddleware from "../middleware/Auth.middleware";
import { upload } from "../middleware/Upload.middleware";
import {
  getHomeContentController,
  saveHomeContentController,
  getBuyServiceContentController,
  saveBuyServiceContentController,
} from "../controller/Content.controller";

const router = express.Router();

// All image field names the home form can upload.
// Array card images use indexed names (e.g. heroCardImg_0) so each card's
// image is unambiguously matched on the backend regardless of upload gaps.
const homeImageFields = [
  { name: "bgImage", maxCount: 1 },
  { name: "ukFlag", maxCount: 1 },
  // Hero card images (3 cards)
  { name: "heroCardImg_0", maxCount: 1 },
  { name: "heroCardImg_1", maxCount: 1 },
  { name: "heroCardImg_2", maxCount: 1 },
  // Why Outsource section images
  { name: "imgWhyOutsoutcing", maxCount: 1 },
  { name: "imgtwoWhyOutsoutcing", maxCount: 1 },
  { name: "whyOutSourceAccounting", maxCount: 1 },
  // Why Outsource card images (3 cards)
  { name: "whyCardImage_0", maxCount: 1 },
  { name: "whyCardImage_1", maxCount: 1 },
  { name: "whyCardImage_2", maxCount: 1 },
  // Service card images (6 cards)
  { name: "imgServiceCard_0", maxCount: 1 },
  { name: "imgServiceCard_1", maxCount: 1 },
  { name: "imgServiceCard_2", maxCount: 1 },
  { name: "imgServiceCard_3", maxCount: 1 },
  { name: "imgServiceCard_4", maxCount: 1 },
  { name: "imgServiceCard_5", maxCount: 1 },
  // How We Work step icons (3 steps)
  { name: "howWeWorkIcon_0", maxCount: 1 },
  { name: "howWeWorkIcon_1", maxCount: 1 },
  { name: "howWeWorkIcon_2", maxCount: 1 },
  // How We Work connector lines
  { name: "lineOne", maxCount: 1 },
  { name: "lineTwo", maxCount: 1 },
  // Testimonial card images (3 cards)
  { name: "testimonialBgImg_0", maxCount: 1 },
  { name: "testimonialBgImg_1", maxCount: 1 },
  { name: "testimonialBgImg_2", maxCount: 1 },
  { name: "testimonialPersonImg_0", maxCount: 1 },
  { name: "testimonialPersonImg_1", maxCount: 1 },
  { name: "testimonialPersonImg_2", maxCount: 1 },
  // Join Us
  { name: "joinUsBgImage", maxCount: 1 },
];

// Home content routes
router.get("/home", getHomeContentController);
router.post(
  "/home",
  AuthMiddleware,
  upload.fields(homeImageFields),
  saveHomeContentController,
);
router.put(
  "/home",
  AuthMiddleware,
  upload.fields(homeImageFields),
  saveHomeContentController,
);

// Buy service routes
router.get("/buy-service", getBuyServiceContentController);
router.post("/buy-service", AuthMiddleware, saveBuyServiceContentController);
router.put("/buy-service", AuthMiddleware, saveBuyServiceContentController);

export default router;
