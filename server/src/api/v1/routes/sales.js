const express = require("express");
const router = express.Router();

const { getAllSales, createSales, updateSales } = require("../controllers/sales");

router.get("/sales", getAllSales);

router.post("/sales", createSales);

router.put("/sales", updateSales);

module.exports = router;
