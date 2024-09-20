# Health Recommender System - Full Stack React Application (Frontend)

## Overview

This project is a full stack application that combines a React frontend with a Flask backend to create a Health Recommender System. The system includes functionalities for symptom checking and lung and skin cancer detection, leveraging advanced machine learning models.

## Features

1. **Frontend (React App):**
   - **Home Page:** Introduction and overview of the system.
   - **Symptom Checker Page:** Allows users to input symptoms and receive disease and treatment recommendations.
   - **Lung Cancer Detection Page:** Enables users to upload images for lung cancer detection.
   - **Skin Cancer Detection Page:** Enables users to upload images for skin cancer detection.

2. **Backend (Flask API):**
   - **Symptom Checker API:** Provides recommendations based on user-reported symptoms using content-based filtering.
   - **Lung Cancer Detection API:** Processes lung images with a CNN model and returns detection results.
   - **Skin Cancer Detection API:** Processes skin images with a CNN model and returns detection results.

The backend contains a recommendation system (content-based filtering) and different CNN models for lung and skin detection. The whole backend is already added to GitHub, where you can access all the code: [Backend Repository]

## Technologies Used

### Frontend
- **React**
- **React-DOM**
- **Redux Toolkit**
- **Material UI**
- **React-Router**
- **JavaScript**
- **HTML**
- **CSS**

### Backend
- **Flask**
- **Python**
- **TensorFlow**
- **Keras**
- **Pandas**
- **NumPy**

