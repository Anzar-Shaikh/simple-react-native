import React, {ReactElement} from 'react';
import {FlatList, StyleSheet, Text, View} from 'react-native';
import Item from '../pojo/Item.ts';

interface AllItemsProps {
  itemList?: Item[];
}

const AllItems = ({itemList}: AllItemsProps) => {
  return (
    <View>
      <View style={styles.headingContainer}>
        <Text style={styles.headingText}>Index</Text>
        <Text style={styles.headingText}>Items</Text>
        <Text style={styles.headingText}>Quantity</Text>
      </View>
      <FlatList
        data={itemList}
        keyExtractor={(item: Item): string => item.id.toString()}
        renderItem={(it): ReactElement => (
          <View style={styles.itemContainer}>
            <Text style={styles.itemText}>{it.index}</Text>
            <Text style={styles.itemText}>{it.item.name}</Text>
            <Text style={styles.itemText}>{it.item.stock}</Text>
          </View>
        )}
      />
    </View>
  );
};
export default AllItems;

const styles = StyleSheet.create({
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
