import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Feather } from '@expo/vector-icons';

const navItems = [
  { label: 'Shop', icon: 'grid', route: 'Home' },
  { label: 'Explore', icon: 'search', route: 'Explore' },
  { label: 'Cart', icon: 'shopping-cart', route: 'Cart' },
  { label: 'Favourite', icon: 'heart', route: 'Favorites' },
  { label: 'Account', icon: 'user' },
];

export default function BottomNav({ navigation, active }) {
  return (
    <View style={styles.bottomNav}>
      {navItems.map((item) => (
        <TouchableOpacity
          key={item.label}
          style={styles.navItem}
          activeOpacity={0.8}
          onPress={() => item.route && navigation.navigate(item.route)}
        >
          <Feather
            name={item.icon}
            size={22}
            color={active === item.label ? '#53B175' : '#181725'}
            style={styles.navIcon}
          />
          <Text style={[styles.navLabel, active === item.label && styles.navActive]}>{item.label}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  bottomNav: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: '#FFFFFF',
    borderTopLeftRadius: 26,
    borderTopRightRadius: 26,
    paddingTop: 14,
    paddingBottom: 22,
    paddingHorizontal: 8,
    flexDirection: 'row',
    justifyContent: 'space-around',
    shadowColor: '#000000',
    shadowOpacity: 0.08,
    shadowOffset: { width: 0, height: -4 },
    shadowRadius: 12,
    elevation: 12,
  },
  navItem: {
    alignItems: 'center',
    width: 68,
  },
  navIcon: {
    marginBottom: 4,
  },
  navLabel: {
    fontSize: 12,
    color: '#181725',
    fontWeight: '600',
  },
  navActive: {
    color: '#53B175',
  },
});
