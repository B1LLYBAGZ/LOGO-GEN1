const fs = require("fs");
const inquirer = require("inquirer");

const questions = [
  {
    type: "input",
    name: "text",
    message: "Enter text (up to 3 characters):",
    validate: (input) =>
      input.length <= 3 || "Please enter up to 3 characters.",
  },
  {
    type: "input",
    name: "textColor",
    message: "Enter text color (keyword or hexadecimal):",
  },
  {
    type: "list",
    name: "shape",
    message: "Choose a shape:",
    choices: ["circle", "triangle", "square"],
  },
  {
    type: "input",
    name: "shapeColor",
    message: "Enter shape color (keyword or hexadecimal):",
  },
];

inquirer.prompt(questions).then((answers) => {
  const { text, textColor, shape, shapeColor } = answers;
  let shapeSVG = "";

  switch (shape) {
    case "circle":
      shapeSVG = `<circle cx="150" cy="100" r="50" fill="${shapeColor}" />`;
      break;
    case "triangle":
      shapeSVG = `<polygon points="150,50 100,150 200,150" fill="${shapeColor}" />`;
      break;
    case "square":
      shapeSVG = `<rect x="100" y="50" width="100" height="100" fill="${shapeColor}" />`;
      break;
  }

  const svgContent = `
    <svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">
      ${shapeSVG}
      <text x="150" y="125" font-size="40" text-anchor="middle" fill="${textColor}">${text}</text>
    </svg>
  `;

  fs.writeFile("logo.svg", svgContent.trim(), (err) => {
    if (err) {
      console.error("Error writing file:", err);
    } else {
      console.log("Generated logo.svg");
    }
  });
});
