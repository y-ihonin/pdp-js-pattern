class Light {
    constructor(room) {
        this.room = room;
        this.isOn = false;
    }

    turnOn() {
        this.isOn = true;
        console.log(`${this.room} light ON`);
    }

    turnOff() {
        this.isOn = false;
        console.log(`${this.room} light OFF`);
    }
}

class TemperatureControl {
    constructor() {
        this.temperature = 22;
    }

    setTemperature(temp) {
        this.temperature = temp;
        console.log(`Temperature set to ${temp}°C`);
    }
}

class SecuritySystem {
    constructor() {
        this.isArmed = false;
    }

    arm() {
        this.isArmed = true;
        console.log('Security ARMED');
    }

    disarm() {
        this.isArmed = false;
        console.log('Security DISARMED');
    }
}

class HomeAutomationFacade {
    constructor() {
        this.lights = {
            livingRoom: new Light('Living Room'),
            bedroom: new Light('Bedroom')
        };
        this.temperatureControl = new TemperatureControl();
        this.securitySystem = new SecuritySystem();
    }

    // Simplified facade methods
    turnOnLights() {
        console.log('\nTurning on lights...');
        Object.values(this.lights).forEach(light => light.turnOn());
    }

    turnOffLights() {
        console.log('\nTurning off lights...');
        Object.values(this.lights).forEach(light => light.turnOff());
    }

    setTemperature(temp) {
        console.log(`\nSetting temperature...`);
        this.temperatureControl.setTemperature(temp);
    }

    activateSecurity() {
        console.log('\nActivating security...');
        this.securitySystem.arm();
    }

    deactivateSecurity() {
        console.log('\nDeactivating security...');
        this.securitySystem.disarm();
    }

    // Predefined modes
    setAwayMode() {
        console.log('\nAWAY MODE:');
        this.activateSecurity();
        this.turnOffLights();
        this.setTemperature(18);
    }

    setHomeMode() {
        console.log('\nHOME MODE:');
        this.deactivateSecurity();
        this.turnOnLights();
        this.setTemperature(22);
    }
}

// Create the facade
const home = new HomeAutomationFacade();

// Demonstrate facade methods
console.log('1. HOME MODE:');
home.setHomeMode();

console.log('\n2. AWAY MODE:');
home.setAwayMode();

console.log('\n3. Individual controls:');
home.turnOnLights();
home.setTemperature(25);
home.activateSecurity();
