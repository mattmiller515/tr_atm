import express from "express";
import { pinRoutes } from "./routes/pinRoutes";
import { balanceRoutes } from "./routes/balanceRoutes";
import { cardRoutes } from "./routes/cardRoutes";
import { errorHandler } from "./middleware/errorHandler";
import cors from "cors";

const app = express();

app.use(
  cors({
    origin: "http://localhost:5173",
  })
);

app.use(express.json());

// Routes
app.use("/api/pin", pinRoutes);
app.use("/api/balance", balanceRoutes);
app.use("/api/cards", cardRoutes);

// Global error handler
app.use(errorHandler);

export default app;
