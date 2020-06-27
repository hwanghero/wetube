import express from "express";
import routes from "../routes";
import {
    getUpload,
    postUpload,
    videoDetail,
    getEditVideo,
    postEditVideo,
    deleteVideo
} from "../controller/videoController";
import { uploadVideo, onlyUser } from "../middlewares";

const videoRouter = express.Router();

// Upload
videoRouter.get(routes.upload, onlyUser, getUpload);
videoRouter.post(routes.upload, onlyUser, uploadVideo, postUpload);

// Detail
videoRouter.get(routes.videoDetail(), videoDetail);

// Edit
videoRouter.get(routes.editVideo(), onlyUser, getEditVideo);
videoRouter.post(routes.editVideo(), onlyUser, postEditVideo);

// Delete
videoRouter.get(routes.deleteVideo(), onlyUser, deleteVideo);

export default videoRouter;