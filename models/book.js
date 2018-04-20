const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const bookSchema = new Schema({
  title: { type: String, required: true, unique: true },
  url: { type: String, required: true, unique: true },
  date: { type: Date, default: Date.now },
  nytid: { type: Number, required:true},

  noteRef: [
  {
    type: Schema.Types.ObjectId,
    ref: "Note"
  }
  ]
  
});

const Book = mongoose.model("Book", bookSchema);

module.exports = Book;
