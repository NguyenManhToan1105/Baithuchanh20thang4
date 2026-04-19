import React from 'react';
import {
  Image,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import BottomNav from '../components/BottomNav';

const eggProducts = [
  {
    id: 'egg-red',
    title: 'Egg Chicken Red',
    subtitle: '4pcs, Price',
    price: '$1.99',
    image: require('../assets/rổ trứng.png'),
  },
  {
    id: 'egg-white',
    title: 'Egg Chicken White',
    subtitle: '180g, Price',
    price: '$1.50',
    image: require('../assets/rổ trứng trắng.png'),
  },
  {
    id: 'egg-pasta',
    title: 'Egg Pasta',
    subtitle: '30gm, Price',
    price: '$15.99',
    image: require('../assets/pasta trứng.png'),
  },
  {
    id: 'egg-noodles-red',
    title: 'Egg Noodles',
    subtitle: '2L, Price',
    price: '$15.99',
    image: require('../assets/mì trứng.png'),
  },
  {
    id: 'egg-mayo',
    title: 'Mayonnais Eggless',
    subtitle: '325ml, Price',
    price: '$4.99',
    image: require('../assets/mayonnaise trứng.png'),
  },
  {
    id: 'egg-noodles-purple',
    title: 'Egg Noodles',
    subtitle: '330ml, Price',
    price: '$8.99',
    image: require('../assets/mì trứng gói tím.png'),
  },
];

export default function EggSearchScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#FFFFFF" />
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Search</Text>
      </View>

      <View style={styles.searchRow}>
        <View style={styles.searchBox}>
          <Text style={styles.searchIcon}>Q</Text>
          <TextInput
            defaultValue="Egg"
            placeholder="Search"
            placeholderTextColor="#7C7C7C"
            style={styles.searchInput}
          />
          <Text style={styles.clearIcon}>x</Text>
        </View>
        <TouchableOpacity style={styles.filterButton} onPress={() => navigation.navigate('Filters')}>
          <Text style={styles.filterButtonText}>=</Text>
        </TouchableOpacity>
      </View>

      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.grid}>
        {eggProducts.map((item) => (
          <View key={item.id} style={styles.card}>
            <Image source={item.image} style={styles.cardImage} resizeMode="contain" />
            <Text style={styles.cardTitle}>{item.title}</Text>
            <Text style={styles.cardSubtitle}>{item.subtitle}</Text>
            <View style={styles.priceRow}>
              <Text style={styles.price}>{item.price}</Text>
              <TouchableOpacity style={styles.addButton}>
                <Text style={styles.addButtonText}>+</Text>
              </TouchableOpacity>
            </View>
          </View>
        ))}
      </ScrollView>

      <BottomNav navigation={navigation} active="Explore" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  header: {
    paddingTop: 18,
    paddingHorizontal: 24,
    paddingBottom: 12,
  },
  headerTitle: {
    fontSize: 22,
    color: '#7C7C7C',
  },
  searchRow: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
    marginBottom: 18,
  },
  searchBox: {
    flex: 1,
    backgroundColor: '#F2F3F2',
    borderRadius: 16,
    paddingHorizontal: 14,
    paddingVertical: 14,
    flexDirection: 'row',
    alignItems: 'center',
  },
  searchIcon: {
    fontSize: 16,
    color: '#181725',
    marginRight: 10,
    fontWeight: '700',
  },
  searchInput: {
    flex: 1,
    fontSize: 16,
    color: '#181725',
  },
  clearIcon: {
    fontSize: 14,
    color: '#B3B3B3',
    fontWeight: '700',
  },
  filterButton: {
    width: 42,
    height: 42,
    marginLeft: 12,
    alignItems: 'center',
    justifyContent: 'center',
  },
  filterButtonText: {
    fontSize: 22,
    color: '#181725',
    fontWeight: '700',
  },
  grid: {
    paddingHorizontal: 20,
    paddingBottom: 110,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  card: {
    width: '47.2%',
    borderWidth: 1,
    borderColor: '#E2E2E2',
    borderRadius: 18,
    paddingHorizontal: 12,
    paddingTop: 18,
    paddingBottom: 14,
    marginBottom: 16,
  },
  cardImage: {
    width: '100%',
    height: 96,
    marginBottom: 12,
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#181725',
    minHeight: 42,
    marginBottom: 4,
  },
  cardSubtitle: {
    fontSize: 14,
    color: '#7C7C7C',
    marginBottom: 18,
  },
  priceRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  price: {
    fontSize: 22,
    fontWeight: '600',
    color: '#181725',
  },
  addButton: {
    width: 44,
    height: 44,
    borderRadius: 14,
    backgroundColor: '#53B175',
    alignItems: 'center',
    justifyContent: 'center',
  },
  addButtonText: {
    fontSize: 24,
    color: '#FFFFFF',
    lineHeight: 26,
  },
});
