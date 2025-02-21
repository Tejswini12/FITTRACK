package com.fittrack.pojos;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Table;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@Entity
@Setter
@Getter
@ToString(callSuper = true)
@NoArgsConstructor
@Table(name = "FitnessTrainers")
public class FitnessTrainer extends BaseEntity{

	@Column(name = "trainer_name",length = 30)
	private String trainerName;
	@Column(name = "email", length = 30)
	private String email;
	@Column(name = "phone", length = 30)
	private String phone;
	@Column(name = "expertise", length = 30)
	private String expertise;
	@OneToMany(mappedBy = "trainer", cascade = CascadeType.ALL, orphanRemoval = true, fetch = FetchType.LAZY)
    private List<Package> packages;

    public FitnessTrainer(String trainerName, String email, String phone, String expertise) {
        this.trainerName = trainerName;
        this.email = email;
        this.phone = phone;
        this.expertise = expertise;
    }
	
	
	
	
}
