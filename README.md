This React application implements a responsive e-commerce website with the following features:

Product Display: Fetches product data from https://fakestoreapi.com/products and displays it in a grid layout.
* Category Navigation: A hamburger menu in the header allows navigation to different 
  product categories (fetched from https://fakestoreapi.com/products/categories).
* Search Functionality: Users can search for products by name using the search bar in the header. The results are filtered dynamically as they type.
* Floating "Analyze" Button: A fixed button positioned at the bottom right corner offers the option to display a pie chart based on categories of product.
* Responsiveness: The website adapts to different screen sizes (mobile, tablet, desktop) for optimal user experience.

Project Setup

* Prerequisites: Ensure you have Node.js and npm (or yarn) installed on your system.
* Clone or Download: Clone this repository or download the project files.
* Installation: Navigate to the project directory and run npm install (or yarn install) to install dependencies.

Running the Application

* Start Development Server: Run npm start (or yarn start) to start the development server.
Access Application: The website will be accessible at http://localhost:3000 (default development port) in your web browser.

Code Structure

The project follows a component-based structure, with each React component responsible for a specific part of the UI. Here's a general outline:

* src/ directory: Contains all source code files for the React application.
* App.js: The main application component.
* components/: Houses reusable components like ProductCard, Header, Analyser.

Assumptions

* The mockup for the pie chart implementation is not provided. You can use a charting library like Chart.js (https://www.chartjs.org/docs/latest/getting-started/) to create the pie chart functionality.
