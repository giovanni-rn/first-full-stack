module.exports.hello = (req, res) => {
  res.json({ message: "salut" });
};

module.exports.multiplier = (req, res) => {
  const nombre = parseInt(req.params.nb);
  resultat = nombre * 2;
  res.json({ message: resultat });
};

module.exports.maths = (req, res) => {
  console.log(req.body);
  const first = parseInt(req.body.first);
  const second = parseInt(req.body.second);
  res.json({ message: first + second });
};
