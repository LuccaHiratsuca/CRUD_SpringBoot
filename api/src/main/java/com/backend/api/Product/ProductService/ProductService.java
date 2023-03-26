package com.backend.api.Product.ProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.backend.api.Product.ProductModel.ProductModel;
import com.backend.api.Product.ProductRepository.ProductRepository;
import com.backend.api.Product.ProductModel.FeedbackProductModel;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;

@Service
public class ProductService {

    @Autowired
    private ProductRepository productRepository;

    @Autowired
    private FeedbackProductModel feedbackProduct;

    // List all products
    public Iterable<ProductModel> listProducts() {
        return productRepository.findAll();
    }

    // Create a product
    public ResponseEntity<?> createProduct(ProductModel product){
        if (product.getName().equals("")){
            feedbackProduct.setMessage("The name of the product is required");
            return new ResponseEntity<FeedbackProductModel>(feedbackProduct, HttpStatus.BAD_REQUEST);
        } else if (product.getDescription().equals("")){
            feedbackProduct.setMessage("The description of the product is required");
            return new ResponseEntity<FeedbackProductModel>(feedbackProduct, HttpStatus.BAD_REQUEST);
        } else {
            productRepository.save(product);
            feedbackProduct.setMessage("Product created successfully");
            return new ResponseEntity<FeedbackProductModel>(feedbackProduct, HttpStatus.CREATED);
        }
    }
}
