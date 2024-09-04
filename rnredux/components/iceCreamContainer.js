import { View, Text, Button } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import {buyIceCream} from '../Redux/iceCream/iceCreamAction'

export default function iceCreamContainer() {
  const noOfIceCream = useSelector(state => state.iceCream.noOfIceCream);
  const dispatch = useDispatch();
  return (
    <View>
      <Text>No of iceCream - {noOfIceCream}</Text> 
      <Button title="buy icecream" onPress={() => dispatch(buyIceCream()) } />
    </View>
  );
}
