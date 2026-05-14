const express = require("express");
const router = express.Router();
const protect = require("../middlewares/authMiddleware");
const {
  createTransaction,
  getTransactions,
  updateTransaction,
  deleteTransaction,
  monthlySummary,
} = require("../controllers/transactionController");

router.post("/", protect, createTransaction);
router.get("/", protect, getTransactions);
router.put("/:id", protect, updateTransaction);
router.delete("/:id", protect, deleteTransaction);
router.get("/monthly-summary", protect, monthlySummary);

module.exports = router;