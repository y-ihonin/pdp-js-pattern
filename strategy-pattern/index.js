// Strategy Interface
class RouteStrategy {
    calculateRoute(start, destination) {
        throw new Error("Must implement calculateRoute method");
    }
}

// Concrete Strategies
class FastestRouteStrategy extends RouteStrategy {
    calculateRoute(start, destination) {
        console.log(`Fastest route: ${start} → ${destination}`);
        console.log(`Time: 30 min, Distance: 25 km`);
        console.log(`Route: Highway → Main Street → Express Lane\n`);
        return { time: 30, distance: 25, type: "fastest" };
    }
}

class ShortestRouteStrategy extends RouteStrategy {
    calculateRoute(start, destination) {
        console.log(`Shortest route: ${start} → ${destination}`);
        console.log(`Time: 45 min, Distance: 15 km`);
        console.log(`Route: Local Road → Shortcut → Residential\n`);
        return { time: 45, distance: 15, type: "shortest" };
    }
}

class ScenicRouteStrategy extends RouteStrategy {
    calculateRoute(start, destination) {
        console.log(`Scenic route: ${start} → ${destination}`);
        console.log(`Time: 60 min, Distance: 30 km`);
        console.log(`Route: Scenic Drive → Mountain View → Lakeside\n`);
        return { time: 60, distance: 30, type: "scenic" };
    }
}

// Context Class
class NavigationApp {
    constructor() {
        this.strategy = null;
    }
    
    setStrategy(strategy) {
        this.strategy = strategy;
        console.log(`Strategy set to: ${strategy.constructor.name}\n`);
    }
    
    calculateRoute(start, destination) {
        if (!this.strategy) {
            throw new Error("No strategy set");
        }
        return this.strategy.calculateRoute(start, destination);
    }
}

const app = new NavigationApp();
const fastest = new FastestRouteStrategy();
const shortest = new ShortestRouteStrategy();
const scenic = new ScenicRouteStrategy();

// Test different strategies
app.setStrategy(fastest);
app.calculateRoute("Home", "Work");

app.setStrategy(shortest);
app.calculateRoute("Home", "Work");

app.setStrategy(scenic);
app.calculateRoute("Home", "Work");
