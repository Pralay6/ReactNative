import { FlatList, View } from 'react-native';
import GetUser from './components/GetUser.jsx';

export default function App() {
  users = [
    {
      id: 1,
      name: 'Pralay',
      email: 'pralay@gmail.com',
    },
    {
      id: 2,
      name: 'Mansii',
      email: 'mansii@gmail.com',
    },
    {
      id: 3,
      name: 'Dhru',
      email: 'dhru@gmail.com',
    },
    {
      id: 4,
      name: 'Priyanshu',
      email: 'priyanshu@gmail.com',
    },
    {
      id: 5,
      name: 'Kunal',
      email: 'kunal@gmail.com',
    },
    {
      id: 6,
      name: 'Divya',
      email: 'Divya@gmail.com',
    },
    {
      id: 7,
      name: 'Anvi',
      email: 'anvi@gmail.com',
    },
    {
      id: 8,
      name: 'Sahil',
      email: 'sahil@gmail.com',
    },
    {
      id: 9,
      name: 'John',
      email: 'john@gmail.com',
    },
    {
      id: 10,
      name: 'Peter',
      email: 'peter@gmail.com',
    },
  ];

  return (
    <View style = {{paddingTop: 50}}>
      <FlatList
        data={users}
        renderItem={({ item }) => <GetUser item={item} />}
      />
    </View>
  );
}


