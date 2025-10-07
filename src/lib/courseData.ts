import { Course, Chapter } from '../types/course';

export const courses: Course[] = [
  {
    id: 'python',
    title: 'Python Programming',
    description: 'Master Python from basics to advanced concepts including OOP, data structures, and more',
    icon: '🐍',
    color: 'from-blue-500 to-cyan-500',
    difficulty: 'Beginner',
    totalChapters: 8,
    estimatedHours: 40
  },
  {
    id: 'java',
    title: 'Java Development',
    description: 'Learn Java programming, OOP principles, and build robust applications',
    icon: '☕',
    color: 'from-orange-500 to-red-500',
    difficulty: 'Intermediate',
    totalChapters: 10,
    estimatedHours: 50
  },
  {
    id: 'webdev',
    title: 'Web Development',
    description: 'Complete HTML, CSS, JavaScript stack with modern frameworks and tools',
    icon: '🌐',
    color: 'from-green-500 to-teal-500',
    difficulty: 'Beginner',
    totalChapters: 12,
    estimatedHours: 60
  },
  {
    id: 'react',
    title: 'React.js',
    description: 'Build modern web applications with React, hooks, and state management',
    icon: '⚛️',
    color: 'from-cyan-500 to-blue-600',
    difficulty: 'Intermediate',
    totalChapters: 9,
    estimatedHours: 45
  },
  {
    id: 'nodejs',
    title: 'Node.js & Backend',
    description: 'Server-side JavaScript, APIs, databases, and backend architecture',
    icon: '🟢',
    color: 'from-green-600 to-emerald-600',
    difficulty: 'Intermediate',
    totalChapters: 11,
    estimatedHours: 55
  },
  {
    id: 'dsa',
    title: 'Data Structures & Algorithms',
    description: 'Master algorithms, problem-solving, and competitive programming',
    icon: '🧮',
    color: 'from-purple-500 to-pink-500',
    difficulty: 'Advanced',
    totalChapters: 15,
    estimatedHours: 80
  },
  {
    id: 'sql',
    title: 'SQL & Databases',
    description: 'Database design, SQL queries, optimization, and data management',
    icon: '🗄️',
    color: 'from-yellow-500 to-orange-500',
    difficulty: 'Beginner',
    totalChapters: 7,
    estimatedHours: 35
  },
  {
    id: 'git',
    title: 'Git & Version Control',
    description: 'Master Git workflows, collaboration, and version control best practices',
    icon: '🔀',
    color: 'from-gray-600 to-gray-800',
    difficulty: 'Beginner',
    totalChapters: 6,
    estimatedHours: 20
  },
  {
    id: 'c',
    title: 'C Programming',
    description: 'Learn C from scratch including pointers, memory management, and system programming',
    icon: '©️',
    color: 'from-blue-600 to-indigo-700',
    difficulty: 'Intermediate',
    totalChapters: 10,
    estimatedHours: 50
  },
  {
    id: 'cpp',
    title: 'C++ Programming',
    description: 'Master C++ with OOP, STL, templates, and modern C++ features',
    icon: '⚡',
    color: 'from-blue-700 to-purple-700',
    difficulty: 'Intermediate',
    totalChapters: 12,
    estimatedHours: 60
  },
  {
    id: 'csharp',
    title: 'C# Development',
    description: 'Learn C# for .NET development, desktop apps, and game development',
    icon: '#️⃣',
    color: 'from-purple-600 to-pink-600',
    difficulty: 'Intermediate',
    totalChapters: 11,
    estimatedHours: 55
  },
  {
    id: 'go',
    title: 'Go Programming',
    description: 'Master Go for building scalable backend systems and microservices',
    icon: '🔵',
    color: 'from-cyan-500 to-blue-500',
    difficulty: 'Intermediate',
    totalChapters: 9,
    estimatedHours: 45
  },
  {
    id: 'rust',
    title: 'Rust Programming',
    description: 'Learn Rust for safe, concurrent, and high-performance systems programming',
    icon: '🦀',
    color: 'from-orange-600 to-red-600',
    difficulty: 'Advanced',
    totalChapters: 11,
    estimatedHours: 60
  },
  {
    id: 'kotlin',
    title: 'Kotlin Development',
    description: 'Master Kotlin for Android development and multiplatform applications',
    icon: '🎯',
    color: 'from-violet-500 to-purple-600',
    difficulty: 'Intermediate',
    totalChapters: 10,
    estimatedHours: 50
  },
  {
    id: 'typescript',
    title: 'TypeScript',
    description: 'Learn TypeScript for type-safe JavaScript development and better tooling',
    icon: '📘',
    color: 'from-blue-500 to-blue-700',
    difficulty: 'Intermediate',
    totalChapters: 8,
    estimatedHours: 40
  },
  {
    id: 'flutter',
    title: 'Flutter Development',
    description: 'Build cross-platform mobile apps with Flutter and Dart',
    icon: '🎨',
    color: 'from-sky-400 to-blue-500',
    difficulty: 'Intermediate',
    totalChapters: 10,
    estimatedHours: 50
  },
  {
    id: 'devops',
    title: 'DevOps & CI/CD',
    description: 'Master DevOps practices, Docker, Kubernetes, and deployment automation',
    icon: '🚀',
    color: 'from-teal-500 to-green-600',
    difficulty: 'Advanced',
    totalChapters: 12,
    estimatedHours: 65
  },
  {
    id: 'ml',
    title: 'Machine Learning',
    description: 'Learn ML algorithms, neural networks, and AI model development',
    icon: '🤖',
    color: 'from-pink-500 to-rose-600',
    difficulty: 'Advanced',
    totalChapters: 14,
    estimatedHours: 75
  }
];

