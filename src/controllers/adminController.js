const User = require("../models/User");
const Transaction = require("../models/Transaction");

exports.overview = async (req, res) => {
  try {
    const users = await User.countDocuments();
    const transactions = await Transaction.countDocuments();

    res.json({
      totalUsers: users,
      totalTransactions: transactions,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};