---
sidebar_position: 10
---

import SimpleCodeDisplay from '../../src/components/SimpleCodeDisplay';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';

# Resume

## Step 1. Create a basic version

If you don't have a resume yet, you can  describe your background and let the AI Coach create a basic version for you. The more specific the information you provide, the more likely it is that the AI-generated content will match your actual situation. If you already have a resume, you can skip the step 1.

### Prompt

<SimpleCodeDisplay type="code">
Context: 
<br />
"""
Here is my background info:

- Info: My name is John Doe, and my LinkedIn is linkedin.com/in/johndoe
- Honors: 2 times Excellent Student Scholarship, Dean’s List for 5 semesters
- Education: I graduated from ABC University and majored in DEF in 2012-2016 with a GPA 3.6
- Work Experience: I have one swe internship at XYZ.inc company using Java and Spring to develop restful API.
- Projects: I did several side projects like search-engine (Python, Django, MySQL) and a youtube-like application (Java, Spring, Redis)
"""

---

Requirement: 
1. Provide a plain text answer
2. Professional and concise style

--- 
    
Action: 
<br />
"""
Write a software engineer resume that includes the following:

- Info: Email, LinkedIn Profile
- Education: University name, major, and time
- Skills: Programming Languages, Frameworks, Databases and Technologies
- Experience: company, role details use 5 bullet points
- Projects: project name (skill list) details use 5 bullet points
- Honors: list all honors

"""
</SimpleCodeDisplay>
<button class="btn" onClick={() => window.open('https://platform.openai.com/playground/p/bZEzT1mia9afDwE6Sh0oUZQR?model=gpt-4-turbo&mode=chat', '_blank')}>
    Open in Playground <svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><line x1="7" y1="17" x2="17" y2="7"></line><polyline points="7 7 17 7 17 17"></polyline></svg>
</button>


    
### Response From AI Coach

<SimpleCodeDisplay type="response">
John Doe

- Email: [email protected]  
- LinkedIn: linkedin.com/in/johndoe  

---

Education:
- ABC University, Bachelor of Science in DEF, 2012-2016  
- GPA: 3.6  

---

Skills:  
**Programming Languages:** Java, Python  
**Frameworks:** Spring, Django  
**Databases:** MySQL, Redis  
**Technologies:** RESTful API

---

Experience:  
**XYZ Inc., Software Engineering Intern**  
- Developed multiple RESTful services using Java and Spring Framework to handle data processing and user interface logic.  
- Collaborated with cross-functional teams to define, design, and ship new features.   
- Implemented best practices for code reusability and refactoring to enhance project maintainability.  
- Conducted extensive testing to ensure robustness, usability, and general reliability of applications.  
- Assisted in the integration of third-party services and APIs to extend system functionalities.

---

Projects:  
Search Engine (Python, Django, MySQL)  
- Designed and implemented a custom search engine capable of indexing and retrieving data efficiently.  
- Developed advanced algorithms for crawling and indexing data from various web sources.  
- Implemented user authentication and session management to ensure secure access to the search engine.  
- Optimized queries and database structures to improve search response times and relevance.  
- Created a user-friendly web interface using Django to allow simple search operations.

YouTube-like Application (Java, Spring, Redis)  
- Developed a video streaming platform enabling content sharing and real-time viewing.  
- Implemented scalable video uploading and streaming functionality using Java and Spring Boot.  
- Utilized Redis for caching content and metadata to enhance system performance.  
- Integrated a robust commenting and rating system to foster user interaction.  
- Ensured platform security by implementing secure access and data protection measures.

---

Honors:  
- Excellent Student Scholarship, awarded twice  
- Dean’s List for five semesters at ABC University

</SimpleCodeDisplay>

:::tip
If you don't have project experience, you can choose some projects from [Free Project Course](https://github.com/resumejob/free-project-course/) or [Build your own X](https://github.com/codecrafters-io/build-your-own-x).
:::

## Step 2. Match your situation

The details of work experience and projects may not accurately reflect your actual situation. At this point, you can:
1. **Generate more entries:** Ask the AI Coach to generate more entries (for example, 10 entries instead of 5) and then select the ones that match your situation. 
2. **Add more details:** Include some specifics in your descriptions of work experiences and projects. Here is an example:

