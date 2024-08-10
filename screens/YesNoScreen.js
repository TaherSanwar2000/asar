import {
  View,
  Text,
  TouchableOpacity,
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
} from 'react-native';
import React from 'react';
import {useNavigation, useRoute} from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Graph from '../components/graph';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import Activity from '../components/tab/Activity';
import OrderBook from '../components/tab/OrderBook';
import AboutTheEvent from '../components/AboutTheEvent';

const Tab = createMaterialTopTabNavigator();

const YesNoScreen = () => {
  const route = useRoute();
  const navigation = useNavigation();
  const {ques, image, matches} = route?.params;

  return (
    <View style={{flex: 1}}>
      <ScrollView style={styles.container}>
        <View style={styles.header}>
          <TouchableOpacity
            style={styles.backButton}
            onPress={() => navigation.goBack()}>
            <Ionicons
              name="arrow-back"
              size={20}
              color="#000"
              style={styles.icon}
            />
            <Text style={styles.headerText}>Event 2344822</Text>
          </TouchableOpacity>
          <AntDesign name="upload" size={25} color="#000" />
        </View>
        <View style={styles.imageContainer}>
          <Image source={image} style={styles.image} />
          <View style={styles.infoTags}>
            <View style={styles.tag}>
              <Text style={styles.tagText}>Olympics India</Text>
            </View>
            <View style={styles.tag}>
              <Text style={styles.tagText}>Olympic - 8 August</Text>
            </View>
          </View>
          <Text style={styles.question}>{ques}</Text>
        </View>
        <View style={styles.matchesContainer}>
          <View style={styles.matchesCard}>
            <View style={styles.matchesContent}>
              <Image
                source={require('../assets/icons/light-bulb.png')}
                style={styles.matchesIcon}
              />
              <Text style={styles.matchesText}>{matches}</Text>
            </View>
          </View>
        </View>
        <View style={styles.predictionContainer}>
          <Text style={styles.predictionHeader}>THE MARKET PREDICT</Text>
          <Text style={styles.predictionValue}>65% Probability of Yes</Text>
        </View>
        <SafeAreaView style={styles.graphContainer}>
          <Graph />
        </SafeAreaView>
        <Tab.Navigator
          style={styles.tabNavigator}
          screenOptions={{
            tabBarLabelStyle: {
              fontSize: 14,
            },
            tabBarIndicatorStyle: {
              backgroundColor: '#000',
            },
            tabBarStyle: {
              backgroundColor: 'transparent',
              width: '60%',
              elevation: 0,
            },
          }}>
          <Tab.Screen name="Activty" component={Activity} />
          <Tab.Screen name="Order Book" component={OrderBook} />
        </Tab.Navigator>
        <AboutTheEvent />
      </ScrollView>
      <View style={{backgroundColor:'#fff',borderTopRightRadius:18,borderTopLeftRadius:18,padding:12,elevation:8}}>
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
              borderColor:'blue',
              borderWidth:0.5
            }}>
            <Text style={{fontSize: 14, color: 'blue', fontWeight: '600'}}>
              Yes Rs3.5
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              padding: 12,
              borderRadius: 12,
              flex: 1,
              backgroundColor: '#fff7f6',
              alignItems: 'center',
              borderColor:'red',
              borderWidth:0.5
            }}>
            <Text style={{fontSize: 14, color: 'red', fontWeight: '600'}}>
              No Rs2.5
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 12,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  backButton: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: {
    marginRight: 12,
  },
  headerText: {
    fontSize: 16,
    color: '#000',
  },
  imageContainer: {
    alignItems: 'center',
    marginTop: 12,
  },
  image: {
    height: 100,
    width: 100,
    borderRadius: 6,
  },
  infoTags: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 8,
  },
  tag: {
    backgroundColor: '#dcdcdc',
    padding: 8,
    borderRadius: 20,
    paddingHorizontal: 12,
    marginRight: 12,
  },
  tagText: {
    fontSize: 12,
    color: '#000',
    fontWeight: '400',
  },
  question: {
    fontSize: 24,
    color: '#000',
    marginTop: '10%',
    textAlign: 'center',
  },
  matchesContainer: {
    alignItems: 'center',
    marginTop: '10%',
  },
  matchesCard: {
    backgroundColor: '#fff',
    padding: 6,
    borderRadius: 2,
    width: '90%',
    alignItems: 'center',
    elevation: 6,
  },
  matchesContent: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  matchesIcon: {
    height: 20,
    width: 20,
    marginRight: 8,
  },
  matchesText: {
    fontSize: 12,
    color: '#000',
  },
  predictionContainer: {
    alignItems: 'center',
    marginTop: '10%',
  },
  predictionHeader: {
    fontSize: 14,
    color: '#808080',
    fontWeight: 'bold',
  },
  predictionValue: {
    fontSize: 24,
    color: 'blue',
    fontWeight: 'bold',
  },
  graphContainer: {
    flex: 1,
    marginTop: 12,
  },
  tabNavigator: {
    marginTop: 12,
  },
  tabContent: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default YesNoScreen;
