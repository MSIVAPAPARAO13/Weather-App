# 🌤️ Weather App

A simple and interactive **React Weather Application** that allows users to search for a city and view its current weather information using the **OpenWeatherMap API**.

The application demonstrates **React component architecture, state management, asynchronous API integration, form handling, error handling, and Material UI-based interface development**.

---

## ✨ Features

* 🔍 **City-based weather search**
* 🌡️ **Current temperature**
* 🌡️ **Minimum and maximum temperature**
* 🤗 **Feels-like temperature**
* 💧 **Humidity information**
* 🌦️ **Weather condition / description**
* 🎨 **Dynamic weather images**
* ⛈️ **Condition-based weather icons**
* ⚠️ **Invalid city/error handling**
* ⚛️ **Reusable React components**
* 📡 **Real-time weather data from OpenWeatherMap**
* 🎨 **Material UI interface**

---

## 🛠️ Tech Stack

### Frontend

* React 19
* Vite
* JavaScript (ES6+)
* Material UI (MUI)
* Emotion
* CSS

### API

* OpenWeatherMap Current Weather API
* Fetch API
* Async/Await

### Development Tools

* npm
* ESLint
* Git
* GitHub

---

## 🏗️ Project Architecture

```text
Weather-App/
│
├── public/
│
├── src/
│   ├── WeatherApp.jsx
│   ├── SearchBox.jsx
│   ├── SearchBox.css
│   ├── InfoBox.jsx
│   ├── InfoBox.css
│   ├── App.jsx
│   └── main.jsx
│
├── .gitignore
├── eslint.config.js
├── index.html
├── package.json
├── package-lock.json
├── vite.config.js
└── README.md
```

---

## 🔄 How It Works

The application follows a simple frontend-to-API workflow:

```text
User enters city
       ↓
SearchBox component
       ↓
Fetch API request
       ↓
OpenWeatherMap API
       ↓
Weather JSON response
       ↓
Weather data processed
       ↓
React state updated
       ↓
InfoBox displays weather
```

---

## 🧩 Main Components

### `WeatherApp.jsx`

Acts as the main application component.

Responsibilities:

* Maintains weather information using React `useState`
* Receives updated weather data from `SearchBox`
* Passes weather information to `InfoBox`

```text
WeatherApp
 ├── SearchBox
 └── InfoBox
```

---

### `SearchBox.jsx`

Handles city search and weather API requests.

Responsibilities:

* Stores entered city using React state
* Handles form submission
* Calls OpenWeatherMap API
* Uses `fetch()` with `async/await`
* Extracts required weather information
* Sends the result back to `WeatherApp`
* Displays an error message for invalid locations

Weather data extracted includes:

* City
* Temperature
* Minimum temperature
* Maximum temperature
* Humidity
* Feels-like temperature
* Weather description

---

### `InfoBox.jsx`

Displays the returned weather information using Material UI.

Responsibilities:

* Displays city name
* Shows temperature
* Shows humidity
* Shows minimum and maximum temperature
* Shows feels-like temperature
* Displays weather description
* Dynamically selects weather images
* Displays weather icons according to weather conditions

---

## 🌦️ Weather Conditions

The application dynamically changes the weather card based on the received data.

### High Humidity

Displays a rainy/thunderstorm-style presentation.

### Higher Temperature

Displays a sunny/hot weather presentation.

### Lower Temperature

Displays a cold-weather presentation.

The UI also changes the displayed Material UI icon according to these conditions.

---

## 🌐 OpenWeatherMap API

The application uses the OpenWeatherMap **Current Weather API**.

### API Endpoint

```text
https://api.openweathermap.org/data/2.5/weather
```

### Request Parameters

```text
q       → City name
appid   → OpenWeatherMap API key
units   → metric
```

Example request structure:

```text
https://api.openweathermap.org/data/2.5/weather?q=Delhi&appid=YOUR_API_KEY&units=metric
```

---

## 🔐 Environment Variables

For security, API credentials should not be hardcoded in the source code.

Create a `.env` file in the project root:

```env
VITE_OPENWEATHER_API_KEY=your_openweathermap_api_key
```

### Recommended `SearchBox.jsx` configuration

Replace the hardcoded API key with:

```javascript
const API_URL = "https://api.openweathermap.org/data/2.5/weather";
const API_KEY = import.meta.env.VITE_OPENWEATHER_API_KEY;
```

Make sure `.env` is included in `.gitignore`.

```text
.env
.env.*
```

> Never commit your real OpenWeatherMap API key to GitHub.

---

## 🚀 Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/MSIVAPAPARAO13/Weather-App.git
```

### 2. Navigate to the Project

```bash
cd Weather-App
```

### 3. Install Dependencies

```bash
npm install
```

### 4. Configure API Key

Create:

```text
.env
```

and add:

```env
VITE_OPENWEATHER_API_KEY=your_api_key
```

### 5. Start Development Server

```bash
npm run dev
```

Vite will provide a local development URL, typically:

```text
http://localhost:5173
```

---

## 📦 Available Scripts

### Development

```bash
npm run dev
```

### Production Build

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

### Lint

```bash
npm run lint
```

---

## 📊 Weather Information Displayed

The application displays:

| Information         | Description                   |
| ------------------- | ----------------------------- |
| City                | Searched city                 |
| Temperature         | Current temperature in °C     |
| Minimum Temperature | Minimum reported temperature  |
| Maximum Temperature | Maximum reported temperature  |
| Feels Like          | Perceived temperature         |
| Humidity            | Current humidity              |
| Weather             | Weather condition description |

---

## 🎨 UI & User Experience

The interface uses **Material UI** components including:

* TextField
* Button
* Card
* CardContent
* CardMedia
* Typography
* Weather icons

Weather-specific imagery and icons are dynamically selected based on the API response.

---

## 📚 Concepts Demonstrated

This project demonstrates practical understanding of:

* React functional components
* React `useState`
* Props
* Component communication
* Form handling
* Controlled inputs
* REST API integration
* Fetch API
* Async/Await
* JSON response processing
* Conditional rendering
* Error handling
* Material UI
* ES6+ JavaScript
* Vite development workflow

---

## 🔮 Future Improvements

Planned improvements include:

* 📍 Browser geolocation support
* 📅 Multi-day weather forecast
* 🌙 Dark/light mode
* 🌡️ Weather unit conversion (°C / °F)
* 💨 Wind speed and direction
* 👁️ Visibility information
* 🌅 Sunrise and sunset
* 🕒 Hourly forecast
* 📱 Improved mobile responsiveness
* 🔒 Secure environment-based API configuration
* ⏳ Loading indicators
* 🔄 Retry mechanism for failed API requests
* 🌍 Recent/search history

---

## 🔒 Security Note

Do not expose your OpenWeatherMap API key in public source code.

Use Vite environment variables:

```env
VITE_OPENWEATHER_API_KEY=your_api_key
```

and keep `.env` out of Git.

---

## 👨‍💻 Author

**Siva Paparao Medisetti**

GitHub:
https://github.com/MSIVAPAPARAO13

Weather App Repository:
https://github.com/MSIVAPAPARAO13/Weather-App

---

## ⭐ Project Highlights

> A React-based weather application demonstrating **REST API integration, asynchronous JavaScript, React state management, reusable components, error handling, and Material UI development**.

---
