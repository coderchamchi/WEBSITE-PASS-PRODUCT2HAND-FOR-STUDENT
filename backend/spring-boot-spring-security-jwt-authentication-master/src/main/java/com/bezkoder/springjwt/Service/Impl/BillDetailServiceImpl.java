package com.bezkoder.springjwt.Service.Impl;

import com.bezkoder.springjwt.Service.BillDetailService;
import com.bezkoder.springjwt.entities.BillDetail;
import com.bezkoder.springjwt.repository.BilldetailRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class BillDetailServiceImpl implements BillDetailService {
    @Autowired
    BilldetailRepository billdetailRepository;

    @Override
    public List<BillDetail> Getallbill() {
        return billdetailRepository.findAll();
    }
}
