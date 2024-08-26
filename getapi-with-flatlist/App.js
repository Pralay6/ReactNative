import { View, Text, FlatList, ScrollView } from 'react-native';
import { useEffect, useState } from 'react';
import GetApi from './components/GetApi'

export default App = () => {
  const [data, setData] = useState([]);

  const getApiData = async () => {
    const URL = 'https://jsonplaceholder.typicode.com/posts';
    let result = await fetch(URL);
    result = await result.json();
    setData(result);
  };
  useEffect(() => {
    getApiData();
  }, []);
  return (
    <ScrollView>
      {data ? <GetApi data={data} /> : null}
    </ScrollView>
  );
};
