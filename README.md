# Portfolio


## View live preview [here](https://portfolio-5mujb2rdt-b-surendra-raos-projects.vercel.app/)

---

# Installation :arrow_down:

### You will need to download Git and Node to run this project

- [Git](https://git-scm.com/downloads)
- [Node](https://nodejs.org/en/download/)

#### Make sure you have the latest version of both Git and Node on your computer.

```
node --version
git --version
```

## <br />

# Getting Started :dart:


```
git clone https://github.com/<YOUR GITHUB USERNAME>/portfolio.git

cd github-portfolio
```

### Install packages from the root directory

```bash
npm install
# or
yarn install
```

Then, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

---

# Usage :joystick:

If you want to use Google Analytics, Please create a new `.env` file from `.env.example` file and provide the value.

Eg:

```env
NEXT_PUBLIC_GTM = ""
```

### Now, you have to customize user data in the `data` [folder](https://github.com/surendra-rao/portfolio/tree/main/data).

Eg:

```javascript
export const userData = {
  email: 'surendrarao@gmail.com',
  experience: '2.6+ years',
  githubUser: 'surendra-rao',
  devUsername: "surendra-rao",
  github: 'https://github.com/surendra-rao',
  linkedIn: 'www.linkedin.com/in/surendra-rao-bongu-1552ab1a1',
  resume: "https://drive.google.com/file/d/1My5xxtYekQRb4cjtb7ThrLRACpvqlwif/view?usp=sharing",
  skills: ['React', 'NextJS', 'Redux', 'Express', 'NestJS', 'MySql', 'MongoDB', 'Postgres', 'Docker', 'AWS'],
  technical_skills : [
    "Python", "Django", "Django REST Framework", "FastAPI", "MySQL", "MongoDB", "Redis", "Docker", "Git", "HTML", "CSS", "JavaScript", "React.js", "AWS", "Linux", "Swagger",
    "Agile Methodology", "JIRA"
  ],
  soft_skills :[
    "Problem Solving", "Team Collaboration", "Communication", "Time Management", "Adaptability"
],
  timezone: 'GMT+5:30',
};
```

---

---

# Packages Used :package:

|   Used Package List   |
| :-------------------: |
|         next          |
|  @next/third-parties  |
|         axios         |
|      react-icons      |
| react-github-calendar |
|         sass          |
|      tailwindcss      |

---

