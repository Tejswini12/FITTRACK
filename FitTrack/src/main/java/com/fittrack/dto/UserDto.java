package com.fittrack.dto;

import java.time.LocalDate;

import org.hibernate.validator.constraints.Length;
import org.hibernate.validator.constraints.Range;
import org.hibernate.validator.constraints.UniqueElements;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonProperty.Access;
import com.fittrack.pojos.UserGender;
import com.fittrack.pojos.UserType;

import io.micrometer.common.lang.NonNull;
import jakarta.persistence.Column;
import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
import jakarta.persistence.Table;
import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;


@Setter
@Getter
@ToString(callSuper = true)
@NoArgsConstructor
@AllArgsConstructor
public class UserDto extends BaseEntityDto{
	@NotBlank
	private String firstName;
	@NotBlank
	private String LastName;
	private String email;
	private UserGender gender;
	@Range(min = 10,max = 10)
	private String contactNumber;
	private LocalDate dateOfBirth;
	private int age;
	private String address;
	@JsonProperty(access = Access.WRITE_ONLY)
	@Column( name = "User_Type",length = 20)
	private UserType userType;
	
	@JsonProperty(access = Access.WRITE_ONLY)

	@Column(length = 30)
	private String password;
	
	
	
	
	
	
	

}
