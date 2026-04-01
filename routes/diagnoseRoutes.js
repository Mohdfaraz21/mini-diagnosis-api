const express = require("express");
const router = express.Router();
const { diagnose } = require("../controllers/diagnoseController");

router.post("/diagnose", diagnose);

module.exports = router;