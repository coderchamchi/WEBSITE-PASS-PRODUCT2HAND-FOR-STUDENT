package com.bezkoder.springjwt.repository;

import com.bezkoder.springjwt.entities.BillDetail;
import org.springframework.data.jpa.repository.JpaRepository;

public interface BilldetailRepository extends JpaRepository<BillDetail, Long> {
}
