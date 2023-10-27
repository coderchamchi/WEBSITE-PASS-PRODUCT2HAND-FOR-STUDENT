package com.bezkoder.springjwt.Service.Impl;

import com.bezkoder.springjwt.Service.ProductService;

import com.bezkoder.springjwt.payload.response.ProductRespone;
import com.bezkoder.springjwt.payload.request.ProductRequest;
import com.bezkoder.springjwt.entities.Category;
import com.bezkoder.springjwt.entities.Product;
import com.bezkoder.springjwt.repository.CategoryRepository;
import com.bezkoder.springjwt.repository.ProductRepository;
import org.apache.commons.lang3.ObjectUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.util.ReflectionUtils;

import java.io.IOException;
import java.lang.reflect.Field;
import java.time.LocalDate;
import java.time.format.DateTimeFormatter;
import java.util.ArrayList;
import java.util.List;
import java.util.Map;
import java.util.Optional;

@Service
public class ProductServiceImpl implements ProductService {

    @Autowired
    private ProductRepository productRepository;

    @Autowired
    private CategoryRepository categoryRepository;


    @Override
    public List<Product> GetAllProduct() {
        return productRepository.findAll();
    }

    @Override
    public Optional<ProductRespone> getProductbyid(long id) {
        ProductRespone productDTO = new ProductRespone();
        return productRepository.findById(id)
                .map(item -> {
                    DateTimeFormatter formatter = DateTimeFormatter.ofPattern("yyyy-MM-dd");
                    String createdate = item.getCreatedate().format(formatter);
                    String updatedate = item.getUpdatedate().format(formatter);
                    String price = String.valueOf(item.getPrice());
                    String warehouse = String.valueOf(item.getWarehouse());
                    String discount = String.valueOf(item.getDiscount());
                    String size = String.valueOf(item.getSize());
                    productDTO.setProductname(item.getProductname());
                    productDTO.setPrice(price);
                    productDTO.setMaterial(item.getMaterial());
                    productDTO.setDescriptionproduct(item.getDescriptionproduct());
                    productDTO.setCreatedate(createdate);
                    productDTO.setUpdatedate(updatedate);
                    productDTO.setBrand(item.getBrand());
                    productDTO.setMadein(item.getMadein());
                    productDTO.setWarehouse(warehouse);
                    productDTO.setDiscount(discount);
                    productDTO.setSize(size);
                    productDTO.setBase64(item.getBase64());
                    productDTO.setCategory(item.getCategory().getCategoryname());
                    return productDTO;
                });

    }



    @Override
    public boolean saveProduct(ProductRequest productDTO) {
        Optional<Category> categoryid = categoryRepository.findById(productDTO.getCategoryid());
        if(ObjectUtils.isNotEmpty(categoryid))
        {
            Integer price = Integer.parseInt(productDTO.getPrice());
            Integer warehouse = Integer.parseInt(productDTO.getWarehouse());
            Integer size = Integer.parseInt(productDTO.getSize());
            Integer discount = Integer.parseInt(productDTO.getDiscount());
            if (ObjectUtils.isNotEmpty(productDTO)) {
                Product product = new Product();
                product.setProductname(productDTO.getProductname());
                product.setMaterial(productDTO.getMaterial());
                product.setPrice(price);
                product.setDescriptionproduct(productDTO.getDescriptionproduct());
                product.setCreatedate(LocalDate.now());
                product.setUpdatedate(LocalDate.now());
                product.setMadein(productDTO.getMadein());
                product.setBrand(productDTO.getBrand());
                product.setWarehouse(warehouse);
                product.setSize(size);
                product.setDiscount(discount);
                product.setCategory(categoryid.get());
                productRepository.save(product);
                try {
                    String base64 = product.getbase64fromfolder(productDTO.getProductname());
                    product.setBase64(base64);
                } catch (IOException e) {
                    product.setBase64(null);
                }
                productRepository.save(product);
                return true;
            }
            return false;}
        return false;
    }

    @Override
    public boolean updateProductbyid(Long id, ProductRequest productDTO) {
        Optional<Category> categoryid = categoryRepository.findById(productDTO.getCategoryid());
        if (ObjectUtils.isNotEmpty(productDTO)){
            Product product = productRepository.getById(id);
            if (ObjectUtils.isNotEmpty(product)){
                product.setProductname(productDTO.getProductname());
                product.setPrice(Integer.parseInt(productDTO.getPrice()));
                product.setMaterial(productDTO.getMaterial());
                product.setDescriptionproduct(productDTO.getDescriptionproduct());
                product.setUpdatedate(LocalDate.now());
                product.setDiscount(Integer.parseInt(productDTO.getDiscount()));
                product.setSize(Integer.parseInt(productDTO.getSize()));
                product.setCategory(categoryid.get());
                try {
                    String base64 = product.getbase64fromfolder(productDTO.getProductname());
                    product.setBase64(base64);
                } catch (IOException e) {
                    product.setBase64(null);
                }
                productRepository.save(product);
                return true;
            }
            return false;
        }
        return false;
    }

    @Override
    public ArrayList<Product> getproductbycategory(Long id) {
        ArrayList<Product> products = productRepository.findProductByStatusNative(id);
        return products;
    }

    @Override
    public Product updatebypatch(long id, Map<String, Object> fields) {
        Optional<Product> existingProduct = productRepository.findProductId(id);

        if(existingProduct.isPresent()){
        fields.forEach((key, value)->{
            Field field = ReflectionUtils.findField(Product.class, key);
            field.setAccessible(true);
            ReflectionUtils.setField(field,existingProduct.get(),value);

        });
        return productRepository.save(existingProduct.get());}
        return null;
    }


    @Override
    public boolean deleteProductbyid(long id) {
        productRepository.deleteById(id);
        return true;
    }

    @Override
    public boolean deleteallProduct() {
        productRepository.deleteAll();
        return true;
    }


}


