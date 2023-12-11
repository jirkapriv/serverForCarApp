const express = require("express");
const router = express.Router();
const CarsController = require("../controllers/cars");

/**
 * Get all cars
 * URL: /cars
 * Method: GET
 */

router.get("/", CarsController.getALLCars);

/**
 * Get car by id
 * URL: /cars/:id
 * Method: GET
 */

router.get("/:id", CarsController.getCarByID);

/**
 * Created car
 * URL: /cars
 * Method: POST
 */

router.post("/", CarsController.createCar);

/**
 * Update car
 * URL: /cars/:id
 * Method: PUT
 */

router.put("/:id", CarsController.updateCar);

/**
 * Patche car
 * URL: /cars/:id
 * Method: PATCH
 */

router.patch("/:id", CarsController.patchCar);

/**
 * Deleted car
 * URL: /cars/:id
 * Method: DELETE
 */

router.delete("/:id", CarsController.deleteCarByID);

module.exports = router;