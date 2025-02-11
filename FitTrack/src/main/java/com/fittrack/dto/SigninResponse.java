package com.fittrack.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor

public class SigninResponse {
	private String jwt;
	private String mesg;
	private String role;
	private String firstName;
	public SigninResponse(String jwt, String mesg, String role, String firstName) {
		super();
		this.jwt = jwt;
		this.mesg = mesg;
		this.role = role;
		this.firstName = firstName;
	}
	

}
