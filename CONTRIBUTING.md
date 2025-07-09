# Contributing to Indian Government Career Navigator

Thank you for considering contributing to the Indian Government Career Navigator! This document outlines the guidelines for contributing to the project and explains how you can help improve this resource for everyone.

## Code of Conduct

By participating in this project, you agree to abide by our Code of Conduct. We expect all contributors to be respectful, inclusive, and considerate of others.

## Ways to Contribute

There are many ways you can contribute to the Indian Government Career Navigator:

1. **Data Updates**: Add or update information about government services, career paths, exam patterns, etc.
2. **Bug Fixes**: Fix issues in the HTML, CSS, or JavaScript code
3. **Feature Development**: Implement new features or enhancements
4. **Documentation**: Improve the README, add comments to code, or create guides
5. **UI/UX Improvements**: Enhance the user interface and experience
6. **Feedback**: Provide suggestions and ideas for improvements

## Development Setup

### Prerequisites

- Basic knowledge of HTML, CSS, and JavaScript
- A code editor (Visual Studio Code, Sublime Text, etc.)
- A modern web browser
- Git for version control

### Local Development

1. **Fork the repository**:
   Click the "Fork" button at the top right of the repository page to create your own copy.

2. **Clone your fork**:

   ```bash
   git clone https://github.com/your-username/indian-government-career-navigator.git
   cd indian-government-career-navigator
   ```

3. **Create a branch**:

   ```bash
   git checkout -b feature/your-feature-name
   ```

4. **Make your changes**:
   Edit the files as needed for your contribution.

5. **Test your changes**:
   Open `index.html` in your web browser to test that your changes work as expected.

6. **Commit your changes**:

   ```bash
   git add .
   git commit -m "A descriptive message about your changes"
   ```

7. **Push to your fork**:

   ```bash
   git push origin feature/your-feature-name
   ```

8. **Create a Pull Request**:
   Go to the original repository and click "New Pull Request". Select your fork and the branch you created.

## Code Standards

### HTML

- Use semantic HTML5 elements where appropriate (`header`, `nav`, `section`, `article`, etc.)
- Keep markup clean and readable with proper indentation
- Use descriptive class names following BEM convention
- Ensure accessibility by using proper ARIA attributes where needed

### CSS

- Follow the existing color scheme using CSS variables
- Maintain the existing spacing system using the defined space variables
- Use the BEM naming convention for classes
- Organize styles by component or section
- Add comments for complex CSS rules
- Ensure responsive design for all screen sizes

### JavaScript

- Follow the existing code structure in `app.js`
- Use ES6+ features where appropriate
- Add comments for complex logic
- Keep functions small and focused on a single task
- Use descriptive variable and function names in camelCase
- Check for browser compatibility of JS features

## Data Contributions

### Updating Service Information

To add or update information about a government service:

1. Locate the `servicesData` array in `app.js`
2. Add a new object or modify an existing one following the established format:

   ```javascript
   {
       "name": "Service Name",
       "category": "Category",
       "entry_age": "Age Range",
       "qualification": "Required Qualification",
       "exam": "Entrance Exam",
       "starting_salary": "Starting Salary",
       "top_position": "Highest Position",
       "years_to_top": Number of Years,
       "job_security": "Security Level",
       "work_life_balance": "Balance Level"
   }
   ```

### Updating Career Timelines

To add or update career progression information:

1. Locate the `careerTimelines` object in `app.js`
2. Add a new array or modify an existing one following the established format:

   ```javascript
   "Service Name": [
       {
           "rank": "Rank Title",
           "years": Years of Service,
           "salary": "Salary Range",
           "responsibilities": "Brief Description"
       },
       // More ranks...
   ]
   ```

## Pull Request Process

1. **Update documentation** if necessary to reflect your changes
2. **Ensure your code passes all tests** and works in major browsers
3. **Keep your PR focused** on a single topic to make review easier
4. **Be responsive to feedback** and be willing to make changes if requested
5. **Your PR will be reviewed** by the maintainers, who may request changes before merging

## Issue Reporting

When reporting issues, please include:

1. **A clear title and description**
2. **Steps to reproduce** the issue
3. **Expected behavior** and what actually happened
4. **Screenshots** if applicable
5. **Browser and operating system** information
6. **Suggestions for fixing** the issue (if you have any)

## License

By contributing to this project, you agree that your contributions will be licensed under the same license as the project (MIT License).

## Questions?

If you have any questions or need help, feel free to:

- Open an issue with your question
- Contact the maintainers directly
- Ask for clarification on an existing issue or pull request

Thank you for helping improve the Indian Government Career Navigator!
