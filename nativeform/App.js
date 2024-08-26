import React, { useState } from 'react';
import {
  View,
  Button,
  TextInput,
  Text,
  StyleSheet,
  SafeAreaView,
} from 'react-native';

export default function App() {
  //states
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [display, setDsiplay] = useState(false);
  // const [edit, setEdit] = useState(false)

  // functions
  const EditDetails = () => {};

  const clearInputs = () => {
    setDsiplay(false);
    setEmail('');
    setName('');
    setPassword('');
  };

  return (
    <SafeAreaView>
      <TextInput
        style={styles.textInput}
        placeholder="Enter your name"
        onChangeText={(name) => setName(name)}
        value={name}
      />
      <TextInput
        style={styles.textInput}
        placeholder="Enter your password"
        secureTextEntry={true}
        onChangeText={(password) => setPassword(password)}
        value={password}
      />
      <TextInput
        style={styles.textInput}
        placeholder="Enter your Email"
        onChangeText={(email) => setEmail(email)}
        value={email}
      />
      <View style={{ paddingTop: 5 }}>
        <Button
          color="green"
          title="Click Here"
          onPress={() => setDsiplay(true)}
        />
      </View>
      <View style={{ paddingTop: 5 }}>
        <Button title="Clear Inputs" onPress={clearInputs} />
      </View>

      <View>
        {display ? (
          <>
            <View>
              <Text> User name is : {name}</Text>
              <Text> User password is : {password} </Text>
              <Text> User email is : {email} </Text>
            </View>
            <View>
              <Button title="Edit" color="red" onPress={EditDetails} />
            </View>
             <View>
              <Button title="Delete" color="red"/>
            </View>
          </>
        ) : null}
      </View>


    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  textInput: { borderColor: 'green', borderWidth: 2, height: 20 },
});
