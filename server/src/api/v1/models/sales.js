const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const salesSchema = new Schema(
  {
    id: {
      type: Number,
      required: true,
    },
    month: {
      type: String,
      require: true,
      enum: [
        "JAN",
        "FEB",
        "MAR",
        "APR",
        "MAY",
        "JUN",
        "JUL",
        "AUG",
        "SEP",
        "OCT",
        "NOV",
        "DEC",
      ],
    },
    quantity: {
      type: Number,
      required: true,
      default: 0,
    },
    price: {
      type: Number,
      required: true,
      default: 0,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Sales", salesSchema);
