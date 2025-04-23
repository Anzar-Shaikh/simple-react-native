import React, {useState} from 'react';
import {Pressable, StyleSheet, Text, View} from 'react-native';
import AllItems from './AllItems.tsx';
import Create from './Create.tsx';

function Home(): React.JSX.Element {
  const [view, setView] = useState(0);
  const [itemList, setItemList] = useState([
    {id: 2, name: 'Wheat', unit: 'kg', stock: 10},
    {id: 3, name: 'Wheat', unit: 'kg', stock: 9},
    {id: 4, name: 'Wheat', unit: 'kg', stock: 10},
  ]);

  return (
    <View style={styles.container}>
      <Text style={styles.title}> Dashboard</Text>
      <View style={styles.buttonContainer}>
        <Pressable
          style={[styles.button, view === 0 ? {borderColor: '#020101'} : null]}
          onPress={() => setView(0)}>
          <Text style={styles.buttonText}>All Items</Text>
        </Pressable>
        <Pressable
          style={[styles.button, view === 1 ? {borderColor: '#020101'} : null]}
          onPress={() => setView(1)}>
          <Text style={styles.buttonText}>Low Stock</Text>
        </Pressable>
        <Pressable
          style={[styles.button, view === 2 ? {borderColor: '#020101'} : null]}
          onPress={() => setView(2)}>
          <Text style={styles.buttonText}>Create</Text>
        </Pressable>
      </View>

      {view === 0 ? (
        <AllItems itemList={itemList} />
      ) : view === 1 ? (
        <AllItems itemList={itemList.filter(it => it.stock < 10)} />
      ) : (
        <Create itemList={itemList} setItemList={setItemList} />
      )}
    </View>
  );
}

export default Home;

const styles = StyleSheet.create({
  container: {
    height: '100%',
    width: '100%',
    padding: '4%',
    backgroundColor: '#fffffff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 10,
  },
  buttonContainer: {
    flexDirection: 'row',
    gap: 10,
    marginVertical: 10,
  },
  button: {
    paddingHorizontal: 10,
    paddingVertical: 3.5,
    borderRadius: 50,
    borderWidth: 0.8,
    borderColor: 'green',
  },
  buttonText: {
    color: 'green',
    fontSize: 14,
  },
});
