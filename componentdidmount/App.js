// hookss in ReactNative
// using useEffect hook for life cycle method (componentDidMount)
import { View, Text, SafeAreaView, StyleSheet, Button } from 'react-native';
import { useEffect, useState } from 'react';

export default function App() {
  const [count, setCount] = useState(0);
  useEffect(() => {
    console.log('componentDidMount');
  }, []); //Empty array for loading the component on Load only Once
  return (
    <View>
      <Button
        title="+"
        onPress={() => {
          setCount(count + 1);
        }}
      />
      <Text style={{ textAlign: 'Center', padding: 10 }}>{count}</Text>
      <Button
        title="-"
        onPress={() => {
          setCount(count - 1);
        }}
      />
    </View>
  );
}
