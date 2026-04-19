import React, { useEffect, useMemo, useState } from 'react';
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
import { searchProducts } from '../data';

export default function SearchScreen({ navigation, route }) {
  const [query, setQuery] = useState(route.params?.query || '');
  const [filters, setFilters] = useState(route.params?.filters || { categories: [], brands: [] });

  useEffect(() => {
    if (route.params?.query !== undefined) {
      setQuery(route.params.query);
    }
    if (route.params?.filters) {
      setFilters(route.params.filters);
    }
  }, [route.params]);

  const results = useMemo(() => searchProducts(query, filters), [query, filters]);

  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#FFFFFF" />
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Search</Text>
      </View>

      <View style={styles.searchRow}>
        <View style={styles.searchBox}>
          <Text style={styles.searchIcon}>⌕</Text>
          <TextInput
            value={query}
            onChangeText={setQuery}
            placeholder="Search product"
            placeholderTextColor="#7C7C7C"
            style={styles.searchInput}
          />
          {query ? (
            <TouchableOpacity onPress={() => setQuery('')}>
              <Text style={styles.clearIcon}>×</Text>
            </TouchableOpacity>
          ) : null}
        </View>
        <TouchableOpacity
          style={styles.filterButton}
          onPress={() => navigation.navigate('Filters', { query, filters })}
        >
          <Text style={styles.filterButtonText}>≡</Text>
        </TouchableOpacity>
      </View>

      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.grid}>
        {results.map((item) => (
          <View key={item.id} style={styles.card}>
            <Image source={item.image} style={styles.cardImage} resizeMode="contain" />
            <Text style={styles.cardTitle}>{item.name}</Text>
            <Text style={styles.cardSubtitle}>{item.subtitle}</Text>
            <View style={styles.priceRow}>
              <Text style={styles.price}>{item.priceLabel}</Text>
              <TouchableOpacity style={styles.addButton}>
                <Text style={styles.addButtonText}>+</Text>
              </TouchableOpacity>
            </View>
          </View>
        ))}
        {results.length === 0 ? (
          <View style={styles.emptyState}>
            <Text style={styles.emptyTitle}>No products found</Text>
            <Text style={styles.emptyText}>Try another keyword or change the filters.</Text>
          </View>
        ) : null}
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
    fontSize: 18,
    color: '#181725',
    marginRight: 10,
  },
  searchInput: {
    flex: 1,
    fontSize: 16,
    color: '#181725',
  },
  clearIcon: {
    fontSize: 18,
    color: '#B3B3B3',
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
  emptyState: {
    width: '100%',
    alignItems: 'center',
    paddingTop: 40,
  },
  emptyTitle: {
    fontSize: 20,
    fontWeight: '600',
    color: '#181725',
    marginBottom: 8,
  },
  emptyText: {
    fontSize: 14,
    color: '#7C7C7C',
  },
});
