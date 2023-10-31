package com.bezkoder.springjwt.Service.Impl;

import com.bezkoder.springjwt.Service.BillService;
import com.bezkoder.springjwt.Service.UserService;
import com.bezkoder.springjwt.entities.Bill;
import com.bezkoder.springjwt.entities.User;
import com.bezkoder.springjwt.payload.request.BillRequest;
import com.bezkoder.springjwt.repository.BillRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.time.LocalDate;
import java.util.List;


@Service
public class BillServiceImpl implements BillService {
    @Autowired
    private BillRepository billRepository;

    @Autowired
    private UserService userService;

    @Override
    public List<Bill> getallBill() {
        return billRepository.findAll();
    }
    @Override
    public boolean saveBill(BillRequest billRequest) {
        Bill bill = new Bill();
        User userid = userService.finUserByUserName();

        bill.setTotal(billRequest.getTotal());
        bill.setCreatedate(LocalDate.now());
        bill.setUpdatedate(LocalDate.now());
        bill.setUser(userid);
        billRepository.save(bill);
        return true;
    }

}
