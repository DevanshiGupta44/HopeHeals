# Health Recommender System - Full Stack React Application with Skin and Lung Cancer Detection

## Overview

This project is a full stack Health Recommender System designed to assist in the early detection and management of health conditions, with a focus on Skin and Lung Cancer detection. The system integrates a **React frontend** with a **Flask backend**, leveraging advanced machine learning models to provide comprehensive healthcare recommendations through symptom checking and cancer detection.

## Features

### 1. Frontend (React Application)
- **Home Page:** Introduction and overview of the system.
- **Symptom Checker Page:** Allows users to input symptoms and receive disease and treatment recommendations.
- **Lung Cancer Detection Page:** Enables users to upload lung images for cancer detection using a Convolutional Neural Network (CNN) model.
- **Skin Cancer Detection Page:** Enables users to upload skin images for cancer detection using a CNN model.

### 2. Backend (Flask API)
- **Symptom Checker API:** Provides disease and treatment recommendations based on user-reported symptoms using a content-based filtering system.
- **Lung Cancer Detection API:** Processes lung images using a CNN model built with TensorFlow and Keras to return cancer detection results.
- **Skin Cancer Detection API:** Processes skin images using a CNN model built with TensorFlow and Keras to return cancer detection results.

### 3. Recommendation Techniques
- The system uses content-based filtering to suggest potential diseases and corresponding treatment plans based on user-reported symptoms.

### 4. Cancer Detection
- **CNN models** are integrated for **Skin and Lung Cancer detection**, utilizing **TensorFlow** and **Keras** for building, training, and real-time analysis of the models.

## Technologies Used

### Frontend
- **React**
- **React-DOM**
- **Redux Toolkit**
- **Material UI**
- **React Router**
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
- **Scikit-learn**

### Tools
- **Jupyter Notebook**
- **Git**
- **VS Code**

## Installation

1. Clone the repository:

   ```bash
   git clone [repository-url]
