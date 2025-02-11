package com.fittrack.security;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.config.Customizer;
import org.springframework.security.config.annotation.authentication.configuration.AuthenticationConfiguration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.web.SecurityFilterChain;

import com.fittrack.service.UserService;

import io.swagger.v3.oas.models.PathItem.HttpMethod;
import lombok.AllArgsConstructor;

@EnableWebSecurity // - required in earlier spring sec versions -enabled by default
@Configuration // equivalent to bean config xml file
@AllArgsConstructor
public class SecurityConfig {
	
	
	
	private PasswordEncoder enc;
	//dep : custom jwt auth filter
	private UserService userService;
	private CustomJwtAuthenticationFilter jwtFilter;
	//dep : custom auth entry point

	private CustomAuthenticationEntryPoint authEntry;
	
	
	// Configure the bean to customize spring security filter chain
	@Bean
	public SecurityFilterChain authorizeRequests(HttpSecurity http) throws Exception
	{
		http.csrf(customizer -> customizer.disable())
		
        .authorizeHttpRequests
        (request -> 
        request.requestMatchers("/users/**","/gympackages/**","/member/**","/admin/**","/api/otp/**","/users/signup","/users/signin",
				"/v*/api-doc*/**","/swagger-ui/**").permitAll()
        	
      // .requestMatchers("/products/purchase/**").hasRole("CUSTOMER")
      // .requestMatchers("/users","/users/delete").hasRole("ADMIN")  
//        .antMatchers(HttpMethod.OPTIONS).permitAll() 
             		
        .anyRequest().authenticated())  
        .httpBasic(Customizer.withDefaults())
        .sessionManagement(session 
        		-> session.sessionCreationPolicy(
        				SessionCreationPolicy.STATELESS));
        return http.build();
	}
	@Bean
	public AuthenticationManager authenticationManager
	(AuthenticationConfiguration config) throws Exception
	{
		return config.getAuthenticationManager();
	}
}


