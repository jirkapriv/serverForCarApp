const express = require("express");
const router = express.Router();
const PhonesController = require("../controllers/phones");

/**
 * Get all phones
 * URL: /phones
 * Method: GET
 */

router.get("/", PhonesController.getALLPhones);

/**
 * Get phone by id
 * URL: /phones/:id
 * Method: GET
 */

router.get("/:id", PhonesController.getPhoneByID);

/**
 * Create phone
 * URL: /phones
 * Method: POST
 */

router.post("/", PhonesController.createPhone);

/**
 * Update phone
 * URL: /phones/:id
 * Method: PUT
 */

router.put("/:id", PhonesController.updatePhone);

/**
 * Patche phone
 * URL: /phones/:id
 * Method: PATCH
 */

router.patch("/:id", PhonesController.patchPhoneByID);

/**
 * Delete phone
 * URL: /phones/:id
 * Method: DELETE
 */

router.delete("/:id",  PhonesController.deletePhoneByID);

module.exports = router;
