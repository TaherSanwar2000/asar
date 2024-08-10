import React from 'react';
import {View, Text, Dimensions, StyleSheet, Image} from 'react-native';
import Carousel from 'react-native-snap-carousel';

const Carousal = () => {
  const {width: screenWidth} = Dimensions.get('window');

  const data = [
    {title: 'Item 1', image: require('../assets/banner/banner1.jpg')},
    {title: 'Item 2', image: require('../assets/banner/banner2.jpg')},
    {title: 'Item 3', image: require('../assets/banner/banner3.jpg')},
  ];

  const renderItem = ({item}) => (
    <View>
      <Image source={item.image} style={styles.image} />
    </View>
  );

  return (
    <Carousel
      data={data}
      renderItem={renderItem}
      sliderWidth={screenWidth}
      itemWidth={screenWidth - 100}
      inactiveSlideScale={1} 
      loop
    />
  );
};

const styles = StyleSheet.create({
  image: {
    width: 300,
    height: 100,
    borderRadius: 5,
  },
});

export default Carousal;
