import {FlatList, View, Text} from 'react-native'

export default GetApi = ({data})=>{
  return(
        <FlatList
          data={data}
          renderItem={({ item }) => (
            <View
              style={{
                padding: 15,
                fontSize: 40,
                borderBottomColor: '#ccc',
                borderWidth: 1,
              }}>
              <Text style={{ backgroundColor: '#ccc' }}>ID :{item.id}</Text>
              <Text>Title :{item.title}</Text>
              <Text>Body :{item.body}</Text>
            </View>
          )}
        />
  )
}