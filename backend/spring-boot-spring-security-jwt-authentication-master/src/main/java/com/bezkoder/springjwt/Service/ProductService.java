package com.bezkoder.springjwt.Service;

import com.bezkoder.springjwt.payload.response.ProductRespone;
import com.bezkoder.springjwt.payload.request.ProductRequest;
import com.bezkoder.springjwt.entities.Product;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;
import java.util.Optional;

public interface ProductService {
    //Get all Product
    public List<Product> GetAllProduct();

    //Get Product by id
    public Optional<ProductRespone> getProductbyid(long id);


    //Create new Product
    boolean saveProduct(ProductRequest productDTO);

    //update Product by id
    boolean updateProductbyid(Long id, ProductRequest productRequest);


    //delete Product by id
    boolean deleteProductbyid(long id);

    //delete all Product
    boolean deleteallProduct();

    //get product by category id
    ArrayList<Product> getproductbycategory(Long id);

    //update by patch
    Product updatebypatch(long id, Map<String, Object> fields);

}
