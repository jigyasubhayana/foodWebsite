let planModel = require("../model/planModel");
function getTestPage(req, res) {
  res.render("test.pug", {
    title: "Test Page",
  });
}
async function getPlanListingPage(req, res) {
  const plans = await planModel.find();
  const user = req.user;
  res.render("planListing.pug", {
    title: "Plans page",
    plans: plans,user
  });
}
async function getHomePage(req, res) {
  const plans = await planModel.find();
  const user = req.user;
  res.render("home.pug", {
    title: "Home Page",
    plans: plans,
    page: "home",
    user,
  });
}
async function getLoginPage(req, res) {
  const user = req.user;
  // const plans = await planModel.find();
  res.render("login.pug", {
    title: "Login Page",
    user,
  });
}
async function getSignupPage(req, res) {
  // const plans = await planModel.find();
  res.render("signup.pug", {
    title: "Signup Page",
  });
}
async function getResetPasswordPage(req, res) {
  // const plans = await planModel.find();
  const token = req.params.token;
  res.render("resetPassword.pug", { token });
}
async function getForgetPasswordPage(req, res) {
  // const plans = await planModel.find();
  res.render("forgetPassword.pug", {
    title: "forget password page",
  });
}
async function getProfilePage(req, res) {
  const user = req.user;
  res.render("profilePage.pug", {
    title: "Profile Page",
    user,
  });
}
async function getManagePlansPage(req, res) {
  const user = req.user;
  res.render("managePlans.pug", {
    title: "Manage Plans Page",
    user,
  });
}

async function getCreatePlansPage(req, res) {
  console.log("inside create page");
  const user = req.user;
  res.render("createPlans.pug", {
    title: "Create Plan Page",
    user,
  });
}

async function getSomethingWentWrong(req, res) {
    res.render("somethingWentWrong");
  }

module.exports.getTestPage = getTestPage;
module.exports.getPlanListingPage = getPlanListingPage;
module.exports.getHomePage = getHomePage;
module.exports.getLoginPage = getLoginPage;
module.exports.getSignupPage = getSignupPage;
module.exports.getResetPasswordPage = getResetPasswordPage;
module.exports.getForgetPasswordPage = getForgetPasswordPage;
module.exports.getProfilePage = getProfilePage;
module.exports.getManagePlansPage = getManagePlansPage;
module.exports.getCreatePlansPage = getCreatePlansPage;
module.exports.getSomethingWentWrong = getSomethingWentWrong;
