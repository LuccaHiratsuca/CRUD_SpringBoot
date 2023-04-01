package com.backend.api.Product.ProductController;
import org.springframework.http.ResponseEntity;
import com.backend.api.Product.ProductService.ProductService;
import com.backend.api.Product.ProductModel.ProductModel;
import com.backend.api.Product.ProductModel.FeedbackProductModel;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.PathVariable;

@RestController
@CrossOrigin(origins = "*")
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
        return productService.createUpdate(product);
    }

    // Route to update a product
    @PutMapping("/updateProduct")
    public ResponseEntity<?> updateProduct(@RequestBody ProductModel product) {
        return productService.createUpdate(product);
    }

    // Route to remove a product
    @DeleteMapping("/removeProduct/{id}")
    public ResponseEntity<FeedbackProductModel> removeProduct(@PathVariable Long id) {
        return productService.removeProduct(id);
    }
    
}
