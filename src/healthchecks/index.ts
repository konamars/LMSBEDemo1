import { Router } from "express";

const healthchecksRouter = Router();

healthchecksRouter.get("/", (req, res) => {
  return res.json({
    message: "success",
  });
});

export default healthchecksRouter;
