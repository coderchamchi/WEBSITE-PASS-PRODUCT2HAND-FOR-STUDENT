package com.bezkoder.springjwt.controllers;

import com.bezkoder.springjwt.Service.CategoryService;
import com.bezkoder.springjwt.dto.CategoryDTO;
import com.bezkoder.springjwt.payload.response.ProductRespone;
import com.bezkoder.springjwt.payload.request.ProductRequest;
import com.bezkoder.springjwt.payload.response.ResponseJson;
import com.bezkoder.springjwt.entities.Product;
import com.bezkoder.springjwt.Service.ProductService;
import org.apache.commons.lang3.ObjectUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;
import java.util.Optional;
@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
@RequestMapping("ProjectSJ/Product")
public class ProductController {
    @Autowired
    private ProductService productService;

    @Autowired
    CategoryService categoryService;

    @GetMapping("/all")

    public ResponseEntity<List<Product>> findallProduct() {
        List<Product> listProduct = productService.GetAllProduct();
        return new ResponseEntity<List<Product>>(listProduct, HttpStatus.OK);
    }

    @GetMapping("/{id}")
    public ResponseEntity<ProductRespone> getProductbyid(@PathVariable("id") long id) {
        Optional<ProductRespone> optionalProductDTO = productService.getProductbyid(id);

        if (optionalProductDTO.isPresent()) {
            ProductRespone productRespone = optionalProductDTO.get();
            return new ResponseEntity<>(productRespone, HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    @GetMapping("/category/{id}")
    public ResponseEntity<ArrayList<Product>> getproductsbycategory(@PathVariable("id") long id){
        Optional<CategoryDTO> optional = categoryService.getCategorybyid(id);
        if (ObjectUtils.isNotEmpty(optional)){
            ArrayList<Product> listproduct = productService.getproductbycategory(id);
            return new ResponseEntity<ArrayList<Product>>(listproduct, HttpStatus.OK);
        }
        return new ResponseEntity<>(HttpStatus.NOT_FOUND);
    }


    @PostMapping("/add")
    public ResponseEntity<ResponseJson<Boolean>> addProduct(@RequestBody ProductRequest productRequest) //sử dụng @RBody để nó tự động convert JSON thành đối tượng DTO
    {
        productService.saveProduct(productRequest);
        return ResponseEntity.ok().body(new ResponseJson<>(Boolean.TRUE, HttpStatus.OK, "Add Successed"));
    }
    @PutMapping("/update/{id}")
    public ResponseEntity<ResponseJson<Boolean>> updateProduct(@PathVariable("id") Long id, @RequestBody ProductRequest productRequest){
        productService.updateProductbyid(id, productRequest);
        return ResponseEntity.ok().body(new ResponseJson<>(Boolean.TRUE, HttpStatus.OK, "Update Success"));
    }

    @PatchMapping("/update/{id}")
    public Product updateproductbypatch(@PathVariable long id, @RequestBody Map<String,Object> fields){
        return productService.updatebypatch(id, fields);
    }

    @DeleteMapping("/delete/{id}")
    public ResponseEntity<ResponseJson<Boolean>> deleteProductbyid(@PathVariable("id") long id) {
        productService.deleteProductbyid(id);
        return ResponseEntity.ok().body(new ResponseJson<>(Boolean.TRUE, HttpStatus.OK, "Delete Success"));

    }
    @DeleteMapping("/delete/all")
    public ResponseEntity<ResponseJson<Boolean>> deleteallProduct()
    {
        productService.deleteallProduct();
        return ResponseEntity.ok().body(new ResponseJson<>(Boolean.TRUE, HttpStatus.OK, "Delete All Success"));

    }
}


