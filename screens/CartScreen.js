import React from 'react';
import { Image, ScrollView, StatusBar, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import BottomNav from '../components/BottomNav';

const cartItems = [
  {
    id: 'pepper',
    title: 'Bell Pepper Red',
    subtitle: '1kg, Price',
    price: '$4.99',
    image: require('../assets/ớt chuông.png'),
  },
  {
    id: 'egg',
    title: 'Egg Chicken Red',
    subtitle: '4pcs, Price',
    price: '$1.99',
    image: require('../assets/rổ trứng.png'),
  },
  {
    id: 'banana',
    title: 'Organic Bananas',
    subtitle: '12kg, Price',
    price: '$3.00',
    image: require('../assets/banana.png'),
  },
  {
    id: 'ginger',
    title: 'Ginger',
    subtitle: '250gm, Price',
    price: '$2.99',
    image: require('../assets/gừng.png'),
  },
];

export default function CartScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#FFFFFF" />
      <View style={styles.header}>
        <Text style={styles.headerTitle}>My Cart</Text>
      </View>

      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.content}>
        {cartItems.map((item) => (
          <View key={item.id} style={styles.row}>
            <Image source={item.image} style={styles.itemImage} resizeMode="contain" />
            <View style={styles.itemBody}>
              <View style={styles.itemTopRow}>
                <View>
                  <Text style={styles.itemTitle}>{item.title}</Text>
                  <Text style={styles.itemSubtitle}>{item.subtitle}</Text>
                </View>
                <Text style={styles.removeIcon}>x</Text>
              </View>
              <View style={styles.itemBottomRow}>
                <View style={styles.qtyRow}>
                  <TouchableOpacity style={styles.qtyButtonOutline}>
                    <Text style={styles.qtyMinus}>-</Text>
                  </TouchableOpacity>
                  <Text style={styles.qtyValue}>1</Text>
                  <TouchableOpacity style={styles.qtyButtonOutline}>
                    <Text style={styles.qtyPlus}>+</Text>
                  </TouchableOpacity>
                </View>
                <Text style={styles.itemPrice}>{item.price}</Text>
              </View>
            </View>
          </View>
        ))}
      </ScrollView>

      <View style={styles.checkoutWrap}>
        <TouchableOpacity style={styles.checkoutButton}>
          <Text style={styles.checkoutText}>Go to Checkout</Text>
          <View style={styles.totalBadge}>
            <Text style={styles.totalBadgeText}>$12.96</Text>
          </View>
        </TouchableOpacity>
      </View>

      <BottomNav navigation={navigation} active="Cart" />
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
    paddingHorizontal: 22,
    paddingBottom: 190,
  },
  row: {
    flexDirection: 'row',
    paddingVertical: 22,
    borderBottomWidth: 1,
    borderBottomColor: '#E2E2E2',
  },
  itemImage: {
    width: 72,
    height: 72,
    marginRight: 18,
  },
  itemBody: {
    flex: 1,
    justifyContent: 'space-between',
  },
  itemTopRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: 18,
  },
  itemTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#181725',
    marginBottom: 4,
  },
  itemSubtitle: {
    fontSize: 14,
    color: '#7C7C7C',
  },
  removeIcon: {
    fontSize: 24,
    color: '#B3B3B3',
  },
  itemBottomRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  qtyRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  qtyButtonOutline: {
    width: 42,
    height: 42,
    borderWidth: 1,
    borderColor: '#E2E2E2',
    borderRadius: 14,
    alignItems: 'center',
    justifyContent: 'center',
  },
  qtyMinus: {
    fontSize: 24,
    color: '#B3B3B3',
  },
  qtyPlus: {
    fontSize: 24,
    color: '#53B175',
  },
  qtyValue: {
    width: 36,
    textAlign: 'center',
    fontSize: 18,
    fontWeight: '600',
    color: '#181725',
  },
  itemPrice: {
    fontSize: 22,
    fontWeight: '600',
    color: '#181725',
  },
  checkoutWrap: {
    position: 'absolute',
    left: 24,
    right: 24,
    bottom: 92,
  },
  checkoutButton: {
    backgroundColor: '#53B175',
    borderRadius: 20,
    minHeight: 68,
    alignItems: 'center',
    justifyContent: 'center',
  },
  checkoutText: {
    color: '#FFFFFF',
    fontSize: 20,
    fontWeight: '600',
  },
  totalBadge: {
    position: 'absolute',
    right: 18,
    backgroundColor: '#489E67',
    borderRadius: 8,
    paddingHorizontal: 10,
    paddingVertical: 6,
  },
  totalBadgeText: {
    color: '#FFFFFF',
    fontSize: 14,
    fontWeight: '600',
  },
});
