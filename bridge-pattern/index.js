class Renderer {
    renderCircle(x, y, radius) {
        throw new Error("Must implement renderCircle");
    }
    
    renderRectangle(x, y, width, height) {
        throw new Error("Must implement renderRectangle");
    }
}

class OpenGLRenderer extends Renderer {
    renderCircle(x, y, radius) {
        console.log(`OpenGL: Drawing circle at (${x}, ${y}) with radius ${radius}`);
    }
    
    renderRectangle(x, y, width, height) {
        console.log(`OpenGL: Drawing rectangle at (${x}, ${y}) with size ${width}x${height}`);
    }
}

class DirectXRenderer extends Renderer {
    renderCircle(x, y, radius) {
        console.log(`DirectX: Drawing circle at (${x}, ${y}) with radius ${radius}`);
    }
    
    renderRectangle(x, y, width, height) {
        console.log(`DirectX: Drawing rectangle at (${x}, ${y}) with size ${width}x${height}`);
    }
}

class Shape {
    constructor(renderer) {
        this.renderer = renderer;
    }
    
    render() {
        throw new Error("Must implement render method");
    }
}

class Circle extends Shape {
    constructor(renderer, x, y, radius) {
        super(renderer);
        this.x = x;
        this.y = y;
        this.radius = radius;
    }
    
    render() {
        this.renderer.renderCircle(this.x, this.y, this.radius);
    }
}

class Rectangle extends Shape {
    constructor(renderer, x, y, width, height) {
        super(renderer);
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
    }
    
    render() {
        this.renderer.renderRectangle(this.x, this.y, this.width, this.height);
    }
}

function demo() {
    const openGL = new OpenGLRenderer();
    const directX = new DirectXRenderer();
    
    const circle1 = new Circle(openGL, 100, 100, 50);
    const circle2 = new Circle(directX, 200, 200, 75);
    const rect1 = new Rectangle(openGL, 50, 50, 100, 80);
    const rect2 = new Rectangle(directX, 150, 150, 120, 90);
    
    circle1.render();
    circle2.render();
    rect1.render();
    rect2.render();
    
    console.log("\nSame shapes, different rendering engines!");
}

if (require.main === module) {
    demo();
}
