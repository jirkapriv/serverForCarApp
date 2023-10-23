exports.getALLCars = (req, res) => {
  res.send("GET all cars");
};
exports.getCarByID = (req, res) => {
  res.send(`car: ${req.params.id}`);
};
exports.createCar = (req, res) => {
  res.send("CREATED CAR");
};
exports.updateCar = (req, res) => {
  res.send(`Updated car by id: ${req.params.id}`);
};
exports.patchCarByID = (req, res) => {
  res.send(`Patched car: ${req.params.id}`);
};
exports.deleteCarByID = (req, res) => {
  res.send(`Deleted car by id: ${req.params.id}`);
};
