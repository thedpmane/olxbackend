const mongoose = require("mongoose");

const productSchema = mongoose.Schema({
    name: {
        type: String,
        required: [true, "Please Enter product Name"],
        trim: true,
    },
    description: {
        type: String,
        required: [true, "Please Enter product Description"],
    },
    category: {
        type: String,
        required: [true, "Please Enter Product Category like Clothing, Electronics, Furniture, Other"],
    },
    image: {
        type: String,
        required: [true, "Please Enter product Image url"],
    },
    location: {
        type: String,
        required: [true, "Please Enter location"],
    },
    postedAt: {
        type: Date,
        default: Date.now,
    },
    price: {
        type: Number,
        required: [true, "Please Enter product Price"],
        maxLength: [8, "Price cannot exceed 8 characters"],
    },
});

module.exports = mongoose.model("Product", productSchema);
