const Diagnosis = require("../models/Diagnosis");

const getHistory = async (req, res) => {
  try {
    const history = await Diagnosis.find().sort({ createdAt: -1 });
    res.status(200).json(history);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = { getHistory };