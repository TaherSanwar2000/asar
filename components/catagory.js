import React from 'react';
import { View, Text, Image } from 'react-native';

const categories = [
  { icon: require('../assets/icons/cricket.png'), label: 'Cricket' },
  { icon: require('../assets/icons/bitcoin.png'), label: 'Bitcoin' },
  { icon: require('../assets/icons/olympic-games.png'), label: 'Olympics' },
  { icon: require('../assets/icons/menu.png'), label: 'Show more' },
];

const Category = () => {
  return (
    <View style={{ marginTop: 14, flexDirection: 'row' }}>
      {categories.map((category, index) => (
        <View
          key={index}
          style={{
            backgroundColor: '#fff',
            padding: 12,
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: 12,
            flex: 1,
            marginRight: index !== categories.length - 1 ? 8 : 0, 
          }}>
          <Image source={category.icon} style={{ height: 30, width: 30 }} />
          <Text
            style={{
              fontSize: 14,
              color: '#000',
              fontWeight: '400',
              marginTop: 10,
            }}>
            {category.label}
          </Text>
        </View>
      ))}
    </View>
  );
};

export default Category;
