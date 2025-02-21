package com.fittrack.pojos;

import java.sql.Date;
import java.time.LocalDate;

import jakarta.persistence.Entity;
import jakarta.persistence.Table;
import jakarta.persistence.Transient;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@Getter
//@Setter
@Entity
@NoArgsConstructor
@ToString(callSuper = true)
@Table(name = "BillPayments")
public class BillPayment extends BaseEntity {
	
	
	@Transient
	private LocalDate date;
	private double amount;
	
	private LocalDate paymentDate=date.now();
	
	public void setAmount(double amount) {
		this.amount = amount;
	}

	  @OneToOne
    @JoinColumn(name = "member_id", nullable = false, unique = true) // Foreign key column
    private Member member;

    public BillPayment(LocalDate date, double amount, LocalDate paymentDate, Member member) {
        super();
        this.date = date;
        this.amount = amount;
        this.paymentDate = paymentDate;
        this.member = member;
    }
	
	
	
	
}
