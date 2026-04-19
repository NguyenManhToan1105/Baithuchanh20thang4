import React, { useState } from 'react';
import { StatusBar, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { brands, searchCategories } from '../data';

export default function FiltersScreen({ navigation, route }) {
  const initialFilters = route.params?.filters || { categories: [], brands: [] };
  const query = route.params?.query || '';
  const [selectedCategories, setSelectedCategories] = useState(initialFilters.categories);
  const [selectedBrands, setSelectedBrands] = useState(initialFilters.brands);

  const toggleValue = (value, setSelected) => {
    setSelected((current) =>
      current.includes(value) ? current.filter((item) => item !== value) : [...current, value]
    );
  };

  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#FFFFFF" />
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Text style={styles.closeIcon}>×</Text>
        </TouchableOpacity>
        <Text style={styles.title}>Filters</Text>
        <View style={styles.headerSpacer} />
      </View>

      <View style={styles.sheet}>
        <FilterSection
          title="Categories"
          options={searchCategories}
          selected={selectedCategories}
          onToggle={(value) => toggleValue(value, setSelectedCategories)}
        />
        <FilterSection
          title="Brand"
          options={brands}
          selected={selectedBrands}
          onToggle={(value) => toggleValue(value, setSelectedBrands)}
        />
      </View>

      <TouchableOpacity
        style={styles.applyButton}
        onPress={() =>
          navigation.navigate('Search', {
            query,
            filters: { categories: selectedCategories, brands: selectedBrands },
          })
        }
      >
        <Text style={styles.applyButtonText}>Apply Filter</Text>
      </TouchableOpacity>
    </View>
  );
}

function FilterSection({ title, options, selected, onToggle }) {
  return (
    <View style={styles.section}>
      <Text style={styles.sectionTitle}>{title}</Text>
      {options.map((option) => {
        const isActive = selected.includes(option);
        return (
          <TouchableOpacity key={option} style={styles.optionRow} onPress={() => onToggle(option)}>
            <View style={[styles.checkbox, isActive && styles.checkboxActive]}>
              {isActive ? <Text style={styles.checkText}>✓</Text> : null}
            </View>
            <Text style={[styles.optionText, isActive && styles.optionTextActive]}>{option}</Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    paddingTop: 44,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 24,
    paddingBottom: 20,
  },
  closeIcon: {
    fontSize: 28,
    color: '#181725',
  },
  title: {
    fontSize: 22,
    fontWeight: '600',
    color: '#181725',
  },
  headerSpacer: {
    width: 28,
  },
  sheet: {
    flex: 1,
    backgroundColor: '#F2F3F2',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingHorizontal: 24,
    paddingTop: 28,
  },
  section: {
    marginBottom: 30,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: '#181725',
    marginBottom: 18,
  },
  optionRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 18,
  },
  checkbox: {
    width: 24,
    height: 24,
    borderRadius: 12,
    borderWidth: 1.5,
    borderColor: '#B1B1B1',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 14,
    backgroundColor: '#FFFFFF',
  },
  checkboxActive: {
    backgroundColor: '#53B175',
    borderColor: '#53B175',
  },
  checkText: {
    color: '#FFFFFF',
    fontSize: 13,
    fontWeight: '700',
  },
  optionText: {
    fontSize: 18,
    color: '#181725',
  },
  optionTextActive: {
    color: '#53B175',
  },
  applyButton: {
    marginHorizontal: 24,
    marginBottom: 34,
    marginTop: 12,
    backgroundColor: '#53B175',
    borderRadius: 20,
    alignItems: 'center',
    paddingVertical: 20,
  },
  applyButtonText: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: '600',
  },
});
