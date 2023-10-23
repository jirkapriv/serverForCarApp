exports.getALLAnimals = (req, res) => {
  res.send("GET all Animal");
};
exports.getAnimalByID = (req, res) => {
  res.send(`Animal: ${req.params.id}`);
};
exports.createAnimal = (req, res) => {
  res.send("CREATED Animal");
};
exports.updateAnimal = (req, res) => {
  res.send(`Updated Animal by id: ${req.params.id}`);
};
exports.patchAnimalByID = (req, res) => {
  res.send(`Patched Animal: ${req.params.id}`);
};
exports.deleteAnimalByID = (req, res) => {
  res.send(`Deleted Animal by id: ${req.params.id}`);
};
