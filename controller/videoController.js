import routes from "../routes";
import Video from "../models/Video";

export const home = async (req, res) => {
    try {
        const videos = await Video.find({}).sort({ _id: -1 });
        res.render("home", { pageTitle: "Home", videos });
    } catch (error) {
        res.render("home", { pageTitle: "Home", videos: [] });
    }
};

export const search = async (req, res) => {
    const {
        query: { term: searchingBy }
    } = req;
    let videos = [];
    try {
        videos = await Video.find({ title: { $regex: searchingBy, $options: "i" } });
    } catch (error) {
        console.log(error);
    }
    res.render("search", { pageTitle: "Search", searchingBy, videos });
};

export const videos = (req, res) => res.render("videos", { pageTitle: "Videos" });

export const getUpload = (req, res) => {
    res.render("upload", { pageTitle: "Upload" });
};

export const postUpload = async (req, res) => {
    const {
        body: { title, description },
        file: { path }
    } = req;
    // 여기서 req = name : value를 받아오니까
    // undefined가 뜬것.
    const newVideo = await Video.create({
        fileUrl: path,
        title,
        description
    });
    res.redirect(routes.videoDetail(newVideo.id));
};

export const videoDetail = async (req, res) => {
    const {
        params: { id }
    } = req;
    try {
        const video = await Video.findById(id);
        console.log(video);

        // 컨트롤러에서 video값을 넘겨줘서 가능
        res.render("videoDetail", { pageTitle: video.title, video });
    } catch (error) {
        res.render(routes.home);
    }
};

export const getEditVideo = async (req, res) => {
    const {
        params: { id }
    } = req;
    try {
        const video = await Video.findById(id);
        res.render("editVideo", { pageTitle: `Edit ${video.title}`, video });
    } catch (error) {
        res.redirect(routes.home);
        console.log(error);
    }
};

export const postEditVideo = async (req, res) => {
    const {
        params: { id },
        body: { title, description }
    } = req;
    try {
        // 이 부분을 제대로 이해해야한다.
        await Video.findByIdAndUpdate({ _id: id }, { title, description });
        res.redirect(routes.videoDetail(id));
    } catch (error) {
        console.log(error);
        res.redirect(routes.home);
    }
};

export const deleteVideo = async (req, res) => {
    const {
        params: { id }
    } = req;
    try {
        await Video.findOneAndRemove({ _id: id });
    } catch (error) {
        console.log(error);
    }
    res.redirect(routes.home);
};