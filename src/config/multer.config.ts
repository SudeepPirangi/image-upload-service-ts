import multer from "multer";

export const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./uploads");
  },
  // filename: function (req: any, file: any, cb: any) {
  //   cb(null, file.originalname);
  // },
});

export const fileFilter = (req: any, file: any, cb: any) => {
  if (file.mimetype === "image/jpg" || file.mimetype === "image/jpeg" || file.mimetype === "image/png") {
    cb(null, true);
  } else {
    cb(new Error("Image uploaded is not of type jpg/jpeg or png"), false);
  }
};
