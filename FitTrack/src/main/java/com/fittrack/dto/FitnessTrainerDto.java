package com.fittrack.dto;

import jakarta.persistence.Column;
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
public class FitnessTrainerDto extends BaseEntityDto {

	@NotBlank
	private String trainerName;
	@NotBlank
	private String email;
	@NotBlank
	private String phone;
	@NotBlank
	private String expertise;
}
