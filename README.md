# The Infinite Cookbook

The Infinite Cookbook is a web application that allows users to search for recipes and save their favorite ones. This application is built using React and integrates with the Edamam API to fetch recipe data.

## Features

- Search for Recipes: Users can enter keywords in the search bar to find recipes related to their query.
- Recipe Cards: The search results are displayed as cards, showing the recipe name, image, and calorie information.
- View Recipe Details: By clicking the "View" button on a recipe card, users can see more details about the selected recipe, including the ingredients and an enlarged image.
- Save Favorite Recipes: Users can save recipes to their favorites list by clicking the "Save" button on a recipe card. 'in progress'
- Favorites List: The application keeps track of the user's favorite recipes and displays them separately for easy access.
- Modal Windows: Recipe details are shown in a modal window, allowing users to view the recipe without leaving the main page.
- Log In Dialog: The application provides a log in dialog for users to access additional features or personalized content.

## Installation

To run the application locally, follow these steps:

1. Clone the repository: `git clone <repository-url>`
2. Navigate to the project directory: `cd infinite-cookbook`
3. Install the dependencies: `npm install`
4. Obtain API credentials: Sign up on the Edamam website to get an API ID and API Key.
5. Replace the placeholders `APP_ID` and `APP_KEY` in the code with your actual API credentials.
6. Start the application: `npm start`
7. Open your browser and visit `http://localhost:3000` to access the application.

Note: Make sure you have Node.js and npm installed on your machine.

## Usage

1. On the home page, you will see a search bar. Enter keywords for the recipe you want to find and click the "Search" button.
2. The search results will be displayed as recipe cards. Each card shows the recipe name, image, and calorie information.
3. Click the "View" button on a recipe card to see more details about the recipe in a modal window.
4. In the recipe details modal, you can view the recipe name, image, calorie information, and a list of ingredients.
5. To save a recipe to your favorites, click the "Save" button on a recipe card. The recipe will be added to your favorites list.
6. To view your favorite recipes, scroll down to the bottom of the page. The favorites list will be displayed there.
7. To log in, click the "Lasagna In" button in the top right corner of the page. The log in dialog will appear, allowing you to enter your email address and password.
8. Once logged in, you may access additional features or personalized content.

## Technologies Used

- React: JavaScript library for building user interfaces.
- Material-UI: UI component library for React.
- Edamam API: Provides recipe data and nutrition information.

## Credits

This application was created by Ivan Vakulenko. It utilizes the Edamam API for recipe data.

## License

This project is licensed under the [MIT License](https://opensource.org/licenses/MIT).
