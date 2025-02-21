package com.fittrack.pojos;

import java.time.LocalDate;
import java.util.List;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.OneToMany;
import jakarta.persistence.OneToOne;
import jakarta.persistence.Table;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@Entity
@Getter
@Setter
@NoArgsConstructor
@ToString(callSuper = true,exclude = {"user","gymPackage","feedbackas","billPayment"})

@Table(name = "Members")
public class Member extends BaseEntity {
	
	@Column(name = "start_date")
	private LocalDate startDate;
	@Column(name = "end_date")
	private LocalDate endDate;
	
	private double fees;
	//package id --- foreign key
	
	@OneToOne
	@JoinColumn(name = "user_id")
	private User user;

	@OneToMany
	@JoinColumn(mappedBy = "member", cascade = CascadeType.ALL, orphanRemoval = true,name = "feedback_id")
	private List<MemberFeedback> feedbacks;
	
	@OneToOne(fetch = FetchType.LAZY)
	@JoinColumn(name = "package_id")
	private GymPackage gymPackage;
	
	@OneToOne(mappedBy = "member", cascade = CascadeType.ALL, orphanRemoval = true,fetch = FetchType.LAZY)
  	  private BillPayment billPayment;

	public Member(LocalDate startDate, LocalDate endDate, double fees) {
		super();
		this.startDate = startDate;
		this.endDate = endDate;
		this.fees = fees;
	}
	
	

}
