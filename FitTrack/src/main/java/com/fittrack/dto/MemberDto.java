package com.fittrack.dto;

import java.time.LocalDate;

import jakarta.persistence.Column;
import jakarta.validation.constraints.NotBlank;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class MemberDto extends BaseEntityDto {
	
	@NotBlank
	private LocalDate startDate;
	@NotBlank
	private LocalDate endDate;
	@NotBlank
	private double fees;
	//package id --- foreign key
}
