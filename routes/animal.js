const express = require("express");
const router = express.Router();
const animalController = require("../controllers/animals")

/**
 * Get all animals
 * URL: /animals
 * Method: GET
 */

router.get("/", animalController.createAnimal);

/**
 * Get animal by id
 * URL: /animals/:id
 * Method: GET
 */

router.get("/:id", animalController.getAnimalByID);

/**
 * Created animal
 * URL: /animals
 * Method: POST
 */

router.post("/", animalController.createAnimal);

/**
 * Update animal
 * URL: /animals/:id
 * Method: PUT
 */

router.put("/:id", animalController.updateAnimal);

/**
 * Patche animal
 * URL: /animals/:id
 * Method: PATCH
 */

router.patch("/:id", animalController.patchAnimalByID);

/**
 * Deleted animal
 * URL: /animals/:id
 * Method: DELETE
 */

router.delete("/:id", animalController.deleteAnimalByID);

module.exports = router;
