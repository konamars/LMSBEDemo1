"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const healthchecksRouter = (0, express_1.Router)();
healthchecksRouter.get("/", (req, res) => {
    return res.json({
        message: "success",
    });
});
exports.default = healthchecksRouter;
