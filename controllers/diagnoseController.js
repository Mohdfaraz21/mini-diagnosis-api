const Diagnosis = require("../models/Diagnosis");

const diagnose = async (req, res) => {
  try {
    const { symptoms } = req.body;

    if (!symptoms) {
      return res.status(400).json({ message: "Symptoms are required" });
    }

    const symptomList = symptoms.toLowerCase();

    let results = [];

    if (symptomList.includes("fever") && symptomList.includes("headache")) {
      results.push({ condition: "Flu", probability: "70%" });
      results.push({ condition: "Viral Infection", probability: "60%" });
    }

    if (symptomList.includes("fatigue")) {
      results.push({ condition: "Anemia", probability: "50%" });
    }

    if (results.length === 0) {
      results = [
        { condition: "Common Cold", probability: "40%" },
        { condition: "Stress", probability: "30%" },
      ];
    }

    const newDiagnosis = new Diagnosis({
      symptoms,
      results,
    });

    await newDiagnosis.save();

    res.status(200).json({
      symptoms,
      possible_conditions: results,
    });

  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = { diagnose };