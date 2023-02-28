const express = require("express");
const {
    getAllProducts,
    createProduct,
    updateProduct,
    deleteProduct,
    getProductDetails,
    createProductReview,
    getProductReviews,
    deleteReview,
    getAdminProducts,
} = require("../controllers/productController");

const router = express.Router();

router.route("/products").get(getAllProducts);

router.route("/product/create").post(createProduct);

router.route("/product/delete/:id").delete(deleteProduct);

router.route("/product/:id").get(getProductDetails);

module.exports = router;
