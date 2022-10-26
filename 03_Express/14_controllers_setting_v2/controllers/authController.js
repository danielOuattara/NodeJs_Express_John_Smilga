exports.login = (req, res) => {
  const { name } = req.body;
  if (name) {
    return res.status(200).send(`<h2>Welcome ${name}</h2>`);
  }
  res.status(401).send("Please Provide Credentials");
};