### Prompt

<SimpleCodeDisplay type="code">
Context: 
<br />
"""
Experience:  
XYZ Inc., Software Engineering Intern  
- Developed multiple RESTful services using Java and Spring Framework to handle data processing and user interface logic.  
- Collaborated with cross-functional teams to define, design, and ship new features.   
- Implemented best practices for code reusability and refactoring to enhance project maintainability.  
- Conducted extensive testing to ensure robustness, usability, and general reliability of applications.  
- Assisted in the integration of third-party services and APIs to extend system functionalities.

"""

---
Requirement: 
1. Provide a plain text answer
2. Professional and concise style
---
Action:
<br />
"""
Update experience based on this:
1. In C company, our team has five engineers
2. I was primarily responsible for developing the e-commerce module's shopping cart and payment features.

"""
</SimpleCodeDisplay>

<button class="btn" onClick={() => window.open('https://platform.openai.com/playground/p/cJLQdIdcWnXs0fm9vWZEKVrD?mode=chat&model=gpt-4-turbo', '_blank')}>
    Open in Playground <svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><line x1="7" y1="17" x2="17" y2="7"></line><polyline points="7 7 17 7 17 17"></polyline></svg>
</button>

### Response From AI Coach

<SimpleCodeDisplay type="response">
Experience:
<br />
XYZ Inc., Software Engineering Intern
- Developed multiple RESTful services using Java and Spring Framework to handle data processing and user interface logic.
- Led the development of e-commerce module's shopping cart and payment features in a team of five engineers.
- Collaborated with cross-functional teams to define, design, and ship new features.
- Implemented best practices for code reusability and refactoring to enhance project maintainability.
- Conducted extensive testing to ensure robustness, usability, and general reliability of applications.
- Assisted in the integration of third-party services and APIs to extend system functionalities.

</SimpleCodeDisplay>

## Step 3. Add numbers and metrics
By adding data or metrics, you can highlight your work on the project and increase its impressiveness.

### Prompt

<SimpleCodeDisplay type="code">
Context: 
<br />
"""
Experience:  
XYZ Inc., Software Engineering Intern  
- Developed multiple RESTful services using Java and Spring Framework to handle data processing and user interface logic.  
- Collaborated with cross-functional teams to define, design, and ship new features.   
- Implemented best practices for code reusability and refactoring to enhance project maintainability.  
- Conducted extensive testing to ensure robustness, usability, and general reliability of applications.  
- Assisted in the integration of third-party services and APIs to extend system functionalities.

Projects:  
Search Engine (Python, Django, MySQL)  
- Designed and implemented a custom search engine capable of indexing and retrieving data efficiently.  
- Developed advanced algorithms for crawling and indexing data from various web sources.  
- Implemented user authentication and session management to ensure secure access to the search engine.  
- Optimized queries and database structures to improve search response times and relevance.  
- Created a user-friendly web interface using Django to allow simple search operations.

YouTube-like Application (Java, Spring, Redis)  
- Developed a video streaming platform enabling content sharing and real-time viewing.  
- Implemented scalable video uploading and streaming functionality using Java and Spring Boot.  
- Utilized Redis for caching content and metadata to enhance system performance.  
- Integrated a robust commenting and rating system to foster user interaction.  
- Ensured platform security by implementing secure access and data protection measures.

"""

---
Requirement: 
1. Provide a plain text answer
2. Professional and concise style
---
Action:
<br />
"""
Try to add 10 example numbers and metrics in the experience and projects like reducing 50% API request time to make it more impressive
"""
</SimpleCodeDisplay>

<button class="btn" onClick={() => window.open('https://platform.openai.com/playground/p/kJuCVveP3SEHacksj7aZ08QM?model=gpt-4-turbo&mode=chat', '_blank')}>
    Open in Playground <svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><line x1="7" y1="17" x2="17" y2="7"></line><polyline points="7 7 17 7 17 17"></polyline></svg>
</button>

### Response From AI Coach

