import React from 'react';
import { Image, ScrollView, StatusBar, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import BottomNav from '../components/BottomNav';

const favoriteItems = [
  {
    id: 'sprite',
    title: 'Sprite Can',
    subtitle: '325ml, Price',
    price: '$1.50',
    image: require('../assets/sprite.png'),
  },
  {
    id: 'coke',
    title: 'Diet Coke',
    subtitle: '355ml, Price',
    price: '$1.99',
    image: require('../assets/coke.png'),
  },
  {
    id: 'apple-grape',
    title: 'Apple & Grape Juice',
    subtitle: '2L, Price',
    price: '$15.50',
    image: require('../assets/nước táo.png'),
  },
  {
    id: 'coca',
    title: 'Coca Cola Can',
    subtitle: '325ml, Price',
    price: '$4.99',
    image: require('../assets/coca.png'),
  },
  {
    id: 'pepsi',
    title: 'Pepsi Can',
    subtitle: '330ml, Price',
    price: '$4.99',
    image: require('../assets/pepsi.png'),
  },
];

export default function FavoritesScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#FFFFFF" />
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Favourite</Text>
      </View>

      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.content}>
        {favoriteItems.map((item) => (
          <View key={item.id} style={styles.row}>
            <Image source={item.image} style={styles.itemImage} resizeMode="contain" />
            <View style={styles.textWrap}>
              <Text style={styles.itemTitle}>{item.title}</Text>
              <Text style={styles.itemSubtitle}>{item.subtitle}</Text>
            </View>
            <Text style={styles.itemPrice}>{item.price}</Text>
            <Text style={styles.chevron}>{'>'}</Text>
          </View>
        ))}
      </ScrollView>

      <View style={styles.footer}>
        <TouchableOpacity style={styles.addAllButton}>
          <Text style={styles.addAllText}>Add All To Cart</Text>
        </TouchableOpacity>
      </View>

      <BottomNav navigation={navigation} active="Favourite" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  header: {
    paddingTop: 54,
    paddingBottom: 18,
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#E2E2E2',
  },
  headerTitle: {
    fontSize: 22,
    fontWeight: '600',
    color: '#181725',
  },
  content: {
    paddingHorizontal: 24,
    paddingBottom: 180,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#E2E2E2',
  },
  itemImage: {
    width: 46,
    height: 64,
    marginRight: 18,
  },
  textWrap: {
    flex: 1,
  },
  itemTitle: {
    fontSize: 17,
    fontWeight: '600',
    color: '#181725',
    marginBottom: 4,
  },
  itemSubtitle: {
    fontSize: 14,
    color: '#7C7C7C',
  },
  itemPrice: {
    fontSize: 18,
    fontWeight: '600',
    color: '#181725',
    marginRight: 12,
  },
  chevron: {
    fontSize: 20,
    color: '#181725',
  },
  footer: {
    position: 'absolute',
    left: 24,
    right: 24,
    bottom: 92,
  },
  addAllButton: {
    backgroundColor: '#53B175',
    borderRadius: 20,
    alignItems: 'center',
    paddingVertical: 20,
  },
  addAllText: {
    color: '#FFFFFF',
    fontSize: 20,
    fontWeight: '600',
  },
});
