# RecipeMindAI

RecipeMindAI is an interactive meal planning and recipe suggestion mobile application built with Expo and React Native. It helps users plan their meals based on available ingredients, dietary preferences, and nutritional goals.

## Features

- [x] Ingredient Management: Add and track available ingredients
- [x] Meal Planning: Set the number of meals and snacks per day
- [x] Nutritional Calculations: Estimate calorie needs based on user input
- [x] Dietary Preferences: Specify vegetarian, vegan, keto, and other diet types
- [x] Allergy Tracking: Input allergies or intolerances for safe meal planning
- [x] Interactive UI: Easy-to-use interface for managing your meal plan
- [ ] AI-powered Meal Suggestions: Integration of AI for personalized recipe recommendations
- [ ] Meal Plan Export: Functionality to export generated meal plans
- [ ] Weekly Planning: Extended meal planning capabilities to cover a full week
- [ ] Automatic Grocery List: Generate shopping lists based on meal plans and available ingredients

## Technologies Used

- [Expo](https://expo.dev/): Used as the development platform for building and testing the React Native app across iOS and Android.

- [React Native](https://reactnative.dev/): The core framework used for developing the mobile application, providing native components like View, Text, and StyleSheet for consistent cross-platform styling.

- [React](https://reactjs.org/): Utilized for building the user interface components and managing the application's state.

- [@react-native-picker/picker](https://github.com/react-native-picker/picker): Implemented in the MealPlanning component for selecting activity levels and dietary preferences.

## Getting Started

To run RecipeMindAI locally, follow these steps:

1. Clone the repository:
   ```
   git clone https://github.com/yourusername/recipemindai.git
   cd recipemindai
   ```

2. Install dependencies:
   ```
   npm install
   ```

3. Start the Expo development server:
   ```
   expo start
   ```

4. Use the Expo Go app on your mobile device or an emulator to view the application.

## Usage

1. Add your available ingredients using the IngredientList component.
2. Input your personal details and preferences in the MealPlanning component.
3. Generate a meal plan based on your inputs.
4. View suggested meals in the MealList component.

## Project Structure

- `App.js`: Main application component
- `components/`:
  - `IngredientList.js`: Manages the list of available ingredients
  - `Ingredient.js`: Individual ingredient component
  - `IngredientColumn.js`: Organizes ingredients into columns
  - `IngredientGroup.js`: Groups ingredients by category
  - `MealPlanning.js`: Handles meal planning inputs and calculations
  - `MealList.js`: Displays generated meal suggestions

## Contributing

Contributions to RecipeMindAI are welcome! Please feel free to submit a Pull Request.

## License

[MIT License](LICENSE)
