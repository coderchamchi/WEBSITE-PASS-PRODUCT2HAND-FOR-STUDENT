package com.bezkoder.springjwt.repository;

import com.bezkoder.springjwt.entities.Product;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.ArrayList;
import java.util.Optional;

@Repository
public interface ProductRepository extends JpaRepository<Product, Long> {
    @Query(
            value = "SELECT * FROM product u WHERE u.categoryid = :id",
            nativeQuery = true)
    ArrayList<Product> findProductByStatusNative(Long id);

    @Query(
            value = "SELECT * FROM product u WHERE u.productid = :id",
            nativeQuery = true)
    Optional<Product> findProductId(Long id);

}
