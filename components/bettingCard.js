import {View, Text, Image, TouchableOpacity, ScrollView} from 'react-native';
import React from 'react';
import Feather from 'react-native-vector-icons/Feather';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { useNavigation } from '@react-navigation/native';

const BettingCard = () => {
  const navigation = useNavigation();
  const dummyItems = [
    {
      traders: '5049 traders',
      question: "India to wins Men's Hockey Bronze Medal match vs Spain?",
      matches: 'H2H (last 5 matches)- India-3 Spain-3',
      readMore: 'Read More',
      yes: 'Yes Rs 6.5',
      no: 'No Rs 3.5',
      image: require('../assets/icons/player.png'),
    },
    {
      traders: '3200 traders',
      question: 'Will Bitcoin hit $50,000 by the end of the year?',
      matches: 'Market trends: Bullish in the last 3 weeks',
      readMore: 'Read More',
      yes: 'Yes Rs 10.0',
      no: 'No Rs 2.5',
      image: require('../assets/icons/bitcoin.png'),
    },
    {
      traders: '4250 traders',
      question: 'Will Apple release a new iPhone model next month?',
      matches: 'Rumors: High chances based on supply chain leaks',
      readMore: 'Read More',
      yes: 'Yes Rs 7.0',
      no: 'No Rs 4.0',
      image: require('../assets/icons/social.png'),
    },
    {
      traders: '6100 traders',
      question: 'Will Tesla stock price reach $1200 by next quarter?',
      matches: 'Market trends: Bearish in the last 2 weeks',
      readMore: 'Read More',
      yes: 'Yes Rs 12.0',
      no: 'No Rs 1.8',
      image: require('../assets/icons/sport-car.png'),
    },
  ];
  return (
    <ScrollView>
      {dummyItems.map((item, index) => (
        <TouchableOpacity
        onPress={()=>navigation.navigate('YesNO',{image:item.image,ques:item.question,matches:item.matches})}
          key={index}
          style={{
            backgroundColor: '#fff',
            padding: 12,
            borderRadius: 12,
            marginTop: 12,
          }}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
            }}>
            <Feather name="users" size={16} />
            <Text style={{fontSize: 10, color: '#000', marginHorizontal: 8}}>
              {item.traders}
            </Text>
            <AntDesign name="right" size={12} />
          </View>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Text
              style={{
                flex: 1,
                fontSize: 12,
                color: '#000',
                fontWeight: '400',
                marginRight: 8,
              }}>
              {item.question}
            </Text>
            <View style={{flex: 0.2}}>
              <Image source={item.image} style={{height: 50, width: 50}} />
            </View>
          </View>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
            }}>
            <View
              style={{
                backgroundColor: '#000',
                height: 8,
                width: 8,
                borderRadius: 12,
                marginRight: 6,
              }}></View>
            <Text style={{fontSize: 10, color: '#000', fontWeight: '400'}}>
              {item.matches}{' '}
              <Text style={{color: 'blue'}}>{item.readMore}</Text>
            </Text>
          </View>
          <View
            style={{flexDirection: 'row', alignItems: 'center', marginTop: 12}}>
            <TouchableOpacity
              style={{
                padding: 12,
                borderRadius: 12,
                flex: 1,
                marginRight: 8,
                backgroundColor: '#e7feff',
                alignItems: 'center',
              }}>
              <Text style={{fontSize: 14, color: 'blue', fontWeight: '600'}}>
                {item.yes}
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                padding: 12,
                borderRadius: 12,
                flex: 1,
                backgroundColor: '#fff7f6',
                alignItems: 'center',
              }}>
              <Text style={{fontSize: 14, color: 'red', fontWeight: '600'}}>
                {item.no}
              </Text>
            </TouchableOpacity>
          </View>
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
};

export default BettingCard;
