# 🌍 Tour Management System

A comprehensive web application built using the **MERN Stack** (MongoDB, Express.js, React.js, Node.js) to streamline the process of creating, managing, and booking tours. This system is ideal for **travel agencies**, **tour operators**, and **individual travelers** seeking an organized platform for tour management.

---

## 🚀 Features

- **User Authentication**: Secure login and registration for users and admins.
- **Tour Package Management**: Add, update, and delete tours with full details.
- **Booking System**: Users can browse available tours and make bookings.
- **Admin Dashboard**: Manage users, bookings, and tours from a single interface.
- **Rating & Review System**: Users can leave feedback and rate tours they’ve experienced.
- **Responsive Design**: Optimized for desktops, tablets, and mobile devices.

---

## 🛠️ Tech Stack

- **Frontend**: React.js, HTML, Tailwind CSS
- **Backend**: Node.js, Express.js
- **Database**: MongoDB, Firebase
- **Authentication**: JWT (JSON Web Tokens)
- **Version Control**: Git & GitHub

---

## ⚙️ Installation & Setup

### Step 1: Clone the repository
```bash
git clone https://github.com/rgmhacks/Tour-Management-System.git
cd Tour-Management-System
```

### Step 2:Setup Backend
```bash
cd backend
npm install
```
- Create a .env file in the backend folder
```env
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
# Go to https://developer.paypal.com/ and login to get below details. I have used this for credit/debit cards validation.
BRAINTREE_MERCHANT_ID=
BRAINTREE_PRIVATE_KEY=
BRAINTREE_PUBLIC_KEY=
```
- Start the server
```bash
npx nodemon
```

### Step 3:Setup Frontend
```bash
cd client
npm install
```
- Create a .env file in the client/src folder
```env
# I have used Firebase for storing images.
VITE_FIREBASE_API_KEY =
```
- Start frontend
```bash
npm run dev
```

---

## 📸 Screenshots
- Homepage
![image](https://github.com/user-attachments/assets/3403a8f7-80ae-4bed-a137-a00c5d4d2e34)

https://github.com/user-attachments/assets/d4693433-829b-4fa4-993c-446dd19c26d1

- Packages
![image](https://github.com/user-attachments/assets/3b5b71d0-77b0-4279-9b54-8761412bab85)
![image](https://github.com/user-attachments/assets/6fd296d8-6b3e-4f72-8920-f9f445c64dd5)

- Profile Page
- Admin
![image](https://github.com/user-attachments/assets/b7932bdb-960a-4333-a977-69305ff5f8b7)
- User
![image](https://github.com/user-attachments/assets/b7fd5120-13d8-4bfa-ade5-507d2f719471)




