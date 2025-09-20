class Logger {
    // Private static instance
    static #instance = null;
    
    // Field to store log messages
    #logs = [];

    constructor() {
        if (Logger.#instance) {
            throw new Error("Use Logger.getInstance() instead");
        }
        Logger.#instance = this;
    }
    
    static getInstance() {
        if (!Logger.#instance) {
            Logger.#instance = new Logger();
        }
        return Logger.#instance;
    }
    
    log(message) {
        this.#logs.push(message);
        console.log(message);
    }
}

// Usage example
const logger1 = Logger.getInstance();
const logger2 = Logger.getInstance();

console.log("Same instance?", logger1 === logger2); // true

logger1.log("Application started");
logger2.log("User logged in");

// Try to create new instance (will throw error)
try {
    new Logger();
} catch (error) {
    console.log("Error:", error.message);
}
