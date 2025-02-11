package com.fittrack.pojos;

public enum PackageType {
	
	MONTHLY(30),QUARTERLY(120),HALF_YEARLY(180),YEARLY(365);
	private int days;
	private PackageType(int days) {
		this.days=days;
	}
	public int getDays() {
		return days;
	}
	

}
