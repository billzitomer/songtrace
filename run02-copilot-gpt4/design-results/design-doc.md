# Design Document for the SaaS App: SongTrace

## Overview
SongTrace is a modern SaaS application designed for tracing the origins and versions of songs recorded by different artists. It provides a platform for users to view, contribute, and manage song-related information. The app is open-source under the MIT license and uses only free and appropriately licensed technologies.

---

## Components and Services

### 1. Frontend
- **Purpose**: Provides a user interface for browsing, searching, and managing song data.
- **Features**:
  - Visualization of song data and relationships.
  - CRUD operations for privileged users.
  - User account creation and login.
- **Technologies**:
  - **Framework**: React.js (lightweight, free, and widely supported).
  - **Styling**: Tailwind CSS (modern and utility-first CSS framework).
  - **State Management**: Redux or Context API (for managing app state).

### 2. Backend
- **Purpose**: Handles business logic, data processing, and API endpoints.
- **Features**:
  - RESTful API for frontend and external integrations.
  - Role-based access control (RBAC) for user roles (Admin, Contributor, Basic).
  - Authentication and authorization.
- **Technologies**:
  - **Framework**: Node.js with Express.js (lightweight and scalable).
  - **Authentication**: Passport.js or Auth0 (free tier available).
  - **API Documentation**: Swagger/OpenAPI.

### 3. Database
- **Purpose**: Stores song data, user accounts, and relationships between entities.
- **Features**:
  - Relational data model for entities like Song, Author, Artist, and Record Label.
  - Scalable storage for growing datasets.
- **Technologies**:
  - **Database**: PostgreSQL (free, open-source, and relational).
  - **ORM**: Sequelize or Prisma (for database abstraction).

### 4. Cloud Hosting
- **Purpose**: Host the app in a free cloud environment.
- **Technologies**:
  - **Platform**: Vercel (frontend hosting) and Render (backend hosting with free tier).
  - **Database Hosting**: Supabase or Railway (free tier for PostgreSQL).

### 5. Authentication
- **Purpose**: Secure user login and role management.
- **Technologies**:
  - **Library**: Passport.js (flexible and free).
  - **Token Management**: JSON Web Tokens (JWT).

### 6. Dependencies
- **Frontend**:
  - React.js, Tailwind CSS, Redux.
- **Backend**:
  - Node.js, Express.js, Passport.js, Swagger.
- **Database**:
  - PostgreSQL, Sequelize/Prisma.
- **Testing**:
  - Jest (unit testing), Cypress (end-to-end testing).

---

## C4 Architecture Diagram

### Level 1: System Context
- **Actors**:
  - Users (Admin, Contributor, Basic).
  - External apps consuming the API.
- **System**: SongTrace SaaS App.

### Level 2: Container Diagram
- **Containers**:
  - **Frontend**: React.js app hosted on Vercel.
  - **Backend**: Node.js API hosted on Render.
  - **Database**: PostgreSQL hosted on Supabase.

### Level 3: Component Diagram
- **Frontend Components**:
  - Search and Browse UI.
  - CRUD Management UI.
  - Authentication UI.
- **Backend Components**:
  - API Endpoints.
  - Authentication Service.
  - Role Management Service.
- **Database Components**:
  - Tables for Song, Author, Artist, Record Label, and Users.