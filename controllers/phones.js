exports.getALLPhones = (req, res) => {
  res.send("GET all phones");
};
exports.getPhoneByID = (req, res) => {
  res.send(`phone: ${req.params.id}`);
};
exports.createPhone = (req, res) => {
  res.send("CREATED PHONE");
};
exports.updatePhone = (req, res) => {
  res.send(`Updated phone by id: ${req.params.id}`);
};
exports.patchPhoneByID = (req, res) => {
  res.send(`Patched phone: ${req.params.id}`);
};
exports.deletePhoneByID = (req, res) => {
  res.send(`Deleted phone by id: ${req.params.id}`);
};
