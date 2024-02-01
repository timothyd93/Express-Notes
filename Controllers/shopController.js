exports.homePage = (req, res) => {
  const stores = ["Dunkin", "Timmy Ho's", "Starbucks"];
  try {
    res.json(stores);
  } catch (error) {
    console.log(error);
  }
};

exports.middlewareSampple = (req, res, next) => {
  req.name = "TEST"; //this runs before the response is sent to the user
  next(); //cues the next step of the response
};

exports.authMiddleware = (req, res, next) => {
  //if the request has a user proceed
  if (req.body.user) {
    next();
  } else {
    res.json("You must be signed in");
  }
};
