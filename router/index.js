const userRouter = require("express").Router();
const HomeController = require("../controllers/homeController");
const UserController = require("../controllers/userController");
const authentication = require("../middleware/auth");

userRouter.get("/", HomeController.home);
userRouter.post("/register", UserController.register);
userRouter.post("/login", UserController.login);

// middelware
userRouter.use(authentication);
userRouter.get("/users", UserController.findUsers);

module.exports = userRouter;
