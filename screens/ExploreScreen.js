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

const categories = [
  {
    id: 'frash-fruits',
    title: 'Frash Fruits\n& Vegetable',
    image: require('../assets/rau cu.png'),
    backgroundColor: '#EEF7F1',
    borderColor: '#C4E3CC',
  },
  {
    id: 'oil',
    title: 'Cooking Oil\n& Ghee',
    image: require('../assets/dầu.png'),
    backgroundColor: '#FFF8E5',
    borderColor: '#F2D9A5',
  },
  {
    id: 'meat',
    title: 'Meat & Fish',
    image: require('../assets/thịt.png'),
    backgroundColor: '#FDEDED',
    borderColor: '#E9C2C2',
  },
  {
    id: 'bakery',
    title: 'Bakery & Snacks',
    image: require('../assets/bánh.png'),
    backgroundColor: '#FFF5E7',
    borderColor: '#F3D6A6',
  },
  {
    id: 'dairy',
    title: 'Dairy & Eggs',
    image: require('../assets/trứng.png'),
    backgroundColor: '#F1F6FF',
    borderColor: '#C8D6F0',
    onPress: () => ({ screen: 'Beverages', params: { title: 'Eggs', category: 'Eggs' } }),
  },
  {
    id: 'beverages',
    title: 'Beverages',
    image: require('../assets/nước.png'),
    backgroundColor: '#FEF0F7',
    borderColor: '#E6B8CF',
    onPress: () => ({ screen: 'Beverages', params: { title: 'Beverages', category: 'Beverages' } }),
  },
];

export default function ExploreScreen({ navigation }) {
  const handleNavigate = (item) => {
    if (!item.onPress) {
      return;
    }
    const target = item.onPress();
    navigation.navigate(target.screen, target.params);
  };

  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#FFFFFF" />
      <View style={styles.header}>
        <Text style={styles.title}>Find Products</Text>
      </View>

      <TouchableOpacity style={styles.searchBox} activeOpacity={0.85} onPress={() => navigation.navigate('Search', { query: '' })}>
        <Text style={styles.searchIcon}>⌕</Text>
        <TextInput
          placeholder="Search Store"
          placeholderTextColor="#7C7C7C"
          style={styles.searchInput}
          editable={false}
          pointerEvents="none"
        />
      </TouchableOpacity>

      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.grid}>
        {categories.map((item) => (
          <TouchableOpacity
            key={item.id}
            activeOpacity={0.85}
            style={[styles.card, { backgroundColor: item.backgroundColor, borderColor: item.borderColor }]}
            onPress={() => handleNavigate(item)}
          >
            <Image source={item.image} style={styles.cardImage} resizeMode="contain" />
            <Text style={styles.cardTitle}>{item.title}</Text>
          </TouchableOpacity>
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
    paddingTop: 52,
    alignItems: 'center',
    marginBottom: 18,
  },
  title: {
    fontSize: 20,
    fontWeight: '700',
    color: '#181725',
  },
  searchBox: {
    marginHorizontal: 20,
    backgroundColor: '#F2F3F2',
    borderRadius: 14,
    paddingHorizontal: 14,
    paddingVertical: 14,
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  searchIcon: {
    fontSize: 18,
    color: '#181B19',
    marginRight: 10,
  },
  searchInput: {
    flex: 1,
    fontSize: 14,
    color: '#181725',
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
    borderRadius: 18,
    paddingHorizontal: 10,
    paddingVertical: 18,
    alignItems: 'center',
    marginBottom: 16,
  },
  cardImage: {
    width: 74,
    height: 74,
    marginBottom: 14,
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: '600',
    textAlign: 'center',
    color: '#181725',
    lineHeight: 22,
  },
});
