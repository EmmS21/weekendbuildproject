# weekendbuildproject
Weekend Build Project


## Purpose
A platform to match bootcamp students to companies based on company culture and tech stack used.

## Components

### Home Page 
A short description of how the site works including a login/signup button.

### Signup/Login
Modals that pop up on the home page upon a user clicking said buttons. Conditionally show login/logout depending on whether the user has been authenticated

### Signup Process
User is required to enter a; password, email (will be username), first & last name

### User Dashboard
Users can customize/update their profile info, including profile picture, username, email, name, password and location

### Questions leading to match
A wizard component with a list of questions for users which will be used to match the user to a company/list of companies:

- Questions about values and what they want from a workspace
- Questions around tech stack comfort levels
- Questions pertaining experience level; languages, frameworks
- The size of the companies they are interested in
- Remote/in office
- Perks and benefits offered by company
- Ideal Compensation
- Engineering culture (ie. pair programming, mentorship etc.)
- Preferred interview process (ie. Leetcode, takehome, live pair programming etc.)

### Results component
A page that renders a list of companies best matching the user based on the answers they gave to the questions given to them
- Percentage match/ how closely matched are you to X company
- accordion showing users more details about a company: description, location, interview process 