const apiKey = '6f9d59b4a7677bfe1dadb1fa5612e593';

        document.getElementById('submitBtn').addEventListener('click', async function() {
            const city = document.getElementById('cityInput').value;
            const weatherDisplay = document.getElementById('weatherDisplay');
            const errorDisplay = document.getElementById('error');
            const weatherIcon = document.getElementById('weatherIcon');
            
            // Clear any previous data or errors
            weatherDisplay.style.display = 'none';
            errorDisplay.textContent = '';
        
            try {
                // Fetch weather data from OpenWeatherMap
                const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`);
                if (!response.ok) {
                    throw new Error('City not found');
                }
        
                const data = await response.json();
                const { name } = data;
                const { temp,   humidity } = data.main;
                const { description, icon } = data.weather[0];
        
                // Display weather data
                document.getElementById('cityName').textContent = name;
                document.getElementById('temperature').textContent = `Temperature: ${temp}°C`;
                document.getElementById('description').textContent = description.charAt(0).toUpperCase() + description.slice(1);
                document.getElementById('humidity').textContent = `${humidity}%`;
                document.getElementById('windSpeed').textContent = `${data.wind.speed} km/h`;

                switch (data.weather[0].main) {
                case 'Clouds':
                    weatherIcon.src = "./img/Clouds.png";
                    break;
                case 'Clear':
                    weatherIcon.src = "./img/sun.png";
                    break;
                case 'Rain':
                    weatherIcon.src = "./img/rainy.png";
                    break;
                case 'Mist':
                    weatherIcon.src = "./img/mist.png";
                    break;
                case 'Snow':
                    weatherIcon.src = "./img/snow.png";
                    break;
                case 'Haze':
                    weatherIcon.src = "./img/haze.png";
                    break;
            }
        
                weatherDisplay.style.display = 'block';
            } catch (error) {
                // Display error message
                errorDisplay.textContent = 'Error fetching weather data. Please try again.';
            }
        });