package com.fittrack.repository;



import org.springframework.data.jpa.repository.JpaRepository;

import com.fittrack.pojos.Member;

public interface MemberDao extends JpaRepository<Member, Long>{

}
