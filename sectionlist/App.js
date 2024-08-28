import { View, Text, SectionList, ScrollView } from 'react-native';

export default function App() {
  users = [
    {
      id: 1,
      name: 'Pralay',
      email: 'pralay@gmail.com',
      data: ['javascript', 'ReactJs', 'React-native', 'Python'],
    },
    {
      id: 2,
      name: 'John',
      email: 'john@gmail.com',
      data: ['javascript', 'ReactJs', 'React-native', 'Python'],
    },
    {
      id: 3,
      name: 'Peter',
      email: 'peter@gmail.com',
      data: ['javascript', 'ReactJs', 'React-native', 'Python'],
    },
    {
      id: 4,
      name: 'sam',
      email: 'sam@gmail.com',
      data: ['javascript', 'ReactJs', 'React-native', 'Python'],
    },
    {
      id: 5,
      name: 'Emily',
      email: 'emily@gmail.com',
      data: ['javascript', 'ReactJs', 'React-native', 'Python'],
    },
    {
      id: 6,
      name: 'Dan',
      email: 'dan@gmail.com',
      data: ['javascript', 'ReactJs', 'React-native', 'Python'],
    },
    {
      id: 7,
      name: 'Anvi',
      email: 'anvi@gmail.com',
      data: ['javascript', 'ReactJs', 'React-native', 'Python'],
    },
    {
      id: 8,
      name: 'Joe',
      email: 'joe@gmail.com',
      data: ['javascript', 'ReactJs', 'React-native', 'Python'],
    },
    {
      id: 9,
      name: 'John',
      email: 'john@gmail.com',
      data: ['javascript', 'ReactJs', 'React-native', 'Python'],
    },
    {
      id: 10,
      name: 'Peter',
      email: 'peter@gmail.com',
      data: ['javascript', 'ReactJs', 'React-native', 'Python'],
    },
  ];

  return (
    <ScrollView style={{ alignItems: 'center', marginTop: 35 }}>
      <Text style={{ fontSize: 30 }}> Using section list.</Text>
      <SectionList
        sections={users}
        renderItem={({ item }) => <Text style={{ fontSize: 15 }}> {item}</Text>}
        renderSectionHeader={({ section: { name } }) => (
          <View>
            <Text style={{ fontSize: 20, color: 'blue' }}>{name}</Text>
          </View>
        )}
        renderSectionFooter={({ section: { email } }) => (
          <Text
            style={{ fontSize: 12, paddingBottom: 15, borderBottomWidth: 1 }}>
            {email}
          </Text>
        )}
      />
    </ScrollView>
  );
}
