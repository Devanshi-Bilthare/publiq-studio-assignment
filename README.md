# Project Management Dashboard

## Overview
This is a **Project Management Dashboard** developed using **Vite**, **React**, **Redux Toolkit**, **TypeScript**, and **Tailwind CSS**. The dashboard helps users manage projects, tasks, and team members. It features CRUD operations for projects, tasks, and team members and calculates project progress based on task completion. The dashboard is fully responsive, providing a seamless experience across desktop, tablet, and mobile views.

## Features

### 1. Projects Section:
- **Display**: A list of projects with details such as:
  - Project name
  - Deadline
  - Progress status (calculated based on task completion)
- **CRUD Operations**:
  - **Add**: Add new projects.
  - **Edit**: Modify project details (e.g., name, deadline).
  - **Delete**: Remove projects.

### 2. Tasks Section:
- **Task List**: Each project displays a list of tasks in a collapsible view.
- **Task Details**:
  - Title
  - Assigned Team Member
  - Deadline
  - Status (To Do, In Progress, Completed)
- **CRUD Operations**:
  - **Add**: Add new tasks to projects.
  - **Edit**: Modify task details.
  - **Delete**: Remove tasks.
- **Collapsible View**: Tasks can be expanded or collapsed to hide or show detailed information.
- **Progress Calculation**: Project progress is dynamically calculated based on the number of completed tasks.

### 3. Team Section:
- **Team Member Management**:
  - Name
  - Email
  - Role
- **CRUD Operations**:
  - **Add**: Add new team members.
  - **Edit**: Edit member details.
  - **Delete**: Remove team members.
- **Navigation**: A back button allows users to return to the main dashboard page.

### 4. State Management:
- **Redux Toolkit**: Efficiently manages the state of projects, tasks, and team members.

### 5. Responsive Design:
- **Tailwind CSS**: Ensures the dashboard adapts seamlessly to desktop, tablet, and mobile views.

### 6. TypeScript:
- Fully implemented **TypeScript** for type-safe development practices, ensuring code stability and scalability.

## Tech Stack
- **Frontend**: React, TypeScript, Tailwind CSS, Vite, Redux Toolkit, React-Redux
- **State Management**: Redux Toolkit
- **Build Tools**: Vite

## Setup Instructions

### Prerequisites
Ensure that **Node.js** and **npm** are installed on your machine.

### Installation
1. Clone the repository:

   ```bash
   git clone https://github.com/Devanshi-Bilthare/publiq-studio-assignment.git
   cd publiq-studio-assignment
   ```

2. Install the dependencies:

   ```bash
   npm install
   ```

### Running the Development Server
To start the development server:

```bash
npm run dev
```

This will start the app in development mode, accessible at [http://localhost:5173/](http://localhost:5173/).

## Live Demo
You can view the live project at: [Project Management Dashboard](https://publiq-studio-assignment-jth1.vercel.app/)
