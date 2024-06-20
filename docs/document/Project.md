---
sidebar_position: 15
---

import SimpleCodeDisplay from '../../src/components/SimpleCodeDisplay';

# Project

## 1. Generate project based on position

### Prompt

:::info

**You only need to change the text inside `Context`**

:::

<SimpleCodeDisplay type="code">
Context

"""
Here is a software engineer position:
<br/>
About FinTechPro

FinTechPro is the ultimate platform for modern finance teams. Combining corporate cards with expense management, bill payments, vendor management, accounting automation, and more, FinTechPro's all-in-one solution is designed to save businesses time and money, and free finance teams to do the best work of their lives. Our mission is to help build healthier businesses, and it’s working: over 25,000 businesses use FinTechPro to save an average of 5% and close their books 8x faster.

FinTechPro's investors include Founders Fund, Stripe, Citi, Goldman Sachs, Coatue Management, D1 Capital Partners, Redpoint Ventures, General Catalyst, and Thrive Capital, as well as over 100 angel investors who were founders or executives of leading companies. The FinTechPro team comprises talented leaders from leading financial services and fintech companies—Stripe, Affirm, Goldman Sachs, American Express, Mastercard, Visa, Capital One—as well as technology companies such as Meta, Uber, Netflix, Twitter, Dropbox, and Instacart. In 2023, FinTechPro was named Fast Company’s #1 Most Innovative Company in North America, LinkedIn’s #1 Top Startup in the U.S., a CNBC Disruptor, and a TIME100 Most Influential Company.

<br/>
About the Role
Our ideal candidate has a deep understanding of JavaScript, a passion for web performance, and can creatively come up with solutions to solve customers' needs. Our tech stack currently involves TypeScript, React, styled-components, and Vite.

Check out our Engineering Blog for more on our tech stack, mission, and values!

<br/>
What You’ll Do
- Build!
- Design performant, beautiful, and usable interfaces.
- Collaborate on our technical vision. Lead discussions and implementation of multiple complex projects.
- Foster a culture of upholding industry-leading UX.
- Continuously improve our engineering processes, tools, and systems that allow us to scale the code base, productivity, and the team.
- Recruit, interview, and develop your own interview questions, while fostering the culture of excellence, velocity, and humility.
- Inspire and mentor less experienced engineers and interns.

What You'll Need
- Minimum of 2 years of frontend engineering experience.
- Proficiency in JavaScript and React.
- Knack for getting the visuals right.
- Track record of shipping high-quality products and developing projects at scale.
- Ability to turn business and product ideas into engineering solutions.
- Desire to work in a fast-paced environment, continuously grow, and master your craft.
- Alignment with FinTechPro’s core values of enabling businesses to grow more by spending less.

"""

Requirements:

"""
1. These projects should have a certain degree of differentiation, and each can meet the specific requirements of the position requirements.
2. Use tech stack list in the position, the tech stack should follow the project name like (Skill1, Skill2)
3. Professional and concise style use normal english, with 5 bullet point, every bullet point should include at least one tech skill
4. add example numbers and metrics in the experience and projects like reducing 50% API request time to make it more impressive
"""


Action:

"""
Write 3 most suitable personal project for software engineer resume to apply for this position
"""

</SimpleCodeDisplay>
    
### Response From AI Coach

<SimpleCodeDisplay type="response">

Project 1: Expense Tracker Pro (TypeScript, React, Vite)
- Developed a comprehensive expense tracking application using TypeScript and React, enhancing user experience with real-time updates and responsive design.
- Implemented a Vite-based build system, reducing build times by 40% and improving overall application performance.
- Designed and integrated a user-friendly interface with styled-components, resulting in a 30% increase in user engagement.
- Optimized API requests, reducing response times by 50% and improving data retrieval efficiency.
- Deployed the application on a cloud platform, ensuring 99.9% uptime and scalable infrastructure.

Project 2: Vendor Management System (TypeScript, React, styled-components)
- Built a robust vendor management platform using TypeScript and React, enabling users to track and manage vendor relationships effectively.
- Utilized styled-components to create a cohesive and visually appealing UI, increasing user satisfaction scores by 25%.
- Implemented complex state management solutions to handle large data sets, improving data processing speed by 60%.
- Collaborated with a team of engineers to design and implement scalable backend services, reducing server response times by 35%.
- Conducted user testing sessions, gathering feedback to continuously improve the platform's usability and performance.

Project 3: Corporate Card Dashboard (TypeScript, React, Vite)
- Created an interactive corporate card dashboard using TypeScript and React, providing users with real-time insights into their spending.
- Leveraged Vite to streamline the development process, cutting down build times by 50% and enhancing development productivity.
- Designed and implemented a visually appealing interface with styled-components, leading to a 20% increase in user retention.
- Integrated third-party APIs to fetch and display transaction data, reducing data retrieval times by 40%.
- Mentored junior developers on best practices and code quality, fostering a culture of excellence and continuous improvement.

