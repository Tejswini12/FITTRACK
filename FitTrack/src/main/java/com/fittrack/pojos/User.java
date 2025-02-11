package com.fittrack.pojos;

import java.time.LocalDate;

import org.springframework.boot.context.properties.bind.DefaultValue;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
import jakarta.persistence.FetchType;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.OneToOne;
import jakarta.persistence.Table;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@Entity
@Setter
@ToString(callSuper = true)
@Table(name = "users")
@Getter
@NoArgsConstructor
public class User extends BaseEntity{
	
	@Column(name="First_Name",length = 30)
	private String firstName;
	@Column(name="Last_Name",length = 30)
	private String LastName;
	@Column(name="Email",length = 50)
	private String email;
	@Enumerated(EnumType.STRING)
	@Column(name = "Gender",length = 20)
	private UserGender gender;
	@Column(name="Contact_Number",length = 20)
	private String contactNumber;
	@Column(name = "Date_of_Birth")
	private LocalDate dateOfBirth;
	@Column(name = "Age",length = 10)
	private int age;
	@Column(name="Address",length = 100)
	private String address;
	
	
	@Enumerated(EnumType.STRING)
	@Column( name = "User_Type",length = 20)
	
	//private String userType="CUSTOMER";
	private UserType userType;
	@Column(length = 300)
	private String password;
//		@OneToOne(fetch = FetchType.LAZY)
//		@JoinColumn(name = "member_id")
//		private Member member;
	
	//constructor
	public User(String firstName, String lastName, String email, UserGender gender, String contactNumber,
			LocalDate dateOfBirth, int age, String address, UserType userType, String password) {
		super();
		this.firstName = firstName;
		LastName = lastName;
		this.email = email;
		this.gender = gender;
		this.contactNumber = contactNumber;
		this.dateOfBirth = dateOfBirth;
		this.age = age;
		this.address = address;
		this.userType = userType;
		this.password = password;
	}
	

	
	
	
	

}
