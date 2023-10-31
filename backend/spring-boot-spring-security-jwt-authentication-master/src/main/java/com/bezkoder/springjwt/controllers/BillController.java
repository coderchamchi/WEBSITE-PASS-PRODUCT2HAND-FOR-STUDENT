package com.bezkoder.springjwt.controllers;

import com.bezkoder.springjwt.Service.BillService;
import com.bezkoder.springjwt.payload.response.ResponseJson;
import com.bezkoder.springjwt.entities.Bill;
import com.bezkoder.springjwt.payload.request.BillRequest;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.util.ObjectUtils;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
@RequestMapping("/ProjectSJ/Bill")
public class BillController {
    @Autowired
    private BillService billService;

    @GetMapping("/all")
    public ResponseEntity<List<Bill>> findallBill() {
        List<Bill> listbill = billService.getallBill();
        return new ResponseEntity<List<Bill>>(listbill, HttpStatus.OK);
    }
    @PostMapping("/add")
    public ResponseEntity<ResponseJson<Boolean>> saveBill(@RequestBody BillRequest billRequest){
        if(ObjectUtils.isEmpty(billRequest))
        {
            return ResponseEntity.ok().body(new ResponseJson<>(Boolean.FALSE, HttpStatus.BAD_REQUEST, "Error: Null"));
        }
        billService.saveBill(billRequest);
        return ResponseEntity.ok().body(new ResponseJson<>(Boolean.TRUE, HttpStatus.OK, "Add Successed"));
    }
}
