```markdown
# AGENTS.md - Guidelines for AI Coding Agents

These guidelines outline the standards for development of AI coding agents within this repository. Adherence to these principles is mandatory for all development activities.

## 1. DRY (Don't Repeat Yourself)

- All code should be reusable and avoid duplication.
- Implement common functionality through well-defined functions and classes.
- Utilize design patterns where appropriate to simplify complex logic.
- Document code clearly, explaining the purpose of functions and classes.

## 2. KISS (Keep It Simple, Stupid)

- Prioritize clarity and readability.
- Use the shortest, most understandable code possible.
- Avoid unnecessary complexity.
- Focus on core functionality and avoid over-engineering.

## 3. SOLID Principles

- **Single Responsibility Principle:** Each class or module should have one, and only one, reason to change.
- **Open/Closed Principle:** The system should be extensible through public interfaces, without modifying the internal structure.
- **Liskov Substitution Principle:**  Subclasses should be substitutable for their base classes without altering the correctness of the system.
- **Interface Segregation Principle:** Each client should be required to interface with only the methods necessary to fulfill its needs.
- **Dependency Inversion Principle:** High-level modules should be dependent on low-level modules, which in turn should depend on abstractions.

## 4. YAGNI (You Aren't Gonna Need It)

- Avoid premature implementation.  Focus on delivering the necessary functionality initially.
- Don’t add features or logic that are not currently required.
-  Refactor only when there’s a clear and demonstrable reason to improve the design.

## 5. Testing & Coverage

- All development must be productive.  Do not use mocks for testing.
- Test cases should accurately reflect the intended behavior of the agent.
- Comprehensive unit tests covering all critical functionalities.
- Aim for at least 80% test coverage by the end of the development cycle.
- Implement comprehensive integration tests to verify interactions between agent components.

## 6. Code Structure & File Limits

- Each file should be a self-contained unit of code.
- Minimum length: 180 lines of code.
- File naming conventions:  `module.py`, `class.py`, etc.
- Docstrings: Use concise and informative docstrings for all functions, classes, and modules.
- Comments: Add comments where code is particularly complex or non-obvious.

## 7. Data Handling & State Management

- State management should be handled through immutable data structures.
- Avoid global state. Use appropriate design patterns to manage state in a controlled manner.
- Data immutability helps with testability and avoids unexpected side effects.

## 8. API Design

- Define clear and well-documented APIs for all agent components.
- Ensure APIs are easily understandable and maintainable.
-  Consider design for extensibility – allowing future modifications.

## 9. Logging

- Implement robust logging to aid in debugging and monitoring.
- Log relevant information, including errors, warnings, and informational messages.
- Use a consistent logging format.

## 10. Version Control

- Use Git for version control.
- Commit frequently with meaningful commit messages.
- Follow established branching strategies.
- Utilize pull requests for code review.

## 11. Documentation

- Create a README file with an overview of the project, including setup instructions and usage examples.
- Document the project's design choices and rationale.

## 12. Algorithm Considerations

- When designing algorithms, prioritize efficiency and readability.
- Consider edge cases and error handling proactively.

## 13. Maintainability

- Code should be written in a way that is easy to understand and modify.
- Use consistent coding styles.

## 14. Error Handling

- Implement clear and informative error messages.
- Use appropriate exception handling techniques.

## 15. Dependencies

-  Use a dependency management system (e.g., pip, poetry) to manage external libraries.
-  Ensure all dependencies are well-documented and versioned.
```