</SimpleCodeDisplay>


## 2. High Level Tutorial

Let's first let AI Coach to generate a high level tutorial.

### Prompt

<SimpleCodeDisplay type="code">
Context:

"""
Project 1: Expense Tracker Pro (TypeScript, React, Vite)

Developed a comprehensive expense tracking application using TypeScript and React, enhancing user experience with real-time updates and responsive design.
Implemented a Vite-based build system, reducing build times by 40% and improving overall application performance.
Designed and integrated a user-friendly interface with styled-components, resulting in a 30% increase in user engagement.
Optimized API requests, reducing response times by 50% and improving data retrieval efficiency.
Deployed the application on a cloud platform, ensuring 99.9% uptime and scalable infrastructure.
"""
<br/>
Requirements:
"""
1. Requirements Gathering and Planning
2. System Design
3. Development
4. Testing and Optimization
5. Deployment
6. Monitoring and Maintenance
7. Collaboration and Documentation


"""
Action:

"""
Provide a high-level tutorial based on Requirements to implement this project
"""

</SimpleCodeDisplay>
    
### Response From AI Coach

<SimpleCodeDisplay type="response">

#### High-Level Tutorial for Implementing Expense Tracker Pro

Requirements Gathering and Planning
- Identify User Needs: Understand what features are essential for an expense tracking application. This might include user authentication, expense entry, categorization, reporting, etc.
- Define Scope: Clearly outline what the initial version of the application will include. Create a roadmap for future enhancements.
- Create User Stories: Develop user stories to capture the requirements from the user's perspective.
- Plan Sprints: Break down the project into manageable sprints with specific goals and deadlines.

System Design
- Architecture: Decide on the architecture of the application. For example, a single-page application (SPA) using React for the frontend and a RESTful API for the backend.
- Database Design: Design the database schema to store user data, expenses, categories, etc.
- Component Design: Plan the React components and their interactions. Use tools like Figma for UI/UX design.
- API Design: Define the endpoints and their functionalities for the backend.

Development
- Setup Project: Initialize the project using Vite for fast build times. Set up TypeScript for type safety.
    npm create vite@latest expense-tracker-pro --template react-ts
    cd expense-tracker-pro
    npm install
- Create React Components: Develop the necessary React components (e.g., Header, ExpenseForm, ExpenseList, etc.) using TypeScript.
- State Management: Use React's Context API or a state management library like Redux to manage the application's state.
- Styled-components: Implement styled-components for component-level styling.
    npm install styled-components
    npm install @types/styled-components
- API Integration: Create services to handle API requests for CRUD operations on expenses.
- Real-time Updates: Use WebSockets or libraries like Firebase to implement real-time data updates.

Testing and Optimization
- Unit Testing: Write unit tests for React components using testing libraries like Jest and React Testing Library.
- npm install jest @testing-library/react @testing-library/jest-dom
- Integration Testing: Test the integration between frontend and backend.
- Performance Optimization: Optimize the application by reducing API response times and improving build performance using Vite.
- Code Review: Conduct regular code reviews to ensure code quality and adherence to best practices.

Deployment
- Build Application: Create a production build of the application.
    npm run build
- Choose Cloud Platform: Select a cloud platform (e.g., AWS, Azure, Heroku) for deployment.
- Deploy Backend: Deploy the backend API to the cloud platform.
- Deploy Frontend: Deploy the frontend application to a static site hosting service (e.g., Vercel, Netlify).
- Configure CI/CD: Set up Continuous Integration/Continuous Deployment (CI/CD) pipelines for automated deployment.

Monitoring and Maintenance
- Monitoring Tools: Implement monitoring tools like New Relic or Google Analytics to track application performance and user engagement.
- Error Tracking: Use services like Sentry to monitor and track errors in the application.
- Regular Updates: Plan for regular updates and maintenance to fix bugs and add new features.
- User Feedback: Collect user feedback to continuously improve the application.

Collaboration and Documentation
- Version Control: Use Git for version control and GitHub/GitLab for repository hosting.
- Documentation: Document the codebase, API endpoints, and setup instructions.
- Communication: Use project management tools like Jira or Trello for task tracking and team communication.
- Knowledge Sharing: Conduct regular team meetings and knowledge-sharing sessions to keep everyone aligned.

</SimpleCodeDisplay>


## 2. Step By Step Tutorial

### Prompt

<SimpleCodeDisplay type="code">
Context:

"""
For the Setup Project in Development step
"""

Action:

"""
Provide detailed instructions and code on how to implement it?
"""

</SimpleCodeDisplay>
    
### Response From AI Coach

<SimpleCodeDisplay type="response">

(AI Coach returned super detailed and specific codes and steps)

1. Initialize the Project Using Vite and TypeScript, ...
2. Navigate to the project directory ...
3. Run the Development Server ...
4. ...

</SimpleCodeDisplay>

