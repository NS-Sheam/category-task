import express from "express";
import cors from "cors";
import router from "./app/routes";

const app = express();

app.use(express.json());
app.use(cors());

app.use("/api/v1", router);

app.get("/", (req, res) => {
  res.status(200).json({
    success: true,
    message: "Welcome to API",
  });
});

export default app;
