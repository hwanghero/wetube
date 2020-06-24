import multer from "multer";
import routes from "./routes";

const multerVideo = multer({ dest: "uploads/videos/" });

export const localsMiddleware = (req, res, next) => {
    res.locals.siteName = 'WeTube';
    res.locals.routes = routes;
    res.locals.user = req.user || {};
    next();
};

// 요놈요거 input type file 인거 name으로 가져오는놈입니다
export const uploadVideo = multerVideo.single('videoFile'); 