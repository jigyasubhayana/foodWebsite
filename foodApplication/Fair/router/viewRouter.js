const express = require("express");
const viewRouter = express.Router();
const { getTestPage, getPlanListingPage, getHomePage, getLoginPage, getSignupPage, 
    getResetPasswordPage, getProfilePage, getForgetPasswordPage, getManagePlansPage, getCreatePlansPage, getSomethingWentWrong } = require("../controller/viewController");
const {isUserLoggedIn, protectRoute, isAdmin, handleResetRequest } = require("../controller/authController");
const {getMe}=require("../controller/userController");
viewRouter.use(isUserLoggedIn);
viewRouter.get("/test", getTestPage);
viewRouter.get("/plans", getPlanListingPage);
viewRouter.get("/", getHomePage);
viewRouter.get("/login", getLoginPage);
viewRouter.get("/signup", getSignupPage);
viewRouter.get("/profilePage", protectRoute, getProfilePage);
viewRouter.get("/forgetPassword", getForgetPasswordPage);
viewRouter.get("/managePlans", isAdmin, getManagePlansPage);
viewRouter.get("/createPlans", isAdmin,  getCreatePlansPage, getMe);
viewRouter.get("/somethingWentWrong", getSomethingWentWrong);
viewRouter.get("/resetPassword/:token", handleResetRequest,getResetPasswordPage)


// viewRouter.get("/getPlan",isAdmin,getPlanPage);
// viewRouter.get("/getAllPlans",isAdmin ,getAllPlansPage);
// viewRouter.get("/updatePlan",isAdmin,getUpdatePlanPage);
// viewRouter.get("/removePlan",isAdmin,getRemovePlanPage);
module.exports = viewRouter;