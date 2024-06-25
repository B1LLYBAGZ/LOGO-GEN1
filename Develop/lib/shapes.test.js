// lib/shapes.test.js

const { Circle, Triangle, Square } = require("./shapes");

describe("Shape classes", () => {
  test("Circle render method", () => {
    const shape = new Circle();
    shape.setColor("blue");
    expect(shape.render()).toEqual(
      '<circle cx="150" cy="100" r="50" fill="blue" />'
    );
  });

  test("Triangle render method", () => {
    const shape = new Triangle();
    shape.setColor("blue");
    expect(shape.render()).toEqual(
      '<polygon points="150,50 100,150 200,150" fill="blue" />'
    );
  });

  test("Square render method", () => {
    const shape = new Square();
    shape.setColor("blue");
    expect(shape.render()).toEqual(
      '<rect x="100" y="50" width="100" height="100" fill="blue" />'
    );
  });
});
