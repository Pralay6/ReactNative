# React Native User List App

This is a simple React Native application that displays a list of users using a `FlatList` component. Each user is rendered using a custom `GetUser` component.

## Features

- Displays a list of users with their names and email addresses.
- Utilizes `FlatList` for efficient rendering of list items.
- Custom `GetUser` component to format and display user information.

## Installation

To get started with this project, follow these steps:

### Prerequisites

Make sure you have Node.js and npm (or yarn) installed on your machine. You will also need to have React Native CLI and either Xcode (for iOS) or Android Studio (for Android) set up.

### Clone the Repository

```bash
git clone [https://github.com/Pralay6/ReactNative/tree/main/dynamic-flatlist]
cd to your app
```

### Install Dependencies

```bash
npm install
# or
yarn install
```

### Run the App

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

This is the main component of the app. It uses `FlatList` to render a list of users. The `users` array contains user data, and each item in the list is rendered using the `GetUser` component.

### `components/GetUser.jsx`

The `GetUser` component is responsible for displaying individual user information. It receives `item` as a prop and should render the user's name and email.

## Example

Here’s what a single user might look like when rendered:

```
Name: Pralay
Email: pralay@gmail.com
```

## Contributing

If you'd like to contribute to this project, please fork the repository and create a pull request with your changes. Ensure that your code adheres to the existing style and includes relevant tests.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- [React Native Documentation](https://reactnative.dev/docs/getting-started) for providing excellent resources.
- [FlatList](https://reactnative.dev/docs/flatlist) for efficient list rendering.
- [React Native Elements](https://reactnativeelements.com/) for UI components (if used).

## Contact

For any questions or suggestions, please contact [umalepralay19@gmail.com](mailto:umalepralay19@gmail.com).

```
