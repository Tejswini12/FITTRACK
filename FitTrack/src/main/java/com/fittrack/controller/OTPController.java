
package com.fittrack.controller;
import java.util.HashMap;
import java.util.Map;
import java.util.Random;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api/otp")
public class OTPController {

    private Map<String, String> otpStorage = new HashMap<>(); // Store OTP temporarily

    @PostMapping("/generate")
    public ResponseEntity<String> generateOTP(@RequestParam String phoneOrEmail) {
        String otp = String.valueOf(new Random().nextInt(900000) + 100000);
        otpStorage.put(phoneOrEmail, otp);
        // Send OTP via SMS or Email
        return ResponseEntity.ok("OTP sent to " + phoneOrEmail);
    }

    @PostMapping("/verify")
    public ResponseEntity<String> verifyOTP(@RequestParam String phoneOrEmail, @RequestParam String otp) {
        if (otpStorage.containsKey(phoneOrEmail) && otpStorage.get(phoneOrEmail).equals(otp)) {
            otpStorage.remove(phoneOrEmail);
            return ResponseEntity.ok("OTP Verified");
        }
        return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Invalid OTP");
    }
}