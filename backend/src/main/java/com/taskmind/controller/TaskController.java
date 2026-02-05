package com.taskmind.controller;

import com.taskmind.model.Task;
import com.taskmind.repository.TaskRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDateTime;
import java.util.List;
import java.util.Map;
import java.util.UUID;

@RestController
@RequestMapping("/api/v1/tasks")
public class TaskController {
    
    @Autowired
    private TaskRepository taskRepository;
    
    private final String MOCK_USER_ID = "user-123";  // Mock user for now
    
    @GetMapping
    public ResponseEntity<List<Task>> getAllTasks() {
        List<Task> tasks = taskRepository.findByUserId(MOCK_USER_ID);
        return ResponseEntity.ok(tasks);
    }
    
    @PostMapping
    public ResponseEntity<Task> createTask(@RequestBody Map<String, String> request) {
        Task task = new Task();
        task.setTitle(request.get("title"));
        task.setDescription(request.get("description"));
        
        if (request.containsKey("priority")) {
            try {
                task.setPriority(Task.Priority.valueOf(request.get("priority").toUpperCase()));
            } catch (IllegalArgumentException e) {
                task.setPriority(Task.Priority.MEDIUM);
            }
        }
        
        task.setUserId(MOCK_USER_ID);
        
        Task savedTask = taskRepository.save(task);
        return ResponseEntity.ok(savedTask);
    }
    
    @GetMapping("/{id}")
    public ResponseEntity<Task> getTask(@PathVariable UUID id) {
        return taskRepository.findById(id)
                .map(ResponseEntity::ok)
                .orElse(ResponseEntity.notFound().build());
    }
    
    @PutMapping("/{id}")
    public ResponseEntity<Task> updateTask(@PathVariable UUID id, @RequestBody Map<String, String> request) {
        return taskRepository.findById(id)
                .map(task -> {
                    if (request.containsKey("title")) {
                        task.setTitle(request.get("title"));
                    }
                    if (request.containsKey("description")) {
                        task.setDescription(request.get("description"));
                    }
                    if (request.containsKey("priority")) {
                        try {
                            task.setPriority(Task.Priority.valueOf(request.get("priority").toUpperCase()));
                        } catch (IllegalArgumentException e) {
                            // Keep existing priority
                        }
                    }
                    if (request.containsKey("status")) {
                        try {
                            Task.Status newStatus = Task.Status.valueOf(request.get("status").toUpperCase());
                            task.setStatus(newStatus);
                            if (newStatus == Task.Status.COMPLETED && task.getCompletedAt() == null) {
                                task.setCompletedAt(LocalDateTime.now());
                            }
                        } catch (IllegalArgumentException e) {
                            // Keep existing status
                        }
                    }
                    
                    Task updatedTask = taskRepository.save(task);
                    return ResponseEntity.ok(updatedTask);
                })
                .orElse(ResponseEntity.notFound().build());
    }
    
    @DeleteMapping("/{id}")
    public ResponseEntity<?> deleteTask(@PathVariable UUID id) {
        if (taskRepository.existsById(id)) {
            taskRepository.deleteById(id);
            return ResponseEntity.ok().build();
        }
        return ResponseEntity.notFound().build();
    }
    
    @PatchMapping("/{id}/complete")
    public ResponseEntity<Task> markAsComplete(@PathVariable UUID id) {
        return taskRepository.findById(id)
                .map(task -> {
                    task.setStatus(Task.Status.COMPLETED);
                    task.setCompletedAt(LocalDateTime.now());
                    Task updatedTask = taskRepository.save(task);
                    return ResponseEntity.ok(updatedTask);
                })
                .orElse(ResponseEntity.notFound().build());
    }
}
