// concepts data

export const concepts = [
  {
    id: 1,
    name: "HTML",
    category: "Front-end",
    description:
      "HTML (HyperText Markup Language) is the standard language used to structure and organize content on the web, such as text, images, links, and forms. It defines the basic building blocks of a webpage that browsers can display.",
    status: "Completed",
    image: "/assets/HTML5_logo.png",
  },
  {
    id: 2,
    name: "CSS",
    category: "Front-end",
    description:
      "CSS (Cascading Style Sheets) is used to control the visual appearance of a webpage, including layout, colors, fonts, and spacing. It works alongside HTML to make web content look polished and responsive.",
    status: "Completed",
    image: "/assets/CSS_logo.png",
  },
  {
    id: 3,
    name: "JavasScript",
    category: "Front-end",
    description:
      "JavaScript is a programming language that adds interactivity and dynamic behavior to webpages, such as handling user actions, updating content, and communicating with servers. It allows websites to respond to users in real time.",
    status: "Completed",
    image: "/assets/JS_logo.png",
  },
  {
    id: 4,
    name: "React",
    category: "Front-end",
    description:
      "React is a JavaScript library used to build interactive user interfaces by breaking the UI into reusable components. It efficiently updates the page when data changes, making complex applications faster and easier to manage.",
    status: "In-Progress",
    image: "/assets/React-icon.svg.png",
  },
  {
    id: 5,
    name: "Git & GitHub",
    category: "Version control",
    description:
      "Git is a version control system that tracks changes in code and helps developers collaborate safely. GitHub is a platform that hosts Git repositories online, making it easier to share code, manage projects, and work with others.",
    status: "In-Progress",
    image: "/assets/git&github_logo.png",
  },
  {
    id: 6,
    name: "Node.js",
    category: "Back-End",
    description:
      "Node.js is a runtime environment that allows JavaScript to run outside the browser, typically on a server. It’s commonly used to build fast, scalable backend services and APIs.",
    status: "In-Progress",
    image: "/assets/nodejs_log.png",
  },
  {
    id: 7,
    name: "Express.js",
    category: "Back-End",
    description:
      "Express.js is a lightweight Node.js framework used to build web servers and APIs with simpler routing and request handling.",
    status: "Not-Started",
    image: "/assets/expressjs_logo.png",
  },
  {
    id: 8,
    name: "MongoDB",
    category: "Back-End",
    description:
      "MongoDB is a NoSQL database that stores data in flexible, JSON-like documents instead of tables.",
    status: "Not-Started",
    image: "/assets/mongoDB_logo.jpg",
  },
  {
    id: 9,
    name: "REST APIs",
    category: "API",
    description:
      "REST APIs are interfaces that allow different applications to communicate over HTTP using standard methods like GET, POST, PUT, and DELETE.",
    status: "Not-Started",
    image: "/assets/restapis_logo.png",
  },
  {
    id: 10,
    name: "Authentication & Authorization & Web Security",
    category: "Cyber Security",
    description:
      "Authentication & Authorization ensure users are who they claim to be and control what actions or resources they can access, Web Security involves protecting applications from common attacks such as XSS, CSRF, and SQL injection.",
    status: "Not-Started",
    image: "/assets/cybersecurity_logo.jpg",
  },
  {
    id: 11,
    name: "Full Stack & Deployment",
    category: "Full-Stack",
    description:
      "Full Stack Integration & Deployment & DevOps Basics involve connecting the frontend, backend, and database into a complete application, then deploying it to production using tools and workflows that automate builds, testing, and releases while keeping systems reliable and scalable.",
    status: "Not-Started",
    image: "/assets/full_stack_logo.jpg",
  },
];

// Helper function to get concept by ID
export function getConceptsById(id) {
  return concepts.find((concept) => concept.id === parseInt(id));
}

// Helper function to get concepts by category
export function getConceptsByCategory(category) {
  if (!category || category === "all") {
    return concepts;
  }
  return concepts.filter((concept) => concept.category === category);
}

// Helper function to search concepts by name
export function getConcepts(searchTerm) {
  if (!searchTerm) {
    return concepts;
  }

  const term = searchTerm.toLowerCase();
  return concepts.filter(
    (concept) =>
      concept.name.toLowerCase().includes(term) ||
      concept.description.toLowerCase().includes(term)
  );
}
// Helper function to search concepts by status
export function getConceptsByStatus(searchTerm) {
  if (!searchTerm) {
    return concepts;
  }

  const term = searchTerm.toLowerCase();
  return concepts.filter((concept) =>
    concept.status.toLowerCase().includes(term)
  );
}

// Get all unique categories
export function getCategories() {
  const categories = [...new Set(concepts.map((concept) => concept.category))];
  return categories.sort();
}
