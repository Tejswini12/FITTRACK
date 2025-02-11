package com.fittrack.pojos;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
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
@ToString(callSuper = true,exclude = "memberId")
@Table(name = "GymPackages")
public class GymPackage  extends BaseEntity{

	
	
	private double price;
	@Column(length = 200)
	private String description;
	@Enumerated(EnumType.STRING)
	@Column(name = "package_type")
	private PackageType packageType;
	@Column(name = "package_duration")
	private int packageDuration;
	
	public GymPackage(double price, String description, PackageType packageType, int packageDuration) {
		super();
		this.price = price;
		this.description = description;
		this.packageType = packageType;
		this.packageDuration = packageDuration;
	}

//	public void setPrice(double price) {
//		this.price = price;
//	}
//
//	public void setDescription(String description) {
//		this.description = description;
//	}
//
//	public void setPackageType(PackageType packageType) {
//		this.packageType = packageType;
//	}
	
	//trainers package relation ship
	//pkg--trainer
	//many to one
	
	
	
	
	
}
