const authorize = (req, res, next) => {
  const { user } = req.query;
  if (user === "daniel") {
    console.log("User Authorized !");
    req.user = { name: "daniel", secret: "1234", id: "ident" };
    next();
  } else {
    console.log();
    return res.status(401).send("USer Not Authorized !");
  }
};

module.exports = authorize;
