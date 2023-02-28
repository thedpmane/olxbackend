const Product = require("../models/productModel");
const ErrorHander = require("../utils/errorhander");
const catchAsyncErrors = require("../middleware/catchAsyncErrors");
const ApiFeatures = require("../utils/apifeatures");
const dotenv = require("dotenv");
dotenv.config()
// Create Product -- Admin
exports.createProduct = catchAsyncErrors(async (req, res, next) => {
    const product = await Product.create(req.body);
    res.status(201).json({
        success: true,
        product,
    });
});


exports.getAllProducts = catchAsyncErrors(async (req, res, next) => {
    const productCount = await Product.countDocuments()
    const apiFeatures = new ApiFeatures(Product.find(), req.query)
        .search()
        .filter()
        .pagination();

    const products = await apiFeatures.query;
    res.status(200).send({
        success: true,
        products,
        productCount
    });
});


// Get Product Details
exports.getProductDetails = catchAsyncErrors(async (req, res, next) => {
    const product = await Product.findById(req.params.id);

    if (!product) {
        return next(new ErrorHander("Product not found", 404));
    }

    res.status(200).json({
        success: true,
        product,
    });
});



// Delete Product

exports.deleteProduct = catchAsyncErrors(async (req, res, next) => {
    const product = await Product.findById(req.params.id);

    if (!product) {
        return next(new ErrorHander("Product not found", 404));
    }

    await Product.findByIdAndDelete(req.params.id);

    res.status(200).json({
        success: true,
        message: "Product Delete Successfully",
    });
});

