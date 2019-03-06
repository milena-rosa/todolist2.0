var mongoose = require("mongoose");

mongoose.set("debug", true);
mongoose.connect("mongodb://meggie:meggie5@ds139243.mlab.com:39243/todo_list", { useNewUrlParser: true });

mongoose.Promise = Promise;

module.exports.Todo = require("./todo");