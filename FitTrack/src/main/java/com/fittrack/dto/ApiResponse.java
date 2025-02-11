package com.fittrack.dto;

import java.time.LocalDate;

import jakarta.persistence.Column;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
@ToString
@NoArgsConstructor
public class ApiResponse {

	@Column(length = 50)
	private String message;
	private LocalDate date;
	
	public ApiResponse(String message) {
		this.message=message;
		this.date=LocalDate.now();
	}
}
