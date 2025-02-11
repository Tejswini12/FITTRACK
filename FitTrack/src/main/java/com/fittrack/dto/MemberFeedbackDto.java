package com.fittrack.dto;


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
public class MemberFeedbackDto extends BaseEntityDto{
	
	@NotBlank
	private String email;
	@NotBlank
	private String memberName;
	@NotBlank
	private String description;
	@NotBlank
	private double ratings;
	

	
	
}
