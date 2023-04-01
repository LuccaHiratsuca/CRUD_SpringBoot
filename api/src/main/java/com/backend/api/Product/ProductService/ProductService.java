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

    // Create a product or update a product
    public ResponseEntity<?> createUpdate(ProductModel product){
        if (product.getName().equals("")){
            feedbackProduct.setMessage("The name of the product is required");
            return new ResponseEntity<FeedbackProductModel>(feedbackProduct, HttpStatus.BAD_REQUEST);
        } else if (product.getDescription().equals("")){
            feedbackProduct.setMessage("The description of the product is required");
            return new ResponseEntity<FeedbackProductModel>(feedbackProduct, HttpStatus.BAD_REQUEST);
        } else {
            if (product.getId() == null){
                productRepository.save(product);
                feedbackProduct.setMessage("Product created successfully");
                return ResponseEntity.status(HttpStatus.CREATED).body(new Object[]{product, feedbackProduct});
            } else {
                productRepository.save(product);
                feedbackProduct.setMessage("Product updated successfully");
                return ResponseEntity.status(HttpStatus.OK).body(new Object[]{product, feedbackProduct});
            }
        }
    }

    // Remove a product
    public ResponseEntity<FeedbackProductModel> removeProduct(Long id){
        if (productRepository.findById(id).isPresent()){
            productRepository.deleteById(id);
            feedbackProduct.setMessage("Product removed successfully");
            return ResponseEntity.status(HttpStatus.OK).body(feedbackProduct);
        } else {
            feedbackProduct.setMessage("Product not found");
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(feedbackProduct);
        }
    }
}
