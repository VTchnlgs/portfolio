import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowLeft, Calendar, Clock, GraduationCap, Users } from "lucide-react"
import { notFound } from "next/navigation"

// Course data with syllabi
const coursesData = {
  "react-js": {
    title: "React JS",
    category: "Frontend Development",
    description: "Master the most popular JavaScript library for building interactive user interfaces",
    longDescription:
      "Master React JS and transform your frontend development skills! This comprehensive course takes you from React basics to advanced concepts used by professional developers.\n\n💡 What You'll Get:\n✅ Component-Based Architecture: Learn to build reusable UI components.\n✅ State Management: Master React hooks and context API.\n✅ Modern Practices: Implement the latest React patterns and best practices.\n✅ Real Projects: Build portfolio-worthy applications from scratch.\n✅ Performance Optimization: Learn techniques to create lightning-fast React apps.\n\nBecome the React developer companies are looking for! 🚀",
    duration: "8 weeks",
    level: "Beginner to Advanced",
    students: "1,200+",
    nextBatch: "June 15, 2023",
    price: "$799",
    syllabus: [
      {
        "week": 1,
        "title": "HTML Basics",
        "topics": [
          "Introduction to HTML",
          "What is HTML?",
          "Structure of an HTML document",
          "Common tags and elements",
          "Forms and input elements",
          "Anchor tags, image tags, and links",
          "Lists and tables",
          "Semantic HTML"
        ]
      },
      {
        "week": 2,
        "title": "CSS Basics",
        "topics": [
          "Introduction to CSS",
          "What is CSS?",
          "Inline, internal, and external CSS",
          "Selectors, classes, and IDs",
          "CSS Box Model (padding, margin, border, content)",
          "Text properties (font-size, font-family, color)",
          "Styling links, buttons, and images",
          "Positioning (static, relative, absolute, fixed)",
          "Flexbox basics (align-items, justify-content, etc.)"
        ]
      },
      {
        "week": 3,
        "title": "Advanced CSS and Responsive Design",
        "topics": [
          "CSS Grid Layout",
          "Media Queries (Responsive design)",
          "Advanced CSS selectors (pseudo-classes, pseudo-elements)",
          "CSS Transitions & Animations",
          "CSS Variables",
          "Introduction to Bootstrap (what is Bootstrap, setting it up)",
          "Using Bootstrap Grid System and Components (cards, buttons, navbars)"
        ]
      },
      {
        "week": 4,
        "title": "JavaScript (Basics and ES6)",
        "topics": [
          "Introduction to JavaScript",
          "Variables (let, const, var)",
          "Data types (strings, numbers, booleans, arrays, objects)",
          "Operators (arithmetic, comparison, logical)",
          "Functions (declaration, expressions, arrow functions)",
          "Conditional statements (if, else, switch)",
          "Loops (for, while, do-while)",
          "Arrays and Objects (methods, destructuring)"
        ]
      },
      {
        "week": 5,
        "title": "Advanced JavaScript Concepts (ES6+)",
        "topics": [
          "ES6 Features:",
          "Template literals",
          "Default parameters",
          "Rest and Spread Operators",
          "Destructuring assignment",
          "Classes and inheritance",
          "Modules (import/export)",
          "Promises and async/await",
          "DOM Manipulation (querySelector, event listeners)"
        ]
      },
      {
        "week": 6,
        "title": "Introduction to ReactJS",
        "topics": [
          "What is React?",
          "Setting up a React project (using Create React App)",
          "JSX (JavaScript Syntax Extension)",
          "Components and Props",
          "Functional vs. Class Components",
          "State and useState Hook",
          "Handling events in React",
          "Rendering lists and conditional rendering",
          "Introduction to React DevTools"
        ]
      },
      {
        "week": 7,
        "title": "ReactJS (State Management and Hooks)",
        "topics": [
          "useEffect Hook (component lifecycle)",
          "useContext Hook",
          "useRef Hook",
          "React Router for navigation",
          "Lifting state up and prop drilling",
          "Controlled vs Uncontrolled components",
          "Forms in React (handling user input)"
        ]
      },
      {
        "week": 8,
        "title": "ReactJS (Advanced Topics)",
        "topics": [
          "React Component Composition",
          "Higher-Order Components (HOCs)",
          "Error Boundaries in React",
          "Portals in React",
          "React Suspense and Lazy Loading",
          "Code Splitting"
        ]
      },
      {
        "week": 9,
        "title": "Introduction to Redux",
        "topics": [
          "What is Redux and why use it?",
          "Redux principles (Store, Actions, Reducers)",
          "Creating actions and reducers",
          "Dispatching actions and updating the store",
          "Connecting React components with Redux (using connect)",
          "Introduction to redux-thunk for asynchronous actions"
        ]
      },
      {
        "week": 10,
        "title": "Redux with React",
        "topics": [
          "Setting up Redux with React",
          "useSelector and useDispatch hooks",
          "Implementing Redux in a project",
          "Handling forms with Redux",
          "Debugging Redux with Redux DevTools"
        ]
      },
      {
        "week": 11,
        "title": "Advanced React and Redux",
        "topics": [
          "Working with Middleware (redux-thunk, redux-saga)",
          "Optimizing React and Redux performance",
          "Normalizing data in Redux store",
          "Managing large applications with Redux",
          "Server-side rendering with React"
        ]
      },
      {
        "week": 12,
        "title": "Bootstrap, Final Project, and Review",
        "topics": [
          "Advanced Bootstrap components (modals, carousels, tooltips, etc.)",
          "Using Bootstrap with React for layout and design",
          "Styling React apps with custom CSS and Bootstrap",
          "Review of all topics covered",
          "Building a Final Project that incorporates React, Redux, HTML, CSS, and Bootstrap",
          "Example: A To-Do List App with Redux, or a simple eCommerce site"
        ]
      }
    ],
  },
  "angular-js": {
    title: "Angular JS",
    category: "Frontend Development",
    description: "Learn the powerful framework for building dynamic web applications",
    longDescription:
      "Dive into Angular and become proficient in building enterprise-grade web applications! This course covers everything from TypeScript fundamentals to advanced Angular concepts.\n\n💡 What You'll Get:\n✅ TypeScript Mastery: Build a strong foundation in typed JavaScript.\n✅ Component Architecture: Create scalable, maintainable applications.\n✅ RxJS & Observables: Master reactive programming techniques.\n✅ Angular Material: Design beautiful, responsive UIs.\n✅ Testing & Deployment: Learn industry-standard practices for quality code.\n\nLevel up your frontend development career with Angular! 🚀",
    duration: "10 weeks",
    level: "Intermediate",
    students: "950+",
    nextBatch: "July 1, 2023",
    price: "$899",
    syllabus:[
      {
        "week": 1,
        "title": "Introduction to Angular & HTML Basics",
        "topics": [
          "TypeScript Fundamentals",
          "Angular Architecture Overview",
          "Setting up Development Environment",
          "Angular CLI",
          "Creating Your First Angular App",
          "Introduction to HTML",
          "Structure of an HTML document",
          "Tags, Elements, and Attributes",
          "Headings, Paragraphs, Lists",
          "Links, Images, Forms",
          "Tables and Embedding Media",
          "HTML5 Features",
          "New Elements (e.g., <section>, <article>, <nav>)",
          "Semantic HTML",
          "Forms and Input Types in HTML5",
          "Audio and Video embedding",
          "Local Storage and Session Storage"
        ]
      },
      {
        "week": 2,
        "title": "Components and Templates & CSS Basics",
        "topics": [
          "Component Architecture",
          "Component Lifecycle",
          "Data Binding",
          "Pipes",
          "Template Syntax",
          "Introduction to CSS",
          "Syntax and Selectors",
          "Colors, Fonts, and Text Styles",
          "Box Model (Margin, Padding, Border, Content)",
          "Positioning (Static, Relative, Absolute, Fixed)",
          "Display and Visibility properties (block, inline, flex)",
          "CSS3 Features",
          "Transitions and Animations",
          "Transformations (Translate, Rotate, Scale, Skew)",
          "Flexbox Layout",
          "Grid Layout"
        ]
      },
      {
        "week": 3,
        "title": "Directives and Services & JavaScript Basics",
        "topics": [
          "Built-in Directives",
          "Custom Directives",
          "Dependency Injection",
          "Creating Services",
          "Providers",
          "Introduction to JavaScript",
          "Variables (var, let, const)",
          "Data Types (String, Number, Boolean, Object, Array)",
          "Functions, Conditionals, Loops",
          "DOM Manipulation (Selecting and Changing elements)",
          "Event Handling (onclick, onsubmit, etc.)",
          "Understanding JavaScript's Scope and Closures",
          "Introduction to JavaScript Objects and Arrays"
        ]
      },
      {
        "week": 4,
        "title": "Forms in Angular & JavaScript Advanced Topics",
        "topics": [
          "Template-Driven Forms",
          "Reactive Forms",
          "Form Validation",
          "Custom Validators",
          "Dynamic Forms",
          "Advanced Functions",
          "Arrow Functions",
          "Callback Functions",
          "Higher-order Functions",
          "Error Handling and Debugging",
          "Try-Catch blocks",
          "Throwing and Catching Errors",
          "Debugging Tools (Console, Breakpoints)",
          "Introduction to ES6 (ECMAScript 2015)",
          "let and const",
          "Template Literals",
          "Destructuring Assignment",
          "Default Parameters and Spread Operator"
        ]
      },
      {
        "week": 5,
        "title": "Routing and Navigation & Deep Dive into ES6",
        "topics": [
          "Setting up Routes",
          "Route Parameters",
          "Child Routes",
          "Route Guards",
          "Lazy Loading Modules",
          "Arrow Functions",
          "Classes and Inheritance",
          "Modules and Import/Export",
          "Promises and Async/Await",
          "Map, Set, and other ES6 Collections"
        ]
      },
      {
        "week": 6,
        "title": "HTTP and Observables & Introduction to TypeScript",
        "topics": [
          "RxJS Fundamentals",
          "HTTP Client",
          "Error Handling",
          "Interceptors",
          "Caching Strategies",
          "Setting up TypeScript Development Environment",
          "Installing Node.js and TypeScript",
          "Using tsc Compiler",
          "TypeScript Syntax and Types (number, string, boolean, arrays, tuples)",
          "Functions, Interfaces, and Classes in TypeScript",
          "Function Types",
          "Interface Implementation",
          "Class Inheritance",
          "TypeScript Advanced Features",
          "Generics",
          "Namespaces and Modules"
        ]
      },
      {
        "week": 7,
        "title": "State Management & Advanced TypeScript Features",
        "topics": [
          "Component Communication",
          "Services for State",
          "NgRx Store",
          "Actions and Reducers",
          "Effects",
          "Decorators",
          "Namespaces and Modules",
          "Type Assertions",
          "Working with TypeScript and JavaScript together",
          "Tooling (tslint, webpack)"
        ]
      },
      {
        "week": 8,
        "title": "Angular Material & Working with JavaScript Frameworks and Libraries",
        "topics": [
          "Material Design Principles",
          "Angular Material Components",
          "Theming",
          "Responsive Layouts",
          "Custom Material Components",
          "Introduction to jQuery and Bootstrap",
          "jQuery selectors, events, and effects",
          "Bootstrap Grid system and responsive design",
          "Using Bootstrap components (Navbar, Modals, Buttons)",
          "Responsive Web Design",
          "Media Queries in CSS3",
          "Mobile-first Design"
        ]
      },
      {
        "week": 9,
        "title": "Introduction to AngularJS and Setup",
        "topics": [
          "Setting up AngularJS Environment",
          "Installing Node.js, Angular CLI",
          "Creating a New Angular Project",
          "Angular Folder Structure",
          "Overview of Angular Components, Templates, and Modules",
          "Basic Angular Concepts",
          "Directives",
          "Binding (Interpolation, Property Binding, Event Binding)",
          "Data Binding (Two-way Binding)",
          "Angular Services and Dependency Injection"
        ]
      },
      {
        "week": 10,
        "title": "Angular Components and Directives & Angular Components",
        "topics": [
          "Angular Components",
          "Creating and using Components",
          "Component Lifecycle Hooks",
          "Input and Output properties",
          "Directives in AngularJS",
          "Built-in Directives (ngIf, ngFor, ngModel)",
          "Custom Directives",
          "Structural vs Attribute Directives"
        ]
      },
      {
        "week": 11,
        "title": "Angular Services and Routing",
        "topics": [
          "Services and Dependency Injection in Angular",
          "Creating and Injecting Services",
          "HTTP Service for API calls (using HttpClient)",
          "RxJS and Observables",
          "Angular Routing",
          "Setting up Routes",
          "Navigating Between Views",
          "Route Guards",
          "Lazy Loading"
        ]
      },
      {
        "week": 12,
        "title": "Forms in Angular",
        "topics": [
          "Template-driven Forms",
          "ngModel and form validations",
          "Reactive Forms",
          "FormControl, FormGroup, FormBuilder",
          "Validation and Error Handling",
          "Async Validation"
        ]
      },
      {
        "week": 13,
        "title": "Advanced Angular Concepts",
        "topics": [
          "Angular Pipes",
          "Built-in Pipes (Date, Currency, etc.)",
          "Creating Custom Pipes",
          "Angular Animations",
          "Using Angular Animation API",
          "Transitions, Triggers, and States",
          "Angular Modules",
          "Feature Modules, Shared Modules",
          "Module Lazy Loading and Eager Loading"
        ]
      },
      {
        "week": 14,
        "title": "State Management and RxJS",
        "topics": [
          "State Management with Angular",
          "Introduction to NgRx (State management library)",
          "Actions, Reducers, Effects",
          "RxJS Basics",
          "Observables and Operators (map, filter, merge)",
          "Handling asynchronous operations in Angular"
        ]
      },
      {
        "week": 15,
        "title": "Testing in Angular",
        "topics": [
          "Unit Testing Angular Components",
          "Using Jasmine and Karma",
          "Writing Unit Tests for Components and Services",
          "End-to-End Testing",
          "Using Protractor for E2E Testing",
          "Writing E2E Tests"
        ]
      },
      {
        "week": 16,
        "title": "Final Project and Best Practices",
        "topics": [
          "Project Setup and Requirements",
          "Plan and build a full-fledged Angular application",
          "Incorporate Bootstrap, TypeScript, Services, Routing, and Forms",
          "Code Optimization and Best Practices",
          "Lazy Loading, AOT Compilation",
          "Change Detection Strategy (OnPush)",
          "Code Splitting and Performance Improvements",
          "Deployment and Hosting",
          "Building and deploying the Angular Application on a server (Netlify, Heroku, etc.)",
          "Final Project (During Weeks 15-16)",
          "Develop a dynamic, data-driven web application using Angular, TypeScript, HTML5, CSS3, and Bootstrap.",
          "Example Project: Task Manager, E-commerce site, or Blog application."
        ]
      }
    ],
  },
  "mern-stack": {
    title: "MERN Stack",
    category: "Full Stack Development",
    description: "Comprehensive training in MongoDB, Express, React, and Node.js",
    longDescription:
      "Become a full-stack developer with our comprehensive MERN Stack course! Learn to build complete web applications using MongoDB, Express, React, and Node.js.\n\n💡 What You'll Get:\n✅ End-to-End Development: Master both frontend and backend technologies.\n✅ Database Design: Learn NoSQL database modeling with MongoDB.\n✅ API Development: Create robust RESTful APIs with Express and Node.js.\n✅ Modern UI: Build dynamic user interfaces with React.\n✅ Authentication & Deployment: Implement secure user authentication and deploy your applications.\n\nTransform your career with in-demand full-stack development skills! 🚀",
    duration: "12 weeks",
    level: "Intermediate to Advanced",
    students: "1,500+",
    nextBatch: "June 20, 2023",
    price: "$1,299",
    syllabus: [
      {
        "week": 1,
        "title": "Introduction to Web Development",
        "topics": [
          "Overview of Web Development",
          "Web Browsers, Server, and Client",
          "Introduction to HTML",
          "Basic Structure of HTML Documents",
          "HTML Tags, Elements, and Attributes",
          "Forms and Inputs",
          "Lists, Tables, Links, Images",
          "Audio, Video, Embedding Media"
        ]
      },
      {
        "week": 2,
        "title": "Advanced HTML5",
        "topics": [
          "New HTML5 Elements (e.g., <article>, <section>, <nav>, <footer>)",
          "HTML5 Semantics",
          "Local Storage and Session Storage",
          "Geolocation API",
          "Canvas API for Drawing Graphics"
        ]
      },
      {
        "week": 3,
        "title": "CSS Fundamentals",
        "topics": [
          "Introduction to CSS: Selectors, Properties, and Values",
          "Box Model (Margins, Borders, Padding)",
          "Positioning: Static, Relative, Absolute, Fixed, Sticky",
          "Flexbox and Grid Layout",
          "CSS Animations and Transitions"
        ]
      },
      {
        "week": 4,
        "title": "Advanced CSS3",
        "topics": [
          "Responsive Design with Media Queries",
          "Advanced Styling with Pseudo-classes and Pseudo-elements",
          "CSS Variables",
          "Preprocessors (e.g., Sass, LESS)",
          "Mobile-First Design Approach"
        ]
      },
      {
        "week": 5,
        "title": "JavaScript (JS) and ES6",
        "topics": [
          "Introduction to JavaScript",
          "JavaScript Syntax and Basic Constructs",
          "Variables, Data Types, Operators",
          "Conditionals (if, else, switch)",
          "Loops (for, while, do-while)",
          "Functions: Function Declarations, Expressions, Arrow Functions"
        ]
      },
      {
        "week": 6,
        "title": "Working with Objects and Arrays",
        "topics": [
          "Understanding Objects and Arrays",
          "Array Methods (map, filter, reduce)",
          "Object Methods (Object.keys(), Object.values(), etc.)",
          "JSON (JavaScript Object Notation)"
        ]
      },
      {
        "week": 7,
        "title": "ES6 Features",
        "topics": [
          "Let and Const vs Var",
          "Arrow Functions",
          "Template Literals",
          "Destructuring Assignment (arrays and objects)",
          "Default Parameters, Rest and Spread Operators"
        ]
      },
      {
        "week": 8,
        "title": "Advanced JavaScript Concepts",
        "topics": [
          "Closures and Scopes",
          "Asynchronous JavaScript (Callbacks, Promises)",
          "Async/Await",
          "Error Handling (try, catch, throw)"
        ]
      },
      {
        "week": 9,
        "title": "Introduction to React",
        "topics": [
          "What is React? Why React?",
          "Setting up a React App with Create React App",
          "JSX (JavaScript Syntax Extension)",
          "React Components (Class and Functional Components)",
          "Props and State in React"
        ]
      },
      {
        "week": 10,
        "title": "React Component Lifecycle",
        "topics": [
          "Lifecycle Methods (Class Components)",
          "useEffect and useState Hooks (Functional Components)",
          "Event Handling in React",
          "Forms and Controlled Components"
        ]
      },
      {
        "week": 11,
        "title": "Advanced React",
        "topics": [
          "React Router for Navigation",
          "React Context for State Management",
          "Functional Components vs Class Components",
          "Error Boundaries in React",
          "Performance Optimization (React.memo, useCallback, useMemo)"
        ]
      },
      {
        "week": 12,
        "title": "State Management with Redux",
        "topics": [
          "Introduction to Redux",
          "Actions, Reducers, Store",
          "Dispatching Actions",
          "Connecting React with Redux (React-Redux)",
          "Redux Thunk for Async Actions"
        ]
      },
      {
        "week": 13,
        "title": "Node.js Fundamentals",
        "topics": [
          "Node.js Architecture",
          "NPM and Package Management",
          "Modules and CommonJS",
          "Asynchronous Programming",
          "Event Loop"
        ]
      },
      {
        "week": 14,
        "title": "Express.js Framework",
        "topics": [
          "Express.js Overview",
          "Routing",
          "Middleware",
          "Error Handling",
          "Template Engines"
        ]
      },
      {
        "week": 15,
        "title": "MongoDB and Mongoose",
        "topics": [
          "NoSQL Database Concepts",
          "MongoDB CRUD Operations",
          "Mongoose ODM",
          "Schema Design",
          "Data Validation"
        ]
      },
      {
        "week": 16,
        "title": "API Development",
        "topics": [
          "RESTful API Design",
          "CRUD API Implementation",
          "Authentication with JWT",
          "Authorization",
          "API Testing"
        ]
      },
      {
        "week": 17,
        "title": "Frontend-Backend Integration",
        "topics": [
          "Axios for API Calls",
          "CORS",
          "Error Handling",
          "Loading States",
          "Form Submissions"
        ]
      },
      {
        "week": 18,
        "title": "Authentication and Authorization",
        "topics": [
          "User Registration and Login",
          "JWT Implementation",
          "Protected Routes",
          "Role-Based Access Control",
          "Security Best Practices"
        ]
      },
      {
        "week": 19,
        "title": "Advanced React Patterns",
        "topics": [
          "Higher-Order Components",
          "Render Props",
          "Custom Hooks",
          "Performance Optimization",
          "Code Splitting"
        ]
      },
      {
        "week": 20,
        "title": "Deployment and DevOps",
        "topics": [
          "Environment Configuration",
          "Deployment Strategies",
          "CI/CD Pipelines",
          "Containerization with Docker",
          "Cloud Hosting (AWS/Heroku)"
        ]
      },
      {
        "week": 21,
        "title": "Final Project",
        "topics": [
          "Project Planning",
          "Full-Stack Implementation",
          "Testing",
          "Debugging",
          "Presentation"
        ]
      }
    ],
  },
  "marn-stack": {
    title: "MARN Stack",
    category: "Full Stack Development",
    description: "Master MongoDB, Angular, React, and Node.js for full-stack applications",
    longDescription: "Master MongoDB, Angular, React, and Node.js for full-stack applications",
    duration: "12 weeks",
    level: "Intermediate to Advanced",
    students: "900+",
    nextBatch: "July 10, 2023",
    price: "$1,299",
    syllabus: [
      {
        week: 1,
        title: "Introduction to MARN Stack",
        topics: [
          "Web Development Overview",
          "MARN Stack Architecture",
          "Setting up Development Environment",
          "JavaScript/TypeScript Fundamentals",
          "Git and GitHub",
        ],
      },
      {
        week: 2,
        title: "Node.js Fundamentals",
        topics: [
          "Node.js Architecture",
          "NPM and Package Management",
          "Modules and CommonJS",
          "Asynchronous Programming",
          "Event Loop",
        ],
      },
      {
        week: 3,
        title: "Express.js Framework",
        topics: ["Express.js Overview", "Routing", "Middleware", "Error Handling", "Template Engines"],
      },
      {
        week: 4,
        title: "MongoDB and Mongoose",
        topics: [
          "NoSQL Database Concepts",
          "MongoDB CRUD Operations",
          "Mongoose ODM",
          "Schema Design",
          "Data Validation",
        ],
      },
      {
        week: 5,
        title: "API Development",
        topics: [
          "RESTful API Design",
          "CRUD API Implementation",
          "Authentication with JWT",
          "Authorization",
          "API Testing",
        ],
      },
      {
        week: 6,
        title: "Angular Fundamentals",
        topics: [
          "Angular Architecture",
          "Components and Templates",
          "Data Binding",
          "Directives",
          "Services and Dependency Injection",
        ],
      },
      {
        week: 7,
        title: "Angular Routing and Forms",
        topics: [
          "Routing and Navigation",
          "Route Guards",
          "Template-Driven Forms",
          "Reactive Forms",
          "Form Validation",
        ],
      },
      {
        week: 8,
        title: "React Fundamentals",
        topics: ["React Components", "JSX", "Props and State", "Lifecycle Methods", "Hooks"],
      },
      {
        week: 9,
        title: "React Router and State Management",
        topics: ["Client-Side Routing", "Context API", "Redux", "Redux Middleware", "Async Actions"],
      },
      {
        week: 10,
        title: "Frontend-Backend Integration",
        topics: ["HTTP Client in Angular", "Axios in React", "CORS", "Error Handling", "State Management with APIs"],
      },
      {
        week: 11,
        title: "Deployment and DevOps",
        topics: [
          "Environment Configuration",
          "Deployment Strategies",
          "CI/CD Pipelines",
          "Containerization with Docker",
          "Cloud Hosting (AWS/Heroku)",
        ],
      },
      {
        week: 12,
        title: "Final Project",
        topics: ["Project Planning", "Full-Stack Implementation", "Testing", "Debugging", "Presentation"],
      },
    ],
  },
  "mevn-stack": {
    title: "MEVN Stack",
    category: "Full Stack Development",
    description: "Learn MongoDB, Express, Vue.js, and Node.js for modern web applications",
    longDescription: "Learn MongoDB, Express, Vue.js, and Node.js for modern web applications",
    duration: "12 weeks",
    level: "Intermediate",
    students: "750+",
    nextBatch: "July 15, 2023",
    price: "$1,199",
    syllabus: [
      {
        week: 1,
        title: "Introduction to MEVN Stack",
        topics: [
          "Web Development Overview",
          "MEVN Stack Architecture",
          "Setting up Development Environment",
          "JavaScript/ES6+ Refresher",
          "Git and GitHub",
        ],
      },
      {
        week: 2,
        title: "Node.js Fundamentals",
        topics: [
          "Node.js Architecture",
          "NPM and Package Management",
          "Modules and CommonJS",
          "Asynchronous Programming",
          "Event Loop",
        ],
      },
      {
        week: 3,
        title: "Express.js Framework",
        topics: ["Express.js Overview", "Routing", "Middleware", "Error Handling", "Template Engines"],
      },
      {
        week: 4,
        title: "MongoDB and Mongoose",
        topics: [
          "NoSQL Database Concepts",
          "MongoDB CRUD Operations",
          "Mongoose ODM",
          "Schema Design",
          "Data Validation",
        ],
      },
      {
        week: 5,
        title: "API Development",
        topics: [
          "RESTful API Design",
          "CRUD API Implementation",
          "Authentication with JWT",
          "Authorization",
          "API Testing",
        ],
      },
      {
        week: 6,
        title: "Vue.js Fundamentals",
        topics: ["Vue.js Overview", "Vue CLI", "Vue Components", "Directives", "Data Binding"],
      },
      {
        week: 7,
        title: "Vue.js Advanced Concepts",
        topics: ["Computed Properties", "Watchers", "Methods", "Lifecycle Hooks", "Component Communication"],
      },
      {
        week: 8,
        title: "Vue Router and State Management",
        topics: ["Client-Side Routing", "Route Guards", "Vuex State Management", "Actions and Mutations", "Modules"],
      },
      {
        week: 9,
        title: "Frontend-Backend Integration",
        topics: ["Axios for API Calls", "CORS", "Error Handling", "Loading States", "Form Submissions"],
      },
      {
        week: 10,
        title: "Authentication and Authorization",
        topics: [
          "User Registration and Login",
          "JWT Implementation",
          "Protected Routes",
          "Role-Based Access Control",
          "Security Best Practices",
        ],
      },
      {
        week: 11,
        title: "Deployment and DevOps",
        topics: [
          "Environment Configuration",
          "Deployment Strategies",
          "CI/CD Pipelines",
          "Containerization with Docker",
          "Cloud Hosting (AWS/Heroku)",
        ],
      },
      {
        week: 12,
        title: "Final Project",
        topics: ["Project Planning", "Full-Stack Implementation", "Testing", "Debugging", "Presentation"],
      },
    ],
  },
  "java-full-stack": {
    title: "Java Full Stack",
    category: "Full Stack Development",
    description: "Comprehensive training in Java, Spring Boot, and React for enterprise applications",
    longDescription:
      "Join our Java Mastery Bootcamp and elevate your coding skills to the next level! Whether you're a beginner or looking to enhance your expertise, this expert-led program provides comprehensive training from Java fundamentals to advanced concepts.\n\n💡 What You'll Get:\n✅ Hands-on Learning: Work on real-world projects and coding challenges.\n✅ Expert Guidance: Learn from industry professionals.\n✅ Structured Curriculum: Covers core Java, advanced topics, and best practices.\n✅ Practical Assignments: Reinforce your learning with interactive exercises.\n✅ Career-Ready Skills: Prepare for real-world development and job opportunities.\n\nTake the leap towards becoming a skilled Java developer! 🚀",
    duration: "16 weeks",
    level: "Beginner to Advanced",
    students: "1,100+",
    nextBatch: "June 25, 2023",
    price: "$1,499",
    syllabus: [
      {
        "week": 1,
        "title": "Introduction to Java",
        "topics": [
          "Java Fundamentals",
          "JDK and Development Environment",
          "Variables and Data Types",
          "Control Flow",
          "Functions and Methods"
        ]
      },
      {
        "week": 2,
        "title": "Object-Oriented Programming",
        "topics": [
          "Classes and Objects",
          "Inheritance",
          "Polymorphism",
          "Encapsulation",
          "Abstraction"
        ]
      },
      {
        "week": 3,
        "title": "Java Advanced Concepts",
        "topics": [
          "Collections Framework",
          "Exception Handling",
          "Generics",
          "File I/O",
          "Multithreading"
        ]
      },
      {
        "week": 4,
        "title": "Database Fundamentals",
        "topics": [
          "SQL Basics",
          "JDBC",
          "Database Design",
          "Normalization",
          "Transactions"
        ]
      },
      {
        "week": 5,
        "title": "Introduction to Spring Framework",
        "topics": [
          "Spring Core",
          "Dependency Injection",
          "Inversion of Control",
          "Spring Beans",
          "Application Context"
        ]
      },
      {
        "week": 6,
        "title": "Spring Boot",
        "topics": [
          "Spring Boot Overview",
          "Auto-Configuration",
          "Spring Boot Starters",
          "Properties and Profiles",
          "Logging"
        ]
      },
      {
        "week": 7,
        "title": "Spring Data JPA",
        "topics": [
          "ORM Concepts",
          "JPA Entities",
          "Repositories",
          "JPQL",
          "Transactions"
        ]
      },
      {
        "week": 8,
        "title": "RESTful API Development",
        "topics": [
          "REST Principles",
          "Spring MVC",
          "Request Mapping",
          "Response Handling",
          "Exception Handling"
        ]
      },
      {
        "week": 9,
        "title": "Spring Security",
        "topics": [
          "Authentication",
          "Authorization",
          "JWT Implementation",
          "OAuth2",
          "Method Security"
        ]
      },
      {
        "week": 10,
        "title": "Microservices Architecture",
        "topics": [
          "Microservices Principles",
          "Spring Cloud",
          "Service Discovery",
          "API Gateway",
          "Circuit Breaker"
        ]
      },
      {
        "week": 11,
        "title": "Testing in Spring",
        "topics": [
          "Unit Testing with JUnit",
          "Mockito",
          "Integration Testing",
          "Test Slices",
          "Test Containers"
        ]
      },
      {
        "week": 12,
        "title": "Frontend Basics",
        "topics": [
          "HTML/CSS",
          "JavaScript Fundamentals",
          "DOM Manipulation",
          "ES6+ Features",
          "Asynchronous JavaScript"
        ]
      },
      {
        "week": 13,
        "title": "React Fundamentals",
        "topics": [
          "React Components",
          "JSX",
          "Props and State",
          "Lifecycle Methods",
          "Hooks"
        ]
      },
      {
        "week": 14,
        "title": "Frontend-Backend Integration",
        "topics": [
          "Axios for API Calls",
          "CORS Configuration",
          "Error Handling",
          "State Management",
          "Form Submissions"
        ]
      },
      {
        "week": 15,
        "title": "Deployment and DevOps",
        "topics": [
          "CI/CD Pipelines",
          "Docker",
          "Kubernetes Basics",
          "Cloud Deployment",
          "Monitoring"
        ]
      },
      {
        "week": 16,
        "title": "Final Project",
        "topics": [
          "Project Planning",
          "Full-Stack Implementation",
          "Testing",
          "Debugging",
          "Presentation"
        ]
      },
      {
        "week": 17,
        "title": "Front-End Development (UI Layer)",
        "topics": [
          "Basic Structure of an HTML Page",
          "HTML Tags and Elements (head, body, div, span, etc.)",
          "Forms and Input Fields",
          "Links and Navigation",
          "Lists and Tables",
          "HTML Attributes (id, class, src, alt, etc.)",
          "Audio, Video, and Embed Elements",
          "Semantic HTML (header, footer, main, article, section, etc.)",
          "HTML5 Features (Geolocation, Web Storage, etc.)",
          "Introduction to CSS",
          "Inline, Internal, and External CSS",
          "CSS Selectors (class, id, descendant, child, etc.)",
          "CSS Box Model (padding, margin, border, content)",
          "Positioning (static, relative, absolute, fixed, sticky)",
          "CSS Layouts (flexbox, grid, floats)",
          "CSS Typography (fonts, text-align, line-height, letter-spacing)",
          "CSS Pseudo-classes (hover, focus, active, etc.)",
          "Media Queries (Responsive Design)",
          "CSS3 Transitions, Animations, and Transformations",
          "HTML5 Elements (article, section, aside, footer, header, nav, etc.)",
          "Form Elements (input types, date, range, color, etc.)",
          "New Input Attributes (required, placeholder, pattern, etc.)",
          "CSS3 Transitions and Animations",
          "CSS3 Media Queries for Responsive Web Design",
          "Advanced Selectors and Pseudo-classes (nth-child, nth-of-type, etc.)",
          "JavaScript Syntax and Data Types",
          "Variables (var, let, const)",
          "Operators (arithmetic, logical, comparison, assignment)",
          "Conditional Statements (if, else, switch)",
          "Loops (for, while, do-while)",
          "Functions (declaration, expression, arrow functions)",
          "Arrays and Objects",
          "Events (click, mouseover, submit, etc.)",
          "DOM Manipulation (document.getElementById, document.querySelector)",
          "Form Validation with JavaScript",
          "Asynchronous JavaScript (setTimeout, setInterval, callbacks)",
          "AJAX (Asynchronous JavaScript and XML)",
          "JSON (JavaScript Object Notation)",
          "ES6 Features (let, const, template literals, destructuring, modules, promises)",
          "Error Handling (try, catch, throw, finally)"
        ]
      },
      {
        "week": 18,
        "title": "Back-End Development (Server Layer)",
        "topics": [
          "Java Syntax and Structure",
          "Variables and Data Types",
          "Operators and Control Statements",
          "Functions/Methods and Overloading",
          "Object-Oriented Programming (OOP) Concepts (Classes, Objects, Inheritance, Polymorphism, Abstraction, Encapsulation)",
          "Java Collections (ArrayList, HashMap, Set, etc.)",
          "Exception Handling (try, catch, throw, throws)",
          "File Handling (Reading and Writing Files)",
          "Java Streams and Lambdas",
          "Introduction to Servlets and the Servlet Life Cycle",
          "HttpServlet Class and Request-Response Handling",
          "Handling HTTP Methods (GET, POST, PUT, DELETE)",
          "Working with Cookies, Sessions, and URL Rewriting",
          "ServletContext and ServletConfig",
          "Servlet Filters and Listeners",
          "Servlet Deployment and Configuration (web.xml)",
          "Handling Forms with Servlets",
          "Introduction to JSP and Life Cycle",
          "JSP Syntax (Directives, Declarations, Scriptlets)",
          "JSP Standard Tag Library (JSTL)",
          "Expression Language (EL) in JSP",
          "Custom Tags in JSP",
          "JSP and Servlet Integration",
          "Error Handling in JSP",
          "Implicit Objects in JSP (request, response, session, application)",
          "JSP Tag Libraries (Tag Library Description, Tag Files)"
        ]
      },
      {
        "week": 19,
        "title": "Frameworks and Libraries",
        "topics": [
          "Introduction to Spring and its Modules (Core, AOP, JDBC, ORM, etc.)",
          "Dependency Injection (DI) and Inversion of Control (IoC)",
          "Spring MVC (Model View Controller Architecture)",
          "Spring Boot (Creating Standalone Applications)",
          "Spring Data (JPA, Hibernate Integration)",
          "Spring Security (Authentication and Authorization)",
          "Spring REST (Creating RESTful Web Services)",
          "Spring Batch (for Batch Processing)",
          "Introduction to ORM (Object Relational Mapping)",
          "Hibernate Basics and Configuration",
          "Hibernate Mapping (Annotations, XML Configuration)",
          "CRUD Operations with Hibernate",
          "Hibernate Query Language (HQL)",
          "Spring and Hibernate Integration"
        ]
      },
      {
        "week": 20,
        "title": "Database",
        "topics": [
          "SQL Basics",
          "Relational Database Concepts",
          "SQL Queries (SELECT, INSERT, UPDATE, DELETE)",
          "SQL Joins (INNER JOIN, LEFT JOIN, RIGHT JOIN)",
          "SQL Grouping and Aggregation (GROUP BY, COUNT, AVG, etc.)",
          "Subqueries and Nested Queries",
          "Database Normalization (1NF, 2NF, 3NF)",
          "MySQL / PostgreSQL / Oracle / SQLite",
          "Installation and Configuration",
          "Basic Database Operations",
          "Database Design and Indexing",
          "Stored Procedures and Triggers",
          "JDBC (Java Database Connectivity)",
          "Introduction to JDBC",
          "Setting up Database Connection in Java",
          "Executing SQL Queries using JDBC",
          "Prepared Statements and Callable Statements"
        ]
      },
      {
        "week": 21,
        "title": "Web Services",
        "topics": [
          "REST Principles and Architecture",
          "Creating REST APIs with Spring Boot",
          "HTTP Methods (GET, POST, PUT, DELETE)",
          "JSON Response and Request Body",
          "Exception Handling in REST APIs",
          "Introduction to SOAP",
          "Creating SOAP Web Services in Java",
          "WSDL (Web Services Description Language)",
          "SOAP Request and Response Handling"
        ]
      },
      {
        "week": 22,
        "title": "Tools and Version Control",
        "topics": [
          "Maven / Gradle",
          "Dependency Management with Maven",
          "Build Automation with Gradle",
          "Git and GitHub",
          "Version Control Concepts (commits, branches, merging)",
          "Working with Git Repositories",
          "GitHub for Collaboration"
        ]
      }
    ]
    ,
  },
  "vue-js": {
    title: "Vue JS",
    category: "Frontend Development",
    description: "Explore the progressive JavaScript framework for building user interfaces",
    longDescription: "Explore the progressive JavaScript framework for building user interfaces",
    duration: "8 weeks",
    level: "Beginner to Intermediate",
    students: "800+",
    nextBatch: "July 5, 2023",
    price: "$799",
    syllabus: [
      {
        "week": 1,
        "title": "Introduction to Vue.js",
        "topics": [
          "JavaScript ES6+ Refresher",
          "Vue.js Overview and Philosophy",
          "Setting up Development Environment",
          "Vue CLI",
          "Creating Your First Vue App",
          "HTML & HTML5: Structure of HTML documents",
          "HTML5 features: Local Storage, Canvas, Audio/Video, Geolocation API"
        ]
      },
      {
        "week": 2,
        "title": "Vue.js Fundamentals",
        "topics": [
          "Vue Instance",
          "Template Syntax",
          "Directives",
          "Data Binding",
          "Computed Properties and Watchers",
          "CSS & CSS3: Basic styling (colors, fonts, margins, padding)",
          "Box Model, Flexbox, and Grid Layouts",
          "Responsive Web Design: Media Queries",
          "CSS3 features: Transitions, Animations, and Transforms"
        ]
      },
      {
        "week": 3,
        "title": "Components and Props",
        "topics": [
          "Component Architecture",
          "Component Registration",
          "Props",
          "Custom Events",
          "Slots",
          "JavaScript Basics & ES6: Variables (let, const, var), Data types, Functions, and Operators",
          "DOM Manipulation: Selecting and updating elements, Events",
          "Control structures: Loops, Conditionals",
          "Error handling and debugging",
          "ES6: Arrow Functions, Template Literals, Destructuring",
          "Spread Operator, Default Parameters",
          "Classes, Modules, Promises, and Async/Await"
        ]
      },
      {
        "week": 4,
        "title": "Forms and Inputs",
        "topics": [
          "Form Handling",
          "v-model Directive",
          "Form Validation",
          "Custom Inputs",
          "Vuelidate",
          "CSS & CSS3: Box Model, Flexbox, and Grid Layouts",
          "Responsive Web Design: Media Queries",
          "JavaScript Basics & ES6: Let and Const (Block-scoped variables)"
        ]
      },
      {
        "week": 5,
        "title": "Vue Router",
        "topics": [
          "Client-Side Routing",
          "Route Configuration",
          "Dynamic Routes",
          "Nested Routes",
          "Navigation Guards",
          "Advanced JavaScript Concepts: Asynchronous JavaScript - Callbacks, Promises, Async/Await",
          "Fetch API for HTTP requests",
          "Error handling with Promises and Try/Catch"
        ]
      },
      {
        "week": 6,
        "title": "State Management with Vuex",
        "topics": [
          "State Management Patterns",
          "Vuex Store",
          "State and Getters",
          "Mutations and Actions",
          "Modules",
          "Advanced JavaScript Concepts: JavaScript Design Patterns - Modules, Factory Pattern, Singleton Pattern"
        ]
      },
      {
        "week": 7,
        "title": "API Integration",
        "topics": [
          "HTTP Requests with Axios",
          "API Calls in Vuex Actions",
          "Error Handling",
          "Loading States",
          "Caching Strategies",
          "Vue.js Basics: What is Vue.js? Overview of its core principles (Reactivity, Declarative Rendering, and Component-based architecture)",
          "Vue Instance, Vue Components, Data Binding, Event Handling",
          "Directives: v-if, v-for, v-bind, v-model"
        ]
      },
      {
        "week": 8,
        "title": "Advanced Vue.js and Deployment",
        "topics": [
          "Composition API",
          "Performance Optimization",
          "Testing Vue Components",
          "Build for Production",
          "Deployment Strategies",
          "Vue.js Fundamentals: Computed Properties and Watchers",
          "Handling User Input, Forms in Vue",
          "Methods and Lifecycle Hooks (mounted, created, updated)"
        ]
      },
      {
        "week": 9,
        "title": "Intermediate Vue.js",
        "topics": [
          "Vue CLI: Setting up projects with Vue CLI",
          "Project structure and basic configuration",
          "Vue Router: Handling navigation between views",
          "State Management: Introduction to Vuex: Centralized State Management",
          "Store, State, Mutations, Actions, Getters",
          "Vuex with Vue Components (Passing and accessing data)"
        ]
      },
      {
        "week": 10,
        "title": "Intermediate Vue.js",
        "topics": [
          "Vue Router: Handling navigation between views",
          "State Management: Introduction to Vuex: Centralized State Management",
          "Store, State, Mutations, Actions, Getters",
          "Vuex with Vue Components (Passing and accessing data)"
        ]
      },
      {
        "week": 11,
        "title": "Advanced Vue.js",
        "topics": [
          "Advanced Vue Concepts: Dynamic Components",
          "Mixins and Custom Directives",
          "Custom Events and Event Bus",
          "Filters and Global/Local Components",
          "Vue Router & Vuex Advanced: Nested Routes and Lazy Loading with Vue Router",
          "Modular Vuex Store",
          "Vue Router Guards and Navigation"
        ]
      },
      {
        "week": 12,
        "title": "Building Real-world Vue.js Applications",
        "topics": [
          "Project Work: Build a fully functional Vue.js app (e.g., To-Do App, Blog, or Weather App)",
          "Using APIs (Axios or Fetch) for dynamic data fetching",
          "Deployment (Netlify, Vercel, or Heroku)",
          "Final Project: Full-stack application with Vue.js, Vuex, Vue Router, and integration with an external backend API"
        ]
      }
    ],
  },
  "reasoning-aptitude": {
  "title": "Reasoning and Aptitude",
  "category": "Placement Training",
  "description": "Prepare for placement exams and improve your problem-solving skills.",
  "longDescription": 
    "This course is designed to help you ace placement tests by strengthening your reasoning and aptitude skills. Whether you're preparing for campus recruitment or job interviews, this course covers a wide range of topics that are crucial for clearing competitive exams.\n\n💡 What You'll Get:\n✅ Logical Reasoning: Sharpen your ability to think critically and solve problems.\n✅ Quantitative Aptitude: Build a solid foundation in mathematical problem-solving techniques.\n✅ Verbal Ability: Improve your communication skills with focus on vocabulary, reading comprehension, and grammar.\n✅ Time Management: Master strategies to solve problems quickly and efficiently.\n✅ Placement Test Practice: Take mock tests and gain confidence before your interview!\n\nLevel up your placement preparation with our expert-led course! 🚀",
  "duration": "8 weeks",
  "level": "Beginner to Intermediate",
  "students": "5000+",
  "nextBatch": "April 15, 2025",
  "price": "$199",
  "syllabus": [
    {
      "week": 1,
      "title": "Introduction to Reasoning and Aptitude",
      "topics": [
        "Overview of Placement Exams",
        "Importance of Reasoning and Aptitude in Placements",
        "Time Management and Exam Strategy",
        "Basic Mathematics Refresher"
      ]
    },
    {
      "week": 2,
      "title": "Verbal Reasoning",
      "topics": [
        "Syllogism",
        "Blood Relations",
        "Direction Sense",
        "Analogy and Classification",
        "Ranking and Ordering"
      ]
    },
    {
      "week": 3,
      "title": "Logical Reasoning",
      "topics": [
        "Series Completion",
        "Puzzles and Arrangements",
        "Logical Deductions",
        "Statement and Assumptions",
        "Verbal and Non-Verbal Reasoning"
      ]
    },
    {
      "week": 4,
      "title": "Quantitative Aptitude - Part 1",
      "topics": [
        "Number System",
        "Arithmetic Operations",
        "Percentages and Profit/Loss",
        "Averages and Mixtures",
        "Speed, Time, and Distance"
      ]
    },
    {
      "week": 5,
      "title": "Quantitative Aptitude - Part 2",
      "topics": [
        "Time and Work",
        "Simple and Compound Interest",
        "Ratio and Proportions",
        "Permutation and Combination",
        "Probability"
      ]
    },
    {
      "week": 6,
      "title": "Data Interpretation and Data Sufficiency",
      "topics": [
        "Tables and Graphs",
        "Pie Charts, Bar Graphs, and Line Charts",
        "Caselets",
        "Data Sufficiency Techniques"
      ]
    },
    {
      "week": 7,
      "title": "Verbal Ability",
      "topics": [
        "Reading Comprehension",
        "Sentence Correction",
        "Vocabulary and Synonyms/Antonyms",
        "Error Detection",
        "Para Jumbles"
      ]
    },
    {
      "week": 8,
      "title": "Mock Tests and Placement Test Strategies",
      "topics": [
        "Mock Tests on Reasoning and Aptitude",
        "Time Management during the Test",
        "How to Approach Different Sections",
        "Test-Taking Tips and Tricks",
        "Final Review and Feedback"
      ]
    }
  ]
}

}

