# React Native Section List Example

This project demonstrates how to use the `SectionList` component in React Native to display a list of users with sections. Each section includes a list of skills, and displays the user's email as a footer.

## Getting Started

### Prerequisites

- Node.js and npm (or yarn) installed on your machine.
- React Native CLI installed. You can follow the [React Native CLI Quickstart](https://reactnative.dev/docs/environment-setup) guide to set up your environment.

### Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/Pralay6/ReactNative/tree/main/sectionlist.git
   ```

2. **Navigate into the project directory:**

   ```bash
   cd sectionlist
   ```

3. **Install dependencies:**

   ```bash
   npm install
   ```

   or, if you are using yarn:

   ```bash
   yarn install
   ```

4. **Run the project:**

   ```bash
   npm start
   ```

   or, if you are using yarn:

   ```bash
   yarn start
   ```

   Follow the instructions in the terminal to run the app on an Android emulator, iOS simulator, or a physical device.

## Code Overview

### `App.js`

The `App.js` file contains a simple React Native application that demonstrates the usage of the `SectionList` component.

- **Data Structure**: The `users` array contains a list of user objects. Each user object has:
  - `id`: A unique identifier.
  - `name`: The name of the user.
  - `email`: The email address of the user.
  - `data`: An array of skills.

- **Component Layout**:
  - `ScrollView`: Provides a scrollable view for the list.
  - `SectionList`: Displays the list of users, grouped by their name.
    - `renderItem`: Renders each skill in the list.
    - `renderSectionHeader`: Renders the header for each section with the user's name.
    - `renderSectionFooter`: Renders the footer for each section with the user's email.

## Code Snippet

Here's a snippet of how the `SectionList` is used:

```jsx
<SectionList
  sections={users}
  renderItem={({ item }) => <Text style={{ fontSize: 15 }}> {item}</Text>}
  renderSectionHeader={({ section: { name } }) => (
    <View>
      <Text style={{ fontSize: 20, color: 'blue' }}>{name}</Text>
    </View>
  )}
  renderSectionFooter={({ section: { email } }) => (
    <Text
      style={{ fontSize: 12, paddingBottom: 15, borderBottomWidth: 1 }}>
      {email}
    </Text>
  )}
/>
```

## Contributing

If you'd like to contribute to this project, please follow these steps:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature-branch`).
3. Commit your changes (`git commit -am 'Add new feature'`).
4. Push to the branch (`git push origin feature-branch`).
5. Create a new Pull Request.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Contact

For any inquiries or issues, please open an issue on the GitHub repository or contact me at umalepralay19@gmail.com.
```
