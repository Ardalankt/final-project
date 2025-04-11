const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const app = express();

// ✅ Middleware: Enable CORS *before* any routes
app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);

// ✅ Middleware: Parse JSON bodies
app.use(express.json());

// ✅ Routes
app.get("/test", (req, res) => {
  res.send("✅ Test route is working!");
});

app.use("/api/auth", require("./routes/auth"));

// ✅ Health check
app.get("/", (req, res) => res.send("API is live"));

// ✅ DB Connection
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("✅ MongoDB connected"))
  .catch((err) => console.error("❌ MongoDB error:", err));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () =>
  console.log(`🚀 Server running at http://localhost:${PORT}`)
);
