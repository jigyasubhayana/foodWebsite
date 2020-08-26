// const plans=require("../model/plans.json");
const planModel = require("../model/planModel");
const factory = require("../utility/factory.js");



module.exports.getPlan = factory.getElement(planModel);
module.exports.getAllPlans = factory.getAllElement(planModel);
module.exports.updatePlan = factory.updateElement(planModel);
module.exports.removePlan = factory.deleteElement(planModel);
module.exports.createPlan = factory.createElement(planModel);
// module.exports.createPlan = async function createPlan(req, res) {
//   //  json
//   // console.log("Actual function ran");
//   const recievedPlan = req.body;

//   try {
//     let createdPlan = await planModel.create(recievedPlan);
//     // send success response to client
//     res.status(201).json({
//       status: "plan created",
//       data: createdPlan,
//     });
//   } catch (err) {
//     res.status(501).json({
//       err,
//       status: "Internal server error",
//     });
//   }

//   plan.id = plans.length + 1;
//   plans.push(plan);
//   fs.writeFileSync("./data/plans.json", JSON.stringify(plans));
//    db
//   promise
//   planModel
//     .create(recievedPlan)
//     .then(function (createdPlan) {
//       console.log(createdPlan);
//       res.status(201).json({
//         status: "plan created",
//         data: plan,
//       });
//     })
//     .catch(function (err) {
//       console.log(err);
//       res.status(501).json({
//         status: "Server error",
//       });
//     });
// };

// // homework
// module.exports.getAllPlans = async function getAllplans(req, res) {
//   try {
//     // console.log(req.query);
//     // sort ,select,limit ,page
//     // 10k ,10k 
//     // // let myQuery = req.query;
//     // let myQuery = { ...req.query };
//     // // let myQuery={}
//     // // for (let key in req.query) {
//     // //   myQuery[key] = req.query[key];
//     // // }
//     // // for loop 
//     // // short hand
//     // console.log("```````````````````````````````````````````");
//     // let toExcludeFields = ["sort", "select", "limit", "page"]
//     // for (let i = 0; i < toExcludeFields.length; i++) {
//     //   delete myQuery[toExcludeFields[i]];
//     // }
//     // // console.log(req.query.sort);
//     // // find => condition 
//     // let AllPlansPromise = planModel.find(myQuery)
//     // // "ratingAverage -price"
//     // if (req.query.sort) {
//     //   let sortString = req.query.sort.split("%").join(" ");
//     //   console.log(sortString)
//     //   AllPlansPromise = AllPlansPromise.sort(sortString);
//     // }
//     // // select("name%duration")
//     // if (req.query.select) {
//     //   let selectString = req.query.select.split("%").join(" ");
//     //   AllPlansPromise = AllPlansPromise.select(selectString);
//     // }
//     // // pagination
//     // // limit skip 
//     // // page number 
//     // let page = Number(req.query.page) || 1;
//     // let limit = Number(req.query.limit) || 4;
//     // const toSkip = limit * (page - 1);
//     // // [10,]
//     // AllPromise = AllPlansPromise.skip(toSkip).limit(limit);
//     let willGetAllPlansPromise = new QueryHelper(planModel.find(), req.query);
//     // pagePlans = filteredPlans.slice(toSkip, toSkip + limit);
//     let filteredPlans =  willGetAllPlansPromise.filter().sort().select().paginate();
//    let finalans=await filteredPlans.query;
//     res.status(200).json({
//       status: "all plans recieved",
//       data: finalans,
//     });
//   } catch (err) {
//   }
// };
// module.exports.getPlan = async function getPlan(req, res) {
//   try {
//     // recieve id through params
//     const { id } = req.params;
//     const plan = await planModel.findById(id);
//     res.json({
//       status: "successfull",
//       data: plan,
//     });
//   } catch (err) {
//     res.status(404).json({
//       status: "Plan Not found",
//       err,
//     });
//   }
// };
// module.exports.updatePlan = async function updatePlan(req, res) {
//   //  identifier => plan
//   // const originalPlan = plans[id - 1];
//   //fields to be updated in ur plan
//   // local
//   try {
//     const id = req.params.id;
//     const toupdateData = req.body;
//     // mdb=> express server
//     const originalPlan = await planModel.findById(id);
//     const keys = [];
//     for (let key in toupdateData) {
//       keys.push(key);
//     }

//     // express server => modify
//     for (let i = 0; i < keys.length; i++) {
//       originalPlan[keys[i]] = toupdateData[keys[i]];
//     }
//     // express server=> modified=> mdb
//     const updatedPlan = await originalPlan.save();
//     // fs.writeFileSync("./data/plans.json", JSON.stringify(plans));
//     // db********************************************************
//     // update DB update =>old plan return
//     res.status(200).json({
//       status: "update request recieved",
//       plan: updatedPlan,
//     });
//   } catch (err) {
//     console.log(err);
//     res.status(501).json({
//       status: "Plan could not be updated",
//       err,
//     });
//   }
// };
// // homework
// module.exports.deletePlan = function deletePlan(req, res) {
//   const { id } = req.params;
//   const plan = plans.splice(id - 1, 1);
//   fs.writeFileSync("./data/plans.json", JSON.stringify(plans));
//   res.status(200).json({
//     status: "Plan Deleted",
//     plan: plan,
//   });
// };
// isauthorized









// -------------------- OLD CODE ---------------------------------

// const planModel = require("../model/planModel");

// // async function getAllPlans(req, res) {
// //   try {
// //     const plans = await planModel.find();
// //     res.status(200).json({
// //       status: "successfull",
// //       plans
// //     })
// //   } catch (err) {
// //     res.status(200).json({
// //       err
// //     })
// //   }

// // }

// // async function createPlan(req, res) {
// //   // data
// //   try {
// //     const plan = await planModel.create(req.body);
// //     console.log(plan);
// //     res.status(201).json({ status: "New Plan Created", plan });
// //   }
// //   catch (err) {
// //     console.log(err);
// //     res.status(400).json({ err });
// //   }
// // }
// // async function getPlan(req, res) {
// //   try {
// //     const { planId } = req.params;
// //     const plan = await planModel.findById(planId);
// //     res.status(200).json({
// //       status: `result for ${planId}`,
// //       plan,
// //     });
// //   } catch (err) {
// //     res.json({
// //       err
// //     })
// //   }
// // }

// // async function updatePlan(req, res) {
// //   try {
// //     const planId = req.params.planId;
// //     const tobeUpdatedData = req.body;
// //     const oldPlan = await planModel.findById(planId);
// //     const keys = Object.keys(tobeUpdatedData);
// //     for (key in keys) {
// //       oldPlan[key] = tobeUpdatedData[key];
// //     }
// //     await oldPlan.save();
// //     res.status(200).json({
// //       status: "PlanUpdated"
// //     });
// //   } catch (err) {

// //   }


// // }

// // async function removePlan(req, res) {
// //   try {
// //     const { planId } = req.params;
// //     const deletedPlan = await planModel.findByIdAndDelete(planId);
// //     res.json({
// //       data: deletedPlan,
// //       status: "successfull"
// //     })
// //   } catch (err) {
// //     res.status(400).json({ err })
// //   }

// // }

// module.exports.getAllPlans = getAllPlans;
// module.exports.getPlan = getPlan;
// module.exports.createPlan = createPlan;
// module.exports.updatePlan = updatePlan;
// module.exports.removePlan = removePlan;