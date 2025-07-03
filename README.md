# Buy-Sell @ IIITH

A full-stack web application designed for the IIIT Hyderabad community to buy and sell items within the campus. This platform provides a secure and user-friendly marketplace for members of IIITH to trade items efficiently.

## Description

Buy-Sell @ IIITH is a comprehensive marketplace application that enables users to:
- Register and authenticate using IIIT email addresses
<!-- - List items for sale with detailed descriptions and categories -->
- Search and filter items by name and category
- Add items to cart and manage purchases
- View transaction history and manage deliveries
- Maintain user profiles with contact information

The application implements secure authentication using JWT tokens and bcrypt password hashing, ensuring user data protection and secure access to platform features.

## Key Functionalities

### Authentication & User Management
- **User Registration**: Secure registration with IIIT email validation
- **User Login**: JWT-based authentication system
- **Profile Management**: Update personal information and contact details
- **Protected Routes**: Secure access to authenticated features

### Item Management
<!-- - **Item Listing**: Sellers can add items with descriptions, prices, and categories -->
- **Item Search**: Advanced search functionality by item name
- **Category Filtering**: Filter items by multiple categories simultaneously
- **Item Details**: Comprehensive item information including seller details

### Shopping Features
- **Shopping Cart**: Add/remove items to/from cart
- **Cart Management**: View all cart items with seller information
- **Purchase Protection**: Users cannot add their own items to cart

### User Interface
- **Responsive Design**: Mobile-friendly interface with Tailwind CSS
- **Interactive Navigation**: Dynamic navbar with user authentication status
- **Search & Filter**: Real-time search and category-based filtering
- **Error Handling**: Comprehensive error messages and loading states

### Additional Features
- **Order History**: Track past transactions
- **Delivery Management**: Handle item deliveries
- **Seller Information**: View seller contact details
- **Security**: Password encryption and secure API endpoints

## Tech Stack
- **Frontend:** React.js with Tailwind CSS for styling
- **Backend:** Express.js with Node.js
- **Database:** MongoDB with Mongoose ODM
- **Authentication:** JWT (JSON Web Tokens)
- **Security:** bcrypt.js for password hashing
- **HTTP Client:** Axios for API calls
- **Routing:** React Router DOM
- **Icons:** React Icons library

## Project Structure
```
BUY_SELL/
├── frontend/                 # React frontend application
│   ├── src/
│   │   ├── components/       # Reusable UI components
│   │   ├── pages/           # Application pages
│   │   ├── assets/          # Static assets
│   │   └── utils/           # Utility functions
│   └── public/              # Public assets
├── backend/                 # Express.js backend
│   ├── controllers/         # Route handlers
│   ├── models/             # Database models
│   ├── routes/             # API routes
│   ├── middleware/         # Custom middleware
│   └── config/             # Configuration files
└── README.md
```

## Installation Guide

### Prerequisites
- Node.js (v14 or higher)
- MongoDB connection string
- npm package manager

### Setup Instructions

1. **Download the Project**

   - Clone the repository.

2. **Install Dependencies**
   ```bash
   # Install frontend dependencies
   cd frontend
   npm install
   
   # Install backend dependencies
   cd ../backend
   npm install
   ```

3. **Environment Configuration**
   - Update the `.env` file in the backend directory with your MongoDB URI and JWT secret
   - Ensure proper environment variables are set

4. **Start the Application**
   ```bash
   # Start frontend (Terminal 1)
   cd frontend
   npm run dev
   
   # Start backend (Terminal 2)
   cd backend
   npm run dev
   ```

5. **Access the Application**
   - Frontend: `http://localhost:5173` (Vite default port)
   - Backend: `http://localhost:5000`

## Security Features
- JWT-based authentication
- Password hashing with bcrypt
- Protected API routes
- Input validation and sanitization
- CORS configuration for secure cross-origin requests