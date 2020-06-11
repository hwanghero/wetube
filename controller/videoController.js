import { fake_videos } from "../db";

export const home = (req, res) => {
    console.log(fake_videos);
    res.render("home", { pageTitle: "Home", fake_videos });
};

export const search = (req, res) => {
    const {
        query: { term: searchingBy }
    } = req;

    res.render("search", { pageTitle: "Search", searchingBy, fake_videos });
};

export const videos = (req, res) => res.render("videos", { pageTitle: "Videos" });
export const upload = (req, res) => res.render("upload", { pageTitle: "Upload" });
export const videoDetail = (req, res) => res.render("videoDetail", { pageTitle: "Video Detail" });
export const editVideo = (req, res) => res.render("editVideo", { pageTitle: "Edit Viedo" });
export const deleteVideo = (req, res) => res.render("deleteVideo", { pageTitle: "Delete Video" });