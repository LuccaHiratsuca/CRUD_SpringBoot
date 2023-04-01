package com.backend.api.Product.ProductRepository;
import org.springframework.stereotype.Repository;
import org.springframework.data.repository.CrudRepository;
import com.backend.api.Product.ProductModel.ProductModel;


@Repository
public interface ProductRepository extends CrudRepository<ProductModel, Long> {
    
}
