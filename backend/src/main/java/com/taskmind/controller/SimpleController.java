package com.taskmind.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.Map;

@RestController
public class SimpleController {
    
    @GetMapping("/ping")
    public String ping() {
        return "pong";
    }
    
    @GetMapping("/api/health")
    public Map<String, String> health() {
        return Map.of(
            "status", "healthy", 
            "service", "TaskMind API",
            "database", "PostgreSQL",
            "version", "1.0.0"
        );
    }
    
    @GetMapping("/api/info")
    public Map<String, Object> info() {
        return Map.of(
            "name", "TaskMind Backend API",
            "description", "AI-powered task management system",
            "version", "1.0.0",
            "endpoints", Map.of(
                "GET /ping", "Simple ping test",
                "GET /api/health", "Health check",
                "GET /api/v1/tasks", "Get all tasks",
                "POST /api/v1/tasks", "Create new task",
                "GET /api/v1/tasks/{id}", "Get task by ID",
                "PUT /api/v1/tasks/{id}", "Update task",
                "DELETE /api/v1/tasks/{id}", "Delete task",
                "PATCH /api/v1/tasks/{id}/complete", "Mark task as complete"
            )
        );
    }
}
