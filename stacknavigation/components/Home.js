import { View, Text, Button, TextInput } from 'react-native';
import {useState} from 'react'

export default Home = (props) => {
  const [name, setName] = useState("")
  const [age, setAge] = useState(0)
  return (
    <View>
      <Text>This is the Home Page </Text>
      <TextInput 
      style = {{fontSize:15, borderColor:"black", borderWidth:1}}
      placeholder="Enter your name here ..."
      onChangeText = {(text) =>setName(text)}
      />
      <TextInput 
      style = {{fontSize:15, borderColor:"black", borderWidth:1}}
      placeholder="Enter your age here ..."
      onChangeText = {(text) =>setAge(text)}
      />
      <Button
        title="Go to About Page"
        onPress={() => {
          props.navigation.navigate('About',{name, age});
        }}
      />
    </View>
  );
};