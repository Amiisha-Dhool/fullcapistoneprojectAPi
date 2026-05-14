const express = require("express");
const multer = require("multer");
const cloudinary = require("../config/cloudinary");

const { CloudinaryStorage } = require("multer-storage-cloudinary");

const protect = require("../middlewares/authMiddleware");

const {
  uploadProfile,
} = require("../controllers/uploadController");

const router = express.Router();

const storage = new CloudinaryStorage({
  cloudinary,
  params: {
    folder: "finance-profiles",
  },
});

const upload = multer({ storage });

router.post(
  "/profile-picture",
  protect,
  upload.single("image"),
  uploadProfile
);

module.exports = router;