import { View, Text, Button } from 'react-native';

export default About = (props) => {
  const {name, age }= props.route.params
  return (
    <View>
      <Text>This is the About Page  </Text>
     <Text> name: {name} </Text>
      age: {age}
    </View>
  );
};
