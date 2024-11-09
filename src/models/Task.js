import mongoose from 'mongoose';
const { Schema } = mongoose;

const Task = new Schema({
  title: {
    type: String,
    required: [true, 'タイトルが未入力です'],
    maxlength: [20, 'タスクは20文字以内にしてください'],
  },
  completed: {
    type: Boolean,
    default: false,
  },
});

module.exports = Task;
