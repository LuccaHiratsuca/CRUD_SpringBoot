package com.backend.api.Product.ProductRepository;
import com.backend.api.Product.ProductModel.ProductModel;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ProductRepository extends JpaRepository<ProductModel, Long> {
    
}

