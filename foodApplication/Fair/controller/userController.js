
const userModel = require("../model/userModel");
const sharp = require("sharp");
const fs = require("fs");
const factory = require("../utility/factory");
// module.exports.createUser = function createUser(req, res) {
//   console.log("Actual function ran");
//   const user = req.body;
//   user.id = plans.length + 1;
//   users.push(user);
//   fs.writeFileSync("./data/users.json", JSON.stringify(users));
//   res.status(201).json({
//     status: "user created",
//     data: user,
//   });
// };

// module.exports.getAllUser = async function getAllUser(req, res) {
//   // findone => 
//   // find => city 
//   // find=> model => document
//   const users = await userModel.find().select("+password");
//   res.status(200).json({
//     status: "all users recieved",
//     data: users,
//   });
// };

// module.exports.getUser = async function getUser(req, res) {
//   const id = req.params.id || req.id;
//   // console.log
//   // console.log(id)
//   const user = await userModel.findById(id)
//   res.json({
//     status: "successfull",
//     user
//   });
// };

// module.exports.deleteUser = function deleteUser(req, res) {
//   const { id } = req.params;
//   const user = users.splice(id - 1, 1);
//   fs.writeFileSync("./data/plans.json", JSON.stringify(users));
//   res.status(200).json({
//     status: "user Deleted",
//     data: user,
//   });
// };
module.exports.updateProfileImage = async function updateProfileImage(req, res) {
  // update anything
  //  form data 
  try {
    // console.log(req.file);
    let serverPath = `public/img/users/user-${Date.now()}.jpeg`
    // process
    console.log("I was here");
    await sharp(req.file.path)
      .resize(500, 500)
      .toFormat("jpeg")
      .jpeg({ quality: 90 })
      .toFile(serverPath);
    serverPath = serverPath.split("/").slice(1).join("/");

    let user = await userModel.findById(req.id);

    user.profileImage = serverPath;

    await user.save({ validateBeforeSave: false });
    // console.log("I was here");
    res.status(200).json({
      status: "image uploaded"
    })
  } catch (err) {
    console.log(err);
    console.log(err.message);
  }
}
module.exports.getUser = factory.getElement(userModel);
module.exports.getAllUsers = factory.getAllElement(userModel);
module.exports.updateUser = factory.updateElement(userModel);
module.exports.deleteUser = factory.deleteElement(userModel);
module.exports.createUser = factory.createElement(userModel);
module.exports.updateProfileHandler=updateProfileHandler;




// -----------------------OLD CODE ---------------------------------------------------


// const userModel = require("../model/userModel");
// const fs = require("fs");
// const sharp = require("sharp");
async function getMe(req, res) {
  console.log("i was here");
  try {
    const id = req.id;
    // console.log(id);
    const user = await userModel.findById(id);
    res.status(200).json({
      data: user,
      status: "successfull"
    })
  }
  catch (err) {
    res.status(400).json({
      err
    })
  }
}

// async function createUser(req, res) {
//   // data
//   try {
//     const user = userModel.create(req.body);
//     res.status(201).json({
//       status: "successfull",
//       data: user
//     })
//   } catch (err) {
//     res.status(500).json({
//       err
//     })
//   }
// }
// async function getAllUsers(req, res) {
//   try {
//     const users = await userModel.find();
//     res.status(200).json({
//       data: users,
//       status: "successfull"
//     })
//   } catch (err) {
//     console.log(err);
//     res.status(500).json({
//       err
//     })
//   }
// }
async function updateProfileHandler(req, res) {
  try {
    const id = req.id;
    const user = await userModel.findById(id);
    // process image
    let toBesavedImagePath = `public/img/users/user-${Date.now()}.jpeg`;
    await sharp(req.file.path).toFormat("jpeg").jpeg({ quality: 60 }).toFile(toBesavedImagePath);
    // public remove 
    let iDBLink = toBesavedImagePath.split("/").slice(1).join("/")
    // user update 
    user.profileImage = iDBLink;
    await user.save({
      validateBeforeSave: false
    })
    //  user profile Image link update
    // process update public folder 
    //db link update 
    // console.log(user);
    res.status(200).json({
      success: "Image uploaded"
    })
    // extra work 
    fs.promises.unlink(req.file.path);
  } catch (err) {
    console.log(err);
    res.status(200).json({
      status: "something went wrong"
    })
  }
}
// module.exports.getAllUsers = getAllUsers;
// // module.exports.getUser=getUser;
// module.exports.createUser = createUser;
// // module.exports.updateUser=updateUser;
// // module.exports.removeUser=removeUser;

// module.exports.updateProfileHandler=updateProfileHandler;
module.exports.getMe = getMe;
