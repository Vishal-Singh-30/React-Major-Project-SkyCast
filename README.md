# SkyCast Weather App

## Overview

SkyCast is a weather application built with React, Material UI, and the OpenWeatherMap API. It provides real-time weather information for different cities, displaying current temperature, humidity, and weather conditions with a responsive and user-friendly interface.

## Features

- **Search Functionality**: Search for weather information by city name.
- **Dynamic Weather Cards**: Display current weather information with different card designs based on temperature and humidity.
- **Icons & Images**: Utilizes weather-specific icons and background images to enhance visual appeal.

## Tech Stack

- **Frontend**:
  - React
  - Material UI
  - Vite

- **API**:
  - OpenWeatherMap API

## Installation

1. **Clone the Repository**:

    ```bash
    git clone https://github.com/Vishal-Singh-30/SkyCast-Weather-App.git
    cd SkyCast-Weather-App
    ```

2. **Install Dependencies**:

    ```bash
    npm install
    ```

3. **Start the Development Server**:

    ```bash
    npm run dev
    ```

    Open your browser and navigate to `http://localhost:3000` to view the application.

## Usage

1. **Search for Weather**: Enter a city name in the search box and click the "Search" button. The application will display the weather information for the specified city.
2. **View Weather Information**: The application will show detailed weather information, including temperature, humidity, and a description of the weather conditions.

## API Key

You need an API key from OpenWeatherMap to fetch weather data. Replace the `API_KEY` in the `SearchBox` component with your own key.

```javascript
const API_KEY = "your_openweathermap_api_key";


## Project Structure

- `src/`
  - `components/`
    - `SearchBox.jsx`: Component for searching weather by city.
    - `InfoBox.jsx`: Component for displaying weather information.
    - `WeatherApp.jsx`: Main component that combines `SearchBox` and `InfoBox`.
  - `App.jsx`: Entry point for the application.
  - `index.jsx`: ReactDOM rendering the application.
  - `styles/`
    - `WeatherApp.css`: CSS styles for the application.
    - `SearchBox.css`: CSS styles for the `SearchBox` component.
    - `InfoBox.css`: CSS styles for the `InfoBox` component.

## Contributing

Feel free to open issues or submit pull requests. Contributions are welcome!


## Acknowledgments

- [OpenWeatherMap](https://openweathermap.org/) for providing weather data.
- [Material UI](https://mui.com/) for the UI components.
- [Unsplash](https://unsplash.com/) for background images.


