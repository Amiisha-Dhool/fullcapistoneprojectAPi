const express = require("express");

const router = express.Router();

const protect = require("../middlewares/authMiddleware");

const adminOnly = require("../middlewares/adminMiddleware");

const { overview } = require("../controllers/adminController");

router.get("/overview", protect, adminOnly, overview);

module.exports = router;