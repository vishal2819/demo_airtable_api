import express from "express";
import airtableController from "../controller/airtable.controller.js";
import { authMiddleware, adminMiddleware } from "../middlewares/auth.js";

const router = express.Router();

// Public routes (no authentication required)
router.get("/bases", airtableController.getBases);

// Protected routes (authentication required)
router.use(authMiddleware);

router.post("/comments", airtableController.createComment);
router.get("/comments", airtableController.getComments);
router.get("/comments/:recordId", airtableController.getCommentById);
router.put("/comments/:recordId", airtableController.updateComment);
router.delete("/comments/:recordId", airtableController.deleteComment);

// Admin-only routes (admin privileges required)
router.use(adminMiddleware);

// Example admin-only route
router.post("/admin/action", (req, res) => {
  res.json({ message: "Admin action performed successfully." });
});

export default router;
