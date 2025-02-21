package com.fittrack.pojos;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
import jakarta.persistence.OneToOne;
import jakarta.persistence.Table;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@Entity
@Getter
@Setter
@NoArgsConstructor
@ToString(callSuper = true,exclude = "memberId","trainer")
@Table(name = "GymPackages")
public class GymPackage  extends BaseEntity{

	
	
	private double price;
	@Column(length = 200)
	private String description;
	@Enumerated(EnumType.STRING)
	@Column(name = "package_type")
	private PackageType packageType;
	@Column(name = "package_duration")
	private int packageDuration;
 @ManyToOne
    @JoinColumn(name = "trainer_id", nullable = false)  // Foreign key column
    private FitnessTrainer trainer;

    public Package(String packageName, PackageType packageType, String packageDuration, FitnessTrainer trainer) {
        super();
        this.packageName = packageName;
        this.packageType = packageType;
        this.packageDuration = packageDuration;
        this.trainer = trainer;
    }


	
	
	
	
	
}
