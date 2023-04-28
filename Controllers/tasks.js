const Task = require("../models/tasks");
module.exports = {
  index: async (req, res) => {
    try {
      const tasks = await Task.find({});
      // tasks.forEach(task => console.log(task));
      res.render("todo.ejs", { todotasks: tasks });
      // res.send(tasks); // send the tasks data to the client
    } catch (error) {
      console.log(`Error: ${error}`);
      res.status(500).send("Internal server error"); // send an error response to the client
    }
  },

  crate: (req, res) => {
    // insert
    const firstTask = new Task({ title: req.body.title });
    firstTask.save().then(() => res.redirect("/"));
  },

  edit: async (req, res) => {
    try {
      const id = req.params.id;
      const tasks = await Task.find({});
      res.render("todoEdit.ejs", { todotasks: tasks, idTasks: id });
    } catch (error) {
      console.log(`Error: ${error}`);
      res.status(500).send("Internal server error"); // send an error response to the client
    }
  },

  update: async (req, res) => {
    try {
      const id = req.params.id;
      const tasks = await Task.findByIdAndUpdate(id, { title: req.body.title });
      res.redirect("/");
    } catch (error) {
      res.send(500, error);
    }
  },

  delete: async (req, res) => {
    try {
      await Task.deleteOne({ _id: req.params.id });
      res.redirect("/");
    } catch (error) {
      console.log(`Error: ${error}`);
      res.status(500).send("Internal server error"); // send an error response to the client
    }
  },
};
