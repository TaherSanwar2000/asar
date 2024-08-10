import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';

const AboutTheEvent = () => {
  return (
    <View
      style={{
        backgroundColor: '#fff',
        padding: 12,
        borderRadius: 8,
        marginBottom: 20,
      }}>
      <Text style={{fontSize: 16, fontWeight: 'bold', color: '#000'}}>
        About The Event
      </Text>
      <View style={{flexDirection: 'row', alignItems: 'center', marginTop: 12}}>
        <View style={{flex: 1}}>
          <Text style={{fontSize: 12, color: 'gray', fontWeight: '400'}}>
            Traders
          </Text>
          <Text style={{fontSize: 15, color: '#000', fontWeight: '600'}}>
            8.5k
          </Text>
        </View>
        <View style={{flex: 1}}>
          <Text style={{fontSize: 12, color: 'gray', fontWeight: '400'}}>
            Volume
          </Text>
          <Text style={{fontSize: 15, color: '#000', fontWeight: '600'}}>
            Rs2.5cr
          </Text>
        </View>
      </View>
      <View style={{flexDirection: 'row', alignItems: 'center', marginTop: 12}}>
        <View style={{flex: 1}}>
          <Text style={{fontSize: 12, color: 'gray', fontWeight: '400'}}>
            Starting at
          </Text>
          <Text style={{fontSize: 15, color: '#000', fontWeight: '600'}}>
            Aug 9,2024 3:30 PM
          </Text>
        </View>
        <View style={{flex: 1}}>
          <Text style={{fontSize: 12, color: 'gray', fontWeight: '400'}}>
            Ending at
          </Text>
          <Text style={{fontSize: 15, color: '#000', fontWeight: '600'}}>
            Aug 10,2024 10:30 PM
          </Text>
        </View>
      </View>
      <TouchableOpacity
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          borderTopWidth: 0.2,
          borderBottomWidth: 0.2,
          borderColor: 'gray',
          height: 80,
          marginTop:20
        }}>
        <View>
          <Text style={{fontSize: 16, color: '#000'}}>Overview</Text>
          <Text style={{fontSize: 12, color: 'gray'}}>
            information about event
          </Text>
        </View>
        <AntDesign name="right" size={16} color="#000" />
      </TouchableOpacity>
      <TouchableOpacity
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          borderBottomWidth: 0.2,
          borderColor: 'gray',
          height: 80,
        }}>
        <View>
          <Text style={{fontSize: 16, color: '#000'}}>Source of truth</Text>
          <Text style={{fontSize: 12, color: 'gray'}}>
            information about source of truth
          </Text>
        </View>
        <AntDesign name="right" size={16} color="#000" />
      </TouchableOpacity>
      <TouchableOpacity
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          borderBottomWidth: 0.2,
          borderColor: 'gray',
          height: 80,
        }}>
        <View>
          <Text style={{fontSize: 16, color: '#000'}}>Rules</Text>
          <Text style={{fontSize: 12, color: 'gray'}}>
            Terms and condition
          </Text>
        </View>
        <AntDesign name="right" size={16} color="#000" />
      </TouchableOpacity>
    </View>
  );
};

export default AboutTheEvent;
