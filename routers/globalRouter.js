import express from "express";
import routes from "../routes";
import { home, search } from "../controller/videoController";
import { postJoin, getJoin, login, logout } from "../Controller/userController";

const globalRouter = express.Router();

globalRouter.get(routes.join, getJoin);
globalRouter.post(routes.join, postJoin);
globalRouter.get(routes.home, home);
globalRouter.get(routes.login, login);
globalRouter.get(routes.logout, logout);

// 변수 형식이니까 const 변수이름 = 매개변수 => 내용
// const test = (req, res) => res.send("test");
globalRouter.get(routes.search, search);

export default globalRouter;