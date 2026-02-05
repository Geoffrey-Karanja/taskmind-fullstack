package com.taskmind;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.ComponentScan;

@SpringBootApplication
@ComponentScan(basePackages = "com.taskmind")
public class TaskmindApiApplication {
    public static void main(String[] args) {
        SpringApplication.run(TaskmindApiApplication.class, args);
    }
}