export default function CoursePage({ params }: { params: { slug: string } }) {
  const course = coursesData[params.slug as keyof typeof coursesData]

  if (!course) {
    notFound()
  }

  return (
    <div className="flex flex-col min-h-screen">
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-r from-blue-600 to-indigo-700 text-white">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl">
                {course.title}
              </h1>
              <p className="mx-auto max-w-[700px] text-gray-200 md:text-xl">{course.description}</p>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full py-8 md:py-12 bg-gray-50">
        <div className="container px-4 md:px-6">
          <div className="mx-auto max-w-3xl">
            <div className="space-y-4">
              <h2 className="text-2xl font-bold tracking-tighter">Course Overview</h2>
              {course.longDescription && (
                <div className="prose max-w-none">
                  {course.longDescription.split("\n").map((line, i) => (
                    <p key={i} className="whitespace-pre-line">
                      {line}
                    </p>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      <section className="w-full py-12 md:py-24 lg:py-32 bg-white">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-3 lg:gap-12">
            <div className="lg:col-span-2">
              <div className="space-y-4">
                <h2 className="text-3xl font-bold tracking-tighter">Course Syllabus</h2>
                <p className="text-gray-500">
                  Our comprehensive curriculum is designed to take you from the fundamentals to advanced concepts.
                </p>
              </div>
              <div className="mt-8 space-y-6">
                {course.syllabus.map((week) => (
                  <Card key={week.week} className="overflow-hidden">
                    <CardHeader className="bg-gray-50 dark:bg-gray-800">
                      <CardTitle>
                        Week {week.week}: {week.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="pt-4">
                      <ul className="list-disc pl-5 space-y-2">
                        {week.topics.map((topic, index) => (
                          <li key={index} className="text-gray-700 dark:text-gray-300">
                            {topic}
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Course Details</CardTitle>
                  <CardDescription>Everything you need to know</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center gap-2">
                    <Clock className="h-5 w-5 text-blue-600" />
                    <div>
                      <p className="text-sm font-medium">Duration</p>
                      <p className="text-sm text-gray-500">{course.duration}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <GraduationCap className="h-5 w-5 text-blue-600" />
                    <div>
                      <p className="text-sm font-medium">Difficulty Level</p>
                      <p className="text-sm text-gray-500">{course.level}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <Users className="h-5 w-5 text-blue-600" />
                    <div>
                      <p className="text-sm font-medium">Students Enrolled</p>
                      <p className="text-sm text-gray-500">{course.students}</p>
                    </div>
                  </div>
                  {/*
                  <div className="flex items-center gap-2">
                    <Calendar className="h-5 w-5 text-blue-600" />
                    <div>
                      <p className="text-sm font-medium">Next Batch Starts</p>
                      <p className="text-sm text-gray-500">{course.nextBatch}</p>
                    </div>
                  </div>
                  <div className="pt-4">
                    <p className="text-sm font-medium">Price</p>
                    <p className="text-2xl font-bold text-blue-600">{course.price}</p>
                  </div>
                  */}
                  <div className="pt-4">
                    <Link href="/#contact-form">
                      <Button className="w-full">Enroll Now</Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Have Questions?</CardTitle>
                  <CardDescription>We're here to help</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-500 mb-4">
                    Contact our admissions team for more information about this course, payment plans, or career
                    opportunities.
                  </p>
                  <Link href="/#contact-form">
                    <Button variant="outline" className="w-full">
                      Contact Us
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            </div>
          </div>
          <div className="mt-12">
            <Link href="/courses">
              <Button variant="outline" className="flex items-center gap-2">
                <ArrowLeft className="h-4 w-4" />
                Back to All Courses
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

