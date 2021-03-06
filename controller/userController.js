import passport from "passport";
import routes from "../routes";
import User from "../models/User";

export const getJoin = (req, res) => {
    res.render("join", { pageTitle: "Join" });
};

export const postJoin = async (req, res, next) => {
    console.log(req.body);
    const {
        body: { name, email, password, password2 }
    } = req;
    if (password !== password2) {
        res.status(400);
        res.render("join", { pageTitle: "Join" });
    } else {
        // to do: register user
        // to do: log user in
        try {
            const user = await User({
                name, email
            });

            await User.register(user, password);
            next();
        } catch (error) {
            console.log(error);
        }
    }
};

export const getlogin = (req, res) => res.render("login", { pageTitle: "Login" });

export const postLogin = passport.authenticate('local', {
    failureRedirect: routes.login,
    successRedirect: routes.home
});
export const logout = (req, res) => {
    res.redirect(routes.home);
};


export const users = (req, res) => res.render("users", { pageTitle: "Users" });
export const editProfile = (req, res) => res.render("editProfile", { pageTitle: "Edit Profile" });
export const changePassword = (req, res) => res.render("changePassword", { pageTitle: "Change Password" });
export const userDetail = (req, res) => res.render("userDetail", { pageTitle: "User Detail" });