package com.fittrack.dto;

import com.fittrack.pojos.PackageType;

import jakarta.persistence.Column;
import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
import jakarta.validation.constraints.NotBlank;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
@ToString(callSuper = true)
@NoArgsConstructor
@AllArgsConstructor
public class GymPackageDto extends BaseEntityDto {

	@NotBlank
	private double price;
	@NotBlank
	private String description;
	@NotBlank
	private PackageType packageType;
	@NotBlank
	private int packageDuration;
	
}
