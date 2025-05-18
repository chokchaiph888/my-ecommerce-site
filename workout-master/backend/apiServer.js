const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const path = require("path");

const app = express();
const PORT = 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Route สำหรับ Register และ Login
app.use("/api/register", require("./routes/register"));
app.use("/api/login", require("./routes/login"));

// Serve frontend (ถ้าจำเป็น)
app.use(express.static(path.join(__dirname, ".."))); // ทำให้สามารถเปิด index.html ได้ด้วย

app.listen(PORT, () => {
  console.log(`✅ Server running at http://localhost:${PORT}`);
});
