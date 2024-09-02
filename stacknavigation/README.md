# React Native Navigation Example

This project is a simple React Native application demonstrating basic navigation between two screens using `@react-navigation/native` and `@react-navigation/native-stack`. It includes a `Home` screen where users can input their name and age and an `About` screen that receives this data when navigating.

## Features

- Two screens: Home and About
- Navigation between screens using React Navigation
- Input fields to enter a name and age on the Home screen
- Passing data between screens

## Getting Started

To start this project, you must set up a React Native development environment. Follow the [official React Native documentation](https://reactnative.dev/docs/environment-setup) to install the necessary tools.

### Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/Pralay6/stacknavigation.git
   cd stacknavigation
   ```

2. **Install dependencies:**

   Ensure you have Node.js and npm or Yarn installed. Run the following command to install project dependencies:

   ```bash
   npm install
   ```

   or if you're using Yarn:

   ```bash
   yarn install
   ```

3. **Install React Navigation and its dependencies:**

   Run the following commands to install `react-navigation` libraries:

   ```bash
   npm install @react-navigation/native @react-navigation/native-stack
   npm install react-native-screens react-native-safe-area-context
   ```

   or if you're using Yarn:

   ```bash
   yarn add @react-navigation/native @react-navigation/native-stack
   yarn add react-native-screens react-native-safe-area-context
   ```

4. **Link dependencies (for older versions of React Native):**

   If you're using a version of React Native that requires manual linking, you may need to link the native code:

   ```bash
   npx react-native link
   ```

5. **Run the app:**

   Start the Metro Bundler:

   ```bash
   npx react-native start
   ```

   Open a new terminal and run the app on an Android or iOS simulator:

   ```bash
   npx react-native run-android
   ```

   or

   ```bash
   npx react-native run-ios
   ```

## Code Overview

### `app.js`

The entry point of the application. It sets up navigation between the `Home` and `About` screens using `react-navigation`.

### `Home.js`

A functional component representing the Home screen. It includes:

- Text inputs for entering a name and age
- A button to navigate to the About screen, passing the entered data

### `About.js`

This screen receives the name and age from the Home screen and displays them. The `About` component is not included in the provided code, so make sure to create it as per your requirements.

## Contributing

Feel free to fork this repository and submit pull requests. If you find any issues or have suggestions, open an issue on GitHub.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgements

- [React Native Documentation](https://reactnative.dev/docs/getting-started)
- [React Navigation Documentation](https://reactnavigation.org/docs/getting-started/)
```
