const express = require("express");
const router = express.Router();
const { sendMessage, getMessages } = require("../controllers/contactController");

// ✅ Contact Form Message Save
router.post("/", sendMessage);

// ✅ Get All Messages (For Admin)
router.get("/", getMessages);

module.exports = router;
