package com.backend.api.Product.ProductController;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.beans.factory.annotation.Autowired;
import com.backend.api.Product.ProductService.ProductService;
import com.backend.api.Product.ProductModel.ProductModel;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.http.ResponseEntity;

@RestController
public class ProductController {

    @Autowired
    private ProductService productService;
    
    @GetMapping("/")
    public String test() {
        return "test";
    }

    // Route to list all products
    @GetMapping("/products")
    public Iterable<ProductModel> products() {
        return productService.listProducts();
    }
    
    // Route to create a product
    @PostMapping("/newProduct")
    public ResponseEntity<?> createProduct(@RequestBody ProductModel product) {
        return productService.createProduct(product);
    }
    
}