<SimpleCodeDisplay type="response">
Experience:  
XYZ Inc., Software Engineering Intern  
- Built and improved multiple RESTful services using Java and Spring Framework, leading to a 30% decrease in data processing time.
- Collaborated with cross-functional teams to define, design, and ship new features that increased user engagement by 15%.
- Implemented best practices for code reusability and refactoring, which increased project maintainability and reduced debugging time by 25%.  
- Conducted extensive testing that improved application robustness and usability, leading to a 40% reduction in user-reported issues.
- Assisted in the integration of third-party services and APIs which extended system functionalities and improved response time by 50%.

Projects:  
Search Engine (Python, Django, MySQL)  
- Developed a custom search engine that indexed data 60% faster through advanced algorithms.
- Enhanced crawling efficiency by implementing optimized data indexing strategies, reducing server load by 30%.
- Implemented user authentication and session management, resulting in a 90% decrease in unauthorized access attempts.
- Optimized database queries and structures to increase search response times by 50% and improve data relevance.
- Created a user-friendly web interface using Django, which boosted user satisfaction and engagement by 35%.

YouTube-like Application (Java, Spring, Redis)  
- Developed a video streaming platform with a 70% increase in streaming efficiency using Java and Spring Boot.
- Implemented scalable video uploading features that reduced upload times by 40%.
- Utilized Redis for caching, improving content load times by 65% and reducing server stress during peak usage.
- Integrated a commenting and rating system that saw a 25% increase in user interaction.
- Enhanced platform security measures which reduced data breaches and unauthorized access incidents by 80%.
</SimpleCodeDisplay>


:::tip
Please choose the examples that best fit your actual situation.
:::

## Step 4. Match job requirements

For companies you're particularly interested in, edit your resume based on their job responsibilities and requirements to increase your chances of getting an interview.

### Prompt

<SimpleCodeDisplay type="code">
Context: 
<br />
"""
Here is my resume

<br />
John Doe

Email: [email protected]

LinkedIn: linkedin.com/in/johndoe

---

Education:

ABC University, Bachelor of Science in DEF, 2012-2016

GPA: 3.6

---

Skills:

- Programming Languages: Java, Python
- Frameworks: Spring, Django
- Databases: MySQL, Redis
- Technologies: RESTful API

---

Experience:

XYZ Inc., Software Engineering Intern
- Built and improved multiple RESTful services using Java and Spring Framework, leading to a 30% decrease in data processing time.
- Collaborated with cross-functional teams to define, design, and ship new features that increased user engagement by 15%.
- Implemented best practices for code reusability and refactoring, which increased project maintainability and reduced debugging time by 25%.
- Conducted extensive testing that improved application robustness and usability, leading to a 40% reduction in user-reported issues.
- Assisted in the integration of third-party services and APIs which extended system functionalities and improved response time by 50%.

---

Projects:

Search Engine (Python, Django, MySQL)
- Developed a custom search engine that indexed data 60% faster through advanced algorithms.
- Enhanced crawling efficiency by implementing optimized data indexing strategies, reducing server load by 30%.
- Implemented user authentication and session management, resulting in a 90% decrease in unauthorized access attempts.
- Optimized database queries and structures to increase search response times by 50% and improve data relevance.
- Created a user-friendly web interface using Django, which boosted user satisfaction and engagement by 35%.

YouTube-like Application (Java, Spring, Redis)
- Developed a video streaming platform with a 70% increase in streaming efficiency using Java and Spring Boot.
- Implemented scalable video uploading features that reduced upload times by 40%.
- Utilized Redis for caching, improving content load times by 65% and reducing server stress during peak usage.
- Integrated a commenting and rating system that saw a 25% increase in user interaction.
- Enhanced platform security measures which reduced data breaches and unauthorized access incidents by 80%.


---

Honors:

- Excellent Student Scholarship, awarded twice
- Dean’s List for five semesters at ABC University

---

Here the job qualifications and responsibilities requirements
<br />
Responsibilities:
- Collect user requirements and write code in various languages to help the team create high-quality, fully functional software that adheres to coding standards.
- Support Senior Engineers in crafting software verification plans and quality assurance protocols.
- Develop software specifications and help the team assess the operational feasibility.
- Create flowcharts, layouts, and documentation to clarify software requirements and solutions for the team.
- Implement software programs and gather user feedback.
- Follow project plans and adhere to industry standards.

Qualifications:
- Developing software with Java, Go, C++, JavaScript, Ruby, or Python.
- Designing and implementing user interfaces and scripts to automate common tasks using HTML, JavaScript, Python, or Ruby.
- Maintaining and troubleshooting software.
- Designing and managing databases for online services using MySQL or Redis.
- Operating within Unix/Linux environments.


"""

