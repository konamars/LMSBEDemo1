import express from "express";
import cors from "cors";
import helmet from "helmet";
import { errorHandler } from "./middleware/error.middleware";
import { notFoundHandler } from "./middleware/not-found.middleware";
import healthchecksRouter from "./healthchecks";

const app = express();

app.use(helmet());
app.use(cors());
app.use(express.json());

app.use("/healthcheck", healthchecksRouter);

app.use(errorHandler);
app.use(notFoundHandler);

export default app;
