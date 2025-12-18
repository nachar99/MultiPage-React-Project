# Full Stack Learning Tracker

## Project Description

This is a multi-page React application built to track my progress while learning full stack web development. The app displays completed, in-progress, and not-started concepts across front-end, back-end, and full-stack topics. All data is stored locally in JavaScript files to simulate real-world application data.

The project focuses on using React Router, React state, and side effects and cleanup correctly while maintaining clean component structure and navigation.

## Technologies Used

- React
- React Router
- JavaScript
- Tailwind CSS
- Vite
- Google fonts

## Application Features

- Multi-page navigation using React Router
- Search functionality for learning concepts
- Dynamic rendering of concept cards
- Individual concept detail pages
- Loading state simulation using useEffect
- Error page for non-existent routes
- Responsive layout using Tailwind CSS

## Routing Structure

- `/`  
  Home page

- `/progress`  
  Displays all learning concepts and progress status

- `/progress/:id`  
  Displays details for a single concept

- `/about`  
  About me page

- `*`  
  Error page for invalid routes

## State and Side Effects

- useState is used to manage application state such as concepts data and loading state
- useEffect is used to simulate data fetching and manage side effects safely
- useSearchParams is used to store and read search values from the URL

## How to Run the Project

1. Clone the repository
2. Navigate to the project folder
3. Install dependencies
4. Start the development server (npm run dev)
5. Open browser

## Author

Abdulrahman Al-Nachar
