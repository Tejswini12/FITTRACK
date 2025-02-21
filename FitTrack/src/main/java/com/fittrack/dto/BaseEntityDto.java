package com.fittrack.dto;

import java.time.LocalDate;
import java.time.LocalDateTime;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonProperty.Access;

import jakarta.persistence.MappedSuperclass;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;


@Setter
@Getter
@ToString
public class BaseEntityDto {
	
	@JsonProperty(access = Access.READ_ONLY)
	@NotBlank
	private Long id;
	@JsonProperty(access = Access.READ_ONLY)
	@NotBlank
	private LocalDate createdOn;
	@JsonProperty(access = Access.READ_ONLY)
    	@NotBlank
	private LocalDateTime updatedOn;

}
