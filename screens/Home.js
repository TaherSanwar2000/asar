import {View, Text} from 'react-native';
import React from 'react';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import Entypo from 'react-native-vector-icons/Entypo';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Catagory from '../components/catagory';
import Carousal from '../components/carousal';
import TrendingItem from '../components/trendingItem';
import BettingCard from '../components/bettingCard';
const Home = () => {
  return (
    <View style={{flex: 1, padding: 12}}>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}>
        <View>
          <EvilIcons name="user" size={50} color="gray" />
          <View
            style={{
              backgroundColor: '#fff',
              position: 'absolute',
              top: 30,
              left: 30,
              borderRadius: 12,
            }}>
            <Ionicons name="reorder-three" size={15} color="gray" />
          </View>
        </View>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <View>
            <Entypo
              name="wallet"
              size={30}
              color="gray"
              style={{marginRight: 12}}
            />
          </View>
          <View
            style={{
              height: 40,
              width: 40,
              borderRadius: 40,
              borderWidth: 1,
              borderColor: 'gray',
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Ionicons name="notifications-outline" size={30} color="gray" />
            <View
              style={{
                backgroundColor: 'red',
                height: 10,
                width: 10,
                borderRadius: 10,
                position: 'absolute',
                bottom: 30,
                left: 25,
              }}></View>
          </View>
        </View>
      </View>
      <Catagory />
      <View style={{marginTop: 12}}>
        <Carousal />
      </View>
      <TrendingItem/>
      <BettingCard/>
    </View>
  );
};

export default Home;
