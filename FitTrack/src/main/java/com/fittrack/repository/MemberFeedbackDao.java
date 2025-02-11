package com.fittrack.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.fittrack.pojos.MemberFeedback;

public interface MemberFeedbackDao extends JpaRepository<MemberFeedback, Long> {

}
