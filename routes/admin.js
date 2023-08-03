const express = require("express");
const router = express.Router();
const adminController = require("../controller/adminController");
const { uploadSingle, uploadMultiple } = require("../middleware/multer");

router.get("/dashboard", adminController.viewDashboard);

router.get("/category", adminController.viewCategory);
router.post("/category", adminController.addCategory);
router.put("/category", adminController.editCategory);
router.delete("/category/:id", adminController.deleteCategory);

router.get("/bank", adminController.viewBank);
router.post("/bank", uploadSingle, adminController.addBank);
router.put("/bank", uploadSingle, adminController.editBank);
router.delete("/bank/:id", adminController.deleteBank);

router.get("/item", adminController.viewItem);
router.post("/item", uploadMultiple, adminController.addItem);
router.delete("/item/:id", adminController.deleteBank);
router.get("/item/show-image/:id", adminController.showImageItem);

router.get("/booking", adminController.viewBooking);

module.exports = router;
