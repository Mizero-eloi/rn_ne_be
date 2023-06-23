import express from "express";

import {
  getTokensByMeterNumber,
  purchaseAToken,
} from "../controllers/purchasedToken.controller.js";
import { validatePurchasedToken } from "../validators/purchasedToken.validator.js";
const router = express.Router();

router.post("/buy", validatePurchasedToken, purchaseAToken);
router.get("/:meter_number", getTokensByMeterNumber);

export default router;
