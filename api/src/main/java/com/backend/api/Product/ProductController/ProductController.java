package com.backend.api.Product.ProductController;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.GetMapping;

@RestController
public class ProductController {

    @GetMapping("/")
    public String test() {
        return "test";
    }
    
}
