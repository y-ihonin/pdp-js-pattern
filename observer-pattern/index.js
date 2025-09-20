class Subject {
    registerObserver(observer) {
        throw new Error("registerObserver method must be implemented");
    }
    removeObserver(observer) {
        throw new Error("removeObserver method must be implemented");
    }
    notifyObservers() {
        throw new Error("notifyObservers method must be implemented");
    }
}

class Observer {
    update(temperature, humidity, pressure) {
        throw new Error("update method must be implemented");
    }
}

class WeatherData extends Subject {
    constructor() {
        super();
        this.observers = [];
        this.temperature = 0;
        this.humidity = 0;
        this.pressure = 0;
    }

    registerObserver(observer) {
        this.observers.push(observer);
    }

    removeObserver(observer) {
        const index = this.observers.indexOf(observer);
        if (index > -1) {
            this.observers.splice(index, 1);
        }
    }

    notifyObservers() {
        this.observers.forEach(observer => {
            observer.update(this.temperature, this.humidity, this.pressure);
        });
    }

    setMeasurements(temperature, humidity, pressure) {
        this.temperature = temperature;
        this.humidity = humidity;
        this.pressure = pressure;
        this.notifyObservers();
    }
}

class CurrentConditionsDisplay extends Observer {
    update(temperature, humidity, pressure) {
        console.log(`Current: ${temperature}°C, ${humidity}% humidity`);
    }
}

class StatisticsDisplay extends Observer {
    constructor() {
        super();
        this.temperatures = [];
    }

    update(temperature, humidity, pressure) {
        this.temperatures.push(temperature);
        const avg = this.temperatures.reduce((a, b) => a + b, 0) / this.temperatures.length;
        const max = Math.max(...this.temperatures);
        const min = Math.min(...this.temperatures);
        console.log(`Stats: Avg ${avg.toFixed(1)}°C, Max ${max}°C, Min ${min}°C`);
    }
}

class ForecastDisplay extends Observer {
    constructor() {
        super();
        this.lastPressure = 0;
    }

    update(temperature, humidity, pressure) {
        let forecast = "Same";
        if (pressure > this.lastPressure) {
            forecast = "Improving";
        } else if (pressure < this.lastPressure) {
            forecast = "Getting worse";
        }
        this.lastPressure = pressure;
        console.log(`Forecast: ${forecast}`);
    }
}

function demo() {
    console.log("=== Weather Station Demo ===\n");

    const weatherData = new WeatherData();
    const currentDisplay = new CurrentConditionsDisplay();
    const statsDisplay = new StatisticsDisplay();
    const forecastDisplay = new ForecastDisplay();

    weatherData.registerObserver(currentDisplay);
    weatherData.registerObserver(statsDisplay);
    weatherData.registerObserver(forecastDisplay);

    console.log("Weather Update 1:");
    weatherData.setMeasurements(25, 65, 1013);
    
    console.log("\nWeather Update 2:");
    weatherData.setMeasurements(28, 70, 1015);
    
    console.log("\nWeather Update 3:");
    weatherData.setMeasurements(22, 80, 1008);

    console.log("\nRemoving statistics display...");
    weatherData.removeObserver(statsDisplay);
    
    console.log("\nWeather Update 4:");
    weatherData.setMeasurements(30, 55, 1020);
}

demo();
