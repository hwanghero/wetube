import express from "express";
import routes from "../routes";
import { userDetail, editProfile, changePassword } from "../Controller/userController";
import { onlyUser } from "../middlewares";

const userRouter = express.Router();

userRouter.get(routes.editProfile, onlyUser, editProfile);
userRouter.get(routes.changePassword, onlyUser, changePassword);
userRouter.get(routes.userDetail(), userDetail);

export default userRouter;