import { View, Text, Button } from 'react-native';
import React, { useEffect, useState } from 'react';
import User from './components/User';

export default function App() {
  const [count, setCount] = useState(0);
  const [ncount, setNcount] = useState(0);

  useEffect(() => {
    console.log('Increment counter updated...');
  }, [count]);
  useEffect(() => {
    console.log('Decrement counter updated...');
  }, [ncount]);

  return (
    <View>
      <Text style={{ fontSize: 18 }}>
        Using useEffect as componentDidUpdate.
      </Text>
      <Text style={{ fontSize: 18, textAlign: 'center' }}>{count}</Text>
      <Button title="Increment Counter" onPress={() => setCount(count + 1)} />
      <Text style={{ fontSize: 18, textAlign: 'center' }}>{ncount}</Text>
      <Button
        color="green"
        title="Decrement Counter"
        onPress={() => setNcount(ncount - 1)}
      />
      <User propsInfo={{ count, ncount }} />
    </View>
  );
}
