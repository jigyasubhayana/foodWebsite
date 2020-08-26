const express = require("express");
const app = express();
const cookieParser = require("cookie-parser");
const planRouter = require("./router/planRouter");
const userRouter = require("./router/userRouter");
const viewRouter = require("./router/viewRouter");
const bookingRouter = require("./router/bookingRouter");
const reviewRouter = require("./router/reviewRouter");


// 1 . middleware
//  app.use(funtion f1(req,res,next){
//   console.log("middleware the ran before express.json in f1"+req.body);
//   next();
// })
// ----------------------------MIDDLEWARES----------------------------------------
app.use(express.json());
app.use(cookieParser());
// static folder
app.use(express.static("public"));
// express => rendering / template engine
app.set("view engine", "pug");
// view =>directory
app.set("views", "views");

app.use("/", viewRouter);
app.use("/api/reviews", reviewRouter)
app.use("/api/bookings", bookingRouter)
app.use("/api/plans", planRouter)
app.use("/api/users", userRouter)
// app.use("/*",)

// wildcard
app.use("*", function (req, res, next) {
  // error => error send
  err= new errorExtender("page not found",404);
  // express feature => error pass for error handling middleware
  next(err);
});
app.use("*", function(err,req,res,next){
  //isKnown, logical/unknown
  err.statusCode=err.statusCode || 500
})

const port=process.env.PORT || 3000;
app.listen(port, function () {
  console.log("Server is listening at port 3000");
});
// http routes
// plans
// json parse => req.body
// json=> http message body
// 1.
//userdefined middleware
// 2.
//3.
// app.param("planId", function (req, res, next, planId) {
//   if (planId <= 0 || planId > plans.length) {
//     return res.status(404).json({
//       status: "Invalid Id",
//     });
//   }
//   next();
// });

// app.use(function logger(req, res, next) {
//   console.log("Req url: " + req.url);
//   console.log(req.body);
//   next();
// });
// app.get("/api/plans", function (req, res) {
//   res.status(200).json({
//     status: "Request Recieved",
//   });
// });
// 3.
// creation => post


// **************************************plansection**************************




// ****************************************************user section**********************************************************






