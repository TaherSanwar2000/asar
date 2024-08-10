import {View, Text, FlatList, Image} from 'react-native';
import React from 'react';

const TrendingItem = () => {
  const data = [
    {
      title: 'Olympics-8Aug',
      image: require('../assets/icons/olympic-games.png'),
    },
    {
      title: 'Youtube',
      image: require('../assets/icons/youtube.png'),
    },
    {
      title: 'Play to win',
      image: require('../assets/icons/star.png'),
    },
  ];

  const data2 = [
    {
      title: 'Bitcoin',
      image: require('../assets/icons/bitcoin.png'),
    },
    {
      title: 'IndVPak',
      image: require('../assets/icons/versus.png'),
    },
    {
      title: 'Expiring soon',
      image: require('../assets/icons/time.png'),
    },
  ];
  return (
    <View style={{marginTop: 12}}>
      <Text style={{fontSize: 14, fontWeight: '600', color: 'gray'}}>
        Trending Now
      </Text>
      <FlatList
        data={data}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        style={{marginTop: 6}}
        renderItem={({item, index}) => (
          <View style={{height: 50, justifyContent: 'flex-end'}}>
            <View
              style={{
                backgroundColor: '#fff',
                padding: 8,
                paddingHorizontal: 16,
                borderRadius: 12,
                alignItems: 'center',
                justifyContent: 'center',
                marginRight: 6,
              }}>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                <Image
                  source={item.image}
                  style={{height: 25, width: 25, marginRight: 12}}
                />
                <Text style={{fontSize: 14, color: '#000', fontWeight: '400'}}>
                  {item.title}
                </Text>
              </View>
            </View>
            {index % 2 === 0 ? (
              <View
                style={{
                  backgroundColor: 'red',
                  padding: 2,
                  borderRadius: 6,
                  alignItems: 'center',
                  justifyContent: 'center',
                  paddingHorizontal: 8,
                  position: 'absolute',
                  bottom: 35,
                  left: '60%',
                }}>
                <Text style={{fontSize: 8, fontWeight: 'bold', color: '#fff'}}>
                  Live
                </Text>
              </View>
            ) : null}
          </View>
        )}
      />
      <FlatList
        data={data2}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        style={{marginTop: 4}}
        renderItem={({item,index}) => (
          <View style={{height: 50, justifyContent: 'flex-end'}}>
            <View
              style={{
                backgroundColor: '#fff',
                padding: 8,
                paddingHorizontal: 16,
                borderRadius: 12,
                alignItems: 'center',
                justifyContent: 'center',
                marginRight: 6,
              }}>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                <Image
                  source={item.image}
                  style={{height: 25, width: 25, marginRight: 12}}
                />
                <Text style={{fontSize: 14, color: '#000', fontWeight: '400'}}>
                  {item.title}
                </Text>
              </View>
            </View>
            {index % 3 === 0 ? (
              <View
                style={{
                  backgroundColor: 'red',
                  padding: 2,
                  borderRadius: 6,
                  alignItems: 'center',
                  justifyContent: 'center',
                  paddingHorizontal: 8,
                  position: 'absolute',
                  bottom: 35,
                  left: '60%',
                }}>
                <Text style={{fontSize: 8, fontWeight: 'bold', color: '#fff'}}>
                  Live
                </Text>
              </View>
            ) : null}
          </View>
        )}
      />
    </View>
  );
};

export default TrendingItem;
