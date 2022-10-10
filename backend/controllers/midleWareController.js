const jwt = require("jsonwebtoken");
const midleWareController = {
  verifyToken: async (req, res, next) => {
    const token = req.headers.token;
    if (token) {
      const accessToken = token.split(" ")[1];
      jwt.verify(accessToken, process.env.JWT_ACCESSKEY, (error, user) => {
        if (error) {
          return res.status(403).json("token is not valid");
        }
        req.user = user;
        next();
      });
    } else {
      res.status(401).json("You are not authenticated");
    }
  },
  verifyTokenandAdminAth: async (req, res, next) => {
    midleWareController.verifyToken(req, res, () => {
      if (req.user.id === req.params.id || req.user.admin) {
        next();
      } else {
        res.status(403).json("you are not allow to delete");
      }
    });
  },
};
module.exports = midleWareController;
