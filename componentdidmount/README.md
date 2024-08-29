# React Native Counter App

This is a simple React Native application demonstrating the use of React Hooks, specifically the `useState` and `useEffect` hooks. It includes a basic counter that increments and decrements when buttons are pressed.

## Features

- Displays a counter value
- Increments the counter with a "+" button
- Decrements the counter with a "-" button
- Uses `useEffect` hook to log a message to the console when the component mounts

## Getting Started

To get this app running on your local machine, follow these steps:

### Prerequisites

Ensure you have the following installed:

- Node.js (for running the React Native CLI)
- React Native CLI (install via `npm install -g react-native-cli`)
- An emulator or a physical device for testing

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/Pralay6/ReactNative/react-native-counter-app.git
   ```

2. Navigate into the project directory:

   ```bash
   cd react-native-counter-app
   ```

3. Install dependencies:

   ```bash
   npm install
   ```

### Running the App

1. Start the Metro Bundler:

   ```bash
   npm start
   ```

2. In a new terminal window, run the app on your emulator or connected device:

   - For iOS:

     ```bash
     npx react-native run-ios
     ```

   - For Android:

     ```bash
     npx react-native run-android
     ```

## Code Overview

The main component of this app is located in `App.js`. Here's a brief explanation:

- **`useState` Hook**: Manages the state of the counter value.
- **`useEffect` Hook**: Logs "componentDidMount" to the console when the component mounts.
- **`Button` Component**: Used to increment and decrement the counter value.
- **`Text` Component**: Displays the current counter value.

```javascript
import { View, Text, SafeAreaView, StyleSheet, Button } from "react-native";
import { useEffect, useState } from "react";

export default function App() {
  const [count, setCount] = useState(0);
  useEffect(() => {
    console.log("componentDidMount");
  }, []); // Empty array for loading the component on Load only Once
  return (
    <View>
      <Button
        title="+"
        onPress={() => {
          setCount(count + 1);
        }}
      />
      <Text style={{ textAlign: "Center", padding: 10 }}>{count}</Text>
      <Button
        title="-"
        onPress={() => {
          setCount(count - 1);
        }}
      />
    </View>
  );
}
```

## Contributing

Feel free to open issues or submit pull requests if you have any improvements or fixes.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Contact

For any inquiries, please reach out to (mailto:umalepralay19@gmail.com).

```

```
