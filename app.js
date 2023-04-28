const express = require("express");
const mongoose = require("mongoose");
const methodOveride = require("method-override");
const Task = require('./models/tasks');
const app = express();
const router = require('./Router/tasks');

app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));
app.use(methodOveride("_method", { methods: ["POST", "GET"] }));
mongoose.connect("mongodb://127.0.0.1:27017/ToDo", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.use('/' , router);
// insert link
// http://localhost:3001/create/Hi

// app.post("/create", );

// find or show
// app.get("/", );

// Delete
// app.delete("/delete/:id", );

// Update

// app.get("/update/:id",);

// app.put('/update/:id',);
app.listen(3001, () => console.log("express Started"));

//

// app.get("/create/:title", (req, res) => {
//   // insert
//   const firstTask = new Task({ title: req.params.title });
//   firstTask.save().then(() => console.log("new recode inserted"));
// });

// // Delete
// app.get("/delete/:id", (req, res) => {
//   Task.deleteOne({ _id: req.params.id }, (error) => {
//     if (error) {
//       console.log(`there was an error ${error}`);
//     } else {
//       console.log("One Task is Deleted");
//     }
//   });
// });

// // Update

// app.get("/update/:id/:title", (req, res) => {
//   Task.updateOne(
//     { _id: req.params.id },
//     { title: req.params.title },
//     (error) => {
//       if (error) {
//         console.log(`there was an error ${error}`);
//       } else {
//         console.log('Task IS Updated');
//       }
//     }
//   );
// });
