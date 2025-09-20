class Image {
    load() {
        throw new Error("load() method must be implemented");
    }

    display() {
        throw new Error("display() method must be implemented");
    }
}

class RealImage extends Image {
    constructor(filename) {
        super();
        this.filename = filename;
        this.load(); // Load immediately
    }

    load() {
        console.log(`Loading ${this.filename}...`);
        // Simulate loading delay
        for (let i = 0; i < 1000000; i++) {}
        console.log(`${this.filename} loaded!`);
    }

    display() {
        console.log(`Displaying ${this.filename}`);
    }
}

class ProxyImage extends Image {
    constructor(filename) {
        super();
        this.filename = filename;
        this.realImage = null;
    }

    load() {
        if (!this.realImage) {
            this.realImage = new RealImage(this.filename);
        }
    }

    display() {
        console.log(`Proxy: ${this.filename} requested`);
        this.load(); // Load only when displaying
        this.realImage.display();
    }
}

class DocumentEditor {
    constructor() {
        this.images = [];
    }

    addImage(filename) {
        const proxyImage = new ProxyImage(filename);
        this.images.push(proxyImage);
        console.log(`Added ${filename} to document (not loaded yet)`);
    }

    showImage(filename) {
        const image = this.images.find(img => img.filename === filename);
        if (image) {
            image.display();
        }
    }
}

const editor = new DocumentEditor();

editor.addImage("photo1.jpg");
editor.addImage("photo2.jpg");
editor.addImage("photo3.jpg");

editor.showImage("photo1.jpg");
editor.showImage("photo3.jpg");
