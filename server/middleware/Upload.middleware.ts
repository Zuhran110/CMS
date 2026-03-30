import multer from "multer";
import path from "node:path";
import fs from "node:fs";

// Build the path to the uploads folder (next to this file, one level up)
const UPLOAD_DIR = path.join(import.meta.dirname, "../uploads");

// Create the folder if it doesn't exist
if (!fs.existsSync(UPLOAD_DIR)) {
  fs.mkdirSync(UPLOAD_DIR, { recursive: true });
}

// Tell multer where to save files and what to name them
const storage = multer.diskStorage({
  destination: (_req, _file, cb) => cb(null, UPLOAD_DIR),
  filename: (_req, file, cb) => {
    // Use timestamp + random number to make filenames unique
    const unique = `${Date.now()}-${Math.round(Math.random() * 1e9)}`;
    cb(null, `${unique}${path.extname(file.originalname)}`);
  },
});

export const upload = multer({ storage });
