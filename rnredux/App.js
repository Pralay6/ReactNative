import {View,  Text, SafeAreaView, StyleSheet } from 'react-native';
import {Provider} from 'react-redux';
import store from './Redux/store'
import CakeContainer from './components/CakeContainer'
import IceCreamContainer from './components/iceCreamContainer'

export default function App() {
  return (
    <Provider store={store}>
    <View>
    <IceCreamContainer/>
    <CakeContainer />
     </View>
     </Provider>
  );
}

