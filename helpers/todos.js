var db = require("../models");


// INDEX ROUTE
exports.getTodos =  function(req, res){
    db.Todo.find()
    .then(function(todos){
        res.json(todos);
    })
    .catch(function(err){
        res.send(err);
    });
};


// CREATE ROUTE
exports.createTodo = function(req, res){
    db.Todo.create(req.body)
    .then(function(newTodo){
        res.status(201).json(newTodo);
    })
    .catch(function(err){
        res.send(err);
    });
};


// SHOW ROUTE
exports.getTodo = function(req, res){
    db.Todo.findById(req.params.todoId)
    .then(function(foundTodo){
        res.json(foundTodo);
    })
    .catch(function(err){
        res.send(err);
    });
};


// UPDATE ROUTE
exports.updateTodo = function(req, res){
    // {new: true} -> respond with updated todo
    db.Todo.findOneAndUpdate({_id: req.params.todoId}, req.body, {new: true})
    .then(function(updatedTodo){
        res.json(updatedTodo);
    })
    .catch(function(err){
        res.send(err);
    });
};


// DESTROY ROUTE
exports.deleteTodo = function(req, res){
    db.Todo.deleteOne({_id: req.params.todoId})
    .then(function(){
        res.json({message: "Todo deleted."});
    })
    .catch(function(err){
        res.send(err);
    });
    
};


module.exports = exports;