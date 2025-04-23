import {
  FlatList,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import React, {ReactElement, useState} from 'react';
import Item from '../pojo/Item.ts';

interface CreateProps {
  itemList?: Item[];
  setItemList: React.Dispatch<React.SetStateAction<Item[]>>;
}

const Create = (params: CreateProps) => {
  const [name, setName] = useState('');
  const [stock, setStock] = useState(0);
  const [id, setId] = useState(0);

  const addItem = () => {
    const newItem: Item = {
      id:
        params.itemList && params.itemList.length > 0
          ? Math.max(...params.itemList.map(item => item.id)) + 1
          : 1,
      name: name,
      unit: 'kg',
      stock: stock,
    };
    setName('');
    setStock(0);
    params.setItemList([...(params.itemList || []), newItem]);
  };

  function editItem(item: Item): void {
    setName(item.name);
    setStock(item.stock);
    setId(item.id);
  }

  const deleteItem = (item: Item) => {
    params.itemList = params.itemList?.filter(it => it.id !== item.id);
    params.setItemList(params.itemList?.filter(it => it.id !== item.id) || []);
  };

  const result = (
    <View style={styles.container}>
      <TextInput style={{display: 'none'}}>{id}</TextInput>
      <TextInput
        placeholder="Enter item name.."
        style={styles.input}
        value={name}
        onChangeText={item => setName(item)}
      />

      <TextInput
        keyboardType="numeric"
        placeholder="Enter item stock.."
        style={styles.input}
        value={stock === 0 ? '' : stock.toString()}
        onChangeText={item => setStock(parseInt(item))}
      />

      <Pressable style={styles.button} onPress={() => addItem()}>
        <Text>Create</Text>
      </Pressable>

      <View style={styles.headingContainer}>
        <Text style={styles.headingText}>Index</Text>
        <Text style={styles.headingText}>Items</Text>
        <Text style={styles.headingText}>Quantity</Text>
        <Text style={styles.headingText}>Action</Text>
      </View>
      <FlatList
        data={params.itemList}
        keyExtractor={(item: Item): string => item.id.toString()}
        renderItem={(it): ReactElement => (
          <View style={styles.itemContainer}>
            <Text style={styles.itemText}>{it.index}</Text>
            <Text style={styles.itemText}>{it.item.name}</Text>
            <Text style={styles.itemText}>{it.item.stock}</Text>
            <View style={{flexDirection: 'row', gap: 10}}>
              <Pressable onPress={() => editItem(it.item)}>
                <Text>Edit</Text>
              </Pressable>
              <Pressable onPress={() => deleteItem(it.item)}>
                <Text>Delete</Text>
              </Pressable>
            </View>
          </View>
        )}
      />
    </View>
  );

  return result;
};
export default Create;

const styles = StyleSheet.create({
  container: {
    padding: '4%',
    gap: 10,
  },
  input: {
    borderWidth: 1.5,
    borderColor: '#7b8181',
    paddingVertical: 10,
    borderRadius: 7,
  },
  button: {
    paddingHorizontal: 10,
    paddingVertical: 10,
    borderRadius: 50,
    borderWidth: 0.8,
    borderColor: 'purple',
    justifyContent: 'center',
    width: '20%',
    alignItems: 'center',
    alignSelf: 'center',
  },
  headingContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 3,
    paddingVertical: 10,
  },
  headingText: {
    fontWeight: '500',
    fontSize: 16,
  },
  itemContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 15,
  },
  itemText: {
    fontWeight: '400',
    fontSize: 14,
  },
});
