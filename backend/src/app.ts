import express from "express";
import cors from "cors";

const app = express();

app.use(express.json());
app.use(cors());

// app.use("/api/v1", router);

app.get("/", (req, res) => {
  res.status(200).json({
    success: true,
    message: "Welcome to Reservator API",
  });
});

export default app;
