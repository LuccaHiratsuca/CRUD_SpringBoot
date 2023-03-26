package com.backend.api.Product.ProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.backend.api.Product.ProductModel.ProductModel;
import com.backend.api.Product.ProductRepository.ProductRepository;

@Service
public class ProductService {

    @Autowired
    private ProductRepository productRepository;

    // List all products
    public Iterable<ProductModel> listProducts() {
        return productRepository.findAll();
    }

    
}
  