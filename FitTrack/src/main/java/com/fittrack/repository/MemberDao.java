package com.fittrack.repository;



import org.springframework.data.jpa.repository.JpaRepository;

import com.fittrack.pojos.Member;

public interface MemberDao extends JpaRepository<Member, Long>{

  @Query("SELECT bp FROM BillPayment bp JOIN bp.member m WHERE m.id = :memberId")
List<BillPayment> findPaymentsByMemberId(@Param("memberId") Long memberId);

}
