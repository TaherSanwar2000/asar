import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const OrderBook = () => {
  const data = [
    {
      priceYes: 'Rs 3.5',
      qtyYes: '1343',
      priceNo: 'Rs 6.5',
      qtyNo: '1343',
      progress: '60%',
    },
    {
      priceYes: 'Rs 4.0',
      qtyYes: '1232',
      priceNo: 'Rs 7.0',
      qtyNo: '1823',
      progress: '40%',
    },
    {
      priceYes: 'Rs 3.8',
      qtyYes: '823',
      priceNo: 'Rs 6.8',
      qtyNo: '2032',
      progress: '50%',
    },
  ];

  return (
    <View style={{flex: 1}}>
      <View style={styles.headerRow}>
        <View style={styles.headerColumn}>
          <Text style={styles.headerText}>Price</Text>
          <Text style={styles.headerText}>
            Qty at <Text style={styles.yesText}>Yes</Text>
          </Text>
        </View>
        <View style={styles.headerColumn}>
          <Text style={styles.headerText}>Price</Text>
          <Text style={styles.headerText}>
            Qty at <Text style={styles.noText}>No</Text>
          </Text>
        </View>
      </View>

      {data.map((item, index) => (
        <View key={index} style={styles.dataRow}>
          <View style={styles.dataColumn}>
            <Text style={styles.dataText}>{item.priceYes}</Text>
            <View
              style={{
                backgroundColor: '#e7feff',
                padding: 4,
                width: item.progress,
                alignItems: 'flex-end',
                borderRadius:4
              }}>
              <Text style={styles.dataText}>{item.qtyYes}</Text>
            </View>
          </View>
          <View style={styles.dataColumn}>
            <Text style={styles.dataText}>{item.priceNo}</Text>
            <View
              style={{
                backgroundColor: '#fff7f6',
                padding: 4,
                width: item.progress,
                alignItems: 'flex-end',
                borderRadius:4
              }}>
              <Text style={styles.dataText}>{item.qtyNo}</Text>
            </View>
          </View>
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  headerRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 8,
    marginTop: 8,
  },
  headerColumn: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginRight: 8,
  },
  headerText: {
    fontSize: 12,
    color: '#000',
    fontWeight: 'bold',
  },
  dataRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 8,
  },
  dataColumn: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginRight: 8,
  },
  dataText: {
    fontSize: 12,
    color: '#000',
    marginVertical: 4,
  },
  yesText: {
    color: 'blue',
  },
  noText: {
    color: 'red',
  },
});

export default OrderBook;
