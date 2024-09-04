import { View, Text, Button } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import {buyCake} from '../Redux/cake/cakeActions'

export default function CakeContainer() {
  const noOfCakes = useSelector((state) => state.cake.noOfCakes);
  const dispatch = useDispatch();
  return (
    <View>
      <Text>No of cake - {noOfCakes}</Text> 
      <Button title="buy cake" onPress={() => dispatch(buyCake()) } />
    </View>
  );
}
