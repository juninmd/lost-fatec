```markdown
# AGENTS.md - Guidelines for AI Coding Agents

These guidelines outline the principles and constraints for the development of AI coding agents within this repository. Adherence to these principles is crucial for maintaining code quality, maintainability, and overall productivity.

**1. DRY (Don't Repeat Yourself)**

*   **Single Responsibility Principle:** Each agent should have a single, well-defined purpose. Avoid creating redundant code for similar functionalities.
*   **Abstraction:**  Use abstract classes and interfaces to decouple components and promote reusability.
*   **Refactoring:**  Prioritize refactoring to eliminate duplication and improve modularity.

**2. KISS (Keep It Simple, Stupid)**

*   **Minimize Complexity:** Design the agent’s logic to be as straightforward as possible. Avoid convoluted or unnecessary features.
*   **Readability:** Code should be easily understood by humans. Use clear naming conventions and comments.
*   **Minimal Dependencies:**  Limit the number of external libraries and dependencies used.  Favor built-in functionality where appropriate.

**3. SOLID Principles**

*   **Single Responsibility:** Each class/component should have a single, focused responsibility.
*   **Open/Closed Principle:**  The agent’s logic should be extensible through interfaces or abstract classes, not through modifying the core implementation.
*   **Liskov Substitution Principle:**  Subclasses should be substitutable for their base classes without altering the correctness of the program.
*   **Interface Segregation Principle:**  Clients should not be forced to bound to methods they do not use.
*   **Dependency Inversion Principle:** High-level modules should not depend on low-level modules. Interfaces should define essential behavioral requirements.

**4. YAGNI (You Aren't Gonna Need It)**

*   **Focus on Current Requirements:**  Only implement functionality necessary for the agent’s current task.  Avoid adding features that are not currently required.
*   **Progressive Development:** Build the agent incrementally, adding functionality as needed rather than attempting to complete everything at once.

**5. Development Principles**

*   **Testing:** All development must be productive.  Tests are *only* for unit & integration testing.  They do not include mocks or fake implementations.
*   **Code Reviews:**  Each significant change requires a thorough code review by at least two members of the team.
*   **Documentation:**  Provide clear and concise documentation for all agent functions and classes, including their purpose, inputs, and outputs.
*   **Version Control:**  Use a version control system (e.g., Git) to track changes and ensure collaboration.
*   **Continuous Integration/Continuous Deployment (CI/CD):**  Implement a CI/CD pipeline to automate testing and deployment (if applicable).

**6. Code Structure & Formatting**

*   **File Size Limit:** Maximum file size: 180 lines of code.
*   **Naming Conventions:** Use consistent naming conventions (e.g., camelCase for variables and functions).  Follow established naming standards.
*   **Comments:**  Include clear and concise comments explaining complex logic or non-obvious sections of code.
*   **Code Style:**  Adhere to a consistent code style guide (e.g., PEP 8 for Python).

**7.  Specific Considerations (Adapt as needed for the agent's purpose)**

*   [If applicable:  Specify data structures used and their purpose.]
*   [If applicable:  Detail the agent's core algorithms/logic.]
*   [If applicable:  Describe the input/output mechanisms.]

**8.  Testing Framework**

*   [Specify the testing framework to be used, e.g., unittest, pytest.]

These guidelines are intended as a starting point and may be adjusted based on the specific requirements of the AI coding agent. Regular review and updates are encouraged.  Any changes to these guidelines must be documented and communicated to the team.
```