class Shape {
  draw() {
    throw new Error("Method 'draw()' must be implemented.");
  }
}

class Circle extends Shape {
  draw() {
    console.log("Drawing a Circle");
  }
}

class Square extends Shape {
  draw() {
    console.log("Drawing a Square");
  }
}

class Rectangle extends Shape {
  draw() {
    console.log("Drawing a Rectangle");
  }
}

class ShapeFactory {
  getShape(shapeType) {
    if (!shapeType) return null;
    
    switch (shapeType.toLowerCase()) {
      case "circle":
        return new Circle();
      case "square":
        return new Square();
      case "rectangle":
        return new Rectangle();
      default:
        throw new Error("Invalid shape type");
    }
  }
}

const factory = new ShapeFactory();

const circle = factory.getShape("circle");
circle.draw();

const square = factory.getShape("square");
square.draw();

const rectangle = factory.getShape("rectangle");
rectangle.draw();