export const chapters: Record<string, Chapter[]> = {
  python: [
    {
      id: 'python-1',
      courseId: 'python',
      title: 'Python Basics',
      description: 'Variables, data types, operators, and basic I/O',
      order: 1,
      content: 'Learn the fundamentals of Python programming including variables, data types, and basic operations.',
      testType: 'mcq',
      difficulty: 'Easy'
    },
    {
      id: 'python-2',
      courseId: 'python',
      title: 'Control Flow',
      description: 'If statements, loops, and conditional logic',
      order: 2,
      content: 'Master control flow in Python with if-else statements, for loops, and while loops.',
      testType: 'coding',
      difficulty: 'Easy'
    },
    {
      id: 'python-3',
      courseId: 'python',
      title: 'Functions',
      description: 'Defining functions, parameters, return values, and scope',
      order: 3,
      content: 'Learn to create reusable code with functions, understand scope, and work with parameters.',
      testType: 'mcq',
      difficulty: 'Medium'
    },
    {
      id: 'python-4',
      courseId: 'python',
      title: 'Data Structures',
      description: 'Lists, tuples, dictionaries, and sets',
      order: 4,
      content: 'Explore Python data structures and their use cases.',
      testType: 'coding',
      difficulty: 'Medium'
    },
    {
      id: 'python-5',
      courseId: 'python',
      title: 'Object-Oriented Programming',
      description: 'Classes, objects, inheritance, and polymorphism',
      order: 5,
      content: 'Understand OOP principles and how to apply them in Python.',
      testType: 'mcq',
      difficulty: 'Medium'
    },
    {
      id: 'python-6',
      courseId: 'python',
      title: 'File Handling',
      description: 'Reading and writing files, working with file paths',
      order: 6,
      content: 'Learn to read from and write to files in Python.',
      testType: 'coding',
      difficulty: 'Medium'
    },
    {
      id: 'python-7',
      courseId: 'python',
      title: 'Exception Handling',
      description: 'Try-except blocks, raising exceptions, custom exceptions',
      order: 7,
      content: 'Handle errors gracefully with exception handling.',
      testType: 'mcq',
      difficulty: 'Hard'
    },
    {
      id: 'python-8',
      courseId: 'python',
      title: 'Advanced Python',
      description: 'Decorators, generators, lambda functions, and more',
      order: 8,
      content: 'Master advanced Python concepts and techniques.',
      testType: 'coding',
      difficulty: 'Hard'
    }
  ],
  java: [
    {
      id: 'java-1',
      courseId: 'java',
      title: 'Java Fundamentals',
      description: 'Syntax, variables, data types, and operators',
      order: 1,
      content: 'Learn Java basics and write your first programs.',
      testType: 'mcq',
      difficulty: 'Easy'
    },
    {
      id: 'java-2',
      courseId: 'java',
      title: 'Control Statements',
      description: 'If-else, switch, loops, and break/continue',
      order: 2,
      content: 'Master control flow in Java.',
      testType: 'coding',
      difficulty: 'Easy'
    },
    {
      id: 'java-3',
      courseId: 'java',
      title: 'Arrays & Strings',
      description: 'Working with arrays and string manipulation',
      order: 3,
      content: 'Learn to work with arrays and strings effectively.',
      testType: 'mcq',
      difficulty: 'Medium'
    },
    {
      id: 'java-4',
      courseId: 'java',
      title: 'Object-Oriented Programming',
      description: 'Classes, objects, inheritance, encapsulation',
      order: 4,
      content: 'Understand OOP concepts in Java.',
      testType: 'coding',
      difficulty: 'Medium'
    },
    {
      id: 'java-5',
      courseId: 'java',
      title: 'Interfaces & Abstract Classes',
      description: 'Abstraction and interface implementation',
      order: 5,
      content: 'Learn about interfaces and abstract classes.',
      testType: 'mcq',
      difficulty: 'Medium'
    },
    {
      id: 'java-6',
      courseId: 'java',
      title: 'Collections Framework',
      description: 'Lists, Sets, Maps, and iterators',
      order: 6,
      content: 'Master the Java Collections Framework.',
      testType: 'coding',
      difficulty: 'Hard'
    },
    {
      id: 'java-7',
      courseId: 'java',
      title: 'Exception Handling',
      description: 'Try-catch, throw, throws, and custom exceptions',
      order: 7,
      content: 'Handle exceptions properly in Java.',
      testType: 'mcq',
      difficulty: 'Medium'
    },
    {
      id: 'java-8',
      courseId: 'java',
      title: 'File I/O',
      description: 'Reading and writing files in Java',
      order: 8,
      content: 'Learn file operations in Java.',
      testType: 'coding',
      difficulty: 'Medium'
    },
    {
      id: 'java-9',
      courseId: 'java',
      title: 'Multithreading',
      description: 'Threads, synchronization, and concurrent programming',
      order: 9,
      content: 'Understand multithreading concepts.',
      testType: 'mcq',
      difficulty: 'Hard'
    },
    {
      id: 'java-10',
      courseId: 'java',
      title: 'Advanced Java',
      description: 'Lambda expressions, streams, and modern Java features',
      order: 10,
      content: 'Master advanced Java programming.',
      testType: 'coding',
      difficulty: 'Hard'
    }
  ],
  webdev: [
    {
      id: 'web-1',
      courseId: 'webdev',
      title: 'HTML Basics',
      description: 'Elements, tags, attributes, and document structure',
      order: 1,
      content: 'Learn HTML fundamentals and structure.',
      testType: 'mcq',
      difficulty: 'Easy'
    },
    {
      id: 'web-2',
      courseId: 'webdev',
      title: 'CSS Fundamentals',
      description: 'Selectors, properties, box model, and styling',
      order: 2,
      content: 'Style your web pages with CSS.',
      testType: 'coding',
      difficulty: 'Easy'
    },
    {
      id: 'web-3',
      courseId: 'webdev',
      title: 'CSS Layout',
      description: 'Flexbox, Grid, and responsive design',
      order: 3,
      content: 'Create responsive layouts with modern CSS.',
      testType: 'mcq',
      difficulty: 'Medium'
    },
    {
      id: 'web-4',
      courseId: 'webdev',
      title: 'JavaScript Basics',
      description: 'Variables, functions, and DOM manipulation',
      order: 4,
      content: 'Learn JavaScript fundamentals.',
      testType: 'coding',
      difficulty: 'Easy'
    },
    {
      id: 'web-5',
      courseId: 'webdev',
      title: 'JavaScript Advanced',
      description: 'Closures, promises, async/await, and ES6+',
      order: 5,
      content: 'Master advanced JavaScript concepts.',
      testType: 'mcq',
      difficulty: 'Medium'
    },
    {
      id: 'web-6',
      courseId: 'webdev',
      title: 'APIs & Fetch',
      description: 'Working with REST APIs and handling data',
      order: 6,
      content: 'Learn to work with APIs and external data.',
      testType: 'coding',
      difficulty: 'Medium'
    },
    {
      id: 'web-7',
      courseId: 'webdev',
      title: 'Local Storage',
      description: 'Browser storage and state management',
      order: 7,
      content: 'Store data in the browser.',
      testType: 'mcq',
      difficulty: 'Medium'
    },
    {
      id: 'web-8',
      courseId: 'webdev',
      title: 'Forms & Validation',
      description: 'Form handling and input validation',
      order: 8,
      content: 'Create and validate web forms.',
      testType: 'coding',
      difficulty: 'Medium'
    },
    {
      id: 'web-9',
      courseId: 'webdev',
      title: 'CSS Frameworks',
      description: 'Bootstrap, Tailwind, and component libraries',
      order: 9,
      content: 'Use CSS frameworks for rapid development.',
      testType: 'mcq',
      difficulty: 'Medium'
    },
    {
      id: 'web-10',
      courseId: 'webdev',
      title: 'Build Tools',
      description: 'Webpack, Vite, and module bundlers',
      order: 10,
      content: 'Set up modern build tools.',
      testType: 'coding',
      difficulty: 'Hard'
    },
    {
      id: 'web-11',
      courseId: 'webdev',
      title: 'Web Performance',
      description: 'Optimization techniques and best practices',
      order: 11,
      content: 'Optimize your web applications.',
      testType: 'mcq',
      difficulty: 'Hard'
    },
    {
      id: 'web-12',
      courseId: 'webdev',
      title: 'Deployment',
      description: 'Hosting, domains, and going live',
      order: 12,
      content: 'Deploy your web applications.',
      testType: 'coding',
      difficulty: 'Medium'
    }
  ],
  react: [
    {
      id: 'react-1',
      courseId: 'react',
      title: 'React Basics',
      description: 'Components, JSX, and props',
      order: 1,
      content: 'Learn React fundamentals.',
      testType: 'mcq',
      difficulty: 'Easy'
    },
    {
      id: 'react-2',
      courseId: 'react',
      title: 'State & Lifecycle',
      description: 'useState, component lifecycle, and updates',
      order: 2,
      content: 'Manage component state.',
      testType: 'coding',
      difficulty: 'Medium'
    },
    {
      id: 'react-3',
      courseId: 'react',
      title: 'Events & Forms',
      description: 'Event handling and form management',
      order: 3,
      content: 'Handle user interactions.',
      testType: 'mcq',
      difficulty: 'Medium'
    },
    {
      id: 'react-4',
      courseId: 'react',
      title: 'Hooks',
      description: 'useEffect, useContext, useRef, and custom hooks',
      order: 4,
      content: 'Master React Hooks.',
      testType: 'coding',
      difficulty: 'Medium'
    },
    {
      id: 'react-5',
      courseId: 'react',
      title: 'Context API',
      description: 'Global state management with Context',
      order: 5,
      content: 'Share state across components.',
      testType: 'mcq',
      difficulty: 'Medium'
    },
    {
      id: 'react-6',
      courseId: 'react',
      title: 'React Router',
      description: 'Navigation and routing in React apps',
      order: 6,
      content: 'Build multi-page applications.',
      testType: 'coding',
      difficulty: 'Medium'
    },
    {
      id: 'react-7',
      courseId: 'react',
      title: 'API Integration',
      description: 'Fetching data and handling async operations',
      order: 7,
      content: 'Connect your app to APIs.',
      testType: 'mcq',
      difficulty: 'Hard'
    },
    {
      id: 'react-8',
      courseId: 'react',
      title: 'Performance Optimization',
      description: 'Memoization, lazy loading, and optimization',
      order: 8,
      content: 'Optimize React applications.',
      testType: 'coding',
      difficulty: 'Hard'
    },
    {
      id: 'react-9',
      courseId: 'react',
      title: 'Testing',
      description: 'Unit testing and integration testing',
      order: 9,
      content: 'Test your React components.',
      testType: 'mcq',
      difficulty: 'Hard'
    }
  ],
  nodejs: [
    {
      id: 'node-1',
      courseId: 'nodejs',
      title: 'Node.js Fundamentals',
      description: 'Runtime, modules, and npm',
      order: 1,
      content: 'Get started with Node.js.',
      testType: 'mcq',
      difficulty: 'Easy'
    },
    {
      id: 'node-2',
      courseId: 'nodejs',
      title: 'File System',
      description: 'Reading and writing files',
      order: 2,
      content: 'Work with the file system.',
      testType: 'coding',
      difficulty: 'Easy'
    },
    {
      id: 'node-3',
      courseId: 'nodejs',
      title: 'HTTP & Express',
      description: 'Creating servers and handling requests',
      order: 3,
      content: 'Build web servers with Express.',
      testType: 'mcq',
      difficulty: 'Medium'
    },
    {
      id: 'node-4',
      courseId: 'nodejs',
      title: 'RESTful APIs',
      description: 'Building REST APIs and endpoints',
      order: 4,
      content: 'Create RESTful services.',
      testType: 'coding',
      difficulty: 'Medium'
    },
    {
      id: 'node-5',
      courseId: 'nodejs',
      title: 'Middleware',
      description: 'Request processing and middleware functions',
      order: 5,
      content: 'Use middleware effectively.',
      testType: 'mcq',
      difficulty: 'Medium'
    },
    {
      id: 'node-6',
      courseId: 'nodejs',
      title: 'Databases',
      description: 'MongoDB, PostgreSQL, and ORMs',
      order: 6,
      content: 'Connect to databases.',
      testType: 'coding',
      difficulty: 'Hard'
    },
    {
      id: 'node-7',
      courseId: 'nodejs',
      title: 'Authentication',
      description: 'JWT, sessions, and security',
      order: 7,
      content: 'Implement authentication.',
      testType: 'mcq',
      difficulty: 'Hard'
    },
    {
      id: 'node-8',
      courseId: 'nodejs',
      title: 'Error Handling',
      description: 'Error management and debugging',
      order: 8,
      content: 'Handle errors properly.',
      testType: 'coding',
      difficulty: 'Medium'
    },
    {
      id: 'node-9',
      courseId: 'nodejs',
      title: 'Testing',
      description: 'Unit and integration testing',
      order: 9,
      content: 'Test your backend code.',
      testType: 'mcq',
      difficulty: 'Hard'
    },
    {
      id: 'node-10',
      courseId: 'nodejs',
      title: 'WebSockets',
      description: 'Real-time communication',
      order: 10,
      content: 'Build real-time applications.',
      testType: 'coding',
      difficulty: 'Hard'
    },
    {
      id: 'node-11',
      courseId: 'nodejs',
      title: 'Deployment',
      description: 'Deploying Node.js applications',
      order: 11,
      content: 'Deploy your backend.',
      testType: 'mcq',
      difficulty: 'Medium'
    }
  ],
  dsa: [
    {
      id: 'dsa-1',
      courseId: 'dsa',
      title: 'Time Complexity',
      description: 'Big O notation and algorithm analysis',
      order: 1,
      content: 'Understand algorithm complexity.',
      testType: 'mcq',
      difficulty: 'Easy'
    },
    {
      id: 'dsa-2',
      courseId: 'dsa',
      title: 'Arrays',
      description: 'Array operations and problems',
      order: 2,
      content: 'Master array algorithms.',
      testType: 'coding',
      difficulty: 'Easy'
    },
    {
      id: 'dsa-3',
      courseId: 'dsa',
      title: 'Linked Lists',
      description: 'Singly and doubly linked lists',
      order: 3,
      content: 'Work with linked lists.',
      testType: 'mcq',
      difficulty: 'Medium'
    },
    {
      id: 'dsa-4',
      courseId: 'dsa',
      title: 'Stacks & Queues',
      description: 'LIFO and FIFO data structures',
      order: 4,
      content: 'Implement stacks and queues.',
      testType: 'coding',
      difficulty: 'Medium'
    },
    {
      id: 'dsa-5',
      courseId: 'dsa',
      title: 'Recursion',
      description: 'Recursive thinking and problems',
      order: 5,
      content: 'Master recursion.',
      testType: 'mcq',
      difficulty: 'Medium'
    },
    {
      id: 'dsa-6',
      courseId: 'dsa',
      title: 'Sorting Algorithms',
      description: 'Bubble, merge, quick sort',
      order: 6,
      content: 'Learn sorting techniques.',
      testType: 'coding',
      difficulty: 'Medium'
    },
    {
      id: 'dsa-7',
      courseId: 'dsa',
      title: 'Searching Algorithms',
      description: 'Binary search and variants',
      order: 7,
      content: 'Master searching.',
      testType: 'mcq',
      difficulty: 'Medium'
    },
    {
      id: 'dsa-8',
      courseId: 'dsa',
      title: 'Trees',
      description: 'Binary trees and traversals',
      order: 8,
      content: 'Work with tree structures.',
      testType: 'coding',
      difficulty: 'Hard'
    },
    {
      id: 'dsa-9',
      courseId: 'dsa',
      title: 'Binary Search Trees',
      description: 'BST operations and problems',
      order: 9,
      content: 'Master BST algorithms.',
      testType: 'mcq',
      difficulty: 'Hard'
    },
    {
      id: 'dsa-10',
      courseId: 'dsa',
      title: 'Heaps',
      description: 'Min heap and max heap',
      order: 10,
      content: 'Implement heap structures.',
      testType: 'coding',
      difficulty: 'Hard'
    },
    {
      id: 'dsa-11',
      courseId: 'dsa',
      title: 'Graphs',
      description: 'Graph representation and traversal',
      order: 11,
      content: 'Learn graph algorithms.',
      testType: 'mcq',
      difficulty: 'Hard'
    },
    {
      id: 'dsa-12',
      courseId: 'dsa',
      title: 'Dynamic Programming',
      description: 'DP concepts and problems',
      order: 12,
      content: 'Master dynamic programming.',
      testType: 'coding',
      difficulty: 'Hard'
    },
    {
      id: 'dsa-13',
      courseId: 'dsa',
      title: 'Greedy Algorithms',
      description: 'Greedy approach and problems',
      order: 13,
      content: 'Learn greedy strategies.',
      testType: 'mcq',
      difficulty: 'Hard'
    },
    {
      id: 'dsa-14',
      courseId: 'dsa',
      title: 'Backtracking',
      description: 'Backtracking techniques',
      order: 14,
      content: 'Solve backtracking problems.',
      testType: 'coding',
      difficulty: 'Hard'
    },
    {
      id: 'dsa-15',
      courseId: 'dsa',
      title: 'Advanced Topics',
      description: 'Tries, segment trees, and more',
      order: 15,
      content: 'Explore advanced data structures.',
      testType: 'mcq',
      difficulty: 'Hard'
    }
  ],
  sql: [
    {
      id: 'sql-1',
      courseId: 'sql',
      title: 'SQL Basics',
      description: 'SELECT, WHERE, and basic queries',
      order: 1,
      content: 'Learn SQL fundamentals.',
      testType: 'mcq',
      difficulty: 'Easy'
    },
    {
      id: 'sql-2',
      courseId: 'sql',
      title: 'Filtering & Sorting',
      description: 'ORDER BY, LIMIT, and filtering',
      order: 2,
      content: 'Filter and sort data.',
      testType: 'coding',
      difficulty: 'Easy'
    },
    {
      id: 'sql-3',
      courseId: 'sql',
      title: 'Joins',
      description: 'INNER, LEFT, RIGHT, and FULL joins',
      order: 3,
      content: 'Combine data from multiple tables.',
      testType: 'mcq',
      difficulty: 'Medium'
    },
    {
      id: 'sql-4',
      courseId: 'sql',
      title: 'Aggregation',
      description: 'COUNT, SUM, AVG, GROUP BY',
      order: 4,
      content: 'Aggregate and summarize data.',
      testType: 'coding',
      difficulty: 'Medium'
    },
    {
      id: 'sql-5',
      courseId: 'sql',
      title: 'Subqueries',
      description: 'Nested queries and subqueries',
      order: 5,
      content: 'Use subqueries effectively.',
      testType: 'mcq',
      difficulty: 'Medium'
    },
    {
      id: 'sql-6',
      courseId: 'sql',
      title: 'Database Design',
      description: 'Normalization and schema design',
      order: 6,
      content: 'Design efficient databases.',
      testType: 'coding',
      difficulty: 'Hard'
    },
    {
      id: 'sql-7',
      courseId: 'sql',
      title: 'Optimization',
      description: 'Indexes, query optimization',
      order: 7,
      content: 'Optimize database performance.',
      testType: 'mcq',
      difficulty: 'Hard'
    }
  ],
  git: [
    {
      id: 'git-1',
      courseId: 'git',
      title: 'Git Basics',
      description: 'Init, add, commit, status',
      order: 1,
      content: 'Get started with Git.',
      testType: 'mcq',
      difficulty: 'Easy'
    },
    {
      id: 'git-2',
      courseId: 'git',
      title: 'Branching',
      description: 'Creating and merging branches',
      order: 2,
      content: 'Work with Git branches.',
      testType: 'coding',
      difficulty: 'Easy'
    },
    {
      id: 'git-3',
      courseId: 'git',
      title: 'Remote Repositories',
      description: 'Push, pull, fetch, and remote',
      order: 3,
      content: 'Collaborate with remote repos.',
      testType: 'mcq',
      difficulty: 'Medium'
    },
    {
      id: 'git-4',
      courseId: 'git',
      title: 'Conflict Resolution',
      description: 'Handling merge conflicts',
      order: 4,
      content: 'Resolve merge conflicts.',
      testType: 'coding',
      difficulty: 'Medium'
    },
    {
      id: 'git-5',
      courseId: 'git',
      title: 'Advanced Git',
      description: 'Rebase, cherry-pick, stash',
      order: 5,
      content: 'Master advanced Git commands.',
      testType: 'mcq',
      difficulty: 'Hard'
    },
    {
      id: 'git-6',
      courseId: 'git',
      title: 'Git Workflows',
      description: 'Feature branch, GitFlow, and best practices',
      order: 6,
      content: 'Use professional Git workflows.',
      testType: 'coding',
      difficulty: 'Medium'
    }
  ],
  c: [
    {
      id: 'c-1',
      courseId: 'c',
      title: 'C Basics',
      description: 'Syntax, variables, data types, and operators',
      order: 1,
      content: 'Learn C programming fundamentals.',
      testType: 'mcq',
      difficulty: 'Easy'
    },
    {
      id: 'c-2',
      courseId: 'c',
      title: 'Control Flow',
      description: 'If-else, switch, loops',
      order: 2,
      content: 'Master control structures in C.',
      testType: 'coding',
      difficulty: 'Easy'
    },
    {
      id: 'c-3',
      courseId: 'c',
      title: 'Functions',
      description: 'Function declaration, definition, and recursion',
      order: 3,
      content: 'Work with functions in C.',
      testType: 'mcq',
      difficulty: 'Medium'
    },
    {
      id: 'c-4',
      courseId: 'c',
      title: 'Arrays & Strings',
      description: 'Array manipulation and string handling',
      order: 4,
      content: 'Learn arrays and strings.',
      testType: 'coding',
      difficulty: 'Medium'
    },
    {
      id: 'c-5',
      courseId: 'c',
      title: 'Pointers',
      description: 'Pointer basics, pointer arithmetic',
      order: 5,
      content: 'Master pointer concepts.',
      testType: 'mcq',
      difficulty: 'Hard'
    },
    {
      id: 'c-6',
      courseId: 'c',
      title: 'Memory Management',
      description: 'malloc, calloc, free, and memory allocation',
      order: 6,
      content: 'Manage memory dynamically.',
      testType: 'coding',
      difficulty: 'Hard'
    },
    {
      id: 'c-7',
      courseId: 'c',
      title: 'Structures & Unions',
      description: 'Custom data types and structures',
      order: 7,
      content: 'Create complex data structures.',
      testType: 'mcq',
      difficulty: 'Medium'
    },
    {
      id: 'c-8',
      courseId: 'c',
      title: 'File I/O',
      description: 'Reading and writing files in C',
      order: 8,
      content: 'Work with files.',
      testType: 'coding',
      difficulty: 'Medium'
    },
    {
      id: 'c-9',
      courseId: 'c',
      title: 'Preprocessor Directives',
      description: 'Macros, includes, and conditional compilation',
      order: 9,
      content: 'Use preprocessor features.',
      testType: 'mcq',
      difficulty: 'Hard'
    },
    {
      id: 'c-10',
      courseId: 'c',
      title: 'Advanced C',
      description: 'Bit manipulation, advanced pointers, system programming',
      order: 10,
      content: 'Master advanced C concepts.',
      testType: 'coding',
      difficulty: 'Hard'
    }
  ],
  cpp: [
    {
      id: 'cpp-1',
      courseId: 'cpp',
      title: 'C++ Basics',
      description: 'Syntax, variables, and basic I/O',
      order: 1,
      content: 'Get started with C++.',
      testType: 'mcq',
      difficulty: 'Easy'
    },
    {
      id: 'cpp-2',
      courseId: 'cpp',
      title: 'Object-Oriented Programming',
      description: 'Classes, objects, and encapsulation',
      order: 2,
      content: 'Learn OOP in C++.',
      testType: 'coding',
      difficulty: 'Medium'
    },
    {
      id: 'cpp-3',
      courseId: 'cpp',
      title: 'Inheritance & Polymorphism',
      description: 'Inheritance, virtual functions, and polymorphism',
      order: 3,
      content: 'Master inheritance concepts.',
      testType: 'mcq',
      difficulty: 'Medium'
    },
    {
      id: 'cpp-4',
      courseId: 'cpp',
      title: 'Operator Overloading',
      description: 'Overloading operators and friend functions',
      order: 4,
      content: 'Customize operators.',
      testType: 'coding',
      difficulty: 'Medium'
    },
    {
      id: 'cpp-5',
      courseId: 'cpp',
      title: 'Templates',
      description: 'Function and class templates',
      order: 5,
      content: 'Use generic programming.',
      testType: 'mcq',
      difficulty: 'Hard'
    },
    {
      id: 'cpp-6',
      courseId: 'cpp',
      title: 'STL Basics',
      description: 'Vectors, lists, maps, and sets',
      order: 6,
      content: 'Work with STL containers.',
      testType: 'coding',
      difficulty: 'Medium'
    },
    {
      id: 'cpp-7',
      courseId: 'cpp',
      title: 'STL Algorithms',
      description: 'Sort, find, transform, and algorithms',
      order: 7,
      content: 'Use STL algorithms.',
      testType: 'mcq',
      difficulty: 'Medium'
    },
    {
      id: 'cpp-8',
      courseId: 'cpp',
      title: 'Exception Handling',
      description: 'Try, catch, throw, and exception classes',
      order: 8,
      content: 'Handle errors in C++.',
      testType: 'coding',
      difficulty: 'Medium'
    },
    {
      id: 'cpp-9',
      courseId: 'cpp',
      title: 'Smart Pointers',
      description: 'unique_ptr, shared_ptr, and memory management',
      order: 9,
      content: 'Use modern C++ memory management.',
      testType: 'mcq',
      difficulty: 'Hard'
    },
    {
      id: 'cpp-10',
      courseId: 'cpp',
      title: 'Move Semantics',
      description: 'Rvalue references and move constructors',
      order: 10,
      content: 'Optimize with move semantics.',
      testType: 'coding',
      difficulty: 'Hard'
    },
    {
      id: 'cpp-11',
      courseId: 'cpp',
      title: 'Lambda Expressions',
      description: 'Lambda functions and captures',
      order: 11,
      content: 'Use lambda functions.',
      testType: 'mcq',
      difficulty: 'Hard'
    },
    {
      id: 'cpp-12',
      courseId: 'cpp',
      title: 'Modern C++ Features',
      description: 'C++11/14/17/20 features',
      order: 12,
      content: 'Master modern C++.',
      testType: 'coding',
      difficulty: 'Hard'
    }
  ],
  csharp: [
    {
      id: 'csharp-1',
      courseId: 'csharp',
      title: 'C# Basics',
      description: 'Syntax, variables, and data types',
      order: 1,
      content: 'Learn C# fundamentals.',
      testType: 'mcq',
      difficulty: 'Easy'
    },
    {
      id: 'csharp-2',
      courseId: 'csharp',
      title: 'Control Structures',
      description: 'If, switch, loops, and control flow',
      order: 2,
      content: 'Master control structures.',
      testType: 'coding',
      difficulty: 'Easy'
    },
    {
      id: 'csharp-3',
      courseId: 'csharp',
      title: 'Object-Oriented Programming',
      description: 'Classes, objects, and inheritance',
      order: 3,
      content: 'Learn OOP in C#.',
      testType: 'mcq',
      difficulty: 'Medium'
    },
    {
      id: 'csharp-4',
      courseId: 'csharp',
      title: 'Properties & Indexers',
      description: 'Properties, auto-properties, and indexers',
      order: 4,
      content: 'Use properties effectively.',
      testType: 'coding',
      difficulty: 'Medium'
    },
    {
      id: 'csharp-5',
      courseId: 'csharp',
      title: 'Delegates & Events',
      description: 'Delegates, events, and event handling',
      order: 5,
      content: 'Work with delegates and events.',
      testType: 'mcq',
      difficulty: 'Medium'
    },
    {
      id: 'csharp-6',
      courseId: 'csharp',
      title: 'LINQ',
      description: 'Language Integrated Query',
      order: 6,
      content: 'Query data with LINQ.',
      testType: 'coding',
      difficulty: 'Hard'
    },
    {
      id: 'csharp-7',
      courseId: 'csharp',
      title: 'Async & Await',
      description: 'Asynchronous programming',
      order: 7,
      content: 'Write async code.',
      testType: 'mcq',
      difficulty: 'Hard'
    },
    {
      id: 'csharp-8',
      courseId: 'csharp',
      title: 'Collections',
      description: 'Lists, dictionaries, and generic collections',
      order: 8,
      content: 'Use collection types.',
      testType: 'coding',
      difficulty: 'Medium'
    },
    {
      id: 'csharp-9',
      courseId: 'csharp',
      title: 'Exception Handling',
      description: 'Try-catch, custom exceptions',
      order: 9,
      content: 'Handle errors properly.',
      testType: 'mcq',
      difficulty: 'Medium'
    },
    {
      id: 'csharp-10',
      courseId: 'csharp',
      title: 'File I/O',
      description: 'Reading and writing files',
      order: 10,
      content: 'Work with files.',
      testType: 'coding',
      difficulty: 'Medium'
    },
    {
      id: 'csharp-11',
      courseId: 'csharp',
      title: 'Advanced C#',
      description: 'Attributes, reflection, and advanced features',
      order: 11,
      content: 'Master advanced C# concepts.',
      testType: 'mcq',
      difficulty: 'Hard'
    }
  ],
  go: [
    {
      id: 'go-1',
      courseId: 'go',
      title: 'Go Basics',
      description: 'Syntax, variables, and types',
      order: 1,
      content: 'Get started with Go.',
      testType: 'mcq',
      difficulty: 'Easy'
    },
    {
      id: 'go-2',
      courseId: 'go',
      title: 'Control Structures',
      description: 'If, for, switch statements',
      order: 2,
      content: 'Master control flow in Go.',
      testType: 'coding',
      difficulty: 'Easy'
    },
    {
      id: 'go-3',
      courseId: 'go',
      title: 'Functions',
      description: 'Function definition and multiple returns',
      order: 3,
      content: 'Work with Go functions.',
      testType: 'mcq',
      difficulty: 'Medium'
    },
    {
      id: 'go-4',
      courseId: 'go',
      title: 'Structs & Interfaces',
      description: 'Custom types and interfaces',
      order: 4,
      content: 'Use structs and interfaces.',
      testType: 'coding',
      difficulty: 'Medium'
    },
    {
      id: 'go-5',
      courseId: 'go',
      title: 'Goroutines',
      description: 'Concurrent programming with goroutines',
      order: 5,
      content: 'Learn concurrent programming.',
      testType: 'mcq',
      difficulty: 'Hard'
    },
    {
      id: 'go-6',
      courseId: 'go',
      title: 'Channels',
      description: 'Communication between goroutines',
      order: 6,
      content: 'Use channels for communication.',
      testType: 'coding',
      difficulty: 'Hard'
    },
    {
      id: 'go-7',
      courseId: 'go',
      title: 'Error Handling',
      description: 'Error handling patterns in Go',
      order: 7,
      content: 'Handle errors the Go way.',
      testType: 'mcq',
      difficulty: 'Medium'
    },
    {
      id: 'go-8',
      courseId: 'go',
      title: 'Testing',
      description: 'Unit testing and benchmarking',
      order: 8,
      content: 'Test your Go code.',
      testType: 'coding',
      difficulty: 'Medium'
    },
    {
      id: 'go-9',
      courseId: 'go',
      title: 'Advanced Go',
      description: 'Context, reflection, and advanced patterns',
      order: 9,
      content: 'Master advanced Go concepts.',
      testType: 'mcq',
      difficulty: 'Hard'
    }
  ],
  rust: [
    {
      id: 'rust-1',
      courseId: 'rust',
      title: 'Rust Basics',
      description: 'Variables, data types, and ownership',
      order: 1,
      content: 'Learn Rust fundamentals.',
      testType: 'mcq',
      difficulty: 'Easy'
    },
    {
      id: 'rust-2',
      courseId: 'rust',
      title: 'Ownership & Borrowing',
      description: 'Memory management and borrowing rules',
      order: 2,
      content: 'Master Rust ownership.',
      testType: 'coding',
      difficulty: 'Medium'
    },
    {
      id: 'rust-3',
      courseId: 'rust',
      title: 'Structs & Enums',
      description: 'Custom data types',
      order: 3,
      content: 'Work with structs and enums.',
      testType: 'mcq',
      difficulty: 'Medium'
    },
    {
      id: 'rust-4',
      courseId: 'rust',
      title: 'Pattern Matching',
      description: 'Match expressions and patterns',
      order: 4,
      content: 'Use pattern matching.',
      testType: 'coding',
      difficulty: 'Medium'
    },
    {
      id: 'rust-5',
      courseId: 'rust',
      title: 'Error Handling',
      description: 'Result, Option, and error propagation',
      order: 5,
      content: 'Handle errors in Rust.',
      testType: 'mcq',
      difficulty: 'Medium'
    },
    {
      id: 'rust-6',
      courseId: 'rust',
      title: 'Traits',
      description: 'Defining and implementing traits',
      order: 6,
      content: 'Use traits for abstraction.',
      testType: 'coding',
      difficulty: 'Hard'
    },
    {
      id: 'rust-7',
      courseId: 'rust',
      title: 'Lifetimes',
      description: 'Lifetime annotations and references',
      order: 7,
      content: 'Understand lifetimes.',
      testType: 'mcq',
      difficulty: 'Hard'
    },
    {
      id: 'rust-8',
      courseId: 'rust',
      title: 'Collections',
      description: 'Vectors, HashMaps, and other collections',
      order: 8,
      content: 'Work with collections.',
      testType: 'coding',
      difficulty: 'Medium'
    },
    {
      id: 'rust-9',
      courseId: 'rust',
      title: 'Concurrency',
      description: 'Threads and message passing',
      order: 9,
      content: 'Write concurrent code.',
      testType: 'mcq',
      difficulty: 'Hard'
    },
    {
      id: 'rust-10',
      courseId: 'rust',
      title: 'Async Programming',
      description: 'Async/await and futures',
      order: 10,
      content: 'Use async Rust.',
      testType: 'coding',
      difficulty: 'Hard'
    },
    {
      id: 'rust-11',
      courseId: 'rust',
      title: 'Advanced Rust',
      description: 'Unsafe code, macros, and advanced features',
      order: 11,
      content: 'Master advanced Rust.',
      testType: 'mcq',
      difficulty: 'Hard'
    }
  ],
  kotlin: [
    {
      id: 'kotlin-1',
      courseId: 'kotlin',
      title: 'Kotlin Basics',
      description: 'Variables, types, and basic syntax',
      order: 1,
      content: 'Learn Kotlin fundamentals.',
      testType: 'mcq',
      difficulty: 'Easy'
    },
    {
      id: 'kotlin-2',
      courseId: 'kotlin',
      title: 'Functions & Lambdas',
      description: 'Functions, lambdas, and higher-order functions',
      order: 2,
      content: 'Master Kotlin functions.',
      testType: 'coding',
      difficulty: 'Medium'
    },
    {
      id: 'kotlin-3',
      courseId: 'kotlin',
      title: 'Classes & Objects',
      description: 'OOP in Kotlin',
      order: 3,
      content: 'Learn OOP concepts.',
      testType: 'mcq',
      difficulty: 'Medium'
    },
    {
      id: 'kotlin-4',
      courseId: 'kotlin',
      title: 'Null Safety',
      description: 'Handling nulls safely',
      order: 4,
      content: 'Work with null safety.',
      testType: 'coding',
      difficulty: 'Medium'
    },
    {
      id: 'kotlin-5',
      courseId: 'kotlin',
      title: 'Collections',
      description: 'Lists, sets, maps, and collection operations',
      order: 5,
      content: 'Use Kotlin collections.',
      testType: 'mcq',
      difficulty: 'Medium'
    },
    {
      id: 'kotlin-6',
      courseId: 'kotlin',
      title: 'Coroutines',
      description: 'Asynchronous programming with coroutines',
      order: 6,
      content: 'Learn coroutines.',
      testType: 'coding',
      difficulty: 'Hard'
    },
    {
      id: 'kotlin-7',
      courseId: 'kotlin',
      title: 'Extension Functions',
      description: 'Extending existing classes',
      order: 7,
      content: 'Use extension functions.',
      testType: 'mcq',
      difficulty: 'Medium'
    },
    {
      id: 'kotlin-8',
      courseId: 'kotlin',
      title: 'Android Development',
      description: 'Building Android apps with Kotlin',
      order: 8,
      content: 'Create Android applications.',
      testType: 'coding',
      difficulty: 'Hard'
    },
    {
      id: 'kotlin-9',
      courseId: 'kotlin',
      title: 'Data Classes',
      description: 'Working with data classes',
      order: 9,
      content: 'Use data classes effectively.',
      testType: 'mcq',
      difficulty: 'Medium'
    },
    {
      id: 'kotlin-10',
      courseId: 'kotlin',
      title: 'Advanced Kotlin',
      description: 'Sealed classes, delegation, and advanced features',
      order: 10,
      content: 'Master advanced Kotlin.',
      testType: 'coding',
      difficulty: 'Hard'
    }
  ],
  typescript: [
    {
      id: 'ts-1',
      courseId: 'typescript',
      title: 'TypeScript Basics',
      description: 'Types, interfaces, and basic syntax',
      order: 1,
      content: 'Learn TypeScript fundamentals.',
      testType: 'mcq',
      difficulty: 'Easy'
    },
    {
      id: 'ts-2',
      courseId: 'typescript',
      title: 'Type Annotations',
      description: 'Annotating types and type inference',
      order: 2,
      content: 'Use type annotations.',
      testType: 'coding',
      difficulty: 'Easy'
    },
    {
      id: 'ts-3',
      courseId: 'typescript',
      title: 'Interfaces',
      description: 'Defining and using interfaces',
      order: 3,
      content: 'Work with interfaces.',
      testType: 'mcq',
      difficulty: 'Medium'
    },
    {
      id: 'ts-4',
      courseId: 'typescript',
      title: 'Classes',
      description: 'TypeScript classes and access modifiers',
      order: 4,
      content: 'Use TypeScript classes.',
      testType: 'coding',
      difficulty: 'Medium'
    },
    {
      id: 'ts-5',
      courseId: 'typescript',
      title: 'Generics',
      description: 'Generic types and functions',
      order: 5,
      content: 'Master generics.',
      testType: 'mcq',
      difficulty: 'Hard'
    },
    {
      id: 'ts-6',
      courseId: 'typescript',
      title: 'Advanced Types',
      description: 'Union, intersection, and mapped types',
      order: 6,
      content: 'Use advanced type features.',
      testType: 'coding',
      difficulty: 'Hard'
    },
    {
      id: 'ts-7',
      courseId: 'typescript',
      title: 'Modules',
      description: 'Import, export, and module systems',
      order: 7,
      content: 'Work with modules.',
      testType: 'mcq',
      difficulty: 'Medium'
    },
    {
      id: 'ts-8',
      courseId: 'typescript',
      title: 'TypeScript with React',
      description: 'Using TypeScript in React applications',
      order: 8,
      content: 'Build type-safe React apps.',
      testType: 'coding',
      difficulty: 'Hard'
    }
  ],
  flutter: [
    {
      id: 'flutter-1',
      courseId: 'flutter',
      title: 'Flutter Basics',
      description: 'Widgets, layouts, and app structure',
      order: 1,
      content: 'Learn Flutter fundamentals.',
      testType: 'mcq',
      difficulty: 'Easy'
    },
    {
      id: 'flutter-2',
      courseId: 'flutter',
      title: 'Dart Language',
      description: 'Dart syntax and features',
      order: 2,
      content: 'Master Dart programming.',
      testType: 'coding',
      difficulty: 'Easy'
    },
    {
      id: 'flutter-3',
      courseId: 'flutter',
      title: 'Stateful Widgets',
      description: 'Managing state in Flutter',
      order: 3,
      content: 'Work with stateful widgets.',
      testType: 'mcq',
      difficulty: 'Medium'
    },
    {
      id: 'flutter-4',
      courseId: 'flutter',
      title: 'Navigation',
      description: 'Routes and navigation',
      order: 4,
      content: 'Navigate between screens.',
      testType: 'coding',
      difficulty: 'Medium'
    },
    {
      id: 'flutter-5',
      courseId: 'flutter',
      title: 'Forms & Input',
      description: 'Handling user input',
      order: 5,
      content: 'Create forms and handle input.',
      testType: 'mcq',
      difficulty: 'Medium'
    },
    {
      id: 'flutter-6',
      courseId: 'flutter',
      title: 'State Management',
      description: 'Provider, Riverpod, and state patterns',
      order: 6,
      content: 'Manage app state.',
      testType: 'coding',
      difficulty: 'Hard'
    },
    {
      id: 'flutter-7',
      courseId: 'flutter',
      title: 'Networking',
      description: 'HTTP requests and APIs',
      order: 7,
      content: 'Connect to APIs.',
      testType: 'mcq',
      difficulty: 'Medium'
    },
    {
      id: 'flutter-8',
      courseId: 'flutter',
      title: 'Local Storage',
      description: 'SharedPreferences and databases',
      order: 8,
      content: 'Store data locally.',
      testType: 'coding',
      difficulty: 'Medium'
    },
    {
      id: 'flutter-9',
      courseId: 'flutter',
      title: 'Animations',
      description: 'Creating animations in Flutter',
      order: 9,
      content: 'Animate your UI.',
      testType: 'mcq',
      difficulty: 'Hard'
    },
    {
      id: 'flutter-10',
      courseId: 'flutter',
      title: 'Publishing Apps',
      description: 'Building and deploying to app stores',
      order: 10,
      content: 'Publish your Flutter app.',
      testType: 'coding',
      difficulty: 'Medium'
    }
  ],
  devops: [
    {
      id: 'devops-1',
      courseId: 'devops',
      title: 'DevOps Fundamentals',
      description: 'DevOps principles and culture',
      order: 1,
      content: 'Learn DevOps basics.',
      testType: 'mcq',
      difficulty: 'Easy'
    },
    {
      id: 'devops-2',
      courseId: 'devops',
      title: 'Linux Basics',
      description: 'Linux commands and administration',
      order: 2,
      content: 'Master Linux essentials.',
      testType: 'coding',
      difficulty: 'Easy'
    },
    {
      id: 'devops-3',
      courseId: 'devops',
      title: 'Version Control',
      description: 'Git workflows and best practices',
      order: 3,
      content: 'Use Git effectively.',
      testType: 'mcq',
      difficulty: 'Medium'
    },
    {
      id: 'devops-4',
      courseId: 'devops',
      title: 'Docker',
      description: 'Containers and Docker basics',
      order: 4,
      content: 'Containerize applications.',
      testType: 'coding',
      difficulty: 'Medium'
    },
    {
      id: 'devops-5',
      courseId: 'devops',
      title: 'Kubernetes',
      description: 'Container orchestration',
      order: 5,
      content: 'Deploy with Kubernetes.',
      testType: 'mcq',
      difficulty: 'Hard'
    },
    {
      id: 'devops-6',
      courseId: 'devops',
      title: 'CI/CD',
      description: 'Continuous integration and deployment',
      order: 6,
      content: 'Build CI/CD pipelines.',
      testType: 'coding',
      difficulty: 'Hard'
    },
    {
      id: 'devops-7',
      courseId: 'devops',
      title: 'Infrastructure as Code',
      description: 'Terraform and IaC principles',
      order: 7,
      content: 'Manage infrastructure as code.',
      testType: 'mcq',
      difficulty: 'Hard'
    },
    {
      id: 'devops-8',
      courseId: 'devops',
      title: 'Monitoring',
      description: 'Prometheus, Grafana, and observability',
      order: 8,
      content: 'Monitor applications.',
      testType: 'coding',
      difficulty: 'Medium'
    },
    {
      id: 'devops-9',
      courseId: 'devops',
      title: 'Cloud Platforms',
      description: 'AWS, Azure, and GCP',
      order: 9,
      content: 'Deploy to the cloud.',
      testType: 'mcq',
      difficulty: 'Hard'
    },
    {
      id: 'devops-10',
      courseId: 'devops',
      title: 'Security',
      description: 'DevSecOps and security best practices',
      order: 10,
      content: 'Secure your infrastructure.',
      testType: 'coding',
      difficulty: 'Hard'
    },
    {
      id: 'devops-11',
      courseId: 'devops',
      title: 'Configuration Management',
      description: 'Ansible and configuration automation',
      order: 11,
      content: 'Automate configuration.',
      testType: 'mcq',
      difficulty: 'Hard'
    },
    {
      id: 'devops-12',
      courseId: 'devops',
      title: 'Advanced DevOps',
      description: 'Service mesh, GitOps, and advanced topics',
      order: 12,
      content: 'Master advanced DevOps.',
      testType: 'coding',
      difficulty: 'Hard'
    }
  ],
  ml: [
    {
      id: 'ml-1',
      courseId: 'ml',
      title: 'Machine Learning Basics',
      description: 'Introduction to ML and algorithms',
      order: 1,
      content: 'Get started with ML.',
      testType: 'mcq',
      difficulty: 'Easy'
    },
    {
      id: 'ml-2',
      courseId: 'ml',
      title: 'Python for ML',
      description: 'NumPy, Pandas, and data manipulation',
      order: 2,
      content: 'Use Python for ML.',
      testType: 'coding',
      difficulty: 'Easy'
    },
    {
      id: 'ml-3',
      courseId: 'ml',
      title: 'Linear Regression',
      description: 'Linear models and regression',
      order: 3,
      content: 'Learn regression techniques.',
      testType: 'mcq',
      difficulty: 'Medium'
    },
    {
      id: 'ml-4',
      courseId: 'ml',
      title: 'Classification',
      description: 'Logistic regression and classification',
      order: 4,
      content: 'Build classifiers.',
      testType: 'coding',
      difficulty: 'Medium'
    },
    {
      id: 'ml-5',
      courseId: 'ml',
      title: 'Decision Trees',
      description: 'Tree-based algorithms',
      order: 5,
      content: 'Use decision trees.',
      testType: 'mcq',
      difficulty: 'Medium'
    },
    {
      id: 'ml-6',
      courseId: 'ml',
      title: 'Neural Networks',
      description: 'Introduction to neural networks',
      order: 6,
      content: 'Build neural networks.',
      testType: 'coding',
      difficulty: 'Hard'
    },
    {
      id: 'ml-7',
      courseId: 'ml',
      title: 'Deep Learning',
      description: 'CNNs, RNNs, and deep learning',
      order: 7,
      content: 'Master deep learning.',
      testType: 'mcq',
      difficulty: 'Hard'
    },
    {
      id: 'ml-8',
      courseId: 'ml',
      title: 'Natural Language Processing',
      description: 'Text processing and NLP',
      order: 8,
      content: 'Process natural language.',
      testType: 'coding',
      difficulty: 'Hard'
    },
    {
      id: 'ml-9',
      courseId: 'ml',
      title: 'Computer Vision',
      description: 'Image processing and CV',
      order: 9,
      content: 'Work with images.',
      testType: 'mcq',
      difficulty: 'Hard'
    },
    {
      id: 'ml-10',
      courseId: 'ml',
      title: 'Unsupervised Learning',
      description: 'Clustering and dimensionality reduction',
      order: 10,
      content: 'Learn unsupervised techniques.',
      testType: 'coding',
      difficulty: 'Hard'
    },
    {
      id: 'ml-11',
      courseId: 'ml',
      title: 'Reinforcement Learning',
      description: 'RL algorithms and applications',
      order: 11,
      content: 'Explore reinforcement learning.',
      testType: 'mcq',
      difficulty: 'Hard'
    },
    {
      id: 'ml-12',
      courseId: 'ml',
      title: 'Model Deployment',
      description: 'Deploying ML models to production',
      order: 12,
      content: 'Deploy ML models.',
      testType: 'coding',
      difficulty: 'Hard'
    },
    {
      id: 'ml-13',
      courseId: 'ml',
      title: 'MLOps',
      description: 'ML operations and pipelines',
      order: 13,
      content: 'Manage ML workflows.',
      testType: 'mcq',
      difficulty: 'Hard'
    },
    {
      id: 'ml-14',
      courseId: 'ml',
      title: 'Advanced Topics',
      description: 'GANs, transformers, and cutting-edge ML',
      order: 14,
      content: 'Master advanced ML.',
      testType: 'coding',
      difficulty: 'Hard'
    }
  ]
};
