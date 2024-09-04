# Unisky Weather Web App Documentation

---

## 1. App Overview

- **Name of the App**: Unisky Weather Web App
- **Purpose**: The app provides weather forecasting, offering real-time data, forecasts, and additional weather details.
- **Target Audience**: Everyone needing weather information, from casual users to travelers and outdoor enthusiasts.
- **Productions**: [Unisky Weather App](https://unisky-weather-app.vercel.app/)

---

## 2. Features

- **Core Features**:
  - Current weather situation (real-time)
  - 3-hour interval weather forecast
  - 5-day forecast
  - UV index
  - Humidity levels
  - Wind speed
  - Atmospheric pressure
  - Sunrise and sunset times
  - Map display showing weather locations

---

## 3. Architecture

- **Tech Stack**: 
  - Next.js
  - TypeScript

---

## 4. Installation and Setup

- **Prerequisites**: 
  - Node.js
  - Next.js
  - TypeScript

- **Installation Steps**:
  1. Clone the repository:
     ```bash
     git clone <repository-url>
     cd <project-directory>
     ```
  2. Install dependencies:
     ```bash
     npm install
     ```
  3. Create a `.env` file and configure the OpenWeatherMap API key:
     ```bash
     OPENWEATHERMAP_API_KEY=<Your_API_Key>
     ```

- **Configuration**: 
  - Configure the API key for weather data in `.env`:
    ```bash
    OPENWEATHERMAP_API_KEY=<Your_OpenWeatherMap_API_Key>
    ```

---

## 5. Usage

- **Running the App**:
  1. Start the development server:
     ```bash
     npm run dev
     ```
  2. Open your browser and navigate to `http://localhost:3000` to see the app in action.

- **Basic Usage**:
  - Upon first use, allow location access in your browser for the app to retrieve weather data based on your location.
  - The app will display real-time weather details along with 3-hour and 5-day forecasts and others weather information.

---

## 6. Deployment

- **Deployment Steps**:
  1. Push your code to a Git repository (e.g., GitHub).
  2. Connect your repository to Vercel.
  3. Vercel will automatically deploy your application.
  4. Set the API key as an environment variable in Vercel's dashboard (`OPENWEATHERMAP_API_KEY`).

---

## 7. Testing

- **Testing Frameworks**: Playwright

- **Running Tests**:
  1. To run Playwright tests, ensure the dependencies are installed:
     ```bash
     npm install playwright
     ```
  2. Run tests using the following command:
     ```bash
     npx playwright test
     ```

---

## 8. Contact Information

- **Support**: 
  - Email: [jokosetiawan.career@gmail.com](mailto:jokosetiawan.career@gmail.com)
  - LinkedIn: [Joko Setiawan](https://www.linkedin.com/in/jstwan/)
- **Maintainers**: Joko Setiawan
