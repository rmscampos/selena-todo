const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const todoSchema = new Schema({
  item: {
    type: String, 
    required: true
  },
  location: {
    type: String, 
  },
  priority: {
    type: String, 
  },
  completed: {
    type: Boolean, 
  }
},{
  timestamps: true
});

module.exports = mongoose.model('Todo', todoSchema);