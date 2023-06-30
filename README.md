<h1 align="center">Random Background Linear Gradient Generator</h1>

<p align="center">

</p>

<p align="center">
  <strong>A simple React application to generate random background linear gradients.</strong>
</p>

## Getting Started

To use this application, follow these steps:

1. Clone the repository: `git clone git@github.com:Nik0Sp/random_background_linear_gradient_generator.git`
2. Change directory to the project folder: `cd background_linear_gradient_generator`
3. Install the dependencies: `npm install`
4. Start the development server: `npm start`
5. Open your browser and visit `http://localhost:3000` to see the application in action.

## Usage

The application generates a random background linear gradient upon initialization and displays it on the page. Users can click the "Generate" button to generate a new random gradient.

The generated gradient is shown in two formats: as a background color applied to a `<div>` element (`<div id="output-color">`), and as a CSS code snippet (`<input id="output-code">`).

To copy the CSS code snippet to the clipboard, click the "Copy" button. A success alert will be displayed upon successful copying.

## Components

The main component of the application is `App`, which is responsible for generating and displaying the random gradients.

### State

The component uses the `useState` hook to manage the following states:

- `outputColor`: Stores the generated linear gradient in the form of a background color.
- `outputCode`: Stores the generated linear gradient as a CSS code snippet.

### Helper Functions

The `randomColor` function generates a random hexadecimal color code by concatenating six random characters from the string "0123456789abcdef".

The `generateGrad` function generates a new random linear gradient by calling `randomColor` twice to get two random colors, and generating a random angle. It updates the `outputColor` and `outputCode` states with the new values.

The `copyCode` function uses the `navigator.clipboard.writeText` method to copy the `outputCode` to the clipboard. It also displays an alert to indicate that the code has been copied successfully.

### Lifecycle

The `useEffect` hook is used with an empty dependency array to generate a random gradient upon the initialization of the component.

### JSX Markup

The JSX markup in the `return` statement defines the structure and appearance of the application's user interface. It includes a `<div>` element to display the generated gradient, a container `<div>` for the main content, an input field to show the CSS code, and buttons to generate a new gradient and copy the code.

##Contributions

Contributions to this project are welcome. If you have any ideas, improvements, or bug fixes, feel free to open an issue or submit a pull request.

##  License

This project is licensed under the [MIT License](https://opensource.org/licenses/MIT). Feel free to use and modify the code as per the license terms.