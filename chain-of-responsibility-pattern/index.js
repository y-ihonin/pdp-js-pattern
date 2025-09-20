class Incident {
    constructor(id, title, severity) {
        this.id = id;
        this.title = title;
        this.severity = severity; // 'low', 'medium', 'high'
        this.handledBy = null;
    }
}

class SupportHandler {
    constructor() {
        this.nextHandler = null;
    }

    setNext(handler) {
        this.nextHandler = handler;
        return handler;
    }

    handle(incident) {
        if (this.canHandle(incident)) {
            incident.handledBy = this.constructor.name;
            console.log(`${this.constructor.name} handled: ${incident.title}`);
            return true;
        }
        
        if (this.nextHandler) {
            return this.nextHandler.handle(incident);
        }
        
        console.log(`No handler available for: ${incident.title}`);
        return false;
    }

    canHandle(incident) {
        throw new Error('canHandle method must be implemented');
    }
}

// Tier 1 Support - handles low severity
class Tier1Support extends SupportHandler {
    canHandle(incident) {
        return incident.severity === 'low';
    }
}

// Tier 2 Support - handles medium severity
class Tier2Support extends SupportHandler {
    canHandle(incident) {
        return incident.severity === 'medium';
    }
}

// Tier 3 Support - handles high severity
class Tier3Support extends SupportHandler {
    canHandle(incident) {
        return incident.severity === 'high';
    }
}

class IncidentSystem {
    constructor() {
        this.firstHandler = new Tier1Support();
        this.firstHandler.setNext(new Tier2Support()).setNext(new Tier3Support());
    }

    reportIncident(incident) {
        console.log(`\nReporting: ${incident.title} (${incident.severity})`);
        return this.firstHandler.handle(incident);
    }
}

function demo() {
    const system = new IncidentSystem();
    
    const incidents = [
        new Incident(1, 'Password Reset', 'low'),
        new Incident(2, 'Server Down', 'high'),
        new Incident(3, 'Printer Issue', 'medium'),
        new Incident(4, 'Software Help', 'low'),
        new Incident(5, 'Database Error', 'high')
    ];

    incidents.forEach(incident => {
        system.reportIncident(incident);
    });

    console.log('\n--- Summary ---');
    incidents.forEach(incident => {
        console.log(`${incident.title}: ${incident.handledBy || 'Unhandled'}`);
    });
}

demo();
