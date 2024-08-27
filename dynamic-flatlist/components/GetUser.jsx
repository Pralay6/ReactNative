import {View, Text, StyleSheet} from 'react-native';

export default function GetUser(props){
  const item = props.item
  return(
  <View style ={styles.box}>
            <Text style ={styles.item}>{item.name}</Text>
            <Text style ={styles.item}>{item.email}</Text>
        </View>
  )
}
styles = StyleSheet.create({
  item: {
    backgroundColor: 'lightblue',
    margin: 2,
    flex: 1,
    verticalAlign: 'center',
    fontSize: 20,
  },
  box: {
    verticalAlign: 'center',
    flexDirection: 'row',
    padding: 5,
    borderWidth: 1
  },
});