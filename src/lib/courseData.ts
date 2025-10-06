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
  ]
};
