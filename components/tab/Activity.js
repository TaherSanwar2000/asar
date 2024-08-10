import {View, Text, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';

const Activity = () => {
  const dummyData = [
    {
      id: 1,
      userLeft: {
        name: 'Prober 1',
        image: require('../../assets/icons/user.png'),
        bid: 'Rs 3.5',
        bidColor: 'blue',
        bidBackground: '#e7feff',
      },
      userRight: {
        name: 'Prober 2',
        image: require('../../assets/icons/user.png'),
        ask: 'Rs 6.5',
        askColor: 'red',
        askBackground: '#fff7f6',
      },
      timeAgo: 'a few sec ago',
    },
    {
      id: 2,
      userLeft: {
        name: 'Prober 3',
        image: require('../../assets/icons/user.png'),
        bid: 'Rs 4.0',
        bidColor: 'blue',
        bidBackground: '#e7feff',
      },
      userRight: {
        name: 'Prober 4',
        image: require('../../assets/icons/user.png'),
        ask: 'Rs 7.0',
        askColor: 'red',
        askBackground: '#fff7f6',
      },
      timeAgo: '1 min ago',
    },
    {
      id: 3,
      userLeft: {
        name: 'Prober 5',
        image: require('../../assets/icons/user.png'),
        bid: 'Rs 2.5',
        bidColor: 'blue',
        bidBackground: '#e7feff',
      },
      userRight: {
        name: 'Prober 6',
        image: require('../../assets/icons/user.png'),
        ask: 'Rs 5.5',
        askColor: 'red',
        askBackground: '#fff7f6',
      },
      timeAgo: '5 min ago',
    },
  ];
  return (
    <View style={{marginBottom: 20}}>
      {dummyData.map(item => (
        <View
          key={item.id}
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            marginTop: 12,
            borderBottomWidth: 0.2,
            borderColor: 'gray',
          }}>
          <View style={{flex: 0.2, marginLeft: 6, marginBottom: 8}}>
            <Image
              source={item.userLeft.image}
              style={{width: 40, height: 40}}
            />
            <Text style={{fontSize: 14, color: 'gray'}}>
              {item.userLeft.name}
            </Text>
          </View>
          <View style={{flex: 1}}>
            <View style={{flexDirection: 'row'}}>
              <View
                style={{
                  backgroundColor: '#e7feff',
                  flex: 0.3,
                  padding: 8,
                  borderTopLeftRadius: 8,
                  borderBottomLeftRadius: 8,
                  alignItems: 'flex-start',
                }}>
                <Text style={{fontSize: 12, color: 'blue'}}>
                  {item.userLeft.bid}
                </Text>
              </View>
              <View
                style={{
                  backgroundColor: '#fff7f6',
                  flex: 0.6,
                  padding: 8,
                  borderTopRightRadius: 8,
                  borderBottomRightRadius: 8,
                  alignItems: 'flex-end',
                }}>
                <Text style={{fontSize: 12, color: 'red'}}>
                  {item.userRight.ask}
                </Text>
              </View>
            </View>
            <Text
              style={{
                fontSize: 12,
                color: 'gray',
                textAlign: 'center',
                marginTop: 12,
              }}>
              {item.timeAgo}
            </Text>
          </View>

          <View style={{flex: 0.2}}>
            <Image
              source={item.userRight.image}
              style={{width: 40, height: 40}}
            />
            <Text style={{fontSize: 14, color: 'gray'}}>
              {item.userRight.name}
            </Text>
          </View>
        </View>
      ))}
      <TouchableOpacity
        style={{
          backgroundColor: '#fff',
          alignItems: 'center',
          padding: 8,
          borderRadius: 12,
          marginTop: '6%',
          elevation: 2,
          flexDirection: 'row',
          justifyContent:'center'
        }}>
        <Text style={{fontWeight: 'bold', color: '#000', fontSize: 14,marginRight:8}}>
          Show more
        </Text>
        <AntDesign name="right" size={16} color='#000' />
      </TouchableOpacity>
    </View>
  );
};

export default Activity;
