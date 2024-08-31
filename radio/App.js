import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import React, { useState } from 'react';
//  {backgroundColor: "black"}
export default function App() {
  const [selectedRadio, setSelectedRadio] = useState(1);
  return (
    <View style={styles.main}>
      <TouchableOpacity
        style={styles.radioWrapper}
        onPress={() => setSelectedRadio(1)}>
        {selectedRadio === 1 ? (
          <View style={[styles.radio, { backgroundColor: 'black' }]}></View>
        ) : (
          <View style={styles.radio}></View>
        )}
        <Text style={styles.radioText}>Radio 1</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.radioWrapper}
        onPress={() => setSelectedRadio(2)}>
        {selectedRadio === 2 ? (
          <View style={[styles.radio, { backgroundColor: 'black' }]}></View>
        ) : (
          <View style={styles.radio}></View>
        )}
        <Text style={styles.radioText}>Radio 2</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  main: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  radio: {
    height: 20,
    width: 20,

    borderRadius: 10,
    borderWidth: 1,
    margin: 10,
    justifyContent: 'center',
  },
  radioText: {
    alignContent: 'center',
  },
  radioWrapper: {
    flexDirection: 'row',
  },
});
