---
title: 'Feed Forward: A Web-Based Food Sharing Application'
description: 'Feed Forward is a thesis project that focused on developing a web-based application for nearby food sharing, utilizing geolocation technology and the geohash algorithm.'
keywords: ['Geolocation', 'Geohash', 'Firebase', 'Web Application']
date: '2024-10-28'
heroimage:
    url: /assets/projects/feedforward/feedforward-heroimage.webp
    alt: 'Photo by Element5 Digital on Unsplash'
platform: Web
stack: ['Geolocation', 'Geohash', 'Firebase', 'Next.js']
---

## Overview

Feed Forward is a thesis project designed to reduce food waste by enabling user-to-user food sharing based on proximity. The project leverages geolocation technology and the geohash algorithm to connect individuals who have surplus food with those in need. By integrating real-time data synchronization with Firebase and an intuitive web interface, Feed Forward fosters sustainable practices and a sense of community.

Key objectives:
- Minimize food waste at the consumption level.
- Provide an accessible platform for sharing surplus food.
- Strengthen community ties through sustainable food-sharing practices.

## How It Works


Feed Forward operates through three key components:

### 1. Geolocation and Geohash Algorithm
- The geohash algorithm encodes geographic coordinates into alphanumeric strings, grouping users based on proximity for efficient food-sharing opportunities.

### 2. Firebase Backend
- Manages real-time data synchronization to ensure food-sharing availability is updated instantly.
- Provides user authentication and secure data storage for user accounts and food-sharing activities.

### 3. User Interface
- Built with a responsive web design to allow users to share and discover food nearby.
- Displays available food items, maps, and user profiles.

## Geohash and Geolocation

### 1. Geohash
![geohash z-order curve](/assets/projects/feedforward/geohash-1.webp)|![geohash grid](/assets/projects/feedforward/geohash-2.webp)
:-------------------------:|:-------------------------:
<center> Geohash z-order curve </center> |  <center> Geohash grid </center>

Geohash is a spatial data structure that encodes geographical coordinates (latitude and longitude) into a compact alphanumeric string. It is hierarchical, meaning that as the string length increases, the represented area becomes smaller and more precise.

#### a. How Geohash Works
**Latitude and Longitude Encoding**:
    - Latitude and longitude are converted into binary representations.
    - The binary sequences are interleaved (alternating bits from latitude and longitude).
    - This interleaving creates a single binary sequence representing a geohash.

**Base32 Encoding**:
   - The interleaved binary sequence is split into groups of 5 bits.
   - Each group is converted into a Base32 character to produce the geohash string.

#### b. Z-Order Curve
Geohash uses a z-order curve (also known as a Morton curve) to map 2D geographical coordinates to 1D binary strings.
Key Benefits:
  - Spatial locality: Points close to each other geographically have similar geohashes. For example qqwz7d and qqwz7e is close to each other because they have similarity in qqwz7 geohash.
  - Efficient querying: Enables range searches and clustering of points within a specific area.

#### c. Geohash Grid
The Earth's surface is divided into a grid-like structure where each cell corresponds to a unique geohash. Shorter geohash strings represent larger grid cells, while longer strings represent smaller cells (higher precision). For example:  
    - A geohash with 5 characters may represent an with 4.9km x 4.9km wide with area deviation 2.4km
    - A geohash with 9 characters could represent an 4.8m x 4.8m wide with area deviation 0.0002km


### 2. Geolocation
Geolocation is the process of identifying the geographical location of a device or user using technologies like GPS, Wi-Fi, or IP-based systems. Geolocation can be used in a browser with the Geolocation API by using navigator.getCurrentPosition(). It returns coords.latitude and coords.longitude if the user grants permission to access their location. If the user denies permission, it returns null.

## Features

- **Nearby Food Sharing**: Enables users to find food-sharing opportunities within their vicinity.
- **Real-Time Updates**: Automatically synchronizes food-sharing activities using Firebase.
- **Chat Feature**: Allows receivers and givers of food to communicate directly within the application.
- **Gamification Feature**: 
  - Introduced a leaderboard that ranks users based on their contributions to food sharing.
  - Unique badges with color for top contributors who frequently share food.
  - Encourages participation through friendly competition, tapping into the natural human tendency to compete and strive for recognition. This creates a sense of achievement while promoting sustainable practices.

## Screenshots

### 1. Home Page
![Home page](/assets/projects/feedforward/home-page.webp)

The home page provides options for users to sign in or sign up. New users can create an account using the Sign Up button, while existing users can access their accounts through the Sign In button.

### 2. Dashboard Page
![Dashboard page](/assets/projects/feedforward/dashboard-page.webp)

Authenticated users are directed to the dashboard page. It features:
- A banner image that links to articles or news related to food waste when clicked.
- A status bar displaying the user's name, total food shared, total points, and a button to access the leaderboard modal.
- A floating action button with the following options:
  - Home Button: Redirects to the dashboard.
  - Share Food Button: Opens a form to share food.
  - Profile Button: Directs the user to their profile page.

### 3. Leaderboard
![Leaderboard](/assets/projects/feedforward/leaderboard.webp)

The leaderboard modal showcases the top 5 users with the highest points, highlighting their contributions to food sharing. Points are earned based on the amount of food given. For privacy, the username is only showing only first 4 letters of their name.

### 4. Food Detail Page
![Food detail page](/assets/projects/feedforward/fooddetail-page.webp)

When a user clicks on a food item listed on the dashboard, they are directed to the food detail page. This page includes:
- An image of the food.
- The name and description of the food.
- The giver's name and the time when the food was shared.
- The food's expiration time.
- The location of the food, displayed on a map.
- A Take Food button that allows users to claim the food.

### 5. Chat Modal
![Chat modal](/assets/projects/feedforward/chat-modal.webp)

After clicking the Take Food button on the food detail page, the giver and taker can communicate through the chat modal. This feature facilitates coordination about the food pickup, such as timing and location, ensuring smooth interaction between users.

## Final Words

Thank you for taking the time to learn about Feed Forward. This project was a labor of love and reprsents my effort to create a platform that promotes sustainability and community engagement through technology. While the project is currently not available, I hope it inspires others to explore the possibilities of geolocation-based services and their potential to make a positive impact.

## Disclaimer

Unfortunately, Feed Forwards is not available at the moment. Maintaining this project is too expensive for me, especially due to high costs associated with accessing geocoding and reverse geocoding APIs from Google for address mapping and location services. I hope to revisit this idea in the future when it becomes more feasible.

Anyway, you can access the code in this github repo [https://github.com/fear-rush/feedforward](https://github.com/fear-rush/feedforward)
