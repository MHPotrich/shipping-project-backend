import express from "express";
import ShippingController from "../controller/shipping.js";

const router = express.Router();

router.route('/')
    .get(ShippingController.getAllShippings)
    .post(ShippingController.createShipping);

router.route('/:code')
    .get(ShippingController.getShipping)
    .put(ShippingController.updateShipping)
    .delete(ShippingController.deleteShipping);

export default router;