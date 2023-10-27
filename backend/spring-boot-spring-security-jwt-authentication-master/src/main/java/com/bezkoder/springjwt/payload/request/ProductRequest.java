package com.bezkoder.springjwt.payload.request;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class ProductRequest {
    private String productname;

    private String price;

    private String material;

    private String brand;

    private String madein;

    private String warehouse;

    private String descriptionproduct;

    private String createdate;

    private String updatedate;

    private String discount;

    private String size;

    private String base64;

    private long categoryid;
}

