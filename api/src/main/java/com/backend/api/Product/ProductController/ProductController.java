package com.backend.api.Product.ProductController;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.beans.factory.annotation.Autowired;
import com.backend.api.Product.ProductService.ProductService;
import com.backend.api.Product.ProductModel.ProductModel;

@RestController
public class ProductController {

    @Autowired
    private ProductService productService;
    
    @GetMapping("/products")
    public Iterable<ProductModel> products() {
        return productService.listProducts();
    }
    
    @GetMapping("/")
    public String test() {
        return "test";
    }
    
}
