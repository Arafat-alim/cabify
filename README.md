# Cabify - Real-Time Ridesharing App 🚖

![Cabify Banner](path/to/banner-image.png) <!-- Add a visually engaging banner image -->

## Table of Contents

- [Project Overview](#project-overview)
- [Key Features](#key-features)
- [Tech Stack](#tech-stack)
- [Getting Started](#getting-started)
- [Application Architecture](#application-architecture)
- [Screenshots & Demonstrations](#screenshots--demonstrations)
- [Challenges & Solutions](#challenges--solutions)
- [Future Improvements](#future-improvements)
- [License](#license)

---

## Project Overview
Cabify is a feature-rich, real-time ridesharing application designed to deliver a seamless and dynamic user experience similar to leading ride-hailing platforms. Built with modern technologies, Cabify allows users to book rides, track locations, and engage with a real-time map interface. The app offers secure user authentication, payment integration, and responsive design, making it scalable and user-friendly.

---

## Key Features

- **Dynamic Ride Booking**: Book and manage rides in real-time.
- **Onboarding & Authentication**: Includes smooth onboarding screens and secure authentication via email and Google sign-in with Clerk.
- **Interactive Map Integration**: Real-time GPS location and nearby drivers shown using Google Maps and Places API.
- **Ride History & Profile Management**: View past rides and manage user profile data seamlessly.
- **Stripe Payment Integration**: Enable smooth and secure ride payments.
- **Responsive Design**: Optimized for iOS, Android, and web devices.
- **Custom Navigation**: Enhanced navigation with bottom sheets, modals, and multi-tab screens.

---

## Tech Stack

- **Frameworks & Libraries**: [React Native](https://reactnative.dev/), [Expo](https://expo.dev/)
- **Backend & Realtime Services**: [Neon Postgres](https://neon.tech/), [Expo API Routes](https://expo.dev)
- **Authentication**: [Clerk](https://clerk.dev/)
- **State Management**: [Zustand](https://github.com/pmndrs/zustand)
- **UI & Styling**: [NativeWind](https://nativewind.dev/), [Tailwind CSS](https://tailwindcss.com/)
- **Map Integration**: [Google Maps](https://developers.google.com/maps)
- **Payments**: [Stripe](https://stripe.com/)
- **Code Quality & Development**: [ESLint](https://eslint.org/), [Prettier](https://prettier.io/)

---

## Getting Started

To get started with Cabify locally:

### Prerequisites
- Node.js and npm
- Expo CLI installed

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/cabify.git
   cd cabify
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Configure environment variables:
   - Create a `.env` file in the root directory.
   - Add your API keys for Clerk, Google Maps, Neon Postgres, etc.

4. Run the development server:
   ```bash
   npm run start
   ```

5. Use Expo Go (or a simulator) to scan the QR code and launch the app.

---

## Application Architecture

### 1. **Real-Time Location Tracking with Google Maps**
   - **Driver Locations**: Displays nearby drivers using real-time data.
   - **Ride Booking**: Utilizes Google Maps for route planning and ride tracking.

### 2. **Authentication & Security with Clerk**
   - **Email & Password Login**: Implemented with email verification.
   - **Google Authentication**: Smooth OAuth login experience.

### 3. **Custom UI Components**
   - **Splash & Onboarding Screens**: Welcomes users with a clean onboarding flow.
   - **Reusable Components**: Custom input fields, buttons, and navigational elements.

---

## Screenshots & Demonstrations

### 1. **Home Screen & Location Access**
![Home Screen](path/to/home-screen-screenshot.png) <!-- Add a screenshot of the home screen -->

### 2. **Ride Booking Process**
![Ride Booking GIF](path/to/ride-booking-demo.gif) <!-- Add a GIF demonstrating ride booking -->

### 3. **User Profile Management**
![Profile Screen](path/to/profile-screenshot.png) <!-- Screenshot of profile management -->

---

## Challenges & Solutions

### Challenge 1: Real-Time Data Synchronization
**Solution**: Integrated Neon Postgres and optimized API routes to ensure seamless real-time data synchronization for ride tracking.

### Challenge 2: Complex Navigation Handling
**Solution**: Used Expo Router to create a robust file-based navigation structure with dynamic screens and route guards.

### Challenge 3: Payment Integration
**Solution**: Utilized Stripe's API for secure and flexible payment methods.

---

## Future Improvements

- **Enhanced Ride Matching**: Incorporate AI-driven ride matching algorithms.
- **Push Notifications**: Add push notifications for ride status updates.
- **Offline Support**: Implement caching and offline functionality for user data.

---

## License

This project is licensed under the [MIT License]([https://rem.mit-license.org](https://rem.mit-license.org)).

---

## Contact & Contributions

For suggestions, contributions, or to report issues, please [open an issue](https://github.com/Arafat-alim/cabify/issues) or [reach out](mailto:arafat.aman.alim@gmail.com).

---