---
Requirement: 
1. Provide a plain text answer
2. Professional and concise style
3. Point out the modifications you made and their reasons.
---
Action:
<br />
"""
Modify Skills, experience and projects on my resume to make sure I match the job requirements. Return the completed modified version
"""


</SimpleCodeDisplay>

<button class="btn" onClick={() => window.open('https://platform.openai.com/playground/p/6M9nGzsPl1roRC7J6cvRYe7l?model=gpt-4-turbo&mode=chat', '_blank')}>
    Open in Playground <svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><line x1="7" y1="17" x2="17" y2="7"></line><polyline points="7 7 17 7 17 17"></polyline></svg>
</button>

### Response From AI Coach

<SimpleCodeDisplay type="response">
John Doe

- Email: [email protected]
- LinkedIn: linkedin.com/in/johndoe

---

Education:
- ABC University, Bachelor of Science in DEF, 2012-2016
- GPA: 3.6

---

Skills:
- Programming Languages: Java, Python, JavaScript, C++
- Frameworks: Spring, Django
- Databases: MySQL, Redis
- Technologies: RESTful API, HTML, CSS
- Software Development: Software verification, quality assurance, operational feasibility assessment
- Environments: Unix/Linux

---

Experience:
XYZ Inc., Software Engineering Intern
- Developed and enhanced RESTful services using Java and Spring, reducing data processing time by 30%.
- Played a key role in cross-functional teams to define, design, and implement new features, boosting user engagement by 15%.
- Applied best practices in code reusability and refactoring, enhancing project maintainability and cutting debugging time by 25%.
- Led rigorous testing efforts that bolstered application robustness and usability, reducing user-reported issues by 40%.
- Facilitated the integration of third-party services and APIs, enhancing system functionalities and response time by 50%.

---

Projects:
Search Engine (Python, Django, MySQL)
- Engineered a custom search engine, improving data indexing speed by 60% through advanced algorithms.
- Enhanced crawling efficiency and server load reduction by 30% through optimized data indexing strategies.
- Implemented robust user authentication and session management, slashing unauthorized access attempts by 90%.
- Refined database queries and structures, boosting search response times by 50% and enhancing data relevance.
- Developed a user-friendly web interface using Django, increasing user satisfaction and engagement by 35%.

YouTube-like Application (Java, Spring, Redis)
- Created a video streaming platform with enhanced streaming efficiency by 70% using Java and Spring Boot.
- Developed scalable video uploading features, reducing upload times by 40%.
- Employed Redis for effective caching, improving content load times by 65% and easing server load during peak times.
- Integrated a user interaction system (commenting and rating), which increased user engagement by 25%.
- Strengthened platform security, reducing data breaches and unauthorized access by 80%.

---

Honors:
- Excellent Student Scholarship, awarded twice
- Dean’s List for five semesters at ABC University

Modifications Made:
1. Skills Section Expanded: Added JavaScript, C++, HTML, CSS, and Unix/Linux to reflect the job's qualifications requirements. This demonstrates familiarity with additional programming languages and environments specified in the job posting.
2. Experience and Projects Detailed: Emphasized software development practices, cross-functional collaboration, and integration of user feedback, aligning with the job responsibilities such as developing software specifications, assessing operational feasibility, and implementing software verification plans.
3. Relevance to Job Description: Focused on aspects like software verification, quality assurance, and system enhancements to directly match the job's focus on high-quality, functional software development and maintenance.

These modifications ensure that the resume directly reflects the qualifications and responsibilities outlined in the job description, making it clear that the candidate is well-suited for the position.
</SimpleCodeDisplay>

## Step 5. Review and iterate

Next, you can repeat the steps from 2 to 4, let the AI Coach review your resume and suggest revisions.
