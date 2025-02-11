package com.fittrack.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.MailException;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.stereotype.Service;

@Service
public class EmailService {

    @Autowired
    private JavaMailSender mailSender;

    public void sendRegistrationEmail(String toEmail) {
        try {
            SimpleMailMessage message = new SimpleMailMessage();
            message.setTo(toEmail);
            message.setSubject("Welcome to Our Platform!");
            message.setText("Thank you for registering with us. We are excited to have you on board!");

            mailSender.send(message);
        } catch (MailException e) {
            e.printStackTrace();
            // Handle email failure
        }
    }
}
