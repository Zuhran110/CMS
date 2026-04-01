import multer from "multer";

// Store files in memory (as Buffer) so we can stream them to Cloudinary manually
export const upload = multer({ storage: multer.memoryStorage() });
