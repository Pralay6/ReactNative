# React Native Counter App

This is a simple React Native application demonstrating the use of the `useEffect` hook for handling component updates. The app features two counters: one for incrementing and one for decrementing. 

## Features

- **Increment Counter:** Increases the `count` state by 1.
- **Decrement Counter:** Decreases the `ncount` state by 1.
- **Console Logging:** Logs messages to the console whenever the `count` or `ncount` state is updated.

## Components

- **App:** The main component that contains the counters and buttons.
- **User:** A separate component (not detailed here) that receives the `count` and `ncount` as props.

## Setup

To get started with this project, follow these steps:

1. **Clone the repository:**

   ```bash
   git clone https://github.com/Pralay6/ReactNative/componentdidupdate.git
   ```

2. **Navigate to the project directory:**

   ```bash
   cd componentdidupdate
   ```

3. **Install dependencies:**

   Make sure you have Node.js installed. Then, run:

   ```bash
   npm install
   ```

4. **Run the project:**

   For iOS:

   ```bash
   npx react-native run-ios
   ```

   For Android:

   ```bash
   npx react-native run-android
   ```

## Code Overview

### `App.js`

The main file of the application where the following functionalities are implemented:

- **State Management:** 
  - `count` state for the increment counter.
  - `ncount` state for the decrement counter.
  
- **Effect Hooks:**
  - `useEffect` hook for logging when the `count` state is updated.
  - `useEffect` hook for logging when the `ncount` state is updated.

- **UI Components:**
  - `View`, `Text`, and `Button` components to render the counters and interaction buttons.

### `User.js`

This component (assumed to be in `./components/User`) is used to display or manage the `count` and `ncount` values passed as props. The implementation details are not provided in the current snippet.

## Contributing

Feel free to open issues or submit pull requests if you find any bugs or want to contribute new features.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- React Native documentation
- [React Hooks](https://reactjs.org/docs/hooks-intro.html) for managing component state and side effects.
