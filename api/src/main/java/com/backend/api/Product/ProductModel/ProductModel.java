package com.backend.api.Product.ProductModel;
import jakarta.persistence.*;
import lombok.*;


@Entity
@Table(name = "products")
@Getter
@Setter
public class ProductModel {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String name;
    private String description;


    
}