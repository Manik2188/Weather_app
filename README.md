# Weather App

The Weather App is a simple web-based application that allows users to search for and display real-time weather information for any city using the OpenWeatherMap API.

## Features

- **Search by City Name**: Enter any city name to retrieve real-time weather data.
- **Weather Information**: Displays the following weather details:
  - Weather Icon
  - City Name
  - Temperature
  - Weather Description
  - Humidity
  - Wind Speed
- **Responsive Design**: The app is mobile-friendly and adapts to various screen sizes.

## Technologies Used

- **HTML5**: Structure of the web page.
- **CSS3**: Styling and layout of the application.
- **JavaScript (ES6)**: Handling asynchronous API requests and manipulating the DOM.
- **Font Awesome**: Icons for search functionality.
- **OpenWeatherMap API**: Provides real-time weather data.

## How to Use

1. **Clone the repository**:
   git clone https://github.com/Manik2188/Todo-List-App.git

2. Open the project:
    Navigate to the project directory.
    Open index.html in your browser.

3. Get API Key from OpenWeatherMap:

    Visit OpenWeatherMap and sign up for a free account to obtain an API key.
    Replace YOUR_API_KEY in the script.js file with your OpenWeatherMap API key.

4. Enter a City Name:
    In the input field, type the name of the city you want to search for.
    Click the search button or press Enter to fetch weather data.

5. View the Weather Information:
    The app will display the city's current weather, including temperature, weather icon, description, humidity, and wind speed.
    In case of an invalid city name or any error, an error message will be shown.

## API Integration

    The weather data is fetched from the OpenWeatherMap API using a GET request. To make this work:
        1. Obtain an API Key from OpenWeatherMap.
        2. Replace the placeholder in the script.js file with your API key.

## Customization
1. Change Icons:
You can update the weather icons by modifying the images located in the /img folder or adding new icons from Font Awesome.

2. Update Styles:
You can modify the style.css file to customize the look and feel of the app as per your design preference.

3. Enhance Functionality:

You can add new features like showing a 5-day weather forecast or changing the background based on the weather condition by updating the script.js file.


## Live Demo
[You can view a live demo of the project.](http://127.0.0.1:5500/index.html)