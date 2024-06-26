Logo Generator

This script generates an SVG logo based on user input for text, text color, shape, and shape color.

Requirements

Node.js and npm (or yarn) installed on your system.
Installation

Clone this repository (if using Git).

```

## Usage

Run npm install (or yarn install) in the project directory to install the required dependencies: fs (Node.js built-in file system module) and inquirer (for interactive prompts).

## License

This project is licensed under the [None]() license.

## Contributing

Run the script using node logoGenerator.js (or yarn start if using a package manager).

## Tests

```

Follow the prompts to enter text (up to 3 characters), text color (keyword or hexadecimal), shape (circle, triangle, or square), and shape color (keyword or hexadecimal).
The generated SVG file named logo.svg will be created in the current directory.
Example Output

Here's an example of a logo that might be created based on user input:

Code snippet
<svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">
<rect x="100" y="50" width="100" height="100" fill="orangered" />
<text x="150" y="125" font-size="40" text-anchor="middle" fill="neongreen">GGG</text>
</svg>
Use code with caution.
content_copy
Customization

You can modify the script to:
Support additional shapes.
Change the default width and height of the SVG.
Allow for more complex text formatting options.
Explore the inquirer documentation (https://www.npmjs.com/package/inquirer) for more advanced prompt customization.
License

(None)

Contributing

(Include instructions on how users can contribute to the project if applicable, e.g., by suggesting improvements or fixing bugs.)
