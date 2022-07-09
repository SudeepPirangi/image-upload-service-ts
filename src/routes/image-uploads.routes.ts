import express, { Request, Response } from "express";
import multer from "multer";

import { fileFilter, storage } from "../config/multer.config";

const router = express.Router();
const upload = multer({ storage, fileFilter });

router.post("/images", upload.single("image"), (req: Request, res: Response) => {
  if (req.file) {
    return res.status(200).json({
      status: "success",
      message: "Image uploaded successfully",
      image_id: req.file?.filename,
      image_name: req.file?.originalname,
      image_mimetype: req.file?.mimetype,
    });
  }
  return res.status(500).json({
    status: "failed",
    message: "Failed to upload image due to server error",
  });
});

router.get("/images/:image", (req: Request, res: Response) => {
  if (req.params.image) {
    const [image, extension] = req.params.image.split(".");
    return res.contentType(extension).download(`./uploads/${image}`);
  }
  return res.status(400).json({
    status: "failed",
    message: "Invalid/missing parameter for image, please check the request url",
  });
});

export default router;
